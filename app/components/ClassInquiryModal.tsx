"use client";

import React, { useState } from "react";
import { FaTimes, FaPaperPlane, FaCheck } from "react-icons/fa";

export default function ClassInquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+44",
    phone: "",
    classType: "Kathak Foundations",
    message: "",
  });

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const fullPhone = formData.phone ? `${formData.countryCode} ${formData.phone}`.trim() : "Not provided";
    const enquiryMessage = `Hello Gauri,

NEW CLASS & WORKSHOP ENQUIRY

Full Name: ${formData.name}
Email: ${formData.email}
Phone / WhatsApp: ${fullPhone}
Class / Format: ${formData.classType}

Details:
${formData.message || `Interested in ${formData.classType}`}`.trim();

    const whatsappNumber = "447587338945";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiryMessage)}`;

    window.open(whatsappURL, "_blank");

    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="anannya-solid-btn"
        style={{ cursor: "pointer", border: "none" }}
      >
        ENQUIRE ABOUT CLASSES
      </button>

      {isOpen && (
        <div
          className="class-inquiry-backdrop"
          onClick={handleClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <div
            className="class-inquiry-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(255, 255, 255, 0.94)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(226, 213, 190, 0.85)",
              borderRadius: "8px",
              maxWidth: "360px",
              width: "92%",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
              overflow: "hidden",
              position: "relative",
              color: "#1F1F1F",
              textAlign: "left",
            }}
          >
            {/* Header Strip */}
            <div
              style={{
                padding: "10px 14px 8px",
                borderBottom: "1px solid rgba(240, 230, 210, 0.85)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                background: "rgba(250, 247, 242, 0.88)",
                textAlign: "left",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <span
                  style={{
                    color: "#B89A5A",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "1px",
                    textAlign: "left",
                  }}
                >
                  ACADEMIC &amp; CULTURAL ENQUIRY
                </span>
                <h3
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#1F1F1F",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  Enroll or Request a Workshop
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close Class Inquiry Modal"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#666666",
                  fontSize: "1rem",
                  cursor: "pointer",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaTimes />
              </button>
            </div>

            {/* Content Body */}
            <div style={{ padding: "8px 14px 12px", textAlign: "left" }}>
              {isSubmitted ? (
                <div style={{ textAlign: "center", padding: "12px 6px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(184, 154, 90, 0.12)",
                      border: "2px solid #B89A5A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#B89A5A",
                      fontSize: "1.3rem",
                      margin: "0 auto 12px",
                    }}
                  >
                    <FaCheck />
                  </div>
                  <h4
                    style={{
                      fontFamily: "Playfair Display, Georgia, serif",
                      fontSize: "1.1rem",
                      color: "#1F1F1F",
                      marginBottom: "4px",
                    }}
                  >
                    Enquiry Sent Successfully!
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#555555",
                      lineHeight: "1.4",
                      marginBottom: "14px",
                    }}
                  >
                    Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <strong>{formData.classType}</strong> has been transmitted to Gauri Goswami (info@gaurigoswami.in).
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    style={{
                      background: "#B89A5A",
                      color: "#FFFFFF",
                      border: "none",
                      padding: "6px 16px",
                      borderRadius: "5px",
                      fontWeight: 700,
                      fontSize: "0.76rem",
                      cursor: "pointer",
                      letterSpacing: "0.05em",
                    }}
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
                  <div style={{ marginBottom: "6px", textAlign: "left" }}>
                    <label
                      style={{
                        display: "block",
                        textAlign: "left",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        color: "#B89A5A",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "2px",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder=""
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={{
                        width: "100%",
                        height: "30px",
                        padding: "4px 8px",
                        background: "#F9F9F9",
                        border: "1px solid #E0E0E0",
                        borderRadius: "4px",
                        color: "#111111",
                        fontSize: "0.78rem",
                        outline: "none",
                        boxSizing: "border-box",
                        textAlign: "left",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "6px", textAlign: "left" }}>
                    <label
                      style={{
                        display: "block",
                        textAlign: "left",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        color: "#B89A5A",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "2px",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder=""
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={{
                        width: "100%",
                        height: "30px",
                        padding: "4px 8px",
                        background: "#F9F9F9",
                        border: "1px solid #E0E0E0",
                        borderRadius: "4px",
                        color: "#111111",
                        fontSize: "0.78rem",
                        outline: "none",
                        boxSizing: "border-box",
                        textAlign: "left",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "6px", textAlign: "left" }}>
                    <label
                      style={{
                        display: "block",
                        textAlign: "left",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        color: "#B89A5A",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "2px",
                      }}
                    >
                      Phone / WhatsApp
                    </label>
                    <div style={{ display: "flex", gap: "6px", width: "100%" }}>
                      <select
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                        style={{
                          width: "100px",
                          height: "30px",
                          padding: "4px 4px",
                          background: "#F9F9F9",
                          border: "1px solid #E0E0E0",
                          borderRadius: "4px",
                          color: "#111111",
                          fontSize: "0.74rem",
                          fontWeight: 600,
                          outline: "none",
                          cursor: "pointer",
                          boxSizing: "border-box",
                          textAlign: "left",
                        }}
                      >
                        <option value="+44">🇬🇧 UK (+44)</option>
                        <option value="+91">🇮🇳 India (+91)</option>
                        <option value="other">🌐 Other</option>
                      </select>
                      <input
                        type="tel"
                        placeholder=""
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        style={{
                          flex: 1,
                          minWidth: 0,
                          height: "30px",
                          padding: "4px 8px",
                          background: "#F9F9F9",
                          border: "1px solid #E0E0E0",
                          borderRadius: "4px",
                          color: "#111111",
                          fontSize: "0.78rem",
                          outline: "none",
                          boxSizing: "border-box",
                          textAlign: "left",
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "6px", textAlign: "left" }}>
                    <label
                      style={{
                        display: "block",
                        textAlign: "left",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        color: "#B89A5A",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "2px",
                      }}
                    >
                      Class / Workshop Format
                    </label>
                    <select
                      value={formData.classType}
                      onChange={(e) =>
                        setFormData({ ...formData, classType: e.target.value })
                      }
                      style={{
                        width: "100%",
                        height: "30px",
                        padding: "4px 8px",
                        background: "#F9F9F9",
                        border: "1px solid #E0E0E0",
                        borderRadius: "4px",
                        color: "#111111",
                        fontSize: "0.78rem",
                        outline: "none",
                        boxSizing: "border-box",
                        textAlign: "left",
                      }}
                    >
                      <option value="Kathak Foundations">Kathak Foundations</option>
                      <option value="Bihu Workshops">Bihu Workshops</option>
                      <option value="Cultural Immersion Sessions">Cultural Immersion Sessions</option>
                      <option value="School & Community Workshops">School &amp; Community Workshops</option>
                      <option value="Private / Group Sessions">Private / Group Sessions</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: "10px", textAlign: "left" }}>
                    <label
                      style={{
                        display: "block",
                        textAlign: "left",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        color: "#B89A5A",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "2px",
                      }}
                    >
                      Location / Specific Inquiry Details
                    </label>
                    <textarea
                      rows={2}
                      placeholder=""
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      style={{
                        width: "100%",
                        height: "44px",
                        padding: "4px 8px",
                        background: "#F9F9F9",
                        border: "1px solid #E0E0E0",
                        borderRadius: "4px",
                        color: "#111111",
                        fontSize: "0.78rem",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                        textAlign: "left",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                    <button
                      type="button"
                      onClick={handleClose}
                      style={{
                        background: "#F0F0F0",
                        color: "#555555",
                        border: "1px solid #DDDDDD",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      style={{
                        background: "#B89A5A",
                        color: "#FFFFFF",
                        border: "none",
                        padding: "8px 20px",
                        borderRadius: "6px",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        letterSpacing: "0.05em",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      SUBMIT INQUIRY <FaPaperPlane style={{ fontSize: "0.7rem" }} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
