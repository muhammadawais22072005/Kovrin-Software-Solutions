import React, { useState } from "react";
import { submitInquiry, isFirebaseActive } from "../firebase-helper";
import { DEVELOPER_RESOURCES } from "../data";
import { Mail, Instagram, Linkedin, Send, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    msg?: string;
    mode?: "firebase" | "local";
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactNumber || !formData.email || !formData.description) {
      setSubmitStatus({ success: false, msg: "All inquiry details are required." });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await submitInquiry(formData);
      if (response.success) {
        setSubmitStatus({
          success: true,
          mode: response.mode,
          msg: response.mode === "firebase"
            ? "Inquiry transmitted securely to your Firebase database!"
            : "Inquiry saved in Local Storage fallback (Demo mode).",
        });
        setFormData({ name: "", contactNumber: "", email: "", description: "" });
      } else {
        setSubmitStatus({
          success: false,
          msg: response.error || "Friction encountered during write packet transition.",
        });
      }
    } catch (err: any) {
      setSubmitStatus({
        success: false,
        msg: err?.message || "Relational client-to-database write collision occurred.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 border-t border-[#0d1e16]">
      {/* Decorative high-tech circuit background */}
      <div className="absolute bottom-1/4 left-10 -z-10 h-72 w-72 rounded-full bg-[#ffd54f]/2 filter blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Social Links & Info Column */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffd54f]">
                INITIATE PROJECT
              </span>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
                Let's engineering your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd54f] to-[#a0e0c0]">Scalable Architecture</span>.
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                Have an engineering project proposal or looking to construct a responsive, full-stack MVP? Complete our solutions inquiry roster. Our lead architect will evaluate the parameters and schedule an introductory session within 24 hours.
              </p>
            </div>

            {/* Config-driven Social cards */}
            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${DEVELOPER_RESOURCES.email}`}
                className="flex items-center gap-4 rounded-xl border border-[#14281e] bg-[#0b120f]/60 p-4 hover:bg-[#0c1d13]/50 hover:border-[#ffd54f]/30 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0c1d13] border border-[#14281e] group-hover:bg-[#14281e]">
                  <Mail className="h-5 w-5 text-[#ffd54f] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-gray-500">EMAIL ENQUIRIES</div>
                  <div className="font-sans font-bold text-gray-200 text-sm group-hover:text-[#ffd54f]">{DEVELOPER_RESOURCES.email}</div>
                </div>
              </a>

              <a
                href={DEVELOPER_RESOURCES.instagram}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-4 rounded-xl border border-[#14281e] bg-[#0b120f]/60 p-4 hover:bg-[#0c1d13]/50 hover:border-[#ffd54f]/30 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0c1d13] border border-[#14281e] group-hover:bg-[#14281e]">
                  <Instagram className="h-5 w-5 text-[#a0e0c0] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-gray-500">INSTAGRAM</div>
                  <div className="font-sans font-bold text-gray-200 text-sm group-hover:text-[#a0e0c0]">Kovrin Software Solutions</div>
                </div>
              </a>

              <a
                href={DEVELOPER_RESOURCES.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-4 rounded-xl border border-[#14281e] bg-[#0b120f]/60 p-4 hover:bg-[#0c1d13]/50 hover:border-[#ffd54f]/30 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0c1d13] border border-[#14281e] group-hover:bg-[#14281e]">
                  <Linkedin className="h-5 w-5 text-[#5cb85c] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-gray-500">LINKEDIN</div>
                  <div className="font-sans font-bold text-gray-200 text-sm group-hover:text-[#5cb85c]">Kovrin Software Solutions</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            
            {/* Elegant Form container */}
            <div className="rounded-2xl border border-[#14281e] bg-[#0b120f] p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute top-0 right-0 p-4 text-[9px] font-mono font-bold text-gray-600">INQUIRY-INGESTION-FLOW</div>
              <h3 className="font-display font-black text-gray-200 text-xl mb-6">
                Solutions Ingestion Console
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-mono text-gray-400">FullName</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Stephen Kovrin"
                      className="w-full rounded-lg border border-[#14281e] bg-[#060a08] px-4 py-3 font-sans text-sm text-[rgb(226,232,240)] placeholder-gray-600 focus:border-[#5cb85c] focus:outline-none focus:ring-1 focus:ring-[#5cb85c]"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-mono text-gray-400">Contact Number</label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="e.g. +1 (555) 489-0210"
                      className="w-full rounded-lg border border-[#14281e] bg-[#060a08] px-4 py-3 font-sans text-sm text-[rgb(226,232,240)] placeholder-gray-600 focus:border-[#5cb85c] focus:outline-none focus:ring-1 focus:ring-[#5cb85c]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-mono text-gray-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. stephen@kovrin.com"
                    className="w-full rounded-lg border border-[#14281e] bg-[#060a08] px-4 py-3 font-sans text-sm text-[rgb(226,232,240)] placeholder-gray-600 focus:border-[#5cb85c] focus:outline-none focus:ring-1 focus:ring-[#5cb85c]"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-mono text-gray-400">Description of Technical Requirements</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please summarize your custom website, full-stack application, or neural model agent requests..."
                    className="w-full rounded-lg border border-[#14281e] bg-[#060a08] px-4 py-3 font-sans text-sm text-[rgb(226,232,240)] placeholder-gray-600 focus:border-[#5cb85c] focus:outline-none focus:ring-1 focus:ring-[#5cb85c] resize-none"
                    required
                  />
                </div>

                {/* Submit state handler banner */}
                {submitStatus.msg && (
                  <div className={`p-4 rounded-lg text-xs leading-relaxed font-sans ${
                    submitStatus.success 
                      ? "bg-[#0d1e16] border border-[#5cb85c]/30 text-[#a0e0c0]" 
                      : "bg-[#281414] border border-red-500/30 text-red-400"
                  }`}>
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <Sparkles className="h-4 w-4 shrink-0 text-[#ffd54f]" />
                      <span>{submitStatus.success ? "Success Packet Authenticated" : "Transmission Failure"}</span>
                    </div>
                    {submitStatus.msg}
                    {submitStatus.success && submitStatus.mode === "local" && (
                      <div className="mt-2 text-[10px] text-gray-400">
                        * Note: Save fell back to local memory (mock mode) because remote Firebase is not yet finalized. Complete the terms in UI/environment to enable active Firestore writes!
                      </div>
                    )}
                  </div>
                )}

                {/* Action button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#ffd54f] to-[#5cb85c] py-3.5 text-xs tracking-wider uppercase font-extrabold text-[#060a08] transition-all hover:brightness-105 active:scale-[0.99] disabled:opacity-40"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <>
                        <span>TRANSMIT SOLUTIONS INQUIRY</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
