import React from "react";

export default function TempleArchSvg() {
  return (
    <svg
      viewBox="0 0 1000 800"
      xmlns="http://www.w3.org/2000/svg"
      className="templeArchSvg"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "1400px",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.22,
        zIndex: 1,
      }}
    >
      <defs>
        <linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AD62" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#C9A45B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4AD62" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Main Outer Arch Curve */}
      <path
        d="M 100,800 L 100,420 Q 100,200 500,100 Q 900,200 900,420 L 900,800"
        fill="none"
        stroke="url(#goldArchGrad)"
        strokeWidth="4"
      />

      {/* Inner Decorative Arch Curve */}
      <path
        d="M 140,800 L 140,430 Q 140,230 500,140 Q 860,230 860,430 L 860,800"
        fill="none"
        stroke="url(#goldArchGrad)"
        strokeWidth="2"
        strokeDasharray="8,6"
      />

      {/* Arch Apex Kalash / Crown Finial Ornament */}
      <g transform="translate(500, 70)">
        <path
          d="M 0,-40 L 15,-15 C 20,0 20,10 0,25 C -20,10 -20,0 -15,-15 Z"
          fill="none"
          stroke="#D4AD62"
          strokeWidth="2.5"
        />
        <circle cx="0" cy="-48" r="5" fill="#D4AD62" />
        <path d="M -25,25 Q 0,15 25,25" fill="none" stroke="#D4AD62" strokeWidth="2" />
      </g>

      {/* Pillars */}
      <g transform="translate(100, 420)">
        <line x1="-30" y1="0" x2="30" y2="0" stroke="#D4AD62" strokeWidth="3" />
        <line x1="-25" y1="20" x2="25" y2="20" stroke="#D4AD62" strokeWidth="2" />
        <line x1="-30" y1="120" x2="30" y2="120" stroke="#D4AD62" strokeWidth="3" />
      </g>

      <g transform="translate(900, 420)">
        <line x1="-30" y1="0" x2="30" y2="0" stroke="#D4AD62" strokeWidth="3" />
        <line x1="-25" y1="20" x2="25" y2="20" stroke="#D4AD62" strokeWidth="2" />
        <line x1="-30" y1="120" x2="30" y2="120" stroke="#D4AD62" strokeWidth="3" />
      </g>
    </svg>
  );
}
