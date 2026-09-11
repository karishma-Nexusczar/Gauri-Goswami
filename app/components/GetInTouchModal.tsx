"use client";

import React, { useState } from "react";
import { FaTimes, FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";

export default function GetInTouchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+44",
    phone: "",
    inquiryType: "Legal Collaboration & Advisory",
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
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    const fullPhone = formData.phone ? `${formData.countryCode} ${formData.phone}`.trim() : "Not provided";
    const enquiryMessage = `Hello Gauri,

NEW WEBSITE ENQUIRY

Full Name: ${formData.name}
Email: ${formData.email}
Phone / WhatsApp: ${fullPhone}
Nature of Inquiry: ${formData.inquiryType}

Message:
${formData.message}`.trim();

    const whatsappNumber = "447587338945";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiryMessage)}`;

    window.open(whatsappURL, "_blank");

    setIsSubmitted(true);
    setIsSending(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setIsSending(false);
    document.body.style.overflow = "";
    setFormData({
      name: "",
      email: "",
      countryCode: "+44",
      phone: "",
      inquiryType: "Legal Collaboration & Advisory",
      message: "",
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="gold-button"
        style={{ cursor: "pointer", border: "none", display: "inline-block" }}
      >
        Get in Touch
      </button>

      {isOpen && (
        <div
          className="get-in-touch-backdrop"
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
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <div
            className="get-in-touch-modal"
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
                  DIRECT INQUIRY &amp; COLLABORATION
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
                  Let&apos;s Build Meaningful Connections
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close Inquiry Modal"
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
                  <FaCheckCircle
                    style={{
                      color: "#B89A5A",
                      fontSize: "2rem",
                      marginBottom: "8px",
                    }}
                  />
                  <h4
                    style={{
                      fontFamily: "Playfair Display, Georgia, serif",
                      fontSize: "1.1rem",
                      color: "#1F1F1F",
                      marginBottom: "4px",
                    }}
                  >
                    Inquiry Sent Successfully!
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#555555",
                      lineHeight: "1.4",
                      marginBottom: "14px",
                    }}
                  >
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{formData.inquiryType}</strong> has been transmitted to Gauri Goswami (info@gaurigoswami.com).
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
                    <div style={{ display: "flex", gap: "5px", width: "100%" }}>
                      <select
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                        style={{
                          width: "105px",
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
                      Nature of Collaboration / Inquiry
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
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
                      <option value="Legal Collaboration & Advisory">Legal Collaboration &amp; Advisory</option>
                      <option value="Academic & Research Engagement">Academic &amp; Research Engagement</option>
                      <option value="Kathak & Cultural Performance">Kathak &amp; Cultural Performance</option>
                      <option value="Speaking & Panel Engagement">Speaking &amp; Panel Engagement</option>
                      <option value="General Inquiry">General Inquiry</option>
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
                      Your Message / Collaboration Details *
                    </label>
                    <textarea
                      rows={2}
                      required
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

                  <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
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
                      disabled={isSending}
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
                      {isSending ? (
                        <>
                          SENDING... <FaSpinner className="fa-spin" />
                        </>
                      ) : (
                        <>
                          SEND INQUIRY <FaPaperPlane style={{ fontSize: "0.7rem" }} />
                        </>
                      )}
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
