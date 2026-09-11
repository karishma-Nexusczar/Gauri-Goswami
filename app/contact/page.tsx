"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";
import {
  FaBalanceScale,
  FaBookOpen,
  FaEnvelope,
  FaFacebookF,
  FaGraduationCap,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMicrophone,
  FaQuoteLeft,
  FaTheaterMasks,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    enquiryType: "",
    subject: "",
    message: "",
    contactMethod: "Email",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setSubmitting(true);

    const enquiryMessage = `Hello Gauri,

NEW WEBSITE ENQUIRY

Full Name: ${formData.fullName}
Email: ${formData.email}
Organisation: ${formData.organisation || "N/A"}
Nature of Inquiry: ${formData.enquiryType || "General Inquiry"}

Message:
${formData.message}`.trim();

    const whatsappNumber = "447587338945";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiryMessage)}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setSubmitting(false);
  };

  const scrollToForm = () => {
    const el = document.getElementById("send-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.contactPage}>
      <Navbar currentPath="/contact" />
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Image
            src="/contact-hero-bg.png"
            alt="Gauri Goswami Advocate Law Chambers"
            fill
            sizes="100vw"
            className={styles.heroBgImage}
            priority
            unoptimized
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>LET’S CONNECT</h1>
          <div className={styles.heroDivider}>
            <span className={styles.heroDividerLine} />
            <span className={styles.heroDividerDiamond}>◆</span>
            <span className={styles.heroDividerLine} />
          </div>
          <p className={styles.heroSubheading}>
            For professional enquiries, collaborations, speaking opportunities, cultural engagements, and other meaningful conversations.
          </p>
          <p className={styles.heroIntro}>
            Whether you are looking to discuss a professional opportunity, legal collaboration, academic enquiry, or simply wish to get in touch, I would be pleased to hear from you.
          </p>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION (4 CARDS) */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.categoryGrid}>
            <div className={styles.categoryCard}>
              <div className={styles.categoryIconBadge}>
                <FaBalanceScale aria-hidden="true" />
              </div>
              <h3 className={styles.categoryTitle}>LEGAL &amp; PROFESSIONAL</h3>
              <p className={styles.categoryDesc}>
                For enquiries relating to legal work, professional collaborations, commercial law, advocacy and career opportunities.
              </p>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIconBadge}>
                <FaBookOpen aria-hidden="true" />
              </div>
              <h3 className={styles.categoryTitle}>ACADEMIC &amp; RESEARCH</h3>
              <p className={styles.categoryDesc}>
                For academic collaborations, research discussions, publications, conferences and related opportunities.
              </p>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIconBadge}>
                <svg width="20" height="24" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor" />
                  <path d="M12 7.5L8.5 12.5H15.5L12 7.5Z" fill="currentColor" />
                  <path d="M6 10.5C6.8 11.8 8.2 12.5 10 12.5V17L6 26H7.8L11.2 18.5H12.8L16.2 26H18L14 17V12.5C15.8 12.5 17.2 11.8 18 10.5L16.5 9.5C15.9 10.5 14.8 11 13.5 11H10.5C9.2 11 8.1 10.5 7.5 9.5L6 10.5Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className={styles.categoryTitle}>DANCE &amp; CULTURAL ENGAGEMENTS</h3>
              <p className={styles.categoryDesc}>
                For Kathak, cultural performances, collaborations, workshops and cultural events.
              </p>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIconBadge}>
                <FaMicrophone aria-hidden="true" />
              </div>
              <h3 className={styles.categoryTitle}>MEDIA &amp; GENERAL</h3>
              <p className={styles.categoryDesc}>
                For interviews, media features, speaking opportunities and other general enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. CONTACT INFORMATION & MAIN ENQUIRY FORM */}
      <section className={styles.mainEnquirySection}>
        <div className={styles.container}>
          <div className={styles.twoColumnGrid}>
            {/* Left Column: Contact Information */}
            <div className={styles.contactInfoCard}>
              <h2 className={styles.cardHeading}>CONTACT INFORMATION</h2>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconBadge}>
                    <FaEnvelope aria-hidden="true" />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:info@gaurigoswami.com" className={styles.infoValue}>
                      info@gaurigoswami.com
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconBadge}>
                    <FaMapMarkerAlt aria-hidden="true" />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>Nottingham, United Kingdom</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconBadge}>
                    <FaLinkedinIn aria-hidden="true" />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/gauri-goswami-68b1a3162/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoValue}
                    >
                      linkedin.com/in/gauri-goswami
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconBadge}>
                    <FaInstagram aria-hidden="true" />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Instagram</span>
                    <a
                      href="https://www.instagram.com/goswamigauri1999/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoValue}
                    >
                      @gauri.goswami_
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoQuoteBox}>
                <span className={styles.infoQuoteIcon}><FaQuoteLeft aria-hidden="true" /></span>
                <p className={styles.infoQuoteText}>
                  I value thoughtful communication and meaningful professional connections. I look forward to connecting with you.
                </p>
              </div>
            </div>

            {/* Right Column: Send an Enquiry Form */}
            <div className={styles.formCard} id="send-enquiry">
              <div className={styles.formHeaderRow}>
                <h2 className={styles.formTitle}>SEND AN ENQUIRY</h2>
                <div className={styles.titleAccentLine} />
              </div>

              {submitted ? (
                <div className={styles.successBanner}>
                  <strong style={{ fontSize: "1.1rem", color: "#1A1815", display: "block", marginBottom: "0.4rem" }}>
                    Thank you for your enquiry!
                  </strong>
                  <p style={{ margin: "0 0 1.2rem", fontSize: "0.88rem", color: "#4A443E", lineHeight: "1.6" }}>
                    Your message has been sent directly to <strong>info@gaurigoswami.com</strong>. Gauri will review your enquiry and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        organisation: "",
                        enquiryType: "",
                        subject: "",
                        message: "",
                        contactMethod: "Email",
                      });
                    }}
                    className={styles.submitBtn}
                  >
                    SEND ANOTHER ENQUIRY &rarr;
                  </button>
                </div>
              ) : (
                <form className={styles.formGrid} onSubmit={handleSubmit}>
                  <div className={styles.formRowTwo}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="fullName">
                        Full Name <span className={styles.requiredStar}>*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="Enter your name"
                        className={styles.formInput}
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="email">
                        Email Address <span className={styles.requiredStar}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className={styles.formInput}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="organisation">
                      Organisation / Institution
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      placeholder="Company, university or organisation"
                      className={styles.formInput}
                      value={formData.organisation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formRowTwo}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="enquiryType">
                        Enquiry Type <span className={styles.requiredStar}>*</span>
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        required
                        className={styles.formSelect}
                        value={formData.enquiryType}
                        onChange={handleChange}
                      >
                        <option value="">Select enquiry type</option>
                        <option value="Legal / Professional">Legal / Professional</option>
                        <option value="Academic / Research">Academic / Research</option>
                        <option value="Cultural / Dance">Cultural / Dance</option>
                        <option value="Speaking / Event">Speaking / Event</option>
                        <option value="Media / Interview">Media / Interview</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="subject">
                        Subject <span className={styles.requiredStar}>*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="What would you like to discuss?"
                        className={styles.formInput}
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="message">
                      Message <span className={styles.requiredStar}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Please tell me more about your enquiry..."
                      className={styles.formTextarea}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <span className={styles.radioGroupLabel}>Preferred Contact Method</span>
                    <div className={styles.radioOptionsRow}>
                      <label className={styles.radioOption}>
                        <input
                          type="radio"
                          name="contactMethod"
                          value="Email"
                          checked={formData.contactMethod === "Email"}
                          onChange={handleChange}
                        />
                        Email
                      </label>
                      <label className={styles.radioOption}>
                        <input
                          type="radio"
                          name="contactMethod"
                          value="Phone"
                          checked={formData.contactMethod === "Phone"}
                          onChange={handleChange}
                        />
                        Phone
                      </label>
                      <label className={styles.radioOption}>
                        <input
                          type="radio"
                          name="contactMethod"
                          value="Other"
                          checked={formData.contactMethod === "Other"}
                          onChange={handleChange}
                        />
                        Other
                      </label>
                    </div>
                  </div>

                  <button type="submit" disabled={submitting} className={styles.submitBtn}>
                    {submitting ? "SENDING..." : "SEND ENQUIRY \u2192"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. AREAS OF ENGAGEMENT */}
      <section className={styles.areasSection}>
        <div className={styles.container}>
          <div className={styles.areasHeaderRow}>
            <h2 className={styles.areasTitle}>AREAS OF ENGAGEMENT</h2>
            <div className={styles.titleAccentLine} />
          </div>

          <div className={styles.areasGrid}>
            <div className={styles.areaCard}>
              <div className={styles.areaIcon}>
                <FaBalanceScale aria-hidden="true" />
              </div>
              <h3 className={styles.areaTitle}>Legal &amp; Advocacy</h3>
              <p className={styles.areaDesc}>
                Commercial law, legal research, professional opportunities and advocacy-related engagements.
              </p>
            </div>

            <div className={styles.areaCard}>
              <div className={styles.areaIcon}>
                <FaGraduationCap aria-hidden="true" />
              </div>
              <h3 className={styles.areaTitle}>Academic &amp; Research</h3>
              <p className={styles.areaDesc}>
                Research, publications, conferences, academic discussions and collaborative initiatives.
              </p>
            </div>

            <div className={styles.areaCard}>
              <div className={styles.areaIcon}>
                <svg width="20" height="24" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor" />
                  <path d="M12 7.5L8.5 12.5H15.5L12 7.5Z" fill="currentColor" />
                  <path d="M6 10.5C6.8 11.8 8.2 12.5 10 12.5V17L6 26H7.8L11.2 18.5H12.8L16.2 26H18L14 17V12.5C15.8 12.5 17.2 11.8 18 10.5L16.5 9.5C15.9 10.5 14.8 11 13.5 11H10.5C9.2 11 8.1 10.5 7.5 9.5L6 10.5Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className={styles.areaTitle}>Kathak &amp; Cultural Arts</h3>
              <p className={styles.areaDesc}>
                Classical dance, cultural performances, workshops and heritage initiatives.
              </p>
            </div>

            <div className={styles.areaCard}>
              <div className={styles.areaIcon}>
                <FaUsers aria-hidden="true" />
              </div>
              <h3 className={styles.areaTitle}>Speaking &amp; Collaboration</h3>
              <p className={styles.areaDesc}>
                Panels, talks, interviews, events and collaborative projects across sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PERSONAL CLOSING SECTION */}
      <section className={styles.closingSection}>
        <div className={styles.closingContainer}>
          <div className={styles.closingGrid}>
            <div className={styles.closingContentCol}>
              <h2 className={styles.closingTitle}>
                Every Meaningful Journey <br />
                Begins with a Conversation
              </h2>
              <div className={styles.heroDivider} style={{ margin: "0.8rem 0 1.4rem 0", justifyContent: "flex-start" }}>
                <span className={styles.heroDividerLine} />
                <span className={styles.heroDividerDiamond}>◆</span>
                <span className={styles.heroDividerLine} />
              </div>
              <p className={styles.closingPara}>
                From law and academia to Kathak and cultural engagement, my journey has been shaped by learning, collaboration and meaningful connections.
              </p>
              <p className={styles.closingPara}>
                If you would like to connect regarding a professional opportunity, academic discussion, cultural engagement or collaborative project, I would be delighted to hear from you.
              </p>
              <button onClick={scrollToForm} className={styles.closingBtn}>
                GET IN TOUCH &rarr;
              </button>
            </div>

            <div className={styles.closingImageCol}>
              <Image
                src="/contact-journey-right.png"
                alt="Gauri Goswami Advocate at Desk"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className={styles.closingImage}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONNECT WITH ME (3 CARDS) */}
      <section className={styles.connectSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ margin: "0 auto 1.2rem" }}>
            <h2 className={styles.sectionTitleCenter}>CONNECT WITH ME</h2>
          </div>

          <div className={styles.connectGrid}>
            <a
              href="https://www.linkedin.com/in/gauri-goswami-68b1a3162/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connectCard}
            >
              <div className={styles.connectIconBadge}>
                <FaLinkedinIn aria-hidden="true" />
              </div>
              <div>
                <h3 className={styles.connectTitle}>LinkedIn</h3>
                <p className={styles.connectSubtext}>
                  Professional updates, publications and legal journey.
                </p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/goswamigauri1999/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connectCard}
            >
              <div className={styles.connectIconBadge}>
                <FaInstagram aria-hidden="true" />
              </div>
              <div>
                <h3 className={styles.connectTitle}>Instagram</h3>
                <p className={styles.connectSubtext}>
                  Dance, culture and personal highlights.
                </p>
              </div>
            </a>

            <a href="mailto:info@gaurigoswami.com" className={styles.connectCard}>
              <div className={styles.connectIconBadge}>
                <FaEnvelope aria-hidden="true" />
              </div>
              <div>
                <h3 className={styles.connectTitle}>Email</h3>
                <p className={styles.connectSubtext}>Direct professional enquiries.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 8. GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
