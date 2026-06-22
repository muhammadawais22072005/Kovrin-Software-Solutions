import React from "react";

interface LogoIconProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function LogoIcon({ className = "", size = 32, showText = false }: LogoIconProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={(size * 250) / 280}
        viewBox="0 0 280 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="logoHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2b13c" />
            <stop offset="100%" stopColor="#5cb85c" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f3ca52" />
            <stop offset="100%" stopColor="#a0e0c0" />
          </linearGradient>
        </defs>

        {/* Outer Hexagon */}
        <polygon
          points="80,10 200,10 260,115 200,220 80,220 20,115"
          stroke="url(#logoHexGradient)"
          strokeWidth="6"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />

        {/* Inner Hexagon (shifted and delicate) */}
        <polygon
          points="85,15 195,15 252,115 195,215 85,215 28,115"
          stroke="url(#logoHexGradient)"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />

        {/* Circuit-like dots inside Hexagon */}
        <circle cx="65" cy="55" r="7" fill="#ffd54f" />
        <circle cx="150" cy="55" r="7" fill="#5cb85c" />
        <circle cx="150" cy="175" r="7" fill="#a0e0c0" />
        <circle cx="65" cy="175" r="7" fill="#ffd54f" />

        {/* K-shaped Circuit Lines */}
        <path
          d="M 150 55 L 65 115 L 150 175"
          stroke="url(#logoHexGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 65 115 L 110 115"
          stroke="#ffd54f"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Outer orbital nodes & connections from the logo */}
        <path d="M 10,115 L 4,115" stroke="#ffd54f" strokeWidth="2" />
        <circle cx="4" cy="115" r="3" fill="#ffd54f" />
        
        <path d="M 230,220 L 250,235" stroke="#5cb85c" strokeWidth="2" />
        <circle cx="250" cy="235" r="4" fill="#a0e0c0" />
      </svg>
      {showText && (
        <div className="flex flex-col">
          <span 
            className="text-2xl font-bold tracking-wider font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#ffd54f] to-[#a0e0c0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            KOVRIN
          </span>
          <span className="text-[9px] tracking-[0.25em] text-gray-400 font-mono -mt-1">
            SOFTWARE SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
}
