export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryFormData {
  name: string;
  contactNumber: string;
  email: string;
  description: string;
  createdAt: string;
}

export interface FlutterFile {
  name: string;
  path: string;
  language: string;
  content: string;
}
