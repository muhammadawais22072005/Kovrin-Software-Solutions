import React, { useState } from "react";
import LogoIcon from "./LogoIcon";
import { Menu, X, Code2, ExternalLink } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#0d1e16] bg-[#060a08]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand/Logo Title */}
          <div 
            className="flex cursor-pointer items-center gap-2"
            onClick={() => {
              scrollToSection("home");
            }}
          >
            <LogoIcon size={44} showText={true} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-[#ffd54f] font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu and toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#0a110d] hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-[#a0e0c0]" /> : <Menu className="h-6 w-6 text-[#a0e0c0]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="border-b border-[#0d1e16] bg-[#060a08] md:hidden px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-[#14281e] text-[#ffd54f]"
                  : "text-gray-400 hover:bg-[#08120d] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
