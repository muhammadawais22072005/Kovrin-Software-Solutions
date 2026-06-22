import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import LogoIcon from "./components/LogoIcon";
import { motion } from "motion/react";
import { ArrowUp, Terminal } from "lucide-react";
import { isFirebaseActive } from "./firebase-helper";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor screen offsets to highlight correct nav anchors
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);

      const sections = ["home", "about", "services", "contact"];
      let foundSection = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            foundSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div id="root" className="grid-bg min-h-screen text-gray-100 font-sans flex flex-col justify-between selection:bg-[#5cb85c]/30 selection:text-white">
      <div>
        {/* Sticky Header Nav Toolbar */}
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        {/* Dynamic State Alert banner for developers */}
        {!isFirebaseActive && (
          <div className="bg-[#141208]/80 border-b border-[#ffd54f]/15 px-4 py-2.5 text-center text-xs text-[#ffd54f] flex items-center justify-center gap-2 font-mono">
            <Terminal className="h-4 w-4 shrink-0 text-[#ffd54f]" />
            <span>LOCAL PREVIEW ACTIVE: Solutions inquiry will log to Local Storage. Complete Firebase terms inside AI Studio to activate remote Firestore writes.</span>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Hero onGetStarted={() => scrollToSection("contact")} />
          <About />
          <Services />
          <ContactForm />
        </motion.div>
      </div>

      {/* Footer Branding Array */}
      <footer className="border-t border-[#0d1e16] bg-[#030605] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <LogoIcon size={38} showText={true} />
            <p className="text-xs text-gray-600 font-sans pl-1">
              Engineered with extreme precision and modular logic. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-gray-500 font-mono">
            <span>STABLE: CLOUD-API-RUN v2.4</span>
            <span className="hidden sm:inline">•</span>
            <span>POLISHED LAYOUT INTEGRITY</span>
          </div>

          <p className="text-xs text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} Kovrin Software Solutions.
          </p>
        </div>
      </footer>

      {/* Back to top scroll widget */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0c1d13] border border-[#14281e] text-[#ffd54f] transition-all duration-300 hover:bg-[#14281e] hover:-translate-y-1 active:translate-y-0 text-xs shadow-xl"
          title="Scroll to summit"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
