"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUniversity } from "react-icons/fa";
import {
  FaAward,
  FaBalanceScale,
  FaBook,
  FaBookOpen,
  FaBuilding,
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
  FaMedal,
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

const performanceInquiryUrl =
  "mailto:info@gaurigoswami.com?subject=Kathak%20Performance%20%26%20Event%20Booking%20—%20Gauri%20Goswami&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20Kathak%20performance%20%2F%20cultural%20event.%0A%0AName%3A%0AOrganization%20%2F%20Event%3A%0AEvent%20Date%3A%0AVenue%20%2F%20City%3A%0APerformance%20Requirements%3A%0APhone%20Number%3A%0A%0ABest%20regards%2C";

export default function AcademicsPage() {
  const [selectedDoc, setSelectedDoc] = useState<{ src: string; title: string } | null>(null);
  const [activeBeyondIndex, setActiveBeyondIndex] = useState<number>(0);

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
                    LAW &bull; RESEARCH &bull; KATHAK
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
                  <div className={styles.timelineNavDegree}>B.A. LL.B. (Hons.)</div>
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
                  <div className={styles.timelineNavInst}>Cotton College</div>
                  <div className={styles.timelineNavDegree}>AHSEC (Humanities)</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2010 – 2015</span>
                  <div className={styles.timelineNavInst}>Holy Child School, Guwahati</div>
                  <div className={styles.timelineNavDegree}>AISSE</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2006 – 2010</span>
                  <div className={styles.timelineNavInst}>Disney Land School, Guwahati</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2003 – 2006</span>
                  <div className={styles.timelineNavInst}>Brookfield High School</div>
                </div>

                <div className={styles.timelineNavItem}>
                  <div className={styles.timelineNavDot} />
                  <span className={styles.timelineNavYear}>2002 – 2003</span>
                  <div className={styles.timelineNavInst}>Sangam Academy</div>
                  <div className={styles.timelineNavDegree}>Nursery</div>
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

                  <div className={styles.nluPhotoWrap}>
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

                {/* CLINICAL LEGAL EDUCATION REFERENCE */}
                <div style={{ marginTop: "1.5rem", paddingTop: "1.2rem", borderTop: "1px dashed rgba(184, 154, 90, 0.35)" }}>
                  <span className={styles.eyebrowInstitution} style={{ color: "#B89A5A", fontSize: "0.74rem" }}>CLINICAL LEGAL EDUCATION</span>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "#252525", margin: "0.2rem 0 0.4rem 0" }}>
                    Public Interest Lawyering, Legal Aid &amp; Para-Legal Services &mdash; 2022
                  </h4>
                  <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.5, marginBottom: "0.6rem" }}>
                    As part of her B.A. LL.B. (Hons.) curriculum, Gauri participated in practical legal education involving a Lok Adalat visit and a Legal Awareness Programme in Assam.
                  </p>
                  <button
                    className={styles.docGoldBtn}
                    style={{ fontSize: "0.76rem", padding: "6px 12px" }}
                    onClick={() => setSelectedDoc({
                      src: "/nlu-assam-lok-adalat-declaration-certificate.png",
                      title: "Clinical Legal Education Academic Report — Lok Adalat & Legal Awareness Programme 2022 (NLU Assam)"
                    })}
                  >
                    View Academic Report &rarr;
                  </button>
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
                    <div className={styles.interestChipDark}>Sustainability Regulation</div>
                  </div>
                </div>

                {/* RIGHT SIDE CERTIFICATE CARD (MATCHING REFERENCE SCREENSHOT) */}
                <div className={styles.nottinghamCertWrap}>
                  <div
                    className={styles.certCardFrame}
                    onClick={() => setSelectedDoc({ src: "/nottingham-advantage-award-certificate.png", title: "The University of Nottingham Advantage Award Certificate" })}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src="/nottingham-advantage-award-certificate.png"
                      alt="The University of Nottingham Advantage Award Certificate"
                      fill
                      className={styles.certImg}
                      unoptimized
                    />
                  </div>
                  <button
                    className={styles.docGoldBtn}
                    style={{ width: "100%", padding: "7px 12px" }}
                    onClick={() => setSelectedDoc({ src: "/nottingham-advantage-award-certificate.png", title: "The University of Nottingham Advantage Award Certificate" })}
                  >
                    View LL.M. Certificate
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

              {/* CLINICAL LEGAL EDUCATION ITEM */}
              <div style={{ marginTop: "1.2rem", paddingTop: "1rem", borderTop: "1px dashed rgba(184, 154, 90, 0.3)" }}>
                <span className={styles.researchSub}>Clinical Legal Education</span>
                <span style={{ fontSize: "0.84rem", fontWeight: 600, color: "#252525", display: "block", marginTop: "2px" }}>
                  Public Interest Lawyering, Legal Aid &amp; Para-Legal Services
                </span>
                <span style={{ fontSize: "0.78rem", color: "#B89A5A", display: "block", marginTop: "2px" }}>
                  National Law University and Judicial Academy, Assam &middot; 2022
                </span>
                <p style={{ fontSize: "0.84rem", color: "#444", lineHeight: 1.6, margin: "0.4rem 0 0.6rem 0" }}>
                  Practical academic engagement involving legal aid, Lok Adalat proceedings and community legal awareness.
                </p>
                <button
                  className={styles.docGoldBtn}
                  style={{ fontSize: "0.74rem", padding: "4px 10px" }}
                  onClick={() => setSelectedDoc({
                    src: "/nlu-assam-lok-adalat-declaration-certificate.png",
                    title: "Clinical Legal Education Report & Certificate — Lok Adalat & Legal Awareness Programme 2022"
                  })}
                >
                  View Report &rarr;
                </button>
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
                  style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }}
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
                    style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }}
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
                    style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }}
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
                    style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }}
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
                    style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }}
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
                <div className={styles.confCardSmall}>
                  <div className={styles.confThumb}>
                    <Image
                      src="/culture-london-rongali-bihu-delegates.jpg"
                      alt="National and Community Experiences Conference"
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

                <div className={styles.confCardSmall}>
                  <div className={styles.confThumb}>
                    <Image
                      src="/cultural-heritage-london-stage.jpg"
                      alt="Traditional Knowledge Conference"
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
            
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
                Gauri participated in an academic visit to the Lok Adalat at Rangia as part of the Public Interest Lawyering, Legal Aid and Para-Legal Services course. The visit provided practical exposure to alternative dispute resolution, access to justice and the functioning of Lok Adalat proceedings.
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
                As part of the university&apos;s clinical legal education programme, Gauri participated in a Legal Awareness Programme organised by the Centre for Clinical Legal Aid Cell of the National Law University and Judicial Academy, Assam, in collaboration with Saraighat College.
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
          <div style={{ background: "#17120F", color: "#FCFBF8", borderRadius: "10px", border: "1px solid rgba(184, 154, 90, 0.4)", padding: "1.5rem 1.8rem", display: "grid", gridTemplateColumns: "1fr 280px", gap: "1.5rem", alignItems: "center" }}>
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
              
              <button
                className={styles.docGoldBtn}
                style={{ fontSize: "0.78rem", padding: "7px 16px" }}
                onClick={() => setSelectedDoc({
                  src: "/nlu-assam-lok-adalat-declaration-certificate.png",
                  title: "Public Interest Lawyering, Legal Aid & Para-Legal Services — Academic Report 2022 (NLU Assam)"
                })}
              >
                View Full Academic Report &rarr;
              </button>
            </div>

            {/* SUPPORTING DECLARATION CERTIFICATE DOCUMENT */}
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(184, 154, 90, 0.3)", padding: "0.9rem", textBaseline: "center", textAlign: "center" }}>
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

          {/* AWARDS & CERTIFICATIONS */}
          <div>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", marginBottom: "1rem", color: "#252525" }}>Awards &amp; Certifications</h4>
            <div className={styles.awardsCertTriple}>
              <div className={styles.awardMiniCard}>
                <div style={{ position: "relative", width: "100%", height: "150px", background: "#120E0C", borderRadius: "6px", overflow: "hidden", marginBottom: "0.5rem", cursor: "pointer", border: "1px solid rgba(184, 154, 90, 0.3)" }} onClick={() => setSelectedDoc({ src: "/nottingham-south-asia-excellence-award-celebration.jpg", title: "South Asia Postgraduate Excellence Award Celebration Event — University of Nottingham (29th Nov 2024)" })}>
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
                <div style={{ position: "relative", width: "100%", height: "150px", background: "#120E0C", borderRadius: "6px", overflow: "hidden", marginBottom: "0.5rem", cursor: "pointer", border: "1px solid rgba(184, 154, 90, 0.3)" }} onClick={() => setSelectedDoc({ src: "/nottingham-felicitation-folk-dance-performance.jpg", title: "Felicitation for Excellent Folk Dance Performance — Scholarship Event at Great Hall, Trent Building, University of Nottingham" })}>
                  <Image src="/nottingham-felicitation-folk-dance-performance.jpg" alt="Felicitation for Excellent Folk Dance Performance — Great Hall, Trent Building, University of Nottingham" fill style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }} unoptimized />
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#252525", display: "block", marginBottom: "0.4rem", lineHeight: 1.35 }}>
                  Felicitation for excellent folk dance performance at the Scholarship Event at Great Hall, Trent Building, University of Nottingham
                </span>
                <button className={styles.docGoldBtn} style={{ fontSize: "0.68rem", padding: "5px 8px", width: "100%" }} onClick={() => setSelectedDoc({ src: "/nottingham-felicitation-folk-dance-performance.jpg", title: "Felicitation for Excellent Folk Dance Performance — Scholarship Event at Great Hall, Trent Building, University of Nottingham" })}>
                  View Photo
                </button>
              </div>

              <div className={styles.awardMiniCard}>
                <div style={{ position: "relative", width: "100%", height: "150px", background: "#120E0C", borderRadius: "6px", overflow: "hidden", marginBottom: "0.5rem", cursor: "pointer", border: "1px solid rgba(184, 154, 90, 0.3)" }} onClick={() => setSelectedDoc({ src: "/nottingham-south-asia-excellence-award-certificate.png", title: "South Asia Postgraduate Excellence Award Certificate — University of Nottingham (29th Nov 2024)" })}>
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
                <FaMedal style={{ color: "#B89A5A" }} />
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
          12 — PHOTOSHOOTS • FASHION • MODELLING (#modelling)
          ======================================================================== */}
      <section
        id="modelling"
        style={{
          background: "linear-gradient(180deg, #0A0A0A 0%, #0F0E0D 50%, #0A0A0A 100%)",
          color: "#FCFBF8",
          padding: "40px 24px 35px",
          borderTop: "1px solid rgba(212, 173, 98, 0.25)",
          borderBottom: "1px solid rgba(212, 173, 98, 0.25)",
          fontFamily: "var(--font-sans), sans-serif",
        }}
      >
        <div style={{ maxWidth: "1220px", margin: "0 auto" }}>

          {/* TOP BREADCRUMB & DECORATIVE HEADER */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={{ fontSize: "0.74rem", color: "#A49C91", letterSpacing: "0.08em", marginBottom: "8px" }}>
              <span>Home</span> &rsaquo; <span>Academic</span> &rsaquo; <span style={{ color: "#D4AD62" }}>Photoshoots &bull; Fashion &bull; Modelling</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "8px" }}>
              <div style={{ flex: 1, maxWidth: "150px", height: "1px", background: "linear-gradient(90deg, transparent, #D4AD62)" }} />
              <span style={{ color: "#D4AD62", fontSize: "0.6rem" }}>◆</span>
              <div style={{ flex: 1, maxWidth: "150px", height: "1px", background: "linear-gradient(90deg, #D4AD62, transparent)" }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif), Playfair Display, Georgia, serif",
                fontSize: "clamp(1.4rem, 2.2vw, 2.0rem)",
                fontWeight: 600,
                color: "#E2C382",
                letterSpacing: "0.08em",
                margin: "0 0 6px 0",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              PHOTOSHOOTS &nbsp;&bull;&nbsp; FASHION &nbsp;&bull;&nbsp; MODELLING
            </h2>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "10px" }}>
              <div style={{ flex: 1, maxWidth: "150px", height: "1px", background: "linear-gradient(90deg, transparent, #D4AD62)" }} />
              <span style={{ color: "#D4AD62", fontSize: "0.6rem" }}>◆</span>
              <div style={{ flex: 1, maxWidth: "150px", height: "1px", background: "linear-gradient(90deg, #D4AD62, transparent)" }} />
            </div>

            <p style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.05rem", fontStyle: "italic", color: "#D4D0C8", margin: 0 }}>
              A visual journey of style, confidence, expression and presence.
            </p>
          </div>

          {/* 01 — PHOTOSHOOTS */}
          <div style={{ marginBottom: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ color: "#D4AD62", fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, borderBottom: "2px solid #D4AD62", paddingBottom: "1px" }}>
                01
              </span>
              <span style={{ color: "#D4AD62", fontSize: "0.8rem" }}>—</span>
              <h3 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.3rem", letterSpacing: "0.12em", color: "#FCFBF8", textTransform: "uppercase", margin: 0 }}>
                PHOTOSHOOTS
              </h3>
              <div style={{ flex: 1, height: "1px", background: "rgba(212, 173, 98, 0.2)" }} />
            </div>

            {/* QUOTE & TAGS BAR */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "24px", padding: "16px 20px", background: "rgba(212, 173, 98, 0.04)", borderRadius: "6px", border: "1px solid rgba(212, 173, 98, 0.2)" }}>
              <blockquote style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.2rem", fontStyle: "italic", color: "#FCFBF8", margin: 0 }}>
                &ldquo;Every frame tells a story; make yours unforgettable.&rdquo;
              </blockquote>
              <div style={{ color: "#D4AD62", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                PROFESSIONAL &nbsp;&bull;&nbsp; EDITORIAL &nbsp;&bull;&nbsp; PORTRAIT
              </div>
            </div>

            {/* 3 BIG CARDS IN SINGLE ROW */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              {[
                {
                  src: "/editorial/ps_1.jpg",
                  title: "Traditional Mekhela Chador Photoshoot — Gauri Goswami",
                  tag: "Traditional Editorial",
                  pos: "top center",
                },
                {
                  src: "/editorial/ps_2.jpg",
                  title: "NISA'S Fashion Studio Photoshoot — Gauri Goswami",
                  tag: "Fashion Studio",
                  pos: "center",
                },
                {
                  src: "/editorial/ps_3.jpg",
                  title: "Group Editorial Photoshoot — Gauri Goswami & Nisa Sarma",
                  tag: "Group Editorial",
                  pos: "top center",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.025)",
                    border: "1px solid rgba(212, 173, 98, 0.35)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedDoc({ src: card.src, title: card.title })}
                >
                  {/* Photo Container */}
                  <div style={{ position: "relative", height: "300px", width: "100%", background: "#080808" }}>
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: card.pos }}
                      unoptimized
                    />
                  </div>

                  {/* Card Content Footer */}
                  <div style={{ padding: "16px", borderTop: "1px solid rgba(212, 173, 98, 0.2)" }}>
                    <span style={{ color: "#D4AD62", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                      {card.tag}
                    </span>
                    <h4 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "0.98rem", color: "#FCFBF8", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                      {card.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* RECOGNITION & CREDENTIALS (#credentials) */}
          <div id="credentials" style={{ marginTop: "50px" }}>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "6px" }}>
                <div style={{ flex: 1, maxWidth: "140px", height: "1px", background: "linear-gradient(90deg, transparent, #D4AD62)" }} />
                <h3 style={{ fontFamily: "var(--font-serif), Playfair Display, Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#E2C382", letterSpacing: "0.12em", margin: 0, textTransform: "uppercase" }}>
                  RECOGNITION &amp; CREDENTIALS
                </h3>
                <div style={{ flex: 1, maxWidth: "140px", height: "1px", background: "linear-gradient(90deg, #D4AD62, transparent)" }} />
              </div>
              <p style={{ fontSize: "0.85rem", color: "#A49C91", fontStyle: "italic", margin: 0 }}>
                Academic achievements, competitions, certifications and recognitions.
              </p>
            </div>

            {/* 6 REAL CERTIFICATES CARDS ROW */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "14px", marginBottom: "32px" }}>
              {[
                {
                  src: "/editorial/cert_1.jpg",
                  title: "South Asia Postgraduate Excellence Award — University of Nottingham",
                },
                {
                  src: "/editorial/cert_2.jpg",
                  title: "Nottingham Advantage Award Certificate — University of Nottingham",
                },
                {
                  src: "/editorial/cert_3.jpg",
                  title: "B.A. LL.B. (Hons.) Degree Certificate — NLU Assam",
                },
                {
                  src: "/editorial/cert_4.jpg",
                  title: "Nottingham Advantage Award Pass Certificate — University of Nottingham",
                },
                {
                  src: "/editorial/cert_5.jpg",
                  title: "Provisional Degree Certificate — NLU Assam",
                },
                {
                  src: "/editorial/cert_6.jpg",
                  title: "Advocate-on-Record Internship Certificate — Supreme Court of India",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "6px",
                    border: "1px solid rgba(212, 173, 98, 0.4)",
                    overflow: "hidden",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, border-color 0.3s ease",
                  }}
                  onClick={() => setSelectedDoc({ src: item.src, title: item.title })}
                >
                  {/* Certificate Image Box (Crisp White Frame, Uncropped Contain Display) */}
                  <div
                    style={{
                      position: "relative",
                      height: "175px",
                      background: "#FFFFFF",
                      padding: "6px",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  </div>

                  {/* Certificate Title Label */}
                  <div style={{ padding: "12px 8px", background: "#0E0E0D", borderTop: "1px solid rgba(212, 173, 98, 0.25)", textAlign: "center", minHeight: "68px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "0.76rem", color: "#FCFBF8", fontWeight: 600, lineHeight: 1.35 }}>
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Quote Banner */}
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "8px" }}>
                <div style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(90deg, transparent, #D4AD62)" }} />
                <span style={{ color: "#D4AD62", fontSize: "0.65rem" }}>◆</span>
                <div style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(90deg, #D4AD62, transparent)" }} />
              </div>
              <p style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.15rem", fontStyle: "italic", color: "#D4D0C8", margin: 0 }}>
                &ldquo;Learning gives you wings; but experience lets you fly.&rdquo;
              </p>
            </div>
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
              <Link href="/#career" className={styles.ctaCardLink}>
                <FaLandmark className={styles.ctaIcon} />
                <span className={styles.ctaLabel}>Explore Legal Career →</span>
              </Link>

              <Link href="/kathak" className={styles.ctaCardLink}>
                <FaHeart className={styles.ctaIcon} />
                <span className={styles.ctaLabel}>Explore Kathak Journey →</span>
              </Link>

              <Link href="/#research" className={styles.ctaCardLink}>
                <FaBookOpen className={styles.ctaIcon} />
                <span className={styles.ctaLabel}>View Research →</span>
              </Link>

              <Link href="/#contact" className={styles.ctaCardLink}>
                <FaEnvelope className={styles.ctaIcon} />
                <span className={styles.ctaLabel}>Get in Touch →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* DOCUMENT LIGHTBOX MODAL */}
      {selectedDoc && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedDoc(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setSelectedDoc(null)} title="Close preview">
              <FaXmark />
            </button>
            <h4 style={{ color: "#B89A5A", margin: "0 0 0.5rem 0", fontFamily: "var(--font-serif)" }}>
              {selectedDoc.title}
            </h4>
            <div className={styles.modalImageWrap}>
              <Image
                src={selectedDoc.src}
                alt={selectedDoc.title}
                fill
                className={styles.modalImage}
                unoptimized
              />
            </div>
          </div>
        </div>
      )}


      {/* HOME PAGE FOOTER */}
      <footer>
        <div className="footer-brand">
          <Link className="brand" href="/">
            <Image
              className="brand-logo"
              src="/brand-logo.png"
              alt="Gauri Goswami"
              width={96}
              height={96}
              unoptimized
              suppressHydrationWarning
            />
          </Link>
          <p className="footer-about">
            Gauri Goswami is an Advocate, LL.M. in International Commercial Law,
            Kathak Visharad-II, researcher, and cultural ambassador.
          </p>
          <div className="footer-social" aria-label="Social media links">
            <a href="https://www.instagram.com/goswamigauri1999/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><FaInstagram aria-hidden="true" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><FaFacebookF aria-hidden="true" /></a>
            <a href="https://www.youtube.com/@gaurigoswami-j1q" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube"><FaYoutube aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/gauri-goswami-68b1a3162/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
          </div>
        </div>

        <div className="footer-quick-links-col">
          <h4>Quick Links</h4>
          <div className="footer-quick-links-grid">
            <div>
              <Link href="/about">About</Link>
              <Link href="/#career">Legal Career</Link>
              <Link href="/academics">Academics</Link>
              <Link href="/#research">Research</Link>
              <Link href="/#kathak">Kathak</Link>
              <Link href="/#culture">Culture</Link>
            </div>
            <div>
              <Link href="/about#travel">Travel</Link>
              <Link href="/#contact">Media</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/research#publications">Blog</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
        </div>

        <div>
          <h4>Resources</h4>
          <Link href="/#research">Representative Matters</Link>
          <Link href="/#matters">Representative Matters</Link>
          <Link href="/#awards">Awards</Link>
          <Link href="/#contact">Media</Link>
          <Link href="/#kathak">Testimonials</Link>
          <a href={performanceInquiryUrl} target="_blank" rel="noreferrer">
            Book Performance
          </a>
        </div>

        <div id="footer-contact">
          <h4>Get in Touch</h4>
          <a href="mailto:info@gaurigoswami.com">info@gaurigoswami.com</a>
          <a href="tel:+447587338945">+44 7587 338945</a>
          <p style={{ margin: "0.25rem 0 0.5rem", color: "#a49c91" }}>
            United Kingdom
          </p>
          <a
            href="https://wa.me/447587338945"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <p style={{ margin: "0.25rem 0 0", color: "#a49c91" }}>
            New Delhi, India
          </p>
        </div>

        <div className="copyright">
          © 2026 Nexus Czar Pvt. Ltd. All Rights Reserved.
          <span>www.gaurigoswami.com</span>
        </div>
      </footer>
    </div>
  );
}
