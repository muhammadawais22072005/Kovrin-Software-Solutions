import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import LogoIcon from "./components/LogoIcon";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Terminal, X } from "lucide-react";
import { isFirebaseActive } from "./firebase-helper";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

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
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-[#5cb85c]/90 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="hidden sm:inline text-gray-800">•</span>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-[#5cb85c]/90 transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
          </div>

          <p className="text-xs text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} Kovrin Software Solutions.
          </p>
        </div>
      </footer>

      {/* Privacy Policy Overlay Dialog Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-xl border border-[#14281e] bg-[#080d0a] p-6 text-gray-300 shadow-2xl overflow-y-auto max-h-[85vh] font-sans"
            >
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:bg-[#0f2117] hover:text-white transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="font-display font-bold text-xl text-gray-100 border-b border-[#14281e] pb-4 mb-6">
                Privacy Policy
              </h3>
              <div className="space-y-4 text-xs leading-relaxed text-gray-400">
                <p className="font-bold text-gray-200">Last updated: June 2026</p>
                <p>
                  At Kovrin Software Solutions, we respect your privacy and are committed to protecting the personal keys and data you share with us. This Privacy Policy details the metrics and pipelines of how we treat information received via our inquiry interfaces.
                </p>
                <h4 className="font-bold text-gray-200 mt-4">1. Information Collection</h4>
                <p>
                  We only collect direct contact parameters such as your name, corporate email address, organizational association, and design specifications which you explicitly submit via our inquiry workflows. This client state is localized or stored to secure cloud destinations on your authorization.
                </p>
                <h4 className="font-bold text-gray-200 mt-4">2. Safe & Standard Integrity</h4>
                <p>
                  Any submission telemetry is dispatched exclusively to support professional architectural scoping tasks. We strictly enforce internal data firewalls and do not share, sell, or rent any personal client matrices to third-party advertising networks.
                </p>
                <h4 className="font-bold text-gray-200 mt-4">3. Client Security Controls</h4>
                <p>
                  We leverage advanced web server encapsulation, strict security rules on database nodes, and SSL/TLS endpoint negotiations to defend against digital compromises.
                </p>
                <h4 className="font-bold text-gray-200 mt-4">4. Compliance Guidelines</h4>
                <p>
                  Should you wish to review, update, or purge any submitted data structures from our registers, reach out directly to our principal solution architects to execute a structural deletion process.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terms of Use Overlay Dialog Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-xl border border-[#14281e] bg-[#080d0a] p-6 text-gray-300 shadow-2xl overflow-y-auto max-h-[85vh] font-sans"
            >
              <button
                onClick={() => setIsTermsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:bg-[#0f2117] hover:text-white transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="font-display font-bold text-xl text-gray-100 border-b border-[#14281e] pb-4 mb-6">
                Terms of Use
              </h3>
              <div className="space-y-4 text-xs leading-relaxed text-gray-400">
                <p className="font-bold text-gray-200">Last updated: June 2026</p>
                <p>
                  Welcome to Kovrin Software Solutions. By interfacing with our platform, you assent to comply with and be bound by the absolute criteria of these structural Terms of Use.
                </p>
                <h4 className="font-bold text-gray-200 mt-4">1. Scoping & Intended Usage</h4>
                <p>
                  This portal serves as an interactive portfolio for professional exploration of advanced engineering solutions and modular components. Submissions are designed for high-integrity client communications and software architecture consultations.
                </p>
                <h4 className="font-bold text-gray-200 mt-4">2. Prohibited Interactions</h4>
                <p>
                  Users agree to not submit counterfeit contact information, execute automated request spikes, or attempt remote code buffer injection. Violations of server-side protocols may result in automated firewall blocklists.
                </p>
                <h4 className="font-bold text-gray-200 mt-4">3. Intellectual Code Ownership</h4>
                <p>
                  All structural blueprints, visual designs, display assets, and layouts are the direct intellectual properties of Kovrin Software Solutions. Code generated and deployed under customized enterprise licensing terms remains subject to individual SLA frameworks.
                </p>
                <h4 className="font-bold text-gray-200 mt-4">4. Liability Boundary</h4>
                <p>
                  All template code, visual demonstrations, and architectural drafts are provided "as-is" without explicit operational warranties of any type. Under no scenarios shall Kovrin be liable for arbitrary downtime, lost enterprise values, or systemic resource leakage.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
