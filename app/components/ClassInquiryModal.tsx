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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
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
              background: "#FFFFFF",
              border: "1px solid #E2D5BE",
              borderRadius: "12px",
              maxWidth: "460px",
              width: "100%",
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              position: "relative",
              color: "#1F1F1F",
            }}
          >
            {/* Header Strip */}
            <div
              style={{
                padding: "16px 20px 12px",
                borderBottom: "1px solid #F0E6D2",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                background: "#FAF7F2",
              }}
            >
              <div>
                <span
                  style={{
                    color: "#B89A5A",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "2px",
                  }}
                >
                  KATHAK &amp; BIHU LESSONS
                </span>
                <h3
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#1F1F1F",
                    margin: 0,
                  }}
                >
                  Enquire About Classes
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
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaTimes />
              </button>
            </div>

            {/* Content Body */}
            <div style={{ padding: "16px 20px 20px" }}>
              {isSubmitted ? (
                <div style={{ textAlign: "center", padding: "16px 8px" }}>
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
                      fontSize: "1.2rem",
                      color: "#1F1F1F",
                      marginBottom: "6px",
                    }}
                  >
                    Inquiry Sent Successfully!
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#555555",
                      lineHeight: "1.5",
                      marginBottom: "18px",
                    }}
                  >
                    Thank you, <strong>{formData.name}</strong>. Your class inquiry for <strong>{formData.classType}</strong> has been transmitted to Gauri Goswami (info@gaurigoswami.com).
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    style={{
                      background: "#B89A5A",
                      color: "#FFFFFF",
                      border: "none",
                      padding: "8px 20px",
                      borderRadius: "6px",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      letterSpacing: "0.05em",
                    }}
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "10px" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#B89A5A",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: "4px",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        background: "#F9F9F9",
                        border: "1px solid #E0E0E0",
                        borderRadius: "6px",
                        color: "#111111",
                        fontSize: "0.85rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#B89A5A",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginBottom: "4px",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        style={{
                          width: "100%",
                          padding: "8px 12px",
                          background: "#F9F9F9",
                          border: "1px solid #E0E0E0",
                          borderRadius: "6px",
                          color: "#111111",
                          fontSize: "0.85rem",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#B89A5A",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginBottom: "4px",
                        }}
                      >
                        Phone / WhatsApp
                      </label>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <select
                          value={formData.countryCode}
                          onChange={(e) =>
                            setFormData({ ...formData, countryCode: e.target.value })
                          }
                          style={{
                            width: "115px",
                            padding: "8px 6px",
                            background: "#F9F9F9",
                            border: "1px solid #E0E0E0",
                            borderRadius: "6px",
                            color: "#111111",
                            fontSize: "0.78rem",
                            fontWeight: 600,
                            outline: "none",
                            cursor: "pointer",
                          }}
                        >
                          <option value="+44">🇬🇧 UK (+44)</option>
                          <option value="+91">🇮🇳 India (+91)</option>
                          <option value="other">🌐 Other</option>
                        </select>
                        <input
                          type="tel"
                          placeholder="Phone / WhatsApp"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          style={{
                            flex: 1,
                            minWidth: 0,
                            padding: "8px 10px",
                            background: "#F9F9F9",
                            border: "1px solid #E0E0E0",
                            borderRadius: "6px",
                            color: "#111111",
                            fontSize: "0.85rem",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#B89A5A",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: "4px",
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
                        padding: "8px 12px",
                        background: "#F9F9F9",
                        border: "1px solid #E0E0E0",
                        borderRadius: "6px",
                        color: "#111111",
                        fontSize: "0.85rem",
                        outline: "none",
                      }}
                    >
                      <option value="Kathak Foundations">Kathak Foundations</option>
                      <option value="Bihu Workshops">Bihu Workshops</option>
                      <option value="Cultural Immersion Sessions">Cultural Immersion Sessions</option>
                      <option value="School & Community Workshops">School &amp; Community Workshops</option>
                      <option value="Private / Group Sessions">Private / Group Sessions</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#B89A5A",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: "4px",
                      }}
                    >
                      Location / Specific Inquiry Details
                    </label>
                    <textarea
                      rows={2}
                      placeholder="City, preferred dates, or experience level..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        background: "#F9F9F9",
                        border: "1px solid #E0E0E0",
                        borderRadius: "6px",
                        color: "#111111",
                        fontSize: "0.85rem",
                        outline: "none",
                        resize: "vertical",
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
