import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDocFromServer, getDocs, query, orderBy, limit } from "firebase/firestore";
import firebaseConfig from "./firebase-applet-config.json";
import { InquiryFormData } from "./types";

export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

// Check if config has valid credentials
export const isFirebaseActive = !!(
  firebaseConfig &&
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey.length > 5 &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

let dbInstance: any = null;

if (isFirebaseActive) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    
    // Support custom Firestore Database IDs if set
    const dbId = (firebaseConfig as any).firestoreDatabaseId;
    if (dbId && dbId !== "(default)" && dbId !== "") {
      dbInstance = getFirestore(app, dbId);
    } else {
      dbInstance = getFirestore(app);
    }
    
    // Quick validation check on initial boot as mandated by the Firebase skill
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(dbInstance, "test", "connection"));
      } catch (error) {
        if (error instanceof Error && error.message.includes("the client is offline")) {
          console.warn("Please check your Firebase configuration or network status.");
        }
      }
    };
    testConnection();
  } catch (error) {
    console.error("Failed to initialize Firebase:", error);
  }
}

export const db = dbInstance;

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: null,
      email: null,
      emailVerified: null,
      isAnonymous: null,
    },
    operationType,
    path,
  };
  console.error("Firestore Error: ", JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

/**
 * Submits an inquiry to Firebase Firestore (if active) or localStorage (as a robust fallback).
 */
export async function submitInquiry(data: Omit<InquiryFormData, "createdAt">): Promise<{ success: boolean; mode: "firebase" | "local"; error?: string }> {
  const payload = {
    ...data,
    createdAt: new Date().toISOString(),
  };

  if (isFirebaseActive && db) {
    const pathForWrite = "inquiries";
    try {
      await addDoc(collection(db, pathForWrite), {
        ...payload,
        createdAt: serverTimestamp(), // Use strict server-side timestamps as required by rules
      });
      return { success: true, mode: "firebase" };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, pathForWrite);
      return { success: false, mode: "firebase", error: String(error) };
    }
  } else {
    // Fallback storing in localStorage so the user still gets full visual capability during preview!
    try {
      const existingInquiriesString = localStorage.getItem("kovrin_inquiries") || "[]";
      const inquiries = JSON.parse(existingInquiriesString);
      inquiries.push(payload);
      localStorage.setItem("kovrin_inquiries", JSON.stringify(inquiries));
      return { success: true, mode: "local" };
    } catch (err) {
      return { success: false, mode: "local", error: String(err) };
    }
  }
}

/**
 * Gets historical inquiries for local testing / feedback loops.
 */
export function getSavedInquiries(): InquiryFormData[] {
  try {
    const existingInquiriesString = localStorage.getItem("kovrin_inquiries") || "[]";
    return JSON.parse(existingInquiriesString);
  } catch (e) {
    return [];
  }
}

/**
 * Gets inquiries directly from the live Firebase Firestore collection.
 */
export async function fetchInquiriesFromServer(): Promise<InquiryFormData[]> {
  if (isFirebaseActive && db) {
    try {
      const q = query(
        collection(db, "inquiries"),
        orderBy("createdAt", "desc"),
        limit(50)
      );
      const querySnapshot = await getDocs(q);
      const inquiries: InquiryFormData[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        let formattedDate = "";
        if (data.createdAt) {
          if (typeof data.createdAt.toDate === "function") {
            formattedDate = data.createdAt.toDate().toISOString();
          } else if (typeof data.createdAt === "string") {
            formattedDate = data.createdAt;
          } else if (data.createdAt.seconds) {
            formattedDate = new Date(data.createdAt.seconds * 1000).toISOString();
          }
        }
        inquiries.push({
          name: data.name || "Anonymous",
          contactNumber: data.contactNumber || "",
          email: data.email || "",
          description: data.description || "",
          createdAt: formattedDate || new Date().toISOString(),
        });
      });
      return inquiries;
    } catch (e) {
      console.error("Failed to fetch inquiries from Firestore:", e);
      return [];
    }
  }
  return [];
}
