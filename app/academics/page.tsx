"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaUniversity } from "react-icons/fa";
import {
  FaAward,
  FaBook,
  FaBookOpen,
  FaBuilding,
  FaChevronLeft,
  FaChevronRight,
  FaCertificate,
  FaCircleCheck,
  FaEnvelope,
  FaFeather,
  FaGlobe,
  FaGraduationCap,
  FaHandshake,
  FaHeart,
  FaLandmark,
  FaLaptopCode,
  FaLightbulb,
  FaLocationDot,
  FaMicrophone,
  FaScaleBalanced,
  FaShieldHalved,
  FaUserGraduate,
  FaUserGroup,
  FaUserTie,
  FaXmark,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import styles from "./academics.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AcademicsPage() {
  const [selectedDoc, setSelectedDoc] = useState<{ src: string; title: string; pdfUrl?: string; previewUrl?: string } | null>(null);
  const swiperRef = useRef<any>(null);
  const [activeBeyondIndex, setActiveBeyondIndex] = useState<number>(0);
  const [showAllOffers, setShowAllOffers] = useState<boolean>(false);
  const [expandLokAdalat, setExpandLokAdalat] = useState<boolean>(false);
  const [expandLegalAwareness, setExpandLegalAwareness] = useState<boolean>(false);

  const certifications = [
    {
      tag: "ACADEMIC & PROFESSIONAL DEVELOPMENT",
      title: "Nottingham Advantage Award \u2013 Postgraduate",
      institution: "University of Nottingham \u2022 2024\u20132025",
      desc: "Awarded by President & Vice-Chancellor Professor Jane Norman for Postgraduate Presentation.",
      pdf: "/Nottingham-Advantage-Award-2024-25-Certificate.pdf",
      previewUrl: "/nottingham-advantage-award-certificate.png",
      viewBtnText: "View Certificate"
    },
    {
      tag: "ACADEMIC ACHIEVEMENT \u2022 NAA1673",
      title: "Nottingham Advantage Award",
      institution: "University of Nottingham \u2022 2024\u20132025",
      desc: "NAA1673 \u2013 A Window on the World: An Intercultural Journey from the Local to the Global.",
      pdf: "/NAA-Certificate-Gauri-Goswami-NAA1673.pdf",
      previewUrl: "/nottingham-advantage-award-certificate.png",
      viewBtnText: "View Certificate"
    },
    {
      tag: "ACADEMIC DOCUMENTATION",
      title: "Nottingham Law School's Professional Courses Scholarship for Academic Excellence",
      institution: "Nottingham Trent University • 2025",
      desc: "Awarded for LLM Law and Legal Practice ~ Barrister Training Course FT (Ref: N1425345).",
      pdf: "/NTU-Professional-Courses-Scholarship-Gauri-Goswami.pdf",
      previewUrl: "/ntu-scholarship.png",
      viewBtnText: "View Document"
    }
  ];

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div style={{ background: "#171717", minHeight: "100vh", color: "#FCFBF8" }}>
      {/* SITE-WIDE HEADER NAVBAR */}
      <Navbar currentPath="/academics" />

      {/* ========================================================================
          01 — HERO SECTION (DEEP CHARCOAL #171717)
          ======================================================================== */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* LEFT 50% */}
            <div className={styles.heroLeft}>
              <div className={styles.eyebrowWrap}>
                <span className={styles.eyebrowText}>ACADEMICS</span>
                <span className={styles.eyebrowLine}></span>
              </div>

              <h1 className={styles.heroHeading}>
                A Journey of <br />
                <span className={styles.goldText}>
                  Learning, Excellence &amp;
                </span>
                Continuous Growth
              </h1>

              <div className={styles.heroDivider}></div>

              <p className={styles.heroDesc}>
                From academic foundations in India to postgraduate study in International Commercial Law at the University of Nottingham, Gauri&apos;s academic journey reflects curiosity, discipline, and a commitment to continuous learning.
              </p>

              <div className={styles.signatureBlock}>
                <span className={styles.signatureMonogram}>G</span>
                <div className={styles.signatureDetails}>
                  <span className={styles.signatureName}>GAURI GOSWAMI</span>
                  <span className={styles.signatureTagline}>
                    LAW &bull; RESEARCH
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT 50% */}
            <div className={styles.heroRight}>
              <div className={styles.imageFrameOuter}>
                <div className={styles.imageCard}>
                  <Image
                    src="/nottingham-trent-gauri-hero.jpg"
                    alt="Gauri Goswami standing at University of Nottingham"
                    width={440}
                    height={587}
                    priority
                    className={styles.heroPhoto}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================
          02 & 03 — EDUCATION TIMELINE & REFERENCE MOCKUP CONTAINER
          ======================================================================== */}
      <section className={styles.timelineSection} id="education">
        <div className={styles.timelineContainer}>
          
          <div className={styles.timelineSplitLayout}>

            {/* LEFT SIDEBAR: VERTICAL TIMELINE LIST */}
            <aside className={styles.timelineLeftNav}>
              <h2 className={styles.timelineLeftNavTitle}>Academic Journey</h2>
              <p className={styles.timelineLeftNavSub}>
                From foundational education to international commercial law
              </p>

              <div className={styles.timelineNavList}>
                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2024 – 2025</span>
                  <div className={styles.timelineNavInst}>University of Nottingham</div>
                  <div className={styles.timelineNavDegree}>LL.M. International Commercial Law</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2018 – 2023</span>
                  <div className={styles.timelineNavInst}>National Law University and Judicial Academy, Assam</div>
                  <div className={styles.timelineNavDegree}>B.A. LL.B. (Hons.) &bull; First Class Honours with Distinction</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2017 – 2018</span>
                  <div className={styles.timelineNavInst}>Delhi University</div>
                  <div className={styles.timelineNavDegree}>BA (Hons) Political Science</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2015 – 2017</span>
                  <div className={styles.timelineNavInst}>Cotton College, Guwahati</div>
                  <div className={styles.timelineNavDegree}>AHSEC (Humanities)</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2010 – 2015</span>
                  <div className={styles.timelineNavInst}>Holy Child School, Guwahati</div>
                  <div className={styles.timelineNavDegree}>AISSE (Class X)</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2006 – 2010</span>
                  <div className={styles.timelineNavInst}>Disney Land School, Guwahati</div>
                  <div className={styles.timelineNavDegree}>Middle School Education</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2003 – 2006</span>
                  <div className={styles.timelineNavInst}>Brookfield High School</div>
                  <div className={styles.timelineNavDegree}>Primary Education</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2002 – 2003</span>
                  <div className={styles.timelineNavInst}>Sangam Academy</div>
                  <div className={styles.timelineNavDegree}>Nursery &amp; Early Childhood</div>
                </div>
              </div>
            </aside>


            {/* RIGHT MAIN AREA */}
            <main className={styles.timelineRightContent}>

              {/* TOP BLOCK: NATIONAL LAW UNIVERSITY AND JUDICIAL ACADEMY, ASSAM */}
              <div className={styles.nluTopBlock} id="nlu-assam">
                <span className={styles.eyebrowInstitution}>NATIONAL LAW UNIVERSITY AND JUDICIAL ACADEMY, ASSAM</span>
                <h3 className={styles.nluTitle}>B.A. LL.B. (Hons.)</h3>
                <span className={styles.nluSubtitle}>First Class Honours with Distinction</span>

                <div className={styles.nluGridSplit}>
                  <div>
                    <p className={styles.nluBodyText}>
                      Gauri completed her B.A. LL.B. (Hons.) at the National Law University and Judicial Academy, Assam, graduating with First Class Honours with Distinction.
                    </p>

                    <div className={styles.nluStatsRow}>
                      <div className={styles.nluStatBadge}>
                        <div className={styles.badgeIcon}>🎓</div>
                        <span>Grade: 8.80/10</span>
                      </div>
                      <div className={styles.nluStatBadge}>
                        <div className={styles.badgeIcon}>📜</div>
                        <span>Overall Percentage: 88%</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={styles.nluPhotoWrap}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setSelectedDoc({
                        src: "/nlu-assam-gate-entrance.jpg",
                        title: "National Law University and Judicial Academy, Assam — Main Entrance Gate",
                      })
                    }
                  >
                    <Image
                      src="/nlu-assam-gate-entrance.jpg"
                      alt="National Law University and Judicial Academy Assam Main Gate Entrance"
                      fill
                      className={styles.nluPhoto}
                      unoptimized
                    />
                  </div>
                </div>

                {/* 3 DOCUMENT CARDS (BA.LLB Degree, Marksheet, Certificate) */}
                <div className={styles.nluDocGrid}>
                  <div className={styles.docCardReference}>
                    <div
                      className={styles.docThumbWrapRef}
                      onClick={() => setSelectedDoc({ src: "/nlu-assam-ballb-honours-degree-certificate.jpg", title: "B.A. LL.B. (Honours) Degree Certificate — National Law University and Judicial Academy, Assam" })}
                      style={{ cursor: "pointer" }}
                      title="Click to view B.A. LL.B. (Honours) Degree Certificate"
                    >
                      <Image
                        src="/nlu-assam-ballb-honours-degree-certificate.jpg"
                        alt="National Law University and Judicial Academy Assam B.A. LL.B. (Honours) Degree Certificate"
                        fill
                        className={styles.docThumbRef}
                        unoptimized
                      />
                    </div>
                    <span className={styles.docTitleRef}>BA.LLB (Honours) Degree</span>
                    <button
                      className={styles.docGoldBtn}
                      onClick={() => setSelectedDoc({ src: "/nlu-assam-ballb-honours-degree-certificate.jpg", title: "B.A. LL.B. (Honours) Degree Certificate — National Law University and Judicial Academy, Assam" })}
                    >
                      View Certificate
                    </button>
                  </div>

                  <div className={styles.docCardReference}>
                    <div
                      className={styles.docThumbWrapRef}
                      onClick={() => setSelectedDoc({ src: "/nlu-assam-ballb-consolidated-marksheet.jpg", title: "Consolidated Marksheet — Original Transcript of Grades (B.A., LL.B. Hons. 5-Year Integrated Course) | NLU Assam" })}
                      style={{ cursor: "pointer" }}
                      title="Click to view Consolidated Marksheet Transcript"
                    >
                      <Image
                        src="/nlu-assam-ballb-consolidated-marksheet.jpg"
                        alt="National Law University and Judicial Academy Assam Consolidated Marksheet B.A. LL.B. (Hons.) Transcript"
                        fill
                        className={styles.docThumbRef}
                        unoptimized
                      />
                    </div>
                    <span className={styles.docTitleRef}>Consolidated Marksheet (BA.LLB Hons)</span>
                    <button
                      className={styles.docGoldBtn}
                      onClick={() => setSelectedDoc({ src: "/nlu-assam-ballb-consolidated-marksheet.jpg", title: "Consolidated Marksheet — Original Transcript of Grades (B.A., LL.B. Hons. 5-Year Integrated Course) | NLU Assam" })}
                    >
                      View Marksheet
                    </button>
                  </div>

                  <div className={styles.docCardReference}>
                    <div
                      className={styles.docThumbWrapRef}
                      onClick={() => setSelectedDoc({ src: "/nlu-assam-provisional-certificate.png", title: "Provisional Certificate — B.A., LL.B. (Hons.) Five Year Integrated Course (2018–2023) | NLU Assam" })}
                      style={{ cursor: "pointer" }}
                      title="Click to view NLU Assam Provisional Certificate"
                    >
                      <Image
                        src="/nlu-assam-provisional-certificate.png"
                        alt="National Law University and Judicial Academy Assam Provisional Certificate B.A. LL.B. (Hons.)"
                        fill
                        className={styles.docThumbRef}
                        unoptimized
                      />
                    </div>
                    <span className={styles.docTitleRef}>Provisional Certificate</span>
                    <button
                      className={styles.docGoldBtn}
                      onClick={() => setSelectedDoc({ src: "/nlu-assam-provisional-certificate.png", title: "Provisional Certificate — B.A., LL.B. (Hons.) Five Year Integrated Course (2018–2023) | NLU Assam" })}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>


              {/* BOTTOM BLOCK: UNIVERSITY OF NOTTINGHAM (DARK THEME) */}
              <div className={styles.nottinghamBottomBlock} id="qualifications">
                <div className={styles.nottinghamLeftText}>
                  <span className={styles.eyebrowInstitution} style={{ color: "#B89A5A" }}>UNIVERSITY OF NOTTINGHAM</span>
                  <h3 className={styles.nottinghamTitle}>LL.M. in International Commercial Law</h3>
                  <p className={styles.nottinghamBodyText}>
                    Gauri completed her LL.M. in International Commercial Law at the University of Nottingham, developing advanced knowledge across international commercial law and related areas.
                  </p>

                  <span className={styles.academicInterestsTitle}>Academic Interests</span>
                  <div className={styles.interestsGrid}>
                    <div className={styles.interestChipDark}>International Trade Finance</div>
                    <div className={styles.interestChipDark}>Commercial Arbitration</div>
                    <div className={styles.interestChipDark}>Corporate Governance</div>
                    <div className={styles.interestChipDark}>Sustainability Regulation</div>
                    <div className={styles.interestChipDark}>Competition Law</div>
                    <div className={styles.interestChipDark}>Artificial Intelligence</div>
                  </div>
                </div>

                {/* RIGHT SIDE CERTIFICATE CARD */}
                <div className={styles.nottinghamCertWrap}>
                  <div
                    className={styles.certCardFrame}
                    onClick={() => setSelectedDoc({ src: "/nottingham-advantage-award-certificate.png", title: "Nottingham Advantage Award Certificate — University of Nottingham (2024–25)" })}
                    style={{ cursor: "pointer" }}
                    title="Click to view Nottingham Advantage Award Certificate"
                  >
                    <Image
                      src="/nottingham-advantage-award-certificate.png"
                      alt="Nottingham Advantage Award Certificate — University of Nottingham 2024–25"
                      fill
                      className={styles.certImg}
                      unoptimized
                    />
                  </div>
                  <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                    <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#FCFBF8" }}>
                      Nottingham Advantage Award Certificate
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "#B89A5A", marginTop: "2px" }}>
                      University of Nottingham &mdash; 2024&ndash;25
                    </div>
                  </div>
                  <button
                    className={styles.docGoldBtn}
                    style={{ width: "100%", padding: "7px 12px", fontSize: "0.78rem" }}
                    onClick={() => setSelectedDoc({ src: "/nottingham-advantage-award-certificate.png", title: "Nottingham Advantage Award Certificate — University of Nottingham (2024–25)" })}
                  >
                    View Award Certificate &rarr;
                  </button>
                </div>
              </div>

            </main>
          </div>

        </div>
      </section>


      {/* ========================================================================
          06 — RESEARCH & ACADEMIC INQUIRY (WARM SOFT IVORY #FAF6F0)
          ======================================================================== */}
      <section className={styles.researchSection}>
        <div className={styles.researchContainer}>
          <div className={styles.researchMainGrid}>
            <div className={styles.researchLeftCol}>
              <h2 className={styles.researchTitle}>Research &amp; Academic Inquiry</h2>
              <span className={styles.researchSub}>Greenwashing Regulation</span>
              <p className={styles.researchDescText}>
                Her postgraduate research focused on greenwashing regulation, comparing the legal frameworks of the European Union and the United Kingdom under the supervision of Professor Peter Cartwright.
              </p>
            </div>

            <div
              className={styles.dissertationCard}
              onClick={() => setSelectedDoc({ src: "/nottingham-advantage-award-submission.png", title: "Nottingham Advantage Award Postgraduate Presentation (24-25) — NAA Pass Official Submission Form" })}
              style={{ cursor: "pointer" }}
              title="Click to view Nottingham Advantage Award Official Submission Document"
            >
              <Image
                src="/nottingham-advantage-award-submission.png"
                alt="Nottingham Advantage Award Postgraduate Presentation (24-25) Submission Form"
                fill
                className={styles.dissertationDocImg}
                unoptimized
              />
            </div>

            <div className={styles.researchInfoCards}>
              <div className={styles.infoCardBox}>
                <div className={styles.infoCardIcon}><FaBookOpen /></div>
                <div>
                  <span className={styles.infoCardTitle}>Research Area</span>
                  <div className={styles.infoCardVal}>Greenwashing Regulation</div>
                </div>
              </div>

              <div className={styles.infoCardBox}>
                <div className={styles.infoCardIcon}><FaGlobe /></div>
                <div>
                  <span className={styles.infoCardTitle}>Jurisdictions</span>
                  <div className={styles.infoCardVal}>European Union • United Kingdom</div>
                </div>
              </div>

              <div className={styles.infoCardBox}>
                <div className={styles.infoCardIcon}><FaUserGraduate /></div>
                <div>
                  <span className={styles.infoCardTitle}>Supervisor</span>
                  <div className={styles.infoCardVal}>Professor Peter Cartwright</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================
          07 — AREAS OF ACADEMIC INTEREST & BEYOND THE CURRICULUM (#FAF6F0)
          ======================================================================== */}
      <section className={styles.interestsBeyondSection}>
        <div className={styles.interestsBeyondContainer}>
          
          {/* LEFT: AREAS OF ACADEMIC INTEREST */}
          <div>
            <h3 className={styles.interestBlockTitle}>Areas of Academic Interest</h3>
            <div className={styles.academicGridCards}>
              <div className={styles.iconInterestCard}>
                <FaScaleBalanced className={styles.interestIconGold} />
                <span className={styles.interestCardLabel}>International Trade Finance</span>
              </div>

              <div className={styles.iconInterestCard}>
                <FaHandshake className={styles.interestIconGold} />
                <span className={styles.interestCardLabel}>Commercial Arbitration</span>
              </div>

              <div className={styles.iconInterestCard}>
                <FaBuilding className={styles.interestIconGold} />
                <span className={styles.interestCardLabel}>Corporate Governance</span>
              </div>

              <div className={styles.iconInterestCard}>
                <FaLightbulb className={styles.interestIconGold} />
                <span className={styles.interestCardLabel}>Intellectual Property</span>
              </div>

              <div className={styles.iconInterestCard}>
                <FaShieldHalved className={styles.interestIconGold} />
                <span className={styles.interestCardLabel}>Competition Law</span>
              </div>

              <div className={styles.iconInterestCard}>
                <FaLaptopCode className={styles.interestIconGold} />
                <span className={styles.interestCardLabel}>Artificial Intelligence &amp; Law</span>
              </div>

              <div className={styles.iconInterestCard}>
                <FaFeather className={styles.interestIconGold} />
                <span className={styles.interestCardLabel}>Sustainability Regulation</span>
              </div>
            </div>
          </div>


          {/* RIGHT: BEYOND THE CURRICULUM */}
          <div>
            <h3 className={styles.interestBlockTitle}>Beyond the Curriculum</h3>
            <div className={styles.beyondContentBox}>
              <div>
                <span className={styles.researchSub}>French Language Learning</span>
                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.65, margin: "0.5rem 0" }}>
                  Gauri began her French language learning journey during the Spring Semester of 2025, developing foundational skills in communication, vocabulary, grammar and everyday conversation.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.6rem" }}>
                  <span style={{ color: "#B89A5A", fontSize: "0.85rem" }}>📅</span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#252525" }}>2025</span>
                </div>
              </div>

              <div
                className={styles.beyondBadgeWrap}
                onClick={() => setSelectedDoc({ src: "/nottingham-advantage-award-badge.png", title: "University of Nottingham Advantage Award Badge — Postgraduate Presentation (2025)" })}
                title="Click to view Nottingham Advantage Award Certificate Badge"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src="/nottingham-advantage-award-badge.png"
                  alt="University of Nottingham Careers Advantage Award Postgraduate Presentation Badge 2025"
                  width={165}
                  height={165}
                  className={styles.badgeImg}
                  unoptimized
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================
          08 — LEARNING BEYOND THE CLASSROOM (LUXURY PANORAMIC BAR MATCHING MOCKUP)
          ======================================================================== */}
      <section className={styles.classroomSection}>
        <div className={styles.classroomContainer}>
          <div className={styles.learningBeyondWrapper}>
            {/* LEFT SPOTLIGHT PANEL */}
            <div className={styles.learningLeftSpotlight}>
              <div className={styles.learningLeftTextCol}>
                <h3 className={styles.learningHeaderTitle}>Learning Beyond the Classroom</h3>
                <h4 className={styles.learningActiveSub}>
                  {activeBeyondIndex === 0 ? "Nottingham Crown Court" :
                   activeBeyondIndex === 1 ? "Gray's Inn" :
                   activeBeyondIndex === 2 ? "Lincoln's Inn" :
                   activeBeyondIndex === 3 ? "Miss Congeniality" :
                   "School of Law"}
                </h4>
                <p className={styles.learningActiveDesc}>
                  {activeBeyondIndex === 0 ? "Represented the university as a delegate at Nottingham Crown Court, gaining insight into courtroom dynamics and the practical environment of legal advocacy." :
                   activeBeyondIndex === 1 ? "Engaged in academic visits to London's prestigious Inns of Court, exploring historical legal traditions and professional advocacy at Gray's Inn." :
                   activeBeyondIndex === 2 ? "Visited the historic halls and libraries of Lincoln's Inn, gaining deep insight into English legal heritage and bar traditions." :
                   activeBeyondIndex === 3 ? "Beauty Pageant: The Runway Look Book at the Annual Fest of National Law University and Judicial Academy, Assam." :
                   "School of Law, University of Nottingham — Ranked 45th World Ranking for Law and 6th in the UK for Law."}
                </p>
              </div>

              <div
                className={styles.learningLeftImgBox}
                onClick={() => setSelectedDoc({
                  src: activeBeyondIndex === 0 ? "/legal-practice-nottingham-seminar.jpg" :
                       activeBeyondIndex === 1 ? "/the-honourable-society-of-grays-inn-london.jpg" :
                       activeBeyondIndex === 2 ? "/the-honourable-society-of-lincolns-inn-london.jpg" :
                       activeBeyondIndex === 3 ? "/nlu-assam-miss-congeniality-beauty-pageant.jpg" :
                       "/nottingham-school-of-law-trent-building.jpg",
                  title: activeBeyondIndex === 0 ? "Last Day of Energy Law Class — University of Nottingham" :
                         activeBeyondIndex === 1 ? "The Honourable Society of Gray’s Inn — London, United Kingdom" :
                         activeBeyondIndex === 2 ? "The Honourable Society of Lincoln’s Inn — London, United Kingdom" :
                         activeBeyondIndex === 3 ? "Miss Congeniality — Beauty Pageant: The Runway Look Book at the Annual Fest of NLU, Assam" :
                         "School of Law, University of Nottingham — Ranked 45th World Ranking for Law & 6th in the UK"
                })}
                title="Click to view full image"
              >
                <Image
                  src={
                    activeBeyondIndex === 0 ? "/legal-practice-nottingham-seminar.jpg" :
                    activeBeyondIndex === 1 ? "/the-honourable-society-of-grays-inn-london.jpg" :
                    activeBeyondIndex === 2 ? "/the-honourable-society-of-lincolns-inn-london.jpg" :
                    activeBeyondIndex === 3 ? "/nlu-assam-miss-congeniality-beauty-pageant.jpg" :
                    "/nottingham-school-of-law-trent-building.jpg"
                  }
                  alt="Featured Learning Experience"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center", imageRendering: "-webkit-optimize-contrast" }}
                  unoptimized
                />
              </div>
            </div>

            {/* VERTICAL GOLD DIVIDER */}
            <div className={styles.learningDivider}></div>

            {/* RIGHT PANEL STRIP (4 CARDS) */}
            <div className={styles.learningRightGrid}>
              {/* Card 1: Gray's Inn */}
              <div
                className={`${styles.learningCard} ${activeBeyondIndex === 1 ? styles.activeCard : ""}`}
                onClick={() => {
                  setActiveBeyondIndex(1);
                  setSelectedDoc({ src: "/the-honourable-society-of-grays-inn-london.jpg", title: "The Honourable Society of Gray’s Inn — London, United Kingdom" });
                }}
                title="Click to select Gray's Inn"
              >
                <div className={styles.learningCardImgBox}>
                  <Image
                    src="/the-honourable-society-of-grays-inn-london.jpg"
                    alt="The Honourable Society of Gray’s Inn"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center", imageRendering: "-webkit-optimize-contrast" }}
                    unoptimized
                  />
                </div>
                <span className={styles.learningCardLabel}>Gray&apos;s Inn</span>
              </div>

              {/* Card 2: Lincoln's Inn */}
              <div
                className={`${styles.learningCard} ${activeBeyondIndex === 2 ? styles.activeCard : ""}`}
                onClick={() => {
                  setActiveBeyondIndex(2);
                  setSelectedDoc({ src: "/the-honourable-society-of-lincolns-inn-london.jpg", title: "The Honourable Society of Lincoln’s Inn — London, United Kingdom" });
                }}
                title="Click to select Lincoln's Inn"
              >
                <div className={styles.learningCardImgBox}>
                  <Image
                    src="/the-honourable-society-of-lincolns-inn-london.jpg"
                    alt="The Honourable Society of Lincoln’s Inn"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center", imageRendering: "-webkit-optimize-contrast" }}
                    unoptimized
                  />
                </div>
                <span className={styles.learningCardLabel}>Lincoln&apos;s Inn</span>
              </div>

              {/* Card 3: Miss Congeniality */}
              <div
                className={`${styles.learningCard} ${activeBeyondIndex === 3 ? styles.activeCard : ""}`}
                onClick={() => {
                  setActiveBeyondIndex(3);
                  setSelectedDoc({ src: "/nlu-assam-miss-congeniality-beauty-pageant.jpg", title: "Miss Congeniality — Beauty Pageant: The Runway Look Book at the Annual Fest of NLU, Assam" });
                }}
                title="Click to select Miss Congeniality"
              >
                <div className={styles.learningCardImgBox}>
                  <Image
                    src="/nlu-assam-miss-congeniality-beauty-pageant.jpg"
                    alt="Miss Congeniality — Beauty Pageant NLU Assam"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center", imageRendering: "-webkit-optimize-contrast" }}
                    unoptimized
                  />
                </div>
                <span className={styles.learningCardLabel}>Miss Congeniality</span>
              </div>

              {/* Card 4: School of Law */}
              <div
                className={`${styles.learningCard} ${activeBeyondIndex === 4 ? styles.activeCard : ""}`}
                onClick={() => {
                  setActiveBeyondIndex(4);
                  setSelectedDoc({ src: "/nottingham-school-of-law-trent-building.jpg", title: "School of Law, University of Nottingham — Ranked 45th World Ranking for Law & 6th in the UK" });
                }}
                title="Click to select School of Law"
              >
                <div className={styles.learningCardImgBox}>
                  <Image
                    src="/nottingham-school-of-law-trent-building.jpg"
                    alt="School of Law University of Nottingham"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center", imageRendering: "-webkit-optimize-contrast" }}
                    unoptimized
                  />
                </div>
                <span className={styles.learningCardLabel}>School of Law</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================
          09 — CONFERENCES & LEARNING THROUGH SERVICE (#FCFBF8)
          ======================================================================== */}
      <section className={styles.confServiceSection}>
        <div className={styles.confServiceContainer}>
          <div className={styles.confServiceSplit}>
            
            {/* CONFERENCES */}
            <div>
              <h3 className={styles.interestBlockTitle}>Conferences &amp; Academic Engagement</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <div
                  className={styles.confCardSmall}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedDoc({
                    src: "/nottingham-south-asia-excellence-award-scholars-stage.jpg",
                    title: "Effective Knowledge and Cultural Expressions — National and Community Experiences Conference (University of Nottingham)"
                  })}
                >
                  <div className={styles.confThumb}>
                    <Image
                      src="/nottingham-south-asia-excellence-award-scholars-stage.jpg"
                      alt="National and Community Experiences Conference — Effective Knowledge and Cultural Expressions"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <div>
                    <h5 style={{ fontSize: "0.88rem", margin: "0 0 2px 0", color: "#252525" }}>Effective Knowledge and Cultural Expressions</h5>
                    <span style={{ fontSize: "0.76rem", color: "#B89A5A", fontWeight: 600 }}>Role: Delegate</span>
                  </div>
                </div>

                <div
                  className={styles.confCardSmall}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedDoc({
                    src: "/protection-of-traditional-knowledge-indigenous-peoples-conference.jpg",
                    title: "Two-Day International Conference on Protection of Traditional Knowledge & Rights of Indigenous Peoples (NLU Assam & WIPRO Chair)"
                  })}
                >
                  <div className={styles.confThumb}>
                    <Image
                      src="/protection-of-traditional-knowledge-indigenous-peoples-conference.jpg"
                      alt="Two-Day International Conference on Protection of Traditional Knowledge & Rights of Indigenous Peoples"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <div>
                    <h5 style={{ fontSize: "0.88rem", margin: "0 0 2px 0", color: "#252525" }}>Protection of Traditional Knowledge &amp; Rights of Indigenous People</h5>
                    <span style={{ fontSize: "0.76rem", color: "#B89A5A", fontWeight: 600 }}>Role: Delegate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RESTORED: LEARNING THROUGH SERVICE */}
            <div>
              <h3 className={styles.interestBlockTitle}>Learning Through Service</h3>
              <div className={styles.serviceColumns}>
                <div className={styles.serviceBox}>
                  <FaLandmark style={{ color: "#B89A5A", fontSize: "1.2rem", marginBottom: "0.4rem" }} />
                  <h5 style={{ fontSize: "0.82rem", margin: "0 0 4px 0", color: "#252525" }}>Pro Bono Legal Work</h5>
                  <span style={{ fontSize: "0.72rem", color: "#666" }}>NLU Assam</span>
                </div>

                <div className={styles.serviceBox}>
                  <FaUserGroup style={{ color: "#B89A5A", fontSize: "1.2rem", marginBottom: "0.4rem" }} />
                  <h5 style={{ fontSize: "0.82rem", margin: "0 0 4px 0", color: "#252525" }}>Community Engagement</h5>
                  <span style={{ fontSize: "0.72rem", color: "#666" }}>Ministry of Law &amp; Justice</span>
                </div>

                <div className={styles.serviceBox}>
                  <FaScaleBalanced style={{ color: "#B89A5A", fontSize: "1.2rem", marginBottom: "0.4rem" }} />
                  <h5 style={{ fontSize: "0.82rem", margin: "0 0 4px 0", color: "#252525" }}>Legal Awareness</h5>
                  <span style={{ fontSize: "0.72rem", color: "#666" }}>Guwahati Central Jail</span>
                </div>
              </div>
              <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "1rem", textAlign: "center", fontStyle: "italic" }}>
                Gauri participated in legal awareness and community initiatives, including work involving domestic violence awareness and legal provisions.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================
          13 — CLINICAL LEGAL EDUCATION & COMMUNITY ENGAGEMENT (FEATURED DEDICATED SECTION)
          ======================================================================== */}
      <section style={{ background: "#FAF6F0", color: "#252525", padding: "3.5rem 1.5rem", borderTop: "1px solid rgba(184, 154, 90, 0.3)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 2.5rem auto" }}>
            <span style={{ color: "#B89A5A", fontSize: "0.76rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              ACADEMIC &amp; COMMUNITY INITIATIVE
            </span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#252525", margin: "0.3rem 0 0.3rem 0" }}>
              Clinical Legal Education &amp; Community Engagement
            </h3>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontStyle: "italic", color: "#B89A5A", margin: "0 0 0.8rem 0" }}>
              Learning law through practice, observation and community engagement
            </h4>
            <p style={{ fontSize: "0.88rem", color: "#444", lineHeight: 1.65 }}>
              As part of her clinical legal education at the National Law University and Judicial Academy, Assam, Gauri participated in practical initiatives focused on access to justice, legal aid and public legal awareness. Her academic work included a visit to a Lok Adalat at Rangia and a Legal Awareness Programme at Saraighat College, Changsari.
            </p>
          </div>

          {/* TWO EDITORIAL FEATURES: LOK ADALAT & LEGAL AWARENESS */}
          <div className={styles.clinicalEducationGrid}>
            
            {/* FEATURE 1 — LOK ADALAT RANGIA */}
            <div style={{ background: "#FFFFFF", borderRadius: "10px", border: "1px solid rgba(184, 154, 90, 0.3)", padding: "1.5rem", boxShadow: "0 6px 20px rgba(0,0,0,0.04)" }}>
              <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "8px", overflow: "hidden", marginBottom: "1rem", border: "1px solid rgba(184, 154, 90, 0.2)", cursor: "pointer" }} onClick={() => setSelectedDoc({ src: "/nlu-assam-lok-adalat-rangia-bus-group.jpg", title: "NLU Assam Academic Visit to Lok Adalat — Sub-Divisional Judicial Magistrate Court, Rangia (12th Nov 2022)" })}>
                <Image
                  src="/nlu-assam-lok-adalat-rangia-bus-group.jpg"
                  alt="NLU Assam Students & Faculty Lok Adalat Visit Rangia"
                  fill
                  style={{ objectFit: "contain", background: "#0E0C0A", imageRendering: "-webkit-optimize-contrast" }}
                  unoptimized
                />
              </div>
              <span style={{ fontSize: "0.74rem", fontWeight: 600, color: "#B89A5A", display: "block" }}>12 NOVEMBER 2022</span>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#252525", margin: "0.2rem 0 0.3rem 0" }}>
                Lok Adalat &mdash; Rangia
              </h4>
              <p style={{ fontSize: "0.78rem", color: "#777", fontWeight: 600, marginBottom: "0.6rem" }}>
                Sub-Divisional Judicial Magistrate Court, Rangia, Assam
              </p>
              <p style={{ fontSize: "0.84rem", color: "#444", lineHeight: 1.55, marginBottom: "1rem" }}>
                {expandLokAdalat
                  ? "Gauri participated in an academic visit to the Lok Adalat at Rangia as part of the Public Interest Lawyering, Legal Aid and Para-Legal Services course. The visit provided practical exposure to alternative dispute resolution, access to justice and the functioning of Lok Adalat proceedings."
                  : "Gauri participated in an academic visit to the Lok Adalat at Rangia as part of the Public Interest Lawyering, Legal Aid and Para-Legal Services course..."}
                <button
                  onClick={() => setExpandLokAdalat(!expandLokAdalat)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#7A602B",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    padding: 0,
                    marginLeft: "0.3rem",
                    textDecoration: "underline",
                    display: "inline-block"
                  }}
                >
                  {expandLokAdalat ? "Read Less" : "Read More"}
                </button>
              </p>
              
              {/* 3 TAGS */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.4)", borderRadius: "16px", padding: "3px 9px", fontSize: "0.7rem", color: "#252525", fontWeight: 600 }}>Alternative Dispute Resolution</span>
                <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.4)", borderRadius: "16px", padding: "3px 9px", fontSize: "0.7rem", color: "#252525", fontWeight: 600 }}>Access to Justice</span>
                <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.4)", borderRadius: "16px", padding: "3px 9px", fontSize: "0.7rem", color: "#252525", fontWeight: 600 }}>Legal Aid</span>
              </div>
            </div>

            {/* FEATURE 2 — LEGAL AWARENESS PROGRAMME */}
            <div style={{ background: "#FFFFFF", borderRadius: "10px", border: "1px solid rgba(184, 154, 90, 0.3)", padding: "1.5rem", boxShadow: "0 6px 20px rgba(0,0,0,0.04)" }}>
              <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "8px", overflow: "hidden", marginBottom: "1rem", border: "1px solid rgba(184, 154, 90, 0.2)", cursor: "pointer" }} onClick={() => setSelectedDoc({ src: "/nlu-assam-saraighat-college-legal-awareness-stage.jpg", title: "Center for Clinical Legal Education and Legal Aid Cell — Legal Awareness Program Banner at Saraighat College, Changsari (NLU Assam)" })}>
                <Image
                  src="/nlu-assam-saraighat-college-legal-awareness-stage.jpg"
                  alt="Center for Clinical Legal Education and Legal Aid Cell NLU Assam — Legal Awareness Program Banner"
                  fill
                  style={{ objectFit: "contain", background: "#0E0C0A", imageRendering: "-webkit-optimize-contrast" }}
                  unoptimized
                />
              </div>
              <span style={{ fontSize: "0.74rem", fontWeight: 600, color: "#B89A5A", display: "block" }}>15 NOVEMBER 2022</span>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#252525", margin: "0.2rem 0 0.3rem 0" }}>
                Legal Awareness Programme
              </h4>
              <p style={{ fontSize: "0.78rem", color: "#777", fontWeight: 600, marginBottom: "0.6rem" }}>
                Saraighat College, Changsari, Assam
              </p>
              <p style={{ fontSize: "0.84rem", color: "#444", lineHeight: 1.55, marginBottom: "0.8rem" }}>
                {expandLegalAwareness
                  ? "As part of the university's clinical legal education programme, Gauri participated in a Legal Awareness Programme organised by the Centre for Clinical Legal Aid Cell of the National Law University and Judicial Academy, Assam, in collaboration with Saraighat College."
                  : "As part of the university's clinical legal education programme, Gauri participated in a Legal Awareness Programme organised..."}
                <button
                  onClick={() => setExpandLegalAwareness(!expandLegalAwareness)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#7A602B",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    padding: 0,
                    marginLeft: "0.3rem",
                    textDecoration: "underline",
                    display: "inline-block"
                  }}
                >
                  {expandLegalAwareness ? "Read Less" : "Read More"}
                </button>
              </p>

              {/* SPEAKER ROLE HIGHLIGHT BOX */}
              <div style={{ background: "#FAF6F0", borderLeft: "3px solid #B89A5A", padding: "0.7rem 0.9rem", borderRadius: "0 6px 6px 0" }}>
                <span style={{ fontSize: "0.68rem", color: "#777", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, display: "block" }}>DOCUMENTED CONTRIBUTION</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#252525", display: "block" }}>Gauri Goswami</span>
                <span style={{ fontSize: "0.78rem", color: "#B89A5A", fontWeight: 600 }}>Legal Awareness Speaker &mdash; Domestic Violence</span>
              </div>
            </div>

          </div>

          {/* AREAS OF ENGAGEMENT ROW */}
          <div style={{ background: "#FFFFFF", borderRadius: "8px", border: "1px solid rgba(184, 154, 90, 0.25)", padding: "1rem 1.2rem", marginBottom: "1.8rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.8rem" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "#252525" }}>Areas of Engagement</span>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.35)", borderRadius: "4px", padding: "4px 10px", fontSize: "0.74rem", color: "#252525", fontWeight: 600 }}>Legal Aid</span>
              <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.35)", borderRadius: "4px", padding: "4px 10px", fontSize: "0.74rem", color: "#252525", fontWeight: 600 }}>Access to Justice</span>
              <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.35)", borderRadius: "4px", padding: "4px 10px", fontSize: "0.74rem", color: "#252525", fontWeight: 600 }}>Legal Awareness</span>
              <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.35)", borderRadius: "4px", padding: "4px 10px", fontSize: "0.74rem", color: "#252525", fontWeight: 600 }}>Alternative Dispute Resolution</span>
              <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.35)", borderRadius: "4px", padding: "4px 10px", fontSize: "0.74rem", color: "#252525", fontWeight: 600 }}>Community Legal Education</span>
            </div>
          </div>

          {/* ACADEMIC DOCUMENTATION & DECLARATION CERTIFICATE BOX */}
          <div className={styles.academicDocumentationGrid}>
            <div>
              <span style={{ color: "#B89A5A", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, display: "block" }}>ACADEMIC DOCUMENTATION &amp; DECLARATION</span>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#FCFBF8", margin: "0.2rem 0 0.3rem 0" }}>
                Public Interest Lawyering, Legal Aid and Para Legal Services 2022
              </h4>
              <p style={{ fontSize: "0.84rem", color: "#D4AD62", fontStyle: "italic", marginBottom: "0.6rem" }}>
                REPORT ON LOK ADALAT AND LEGAL AWARENESS PROGRAMME &mdash; Page 2 Declaration
              </p>
              <p style={{ fontSize: "0.78rem", color: "#C8BFB5", lineHeight: 1.55, marginBottom: "1rem", fontStyle: "italic" }}>
                &ldquo;This is to declare that the Lok Adalat and Legal Awareness Programme for Ninth semester entitled &lsquo;REPORT ON LOK ADALAT (organized at Rangia) AND LEGAL AWARENESS PROGRAMME&rsquo; organized at Changsari, Saraighat College, Assam has been duly submitted by Gauri Goswami (SF0118072) as a part of her B.A., LL.B. (Hons.) degree course in this university.&rdquo;
              </p>
            </div>

            {/* SUPPORTING DECLARATION CERTIFICATE DOCUMENT */}
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(184, 154, 90, 0.3)", padding: "0.9rem", textAlign: "center" }}>
              <div style={{ position: "relative", width: "100%", height: "130px", borderRadius: "4px", overflow: "hidden", marginBottom: "0.5rem", cursor: "pointer" }} onClick={() => setSelectedDoc({ src: "/nlu-assam-lok-adalat-declaration-certificate.png", title: "Declaration Certificate — Lok Adalat & Legal Awareness Programme 2022 | NLU Assam" })}>
                <Image
                  src="/nlu-assam-lok-adalat-declaration-certificate.png"
                  alt="Declaration Certificate — Lok Adalat & Legal Awareness Programme 2022 | NLU Assam"
                  fill
                  style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }}
                  unoptimized
                />
              </div>
              <span style={{ fontSize: "0.74rem", fontWeight: 600, color: "#FCFBF8", display: "block", marginBottom: "0.4rem" }}>
                Declaration Certificate &mdash; Lok Adalat &amp; Legal Awareness Programme 2022 | NLU Assam
              </span>
              <button
                className={styles.docGoldBtn}
                style={{ fontSize: "0.68rem", padding: "4px 8px", width: "100%" }}
                onClick={() => setSelectedDoc({ src: "/nlu-assam-lok-adalat-declaration-certificate.png", title: "Declaration Certificate — Lok Adalat & Legal Awareness Programme 2022 | NLU Assam" })}
              >
                View Declaration &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================
          10 — FOUNDATIONS, AWARDS & ACADEMIC ACHIEVEMENTS (#F6F1E8)
          ======================================================================== */}
      <section className={styles.foundationsAwardsSection} id="awards">
        <div className={styles.foundationsAwardsContainer}>
          
          {/* FOUNDATIONS */}
          <div>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", marginBottom: "1rem", color: "#252525" }}>Foundations of Learning</h4>
            <div className={styles.schoolBadgeContainer}>
              <div className={styles.schoolBadgeItem}>
                <div className={styles.schoolLogoCircle}><FaLandmark /></div>
                <span style={{ fontSize: "0.76rem", fontWeight: 600 }}>Holy Child Secondary School</span>
              </div>
              <div className={styles.schoolBadgeItem}>
                <div className={styles.schoolLogoCircle}><FaGraduationCap /></div>
                <span style={{ fontSize: "0.76rem", fontWeight: 600 }}>Disney Land School</span>
              </div>
              <div className={styles.schoolBadgeItem}>
                <div className={styles.schoolLogoCircle}><FaBook /></div>
                <span style={{ fontSize: "0.76rem", fontWeight: 600 }}>Brookfield School</span>
              </div>
            </div>
          </div>

          {/* AWARDS & CERTIFICATIONS */}
          <div>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", marginBottom: "1rem", color: "#252525" }}>Awards &amp; Certifications</h4>
            <div className={styles.awardsCertTriple}>
              <div className={styles.awardMiniCard}>
                <div className={styles.awardImageWrap} onClick={() => setSelectedDoc({ src: "/nottingham-south-asia-excellence-award-celebration.jpg", title: "South Asia Postgraduate Excellence Award Celebration Event — University of Nottingham (29th Nov 2024)" })}>
                  <Image src="/nottingham-south-asia-excellence-award-celebration.jpg" alt="South Asia Postgraduate Excellence Award Celebration Event — University of Nottingham 2024" fill style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }} unoptimized />
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#252525", display: "block", marginBottom: "0.4rem", lineHeight: 1.35 }}>
                  South Asia Postgraduate Excellence Award Celebration Event — University of Nottingham (29th Nov 2024)
                </span>
                <button className={styles.docGoldBtn} style={{ fontSize: "0.68rem", padding: "5px 8px", width: "100%" }} onClick={() => setSelectedDoc({ src: "/nottingham-south-asia-excellence-award-celebration.jpg", title: "South Asia Postgraduate Excellence Award Celebration Event — University of Nottingham (29th Nov 2024)" })}>
                  View Photo
                </button>
              </div>

              <div className={styles.awardMiniCard}>
                <div className={styles.awardImageWrap} onClick={() => setSelectedDoc({ src: "/nottingham-advantage-award-certificate.png", title: "Nottingham Advantage Award Certificate — University of Nottingham (2024–25)" })}>
                  <Image src="/nottingham-advantage-award-certificate.png" alt="Nottingham Advantage Award Certificate — University of Nottingham 2024–25" fill style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }} unoptimized />
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#252525", display: "block", marginBottom: "0.4rem", lineHeight: 1.35 }}>
                  Nottingham Advantage Award Certificate — University of Nottingham (2024–25)
                </span>
                <button className={styles.docGoldBtn} style={{ fontSize: "0.68rem", padding: "5px 8px", width: "100%" }} onClick={() => setSelectedDoc({ src: "/nottingham-advantage-award-certificate.png", title: "Nottingham Advantage Award Certificate — University of Nottingham (2024–25)" })}>
                  View Certificate
                </button>
              </div>

              <div className={styles.awardMiniCard}>
                <div className={styles.awardImageWrap} onClick={() => setSelectedDoc({ src: "/nottingham-south-asia-excellence-award-certificate.png", title: "South Asia Postgraduate Excellence Award Certificate — University of Nottingham (29th Nov 2024)" })}>
                  <Image src="/nottingham-south-asia-excellence-award-certificate.png" alt="South Asia Postgraduate Excellence Award Certificate — University of Nottingham 2024" fill style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }} unoptimized />
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#252525", display: "block", marginBottom: "0.4rem", lineHeight: 1.35 }}>
                  South Asia Postgraduate Excellence Award Certificate — University of Nottingham (29th Nov 2024)
                </span>
                <button className={styles.docGoldBtn} style={{ fontSize: "0.68rem", padding: "5px 8px", width: "100%" }} onClick={() => setSelectedDoc({ src: "/nottingham-south-asia-excellence-award-certificate.png", title: "South Asia Postgraduate Excellence Award Certificate — University of Nottingham (29th Nov 2024)" })}>
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          {/* ACADEMIC ACHIEVEMENTS */}
          <div id="achievements">
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", marginBottom: "1rem", color: "#252525" }}>Academic Achievements</h4>
            <div className={styles.achievementsList}>
              <div className={styles.achievementItemRow}>
                <FaGraduationCap style={{ color: "#B89A5A" }} />
                <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>LL.M. International Commercial Law</span>
              </div>
              <div className={styles.achievementItemRow}>
                <FaAward style={{ color: "#B89A5A" }} />
                <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>First Class B.A. LL.B. (Hons.)</span>
              </div>
              <div className={styles.achievementItemRow}>
                <FaAward style={{ color: "#B89A5A" }} />
                <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>Distinction B.A. LL.B. (8.80/10)</span>
              </div>
              <div className={styles.achievementItemRow}>
                <FaBookOpen style={{ color: "#B89A5A" }} />
                <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>Research: Greenwashing Regulation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          CERTIFICATES & RECOGNITION SECTION (#credentials)
          ======================================================================== */}
      <section className={styles.certSection} id="credentials">
        <div className={styles.certContainer}>
          <div style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto 1.5rem" }}>
            <span className={styles.sectionBadge}>
              Academic Credentials &bull; Awards &bull; Professional Recognition
            </span>
            <h2 className={styles.sectionTitle}>
              Certificates &amp; Recognition
            </h2>
            <div style={{ width: "70px", height: "3px", background: "linear-gradient(90deg, #8C6A28, #D4AD62)", margin: "0 auto 1rem", borderRadius: "2px" }} />
            <p style={{ fontSize: "0.95rem", color: "#4A4035", lineHeight: 1.6, fontWeight: 500 }}>
              A curated record of Gauri Goswami&apos;s academic achievements, awards, certifications, and institutional recognition.
            </p>
          </div>

          {/* Desktop Grid Layout */}
          <div className={styles.certGrid}>
            {certifications.map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                <span className={styles.certTag}>{cert.tag}</span>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <div className={styles.certInstitution}>{cert.institution}</div>
                <p className={styles.certDesc}>{cert.desc}</p>
                <div className={styles.certBtnRow}>
                  <button
                    type="button"
                    className={styles.certViewBtn}
                    onClick={() => setSelectedDoc({
                      src: cert.pdf,
                      title: cert.title,
                      pdfUrl: cert.pdf,
                      previewUrl: cert.previewUrl
                    })}
                  >
                    {cert.viewBtnText} &rarr;
                  </button>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certDownloadBtn}
                    title="Download PDF"
                  >
                    Download &darr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swiper Layout */}
          <div className={styles.certSwiperWrapper}>
            <button
              type="button"
              className={styles.certSwiperNavBtn}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous Certificate"
            >
              <FaChevronLeft />
            </button>
            
            <div className={styles.certSwiperContainer}>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="cert-mobile-swiper"
              >
                {certifications.map((cert, idx) => (
                  <SwiperSlide key={idx}>
                    <div className={styles.certCard} style={{ margin: "0 auto", maxWidth: "290px", minHeight: "260px", display: "flex", flexDirection: "column" }}>
                      <span className={styles.certTag}>{cert.tag}</span>
                      <h3 className={styles.certTitle}>{cert.title}</h3>
                      <div className={styles.certInstitution}>{cert.institution}</div>
                      <p className={styles.certDesc} style={{ flex: 1 }}>{cert.desc}</p>
                      <div className={styles.certBtnRow}>
                        <button
                          type="button"
                          className={styles.certViewBtn}
                          onClick={() => setSelectedDoc({
                            src: cert.pdf,
                            title: cert.title,
                            pdfUrl: cert.pdf,
                            previewUrl: cert.previewUrl
                          })}
                        >
                          {cert.viewBtnText} &rarr;
                        </button>
                        <a
                          href={cert.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.certDownloadBtn}
                          title="Download PDF"
                        >
                          Download &darr;
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button
              type="button"
              className={styles.certSwiperNavBtn}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next Certificate"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* ========================================================================
              SUBSECTION: UNIVERSITY OFFERS & ADMISSIONS
              ======================================================================== */}
          <div className={styles.offersSubsection} id="offers">
            <div className={styles.offersHeader} style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto 1.8rem" }}>
              <span className={styles.sectionBadge}>
                UNIVERSITY OFFERS &amp; ADMISSIONS
              </span>
              <h3 className={styles.sectionTitle}>
                University Offers &amp; Admissions
              </h3>
              <div style={{ width: "70px", height: "3px", background: "linear-gradient(90deg, #8C6A28, #D4AD62)", margin: "0 auto 1rem", borderRadius: "2px" }} />
              <p style={{ fontSize: "0.95rem", color: "#4A4035", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
                A record of postgraduate and academic opportunities received from leading UK universities.
              </p>
            </div>

            {(() => {
              const allOffers = [
                {
                  uni: "UNIVERSITY OF BIRMINGHAM",
                  title: "Offer Letter • LLM Commercial Law",
                  detail: "Postgraduate Admission (2024/25)",
                  pdf: "/University-of-Birmingham-Offer-Letter.pdf",
                  preview: "/birmingham-offer-preview.png"
                },
                {
                  uni: "KING'S COLLEGE LONDON",
                  title: "Offer Letter • LLM (Master of Laws)",
                  detail: "Postgraduate Admission (2024/25)",
                  pdf: "/Kings-College-London-Offer-Letter.pdf",
                  preview: "/kings-college-offer-preview.png"
                },
                {
                  uni: "UNIVERSITY OF BRISTOL",
                  title: "Company Law & Corporate Governance",
                  detail: "Postgraduate Admission (2024/25)",
                  pdf: "/University-of-Bristol-Offer-Letter.pdf",
                  preview: "/bristol-offer-preview.png"
                },
                {
                  uni: "QUEEN MARY UNIVERSITY OF LONDON",
                  title: "Offer Letter • Commercial & Corporate Law",
                  detail: "Postgraduate Admission (2024/25)",
                  pdf: "/Queen-Mary-University-London-Offer-Letter.pdf",
                  preview: "/qmul-offer-preview.png"
                },
                {
                  uni: "UNIVERSITY OF EDINBURGH",
                  title: "Offer Letter • LLM Corporate Law",
                  detail: "Postgraduate Admission (2024/25)",
                  pdf: "/University-of-Edinburgh-Offer-Letter.pdf",
                  preview: "/edinburgh-offer-preview.png"
                },
                {
                  uni: "UNIVERSITY OF LEEDS",
                  title: "Offer Letter • LLM International Corporate Law",
                  detail: "Postgraduate Admission (2024/25)",
                  pdf: "/University-of-Leeds-Offer-Letter.pdf",
                  preview: "/leeds-offer-preview.png"
                },
                {
                  uni: "UNIVERSITY OF NOTTINGHAM",
                  title: "Offer Letter • LLM International Commercial Law",
                  detail: "Postgraduate Admission (2024/25)",
                  pdf: "/University-of-Nottingham-Offer-Letter.pdf",
                  preview: "/nottingham-offer-preview.png"
                }
              ];

              const visibleOffers = showAllOffers ? allOffers : allOffers.slice(0, 3);

              return (
                <>
                  <div className={styles.offersGrid}>
                    {visibleOffers.map((item, idx) => (
                      <div key={idx} className={styles.offerDocCard}>
                        <div className={styles.offerDocHeader}>
                          <div 
                            className={styles.offerThumbBox}
                            onClick={() => setSelectedDoc({
                              src: item.pdf,
                              title: `${item.uni} — ${item.title}`,
                              pdfUrl: item.pdf,
                              previewUrl: item.preview
                            })}
                          >
                            <Image src={item.preview} alt={item.uni} fill className={styles.offerThumbImg} unoptimized />
                          </div>
                          <div className={styles.offerInfo}>
                            <span className={styles.offerUniName}>{item.uni}</span>
                            <h4 className={styles.offerTitle}>{item.title}</h4>
                            <p className={styles.offerDetail}>{item.detail}</p>
                          </div>
                        </div>

                        <button
                          type="button"
                          className={styles.offerViewBtn}
                          onClick={() => setSelectedDoc({
                            src: item.pdf,
                            title: `${item.uni} — ${item.title}`,
                            pdfUrl: item.pdf,
                            previewUrl: item.preview
                          })}
                        >
                          View Letter &rarr;
                        </button>
                      </div>
                    ))}
                  </div>

                  <div style={{ textAlign: "center", marginTop: "2.2rem" }}>
                    <button
                      type="button"
                      onClick={() => setShowAllOffers(!showAllOffers)}
                      style={{
                        padding: "0.75rem 2.2rem",
                        background: "#171717",
                        color: "#D4AD62",
                        border: "1px solid #B89A5A",
                        borderRadius: "6px",
                        fontFamily: "var(--font-sans, 'Montserrat', sans-serif)",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 6px 20px rgba(23, 23, 23, 0.25)"
                      }}
                    >
                      {showAllOffers ? "Show Less ↑" : `View All Offers (${allOffers.length}) ↓`}
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>




      {/* ========================================================================
          14 & 15 — FINAL ACADEMIC PROFILE & CTAS (DEEP CHARCOAL #171717)
          ======================================================================== */}
      <section className={styles.finalProfileSection}>
        <div className={styles.finalProfileContainer}>
          <div className={styles.finalPortraitWrap}>
            <Image
              src="/gauri-academic-knowledge-meets-purpose.png"
              alt="Gauri Goswami — Where Knowledge Meets Purpose"
              fill
              className={styles.finalPortrait}
              unoptimized
            />
          </div>

          <div>
            <h2 className={styles.statementTitle}>Where Knowledge Meets Purpose</h2>
            <p className={styles.statementBody}>
              Gauri&apos;s academic journey reflects a continuous pursuit of knowledge across law, research, languages, culture, and interdisciplinary learning. Her education in India and the United Kingdom has shaped a global perspective that continues to inform her aspirations in commercial law.
            </p>

            <div className={styles.ctaGrid4}>
              <Link href="/#experience" className={styles.ctaCardLink}>
                <FaLandmark className={styles.ctaIcon} />
                <span className={styles.ctaLabel}>Explore Legal Career &rarr;</span>
              </Link>

              <Link href="/research#publications" className={styles.ctaCardLink}>
                <FaBookOpen className={styles.ctaIcon} />
                <span className={styles.ctaLabel}>View Legal Research &rarr;</span>
              </Link>

              <Link href="/research#publications" className={styles.ctaCardLink}>
                <FaBookOpen className={styles.ctaIcon} />
                <span className={styles.ctaLabel}>View Research &rarr;</span>
              </Link>

              <Link href="/contact" className={styles.ctaCardLink}>
                <FaEnvelope className={styles.ctaIcon} />
                <span className={styles.ctaLabel}>Get in Touch &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* DOCUMENT LIGHTBOX MODAL */}
      {selectedDoc && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedDoc(null)}>
          <div
            className={styles.modalContent}
            style={{
              maxHeight: selectedDoc.pdfUrl || selectedDoc.src.endsWith(".pdf") ? "88vh" : "82vh",
              maxWidth: selectedDoc.pdfUrl || selectedDoc.src.endsWith(".pdf") ? "920px" : "820px",
              height: selectedDoc.pdfUrl || selectedDoc.src.endsWith(".pdf") ? "82vh" : "auto",
              padding: "1.2rem 1.4rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalCloseBtn} onClick={() => setSelectedDoc(null)} title="Close preview">
              <FaXmark />
            </button>
            <h4 style={{
              color: "#B89A5A",
              margin: "0 0 0.6rem 0",
              fontFamily: "var(--font-serif)",
              fontSize: "0.92rem",
              paddingRight: "32px",
              paddingLeft: "32px",
              textAlign: "center",
              width: "100%",
              lineHeight: 1.45,
              wordBreak: "break-word"
            }}>
              {selectedDoc.title}
            </h4>
            {selectedDoc.pdfUrl || selectedDoc.src.endsWith(".pdf") ? (
              <div style={{ width: "100%", flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
                {/* Desktop Iframe Viewer */}
                <div className={styles.pdfIframeWrap} style={{ width: "100%", flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
                  <iframe
                    src={`${selectedDoc.pdfUrl || selectedDoc.src}#toolbar=1&navpanes=0&view=FitH`}
                    title={selectedDoc.title}
                    style={{ width: "100%", flex: 1, border: "none", borderRadius: "6px", background: "#ffffff" }}
                  />
                </div>
                
                {/* Mobile/Tablet Fallback Image Viewer */}
                {selectedDoc.previewUrl && (
                  <div className={styles.pdfMobilePreview} style={{ position: "relative", width: "100%", height: "280px", borderRadius: "6px", overflow: "hidden", marginBottom: "0.5rem", border: "1px solid rgba(184, 154, 90, 0.3)" }}>
                    <Image
                      src={selectedDoc.previewUrl}
                      alt={selectedDoc.title}
                      fill
                      style={{ objectFit: "contain", background: "#17120F" }}
                      unoptimized
                    />
                  </div>
                )}
                
                <div style={{ textAlign: "center", marginTop: "6px" }}>
                  <a
                    href={selectedDoc.pdfUrl || selectedDoc.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.docGoldBtn}
                    style={{ display: "inline-block", padding: "5px 14px", fontSize: "0.76rem" }}
                  >
                    Open PDF in New Tab / Download Full Document (35 Pages) ↗
                  </a>
                </div>
              </div>
            ) : (
              <div className={styles.modalImageWrap}>
                <Image
                  src={selectedDoc.src}
                  alt={selectedDoc.title}
                  fill
                  className={styles.modalImage}
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>
      )}


      {/* HOME PAGE FOOTER */}
      <Footer />
    </div>
  );
}
