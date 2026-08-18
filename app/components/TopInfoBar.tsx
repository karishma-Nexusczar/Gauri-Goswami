import React from "react";
import { FaBalanceScale, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function TopInfoBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner shell">
        <div className="top-bar-left">
          <span className="top-bar-item">
            <FaMapMarkerAlt className="top-icon gold-icon" /> Nottingham, United Kingdom &amp; India
          </span>
          <span className="top-bar-divider" aria-hidden="true">•</span>
          <a href="mailto:info@gaurigoswami.in" className="top-bar-item top-bar-link">
            <FaEnvelope className="top-icon gold-icon" /> info@gaurigoswami.in
          </a>
        </div>
        <div className="top-bar-right">
          <span className="top-bar-item badge-item">
            <FaBalanceScale className="top-icon gold-icon" /> Advocate
          </span>
          <span className="top-bar-item badge-item">
            <span className="top-emoji">💃</span> Kathak Artist
          </span>
        </div>
      </div>
    </div>
  );
}
