"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  FaGlobe,
  FaLeaf,
  FaRobot,
  FaBuilding,
  FaChartLine,
  FaScaleUnbalanced,
  FaBookOpen,
  FaFileLines,
  FaXmark,
  FaLandmark,
  FaGraduationCap,
  FaUserGroup,
  FaScaleBalanced,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import styles from "./research.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const performanceInquiryUrl =
  "mailto:info@gaurigoswami.in?subject=Kathak%20Performance%20%26%20Event%20Booking%20—%20Gauri%20Goswami&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20Kathak%20performance%20%2F%20cultural%20event.%0A%0AName%3A%0AOrganization%20%2F%20Event%3A%0AEvent%20Date%3A%0AVenue%20%2F%20City%3A%0APerformance%20Requirements%3A%0APhone%20Number%3A%0A%0ABest%20regards%2C";

interface DocumentModalData {
  title: string;
  category?: string;
  venueOrPublisher?: string;
  date?: string;
  description?: string;
  imageSrc?: string;
  src?: string;
  citation?: string;
  aboutAuthor?: string;
  metaGrid?: { label: string; val: string }[];
}

export default function ResearchPage() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentModalData | null>(null);
  const [showGreenwashingArticle, setShowGreenwashingArticle] = useState<boolean>(false);
  const [showLondonDiasporaArticle, setShowLondonDiasporaArticle] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("All");

  const swiperRef = useRef<any>(null);

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

  const archiveItems = [
    {
      title: "Greenwashing Regulation Research",
      date: "2024–2025",
      type: "Research",
      category: "Research Papers",
      imageSrc: "/gauri-academic-knowledge-meets-purpose.png",
      description: "Postgraduate dissertation research under Professor Peter Cartwright comparing EU and UK legal frameworks on greenwashing and corporate environmental claims.",
    },
    {
      title: "Fighting Extremism",
      date: "2020",
      type: "Journal Publication",
      category: "Publications",
      imageSrc: "/gauri-academic-knowledge-meets-purpose.png",
      description: "Published in the Indian Journal of Law and Justice (Vol-11, No.1, Part 2, March 2020, pp. 167–182). Analyzes statutory counter-terrorism laws and human rights.",
    },
    {
      title: "Custodial Laws in India",
      date: "2023",
      type: "Conference Paper",
      category: "Presentations",
      imageSrc: "/gauri-academic-knowledge-meets-purpose.png",
      description: "Presented at NMIMS Hyderabad's National Conference on Criminal Law and Policy. Exhaustive analysis of remand provisions under Section 167 CrPC.",
    },
    {
      title: "Public Interest Lawyering Report",
      date: "2022",
      type: "Academic Report",
      category: "Reports",
      imageSrc: "/nlu-assam-lok-adalat-declaration-certificate.png",
      description: "35-page comprehensive clinical legal education report on Lok Adalat proceedings at Rangia and Legal Awareness Programme at Saraighat College.",
    },
    {
      title: "Media and Privacy (Article 21)",
      date: "2021",
      type: "Conference Paper",
      category: "Presentations",
      imageSrc: "/gauri-academic-knowledge-meets-purpose.png",
      description: "Presented at KLE Society's Law College, Bangalore. Examines trial by media ethics and the fundamental right to privacy under Article 21.",
    },
  ];

  const filteredArchive =
    activeTab === "All"
      ? archiveItems
      : archiveItems.filter((item) => item.category === activeTab || item.type === activeTab);

  return (
    <div style={{ background: "#171717", minHeight: "100vh", color: "#FCFBF8" }}>
      {/* NAVBAR */}
      <Navbar currentPath="/research" />

      {/* ========================================================================
          STEP 1 — HERO SECTION (FULL UNJOINED UNCROPPED BACKGROUND IMAGE)
          ======================================================================== */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgWrap}>
          <Image
            src="/gauri-research-hero-desk-red-blazer.jpg"
            alt="Gauri Goswami — Commercial Law Research & Legal Publications"
            fill
            className={styles.heroBgImg}
            unoptimized
          />
          <div className={styles.heroBgOverlay} />
        </div>

        <div className={styles.heroContainer}>
          <div style={{ maxWidth: "680px" }}>
            <span className={styles.kicker}>RESEARCH &amp; PUBLICATIONS &mdash;</span>
            <h1 className={styles.heroTitle}>
              Researching Law in <br />
              <span style={{ color: "#B89A5A" }}>a Changing World</span>
            </h1>
            <p className={styles.heroSub}>
              Gauri&apos;s research and academic work explores contemporary questions in commercial law, climate regulation, technology, constitutionalism, human rights and global legal frameworks.
            </p>
            <div className={styles.heroAuthorBadge}>
              <div>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.18em", color: "#FCFBF8", display: "block" }}>GAURI GOSWAMI</span>
                <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", color: "#B89A5A", marginTop: "2px", display: "block" }}>LAW &bull; RESEARCH &bull; SCHOLARSHIP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 2 — RESEARCH PHILOSOPHY (#F6F1E8 WARM IVORY)
          ======================================================================== */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContainer}>
          <span className={styles.kicker} style={{ color: "#B89A5A" }}>
            RESEARCH PHILOSOPHY &mdash;
          </span>
          <div className={styles.philosophyGrid}>
            <div>
              <h2 className={styles.philosophyTitle}>Research with Purpose</h2>
              <div className={styles.goldLine}></div>
            </div>
            <div>
              <p className={styles.philosophyText}>
                Her academic and research journey is shaped by a broader interest in how law responds to changing commercial, technological and social realities. Her work brings together doctrinal legal research, comparative legal analysis and interdisciplinary inquiry.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginTop: "1.2rem", color: "#B89A5A", fontSize: "1.4rem" }}>
                <FaBookOpen title="Doctrinal Research" />
                <FaScaleBalanced title="Comparative Analysis" />
                <FaGlobe title="Global Legal Frameworks" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 3 — AREAS OF RESEARCH (SOFT WHITE #FFFFFF)
          ======================================================================== */}
      <section className={styles.areasSection} id="research-areas">
        <div className={styles.areasContainer}>
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.kicker}>AREAS OF RESEARCH &mdash;</span>
            <h2 className={styles.sectionHeading} style={{ color: "#252525" }}>
              Specialised Domains of Legal Inquiry
            </h2>
          </div>

          <div className={styles.areasGrid}>
            {/* 01 */}
            <div className={styles.areaBlock}>
              <FaGlobe style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.5rem" }} />
              <span className={styles.areaNum}>01</span>
              <h4 className={styles.areaTitle}>International Commercial Law</h4>
              <p className={styles.areaDesc}>International trade, commercial transactions and cross-border legal frameworks.</p>
            </div>

            {/* 02 */}
            <div className={styles.areaBlock}>
              <FaLeaf style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.5rem" }} />
              <span className={styles.areaNum}>02</span>
              <h4 className={styles.areaTitle}>Sustainability &amp; Greenwashing</h4>
              <p className={styles.areaDesc}>Legal regulation of environmental claims and corporate sustainability.</p>
            </div>

            {/* 03 */}
            <div className={styles.areaBlock}>
              <FaRobot style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.5rem" }} />
              <span className={styles.areaNum}>03</span>
              <h4 className={styles.areaTitle}>AI &amp; Emerging Technologies</h4>
              <p className={styles.areaDesc}>Legal questions surrounding artificial intelligence, robotics and technological regulation.</p>
            </div>

            {/* 04 */}
            <div className={styles.areaBlock}>
              <FaBuilding style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.5rem" }} />
              <span className={styles.areaNum}>04</span>
              <h4 className={styles.areaTitle}>Corporate Governance</h4>
              <p className={styles.areaDesc}>Corporate structures, governance, accountability and regulatory frameworks.</p>
            </div>

            {/* 05 */}
            <div className={styles.areaBlock}>
              <FaChartLine style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.5rem" }} />
              <span className={styles.areaNum}>05</span>
              <h4 className={styles.areaTitle}>International Trade &amp; Finance</h4>
              <p className={styles.areaDesc}>Cross-border commerce, trade law and financial transactions.</p>
            </div>

            {/* 06 */}
            <div className={styles.areaBlock}>
              <FaScaleUnbalanced style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.5rem" }} />
              <span className={styles.areaNum}>06</span>
              <h4 className={styles.areaTitle}>Competition &amp; Antitrust</h4>
              <p className={styles.areaDesc}>Competition law, mergers, acquisitions and antitrust regulation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 4 — FEATURED RESEARCH (#171717 DEEP CHARCOAL)
          ======================================================================== */}
      <section className={styles.featuredSection} id="greenwashing">
        <div className={styles.featuredContainer}>
          <div className={styles.featuredLeft}>
            <span className={styles.kicker}>FEATURED RESEARCH &mdash;</span>
            <h2 className={styles.sectionHeading} style={{ color: "#FCFBF8", margin: "0.4rem 0 0.8rem 0" }}>
              Greenwashing Regulation
            </h2>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontStyle: "italic", color: "#B89A5A", margin: "0 0 1.2rem 0" }}>
              Comparative Legal Study &mdash; European Union &times; United Kingdom
            </h4>
            <p style={{ fontSize: "0.95rem", color: "rgba(252,251,248,0.85)", lineHeight: 1.7, maxWidth: "600px" }}>
              Postgraduate research examining greenwashing regulation through a comparative study of the legal frameworks of the European Union and the United Kingdom.
            </p>
          </div>

          <div className={styles.featuredRight}>
            <div className={styles.featuredMetaGrid}>
              <div>
                <span className={styles.metaLabel}>Research Area</span>
                <span className={styles.metaVal}>Greenwashing Regulation</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Jurisdictions</span>
                <span className={styles.metaVal}>European Union &bull; UK</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Academic Context</span>
                <span className={styles.metaVal}>LL.M. International Commercial Law</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Supervisor</span>
                <span className={styles.metaVal}>Prof. Peter Cartwright</span>
              </div>
            </div>

            <button
              className={styles.goldBtn}
              onClick={() => setSelectedDoc({
                title: "Greenwashing Regulation — Comparative Legal Study (EU × UK)",
                category: "Featured Research",
                venueOrPublisher: "University of Nottingham (School of Law)",
                date: "2024–2025",
                description: "Postgraduate research examining greenwashing regulation through a comparative study of the legal frameworks of the European Union and the United Kingdom under the supervision of Prof. Peter Cartwright.",
                metaGrid: [
                  { label: "Research Area", val: "Greenwashing Regulation" },
                  { label: "Jurisdictions", val: "European Union • UK" },
                  { label: "Academic Context", val: "LL.M. International Commercial Law" },
                  { label: "Supervisor", val: "Prof. Peter Cartwright" }
                ],
                aboutAuthor: "Gauri Goswami is a law graduate from the University of Nottingham, United Kingdom, where she was awarded the South Asia Postgraduate Excellence Award and received both the Nottingham Advantage Award and the Nottingham Postgraduate Advantage Award in recognition of her academic and extracurricular engagement. She completed her BA LL.B. (Hons.) with First Class Honours from the National Law University and Judicial Academy, Assam, earning multiple subject topper awards during her studies. Gauri is soon to become a member of the Honourable Society of the Middle Temple and aspires to pursue a career at the Commercial Bar. Her visits to the Inns of Court, including Lincoln’s Inn and Gray’s Inn, have further strengthened her ambition to practise as a Commercial Barrister. Alongside her academic journey, she has remained actively engaged in professional and community initiatives, including volunteering with White Rose to support fundraising efforts for genocide prevention and working as a Library Porter at Nottingham Trent University, reflecting her commitment to advocacy, legal scholarship, and public engagement."
              })}
            >
              View Research &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEPS 5, 6 & 7 — PUBLICATIONS & RESEARCH PAPERS (#FAF6F0)
          ======================================================================== */}
      <section className={styles.pubSection} id="publications">
        <div className={styles.areasContainer}>
          <div className={styles.pubSplitGrid}>
            
            {/* LEFT COLUMN: PUBLICATIONS & PUBLISHED RESEARCH */}
            <div>
              <span className={styles.kicker}>PUBLICATIONS &mdash;</span>
              <h2 className={styles.sectionHeading} style={{ color: "#252525", margin: "0.2rem 0 0.3rem 0" }}>
                Publications
              </h2>
              <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1.8rem" }}>
                Published work and contributions to contemporary legal discourse
              </p>

              {/* STEP 5: FEATURED PUBLICATION */}
              <div className={styles.pubCardLarge}>
                <div>
                  <span style={{ background: "#B89A5A", color: "#171717", padding: "2px 8px", borderRadius: "12px", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", display: "inline-block", marginBottom: "0.6rem" }}>
                    FEATURED PUBLICATION
                  </span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#252525", margin: "0 0 0.4rem 0" }}>
                    Regulating Greenwashing: Are the EU, UK, and US Doing Enough?
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "#B89A5A", fontWeight: 600, marginBottom: "0.6rem" }}>
                    Bars Across &bull; London &bull; 17 March 2026
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#444", lineHeight: 1.55, marginBottom: "0.8rem" }}>
                    A comparative examination of emerging approaches to greenwashing regulation across the European Union, United Kingdom and United States.
                  </p>
                  <button
                    className={styles.goldBtn}
                    onClick={() => setShowGreenwashingArticle(true)}
                  >
                    Read Publication &rarr;
                  </button>
                </div>
              </div>

              {/* STEP 6: PUBLISHED INTERNATIONAL PRESS & CULTURAL REPRESENTATION */}
              <div className={styles.pubCardLarge} style={{ marginTop: "1.5rem" }}>
                <div>
                  <span style={{ background: "#8C6D2D", color: "#FFFFFF", padding: "2px 8px", borderRadius: "12px", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", display: "inline-block", marginBottom: "0.6rem" }}>
                    INTERNATIONAL PRESS
                  </span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#252525", margin: "0 0 0.4rem 0" }}>
                    NorthEast Indian diaspora brings region’s colours to London
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "#B89A5A", fontWeight: 600, marginBottom: "0.6rem" }}>
                    By Ashfaq Choudhury &bull; July 14, 2026 &bull; London, UK
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#444", lineHeight: 1.55, marginBottom: "0.8rem" }}>
                    Coverage of the United Colours of North East India gathering at the Indian Gymkhana Club in London celebrating regional heritage, handloom arts, and cultural diplomacy.
                  </p>
                  <button
                    className={styles.goldBtn}
                    onClick={() => setShowLondonDiasporaArticle(true)}
                  >
                    Read Publication &rarr;
                  </button>
                </div>
              </div>

              {/* STEP 6B: PUBLISHED PEER-REVIEWED RESEARCH */}
              <span className={styles.kicker} style={{ marginTop: "2rem" }}>PEER-REVIEWED JOURNAL &mdash;</span>
              <div className={styles.pubCardLarge}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#252525", margin: "0 0 0.4rem 0" }}>
                    Fighting Extremism: The Legal Propositions
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "#B89A5A", fontWeight: 600, marginBottom: "0.4rem" }}>
                    Indian Journal of Law and Justice &bull; Vol-11 No.1 Part 2 March, 2020, pp. 167–182
                  </div>
                  <div style={{ fontSize: "0.76rem", color: "#666", marginBottom: "0.8rem" }}>
                    University of North Bengal, Department of Law
                  </div>
                  <button
                    className={styles.goldBtn}
                    onClick={() => setSelectedDoc({
                      title: "Fighting Extremism: The Legal Propositions",
                      category: "Peer-Reviewed Journal Article",
                      venueOrPublisher: "Indian Journal of Law and Justice (University of North Bengal)",
                      date: "March 2020",
                      description: "Published journal paper analyzing statutory counter-terrorism measures, legal propositions for combating extremism, and fundamental rights safeguards under Indian constitutional jurisprudence.",
                      imageSrc: "/nbu-journal-logo.png",
                      metaGrid: [
                        { label: "Journal", val: "Indian Journal of Law and Justice" },
                        { label: "Volume & Issue", val: "Vol-11 No.1 Part 2 (pp. 167–182)" },
                        { label: "Publisher", val: "University of North Bengal, Dept. of Law" },
                        { label: "Publication Date", val: "March 2020" },
                        { label: "ISSN No", val: "0976-3570" },
                        { label: "URI / Access", val: "https://ir.nbu.ac.in/handle/123456789/3999" }
                      ]
                    })}
                  >
                    Read Publication &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: STEP 7 — RESEARCH PAPERS & ACADEMIC PRESENTATIONS */}
            <div id="conferences">
              <span className={styles.kicker}>PRESENTATIONS &mdash;</span>
              <h2 className={styles.sectionHeading} style={{ color: "#252525", margin: "0.2rem 0 0.3rem 0" }}>
                Research Papers &amp; Academic Presentations
              </h2>
              <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1.8rem" }}>
                Papers presented at national &amp; international conferences
              </p>

              {/* VERTICAL TIMELINE */}
              <div>
                {/* 2023 */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <span className={styles.timelineYear}>2023</span>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#252525", margin: "0.2rem 0 0.3rem 0" }}>
                    Custodial Laws in India: An Exhaustive Analysis of the Remand Provisions
                  </h4>
                  <p style={{ fontSize: "0.78rem", color: "#666", margin: "0 0 0.5rem 0" }}>
                    National Conference on Criminal Law and Policy &bull; Centre for Criminal Law and Policy, School of Law, NMIMS Hyderabad
                  </p>
                  <button
                    className={styles.goldBtn}
                    style={{ fontSize: "0.72rem", padding: "4px 10px" }}
                    onClick={() => setSelectedDoc({
                      title: "Custodial Laws in India: An Exhaustive Analysis of the Remand Provisions",
                      category: "National Conference Presentation",
                      venueOrPublisher: "NMIMS Hyderabad (Centre for Criminal Law and Policy)",
                      date: "Mar 4, 2023",
                      description: "Exhaustive legal analysis of judicial remand and police custody provisions under Section 167 CrPC.",
                    })}
                  >
                    View Paper &rarr;
                  </button>
                </div>

                {/* 2021 (Citizenship) */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <span className={styles.timelineYear}>2021</span>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#252525", margin: "0.2rem 0 0.3rem 0" }}>
                    Laws Relating to Citizenship: An Overview of Assam Accord and NRC
                  </h4>
                  <p style={{ fontSize: "0.78rem", color: "#666", margin: "0 0 0.5rem 0" }}>
                    RGNUL 1st CCLG Contemporary Constitutionalism Paper Presentation Competition
                  </p>
                  <button
                    className={styles.goldBtn}
                    style={{ fontSize: "0.72rem", padding: "4px 10px" }}
                    onClick={() => setSelectedDoc({
                      title: "Laws Relating to Citizenship: An Overview of Assam Accord and NRC",
                      category: "Constitutional Law Competition",
                      venueOrPublisher: "RGNUL Punjab",
                      date: "30 April, 2021",
                      description: "Constitutional legal analysis of Assam Accord provisions, NRC procedures, and citizenship jurisprudence.",
                    })}
                  >
                    View Paper &rarr;
                  </button>
                </div>

                {/* 2021 (Privacy) */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <span className={styles.timelineYear}>2021</span>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#252525", margin: "0.2rem 0 0.3rem 0" }}>
                    Media and Privacy: Special Reference to Article 21
                  </h4>
                  <p style={{ fontSize: "0.78rem", color: "#666", margin: "0 0 0.5rem 0" }}>
                    National Conference on Law and Privacy &bull; KLE Society&apos;s Law College, Bangalore
                  </p>
                  <button
                    className={styles.goldBtn}
                    style={{ fontSize: "0.72rem", padding: "4px 10px" }}
                    onClick={() => setSelectedDoc({
                      title: "Media and Privacy: Special Reference to Article 21",
                      category: "National Conference Presentation",
                      venueOrPublisher: "KLE Society's Law College, Bangalore",
                      date: "30 & 31 July, 2021",
                      description: "Legal paper on trial by media, privacy jurisprudence under Article 21, and judicial restraints.",
                    })}
                  >
                    View Paper &rarr;
                  </button>
                </div>

                {/* Carbon Tax */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <span className={styles.timelineYear}>International Conference</span>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#252525", margin: "0.2rem 0 0.3rem 0" }}>
                    Commissioning of Carbon Tax in India
                  </h4>
                  <p style={{ fontSize: "0.78rem", color: "#666", margin: "0 0 0.5rem 0" }}>
                    Two-Day International Conference on Climate Change &bull; National Law University and Judicial Academy, Assam
                  </p>
                  <button
                    className={styles.goldBtn}
                    style={{ fontSize: "0.72rem", padding: "4px 10px" }}
                    onClick={() => setSelectedDoc({
                      title: "Commissioning of Carbon Tax in India",
                      category: "International Conference Presentation",
                      venueOrPublisher: "NLU Assam",
                      date: "Climate Conference",
                      description: "Paper exploring carbon pricing, environmental tax policy, and sustainable regulatory legal frameworks for India.",
                    })}
                  >
                    View Paper &rarr;
                  </button>
                </div>

                {/* Ethical Consumerism */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <span className={styles.timelineYear}>National Conference</span>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#252525", margin: "0.2rem 0 0.3rem 0" }}>
                    Ethical Consumerism: A Global Perspective
                  </h4>
                  <p style={{ fontSize: "0.78rem", color: "#666", margin: "0 0 0.5rem 0" }}>
                    Contemporary Issues of Consumer Laws &bull; Manipal University Jaipur
                  </p>
                  <button
                    className={styles.goldBtn}
                    style={{ fontSize: "0.72rem", padding: "4px 10px" }}
                    onClick={() => setSelectedDoc({
                      title: "Ethical Consumerism: A Global Perspective",
                      category: "National Conference Presentation",
                      venueOrPublisher: "Manipal University Jaipur",
                      date: "Consumer Law Conference",
                      description: "Online paper presentation on global ethical consumerism, green marketing claims, and consumer protection.",
                    })}
                  >
                    View Paper &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 8 — LAW BEYOND THE CLASSROOM (#FAF6F0 LIGHT BEIGE)
          ======================================================================== */}
      <section className={styles.clinicalSection}>
        <div className={styles.areasContainer}>
          <div className={styles.clinicalGrid}>
            <div>
              <span className={styles.kicker}>LAW BEYOND THE CLASSROOM &mdash;</span>
              <h2 className={styles.sectionHeading} style={{ color: "#252525", margin: "0.2rem 0 0.2rem 0" }}>
                Public Interest Lawyering, Legal Aid &amp; Para-Legal Services
              </h2>
              <div style={{ fontSize: "0.85rem", color: "#B89A5A", fontWeight: 600, marginBottom: "1rem" }}>
                2022 &bull; National Law University and Judicial Academy, Assam
              </div>
              <p style={{ fontSize: "0.88rem", color: "#444", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                As part of her clinical legal education, Gauri undertook practical learning in public interest lawyering, legal aid and para-legal services, including exposure to Lok Adalat proceedings and community legal-awareness initiatives.
              </p>

              {/* REAL PHOTOGRAPHS PAIR */}
              <div className={styles.photoPairGrid}>
                <div>
                  <div className={styles.photoBox} onClick={() => setSelectedDoc({ src: "/nlu-assam-lok-adalat-rangia-bus-group.jpg", title: "Lok Adalat Proceedings — Rangia (NLU Assam 2022)" })}>
                    <Image
                      src="/nlu-assam-lok-adalat-rangia-bus-group.jpg"
                      alt="Lok Adalat Proceedings"
                      fill
                      style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }}
                      unoptimized
                    />
                  </div>
                  <span className={styles.photoLabel}>Lok Adalat Proceedings</span>
                </div>

                <div>
                  <div className={styles.photoBox} onClick={() => setSelectedDoc({ src: "/nlu-assam-saraighat-college-legal-awareness-stage.jpg", title: "Legal Awareness Programme — Saraighat College (NLU Assam 2022)" })}>
                    <Image
                      src="/nlu-assam-saraighat-college-legal-awareness-stage.jpg"
                      alt="Legal Awareness Programme"
                      fill
                      style={{ objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }}
                      unoptimized
                    />
                  </div>
                  <span className={styles.photoLabel}>Legal Awareness Programme</span>
                </div>
              </div>
            </div>

            {/* RIGHT: REAL DECLARATION REPORT PREVIEW */}
            <div style={{ background: "#FFFFFF", borderRadius: "10px", border: "1px solid rgba(184, 154, 90, 0.4)", padding: "1.5rem", textAlign: "center", boxShadow: "0 8px 25px rgba(0,0,0,0.06)" }}>
              <div style={{ position: "relative", width: "100%", height: "240px", borderRadius: "6px", overflow: "hidden", marginBottom: "1rem", border: "1px solid rgba(184, 154, 90, 0.25)", cursor: "pointer" }} onClick={() => setSelectedDoc({ src: "/nlu-assam-lok-adalat-declaration-certificate.png", title: "Academic Research Report — Public Interest Lawyering, Legal Aid & Para Legal Services (Page 2 Declaration)" })}>
                <Image
                  src="/nlu-assam-lok-adalat-declaration-certificate.png"
                  alt="Academic Research Report Cover"
                  fill
                  style={{ objectFit: "contain", background: "#FFFFFF", imageRendering: "-webkit-optimize-contrast" }}
                  unoptimized
                />
              </div>
              <span style={{ fontSize: "0.72rem", color: "#B89A5A", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", display: "block" }}>ACADEMIC RESEARCH REPORT</span>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#252525", margin: "0.3rem 0 0.8rem 0" }}>
                Public Interest Lawyering, Legal Aid &amp; Para Legal Services
              </h4>
              <button
                className={styles.goldBtn}
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setSelectedDoc({
                  src: "/nlu-assam-lok-adalat-declaration-certificate.png",
                  title: "Academic Research Report — Public Interest Lawyering, Legal Aid & Para Legal Services (Page 2 Declaration)",
                  category: "Academic Report",
                  venueOrPublisher: "National Law University and Judicial Academy, Assam",
                  date: "2022",
                  description: "Full 35-page academic report detailing Lok Adalat observation, community legal aid awareness, domestic violence legal literacy, and para-legal services."
                })}
              >
                VIEW FULL RESEARCH REPORT &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 9 — ACADEMIC SEMINARS & RESEARCH ENGAGEMENT (WHITE #FFFFFF)
          ======================================================================== */}
      <section className={styles.engagementSection}>
        <div className={styles.areasContainer}>
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.kicker}>ACADEMIC ENGAGEMENT &mdash;</span>
            <h2 className={styles.sectionHeading} style={{ color: "#252525" }}>
              Seminars, Workshops &amp; Academic Symposia
            </h2>
          </div>

          <div className={styles.engagementGrid}>
            {/* 2025 */}
            <div className={styles.engagementCol}>
              <div className={styles.engagementYearHeader}>2025</div>
              <ul className={styles.engagementList}>
                <li>AI Lawyers / Co Counsel Legal UK</li>
                <li>Framework Convention on AI and Human Rights, Democracy and Rule of Law</li>
                <li>Nottingham International Law and Security Centre Workshop</li>
                <li>EU Directive on Corporate Sustainability Due Diligence &amp; Human Rights</li>
                <li>Slaughter and May Workshop</li>
              </ul>
            </div>

            {/* 2024 */}
            <div className={styles.engagementCol}>
              <div className={styles.engagementYearHeader}>2024</div>
              <ul className={styles.engagementList}>
                <li>Advocacy Workshop on Bail Applications</li>
              </ul>
            </div>

            {/* Earlier */}
            <div className={styles.engagementCol}>
              <div className={styles.engagementYearHeader}>Earlier</div>
              <ul className={styles.engagementList}>
                <li>Annual Human Rights Lecture</li>
                <li>Empirical Study on UK Corporate Insolvencies</li>
                <li>Corporate Law Session</li>
                <li>Social Alignment in Robotics</li>
                <li>University of Nottingham Commercial Law Centre Seminar Series</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 10 — SELECTED FEATURES (WARM IVORY #FAF6F0)
          ======================================================================== */}
      <section className={styles.featuresSection}>
        <div className={styles.areasContainer}>
          <span className={styles.kicker}>SELECTED FEATURES &mdash;</span>
          <div className={`${styles.pubCardLarge} ${styles.featuredMediaCard}`} style={{ margin: 0 }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.45rem", color: "#252525", margin: "0 0 0.3rem 0", lineHeight: 1.25 }}>
                NorthEast Indian Diaspora Brings Region&apos;s Colours to London
              </h3>
              <div style={{ fontSize: "0.82rem", color: "#B89A5A", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "0.75rem" }}>
                EastMojo &bull; 2025 &bull; United Colours of North East India
              </div>
              <p style={{ fontSize: "0.86rem", color: "#333333", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                A feature highlighting the cultural presence, artistic heritage, and community representation of the North-East Indian diaspora in London.
              </p>
              <p style={{ fontSize: "0.82rem", color: "#555555", lineHeight: 1.6, marginBottom: "1.2rem", fontStyle: "italic", borderLeft: "3px solid #B89A5A", paddingLeft: "0.85rem" }}>
                Fashion Show representing the state of Assam with a graceful Red Muga Mekhela Chador paired with a matching Muga blouse and Riha, complemented by authentic Assamese jewellery, including Gamkharu, Dhulbiri, Jhunbiri, and Golpota. The look is completed with a traditional hair bun adorned with vibrant red flowers, adding a touch of elegance and cultural charm.
              </p>
              <button
                className={styles.goldBtn}
                onClick={() => setSelectedDoc({
                  title: "NorthEast Indian Diaspora Brings Region's Colours to London",
                  category: "Cultural & Media Feature",
                  venueOrPublisher: "EastMojo — United Colours of North East India",
                  date: "2025",
                  description: "Fashion Show representing the state of Assam with a graceful Red Muga Mekhela Chador paired with a matching Muga blouse and Riha, complemented by authentic Assamese jewellery, including Gamkharu, Dhulbiri, Jhunbiri, and Golpota. The look is completed with a traditional hair bun adorned with vibrant red flowers, adding a touch of elegance and cultural charm.",
                  imageSrc: "/northeast-diaspora-london-mekhela-chador-full.png"
                })}
              >
                Read Feature &rarr;
              </button>
            </div>

            <div style={{ position: "relative", width: "100%", height: "320px", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(184, 154, 90, 0.35)", background: "#FAF6F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image
                src="/northeast-diaspora-london-mekhela-chador-full.png"
                alt="NorthEast Indian Diaspora London — Gauri Goswami Mekhela Chador"
                fill
                style={{ objectFit: "contain", objectPosition: "center center", padding: "4px" }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 11 — RESEARCH ARCHIVE (#171717 DEEP CHARCOAL)
          ======================================================================== */}
      <section className={styles.archiveSection} id="publications">
        <div className={styles.areasContainer}>
          <div className={styles.sectionHeaderCenter} style={{ position: "relative" }}>
            <span className={styles.kicker}>RESEARCH &amp; ACADEMIC ARCHIVE</span>
            <h2 className={styles.sectionHeading} style={{ color: "#FCFBF8", margin: "0 0 0.8rem 0" }}>
              Complete Document Collection
            </h2>

            {/* Carousel Nav Arrow Controls */}
            <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem", marginBottom: "1rem" }}>
              <button
                type="button"
                aria-label="Slide Left"
                onClick={() => swiperRef.current?.slidePrev()}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(184, 154, 90, 0.4)",
                  background: "rgba(25, 22, 19, 0.9)",
                  color: "#B89A5A",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <FaChevronLeft style={{ fontSize: "0.85rem" }} />
              </button>
              <button
                type="button"
                aria-label="Slide Right"
                onClick={() => swiperRef.current?.slideNext()}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(184, 154, 90, 0.4)",
                  background: "rgba(25, 22, 19, 0.9)",
                  color: "#B89A5A",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <FaChevronRight style={{ fontSize: "0.85rem" }} />
              </button>
            </div>
          </div>

          {/* FILTER TABS */}
          <div className={styles.archiveTabs}>
            {["All", "Publications", "Research Papers", "Reports", "Presentations"].map((tab) => (
              <button
                key={tab}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ARCHIVE SINGLE-ROW CAROUSEL TRACK */}
          <div className={styles.archiveSwiperContainer}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="archive-mobile-swiper"
            >
              {filteredArchive.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className={styles.archiveCard} style={{ margin: "0 auto", width: "100%", maxWidth: "340px", minHeight: "240px", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "0.68rem", color: "#B89A5A", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
                      {item.type}
                    </span>
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#FCFBF8", margin: "0 0 0.3rem 0", lineHeight: 1.3 }}>
                      {item.title}
                    </h4>
                    <span style={{ fontSize: "0.74rem", color: "#D4AD62", fontWeight: 600, display: "block", marginBottom: "0.6rem" }}>
                      {item.date}
                    </span>
                    {item.description && (
                      <p style={{ fontSize: "0.82rem", color: "rgba(252, 251, 248, 0.85)", lineHeight: 1.55, margin: 0, flex: 1 }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 12 — CONTINUING THE INQUIRY (#FAF6F0 WARM IVORY)
          ======================================================================== */}
      <section className={styles.inquirySection}>
        <div className={styles.areasContainer}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <span className={styles.kicker}>CONTINUING THE INQUIRY &mdash;</span>
            <h2 className={styles.sectionHeading} style={{ color: "#252525", margin: "0.2rem 0 0.6rem 0" }}>
              Future Research Directions
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.68 }}>
              Gauri&apos;s research interests continue to evolve around international commercial law, emerging technologies, sustainability regulation, corporate governance and the changing relationship between law and global commerce.
            </p>
          </div>

          <div className={styles.inquiryGrid}>
            <div className={styles.inquiryItem}>
              <FaBookOpen style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.4rem" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "#252525", margin: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>COMMERCIAL LAW</h4>
            </div>

            <div className={styles.inquiryItem}>
              <FaRobot style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.4rem" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "#252525", margin: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>TECHNOLOGY &amp; AI</h4>
            </div>

            <div className={styles.inquiryItem}>
              <FaLeaf style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.4rem" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "#252525", margin: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>SUSTAINABILITY</h4>
            </div>

            <div className={styles.inquiryItem}>
              <FaScaleBalanced style={{ color: "#B89A5A", fontSize: "1.5rem", marginBottom: "0.4rem" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "#252525", margin: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>CORPORATE GOVERNANCE</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 13 — FINAL CTA (#171717 DEEP CHARCOAL)
          ======================================================================== */}
      <section className={styles.ctaSection}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 className={styles.ctaHeading}>Research. Question. Evolve.</h2>
          <p style={{ fontSize: "0.9rem", color: "#C8BFB5" }}>
            Explore the academic and professional journey behind the research.
          </p>

          <div className={styles.ctaBtnRow}>
            <Link href="/academics" className={styles.goldBtn}>
              Academic Journey &rarr;
            </Link>
            <Link href="/about#career" className={styles.goldBtn}>
              Legal Career &rarr;
            </Link>
            <Link href="/about" className={styles.goldBtn}>
              Whole Journey &rarr;
            </Link>
            <Link href="/contact" className={styles.goldBtn}>
              Contact &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* DOCUMENT LIGHTBOX MODAL */}
      {selectedDoc && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedDoc(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setSelectedDoc(null)}>
              <FaXmark />
            </button>
            <span style={{ color: "#B89A5A", fontSize: "0.74rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>
              {selectedDoc.category || "FEATURED RESEARCH"}
            </span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.7rem", color: "#FCFBF8", margin: "0.3rem 0 0.5rem 0", lineHeight: 1.25 }}>
              {selectedDoc.title}
            </h3>
            {selectedDoc.venueOrPublisher && (
              <div style={{ fontSize: "0.84rem", color: "#D4AD62", marginBottom: "1.2rem", fontWeight: 600 }}>
                {selectedDoc.venueOrPublisher} &bull; {selectedDoc.date}
              </div>
            )}

            {(selectedDoc.imageSrc || selectedDoc.src) && (
              <div style={{ position: "relative", width: "100%", height: "240px", borderRadius: "8px", overflow: "hidden", marginBottom: "1.2rem", border: "1px solid rgba(184, 154, 90, 0.35)", background: "#0E0C0A" }}>
                <Image
                  src={selectedDoc.imageSrc || selectedDoc.src || ""}
                  alt={selectedDoc.title}
                  fill
                  style={{ objectFit: "contain", objectPosition: "center", imageRendering: "-webkit-optimize-contrast" }}
                  unoptimized
                />
              </div>
            )}

            {selectedDoc.metaGrid && selectedDoc.metaGrid.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.85rem", marginBottom: "1.2rem", background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(184, 154, 90, 0.3)" }}>
                {selectedDoc.metaGrid.map((m, idx) => (
                  <div key={idx}>
                    <span style={{ fontSize: "0.68rem", color: "#B89A5A", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, display: "block" }}>{m.label}</span>
                    <span style={{ fontSize: "0.85rem", color: "#FCFBF8", fontWeight: 600, display: "block", marginTop: "2px" }}>{m.val}</span>
                  </div>
                ))}
              </div>
            )}

            <p style={{ fontSize: "0.9rem", color: "rgba(252,251,248,0.9)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {selectedDoc.description}
            </p>

            {selectedDoc.aboutAuthor && (
              <div style={{ background: "rgba(184, 154, 90, 0.06)", borderLeft: "3px solid #B89A5A", borderRadius: "0 8px 8px 0", padding: "1.2rem", marginBottom: "1.5rem" }}>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#B89A5A", margin: "0 0 0.5rem 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  About Gauri Goswami
                </h4>
                <p style={{ fontSize: "0.86rem", color: "rgba(252, 251, 248, 0.88)", lineHeight: 1.72, margin: 0 }}>
                  {selectedDoc.aboutAuthor}
                </p>
              </div>
            )}

            <div style={{ textAlign: "right" }}>
              <button
                className={styles.goldBtn}
                onClick={() => setSelectedDoc(null)}
              >
                Close &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULL GREENWASHING ARTICLE READER MODAL */}
      {showGreenwashingArticle && (
        <div className={styles.modalBackdrop} onClick={() => setShowGreenwashingArticle(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalCloseBtn} onClick={() => setShowGreenwashingArticle(false)}>
              <FaXmark />
            </button>

            {/* CATEGORIES BADGES */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.4)", color: "#B89A5A", padding: "3px 10px", borderRadius: "14px", fontSize: "0.7rem", fontWeight: 600 }}>Practitioner Column</span>
              <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.4)", color: "#B89A5A", padding: "3px 10px", borderRadius: "14px", fontSize: "0.7rem", fontWeight: 600 }}>Rising Practitioner</span>
              <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.4)", color: "#B89A5A", padding: "3px 10px", borderRadius: "14px", fontSize: "0.7rem", fontWeight: 600 }}>Women In Law</span>
              <span style={{ background: "#B89A5A", color: "#171717", padding: "3px 10px", borderRadius: "14px", fontSize: "0.7rem", fontWeight: 700 }}>United Kingdom</span>
            </div>



            {/* ARTICLE TITLE & BYLINE */}
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#FCFBF8", margin: "0 0 0.5rem 0", lineHeight: 1.25 }}>
              Regulating Greenwashing: Are the EU, UK, and US Doing Enough?
            </h2>
            <div style={{ fontSize: "0.82rem", color: "#D4AD62", marginBottom: "1.5rem", borderBottom: "1px solid rgba(184, 154, 90, 0.3)", paddingBottom: "0.8rem" }}>
              By <strong>Gauri Goswami</strong> &bull; Published 17 Mar 2026, 12:09 GMT+5:30 &bull; <em>Bars Across, London, United Kingdom</em>
            </div>

            {/* ARTICLE BODY PARAGRAPHS */}
            <div style={{ fontSize: "0.92rem", color: "rgba(252, 251, 248, 0.9)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <p style={{ fontSize: "1.02rem", fontWeight: 500, color: "#D4AD62", lineHeight: 1.6, fontStyle: "italic", borderLeft: "3px solid #B89A5A", paddingLeft: "1rem" }}>
                As climate consciousness reshapes global markets, sustainability has become a powerful commercial asset.
              </p>

              <p>
                As climate consciousness reshapes global markets, sustainability has become a powerful commercial asset. Yet alongside genuine environmental innovation lies a growing regulatory concern: greenwashing. Greenwashing occurs when companies mislead consumers or investors by exaggerating or falsely claiming environmental credentials. In an era where ESG (Environmental, Social, and Governance) considerations influence purchasing decisions and investment flows, regulatory approaches to greenwashing have become central to ensuring sustainability compliance.
              </p>

              <p style={{ fontWeight: 600, color: "#FCFBF8" }}>
                Across the European Union, the United Kingdom, and the United States, regulatory responses reveal contrasting philosophies and varying degrees of stringency.
              </p>

              <p>
                <strong>The European Union</strong> has adopted the most interventionist and structured framework. Through instruments such as the Corporate Sustainability Reporting Directive (CSRD) and the Green Claims Directive proposal, the EU seeks to harmonise sustainability disclosures and require substantiated, verifiable environmental claims. The EU’s approach reflects its broader regulatory identity: preventive, standardised, and compliance-driven. By imposing mandatory reporting obligations and verification requirements, the EU aims to reduce informational asymmetry and embed sustainability into corporate governance structures. However, critics argue that increasing regulatory density may create compliance burdens, particularly for SMEs.
              </p>

              <p>
                <strong>The United Kingdom</strong>, post-Brexit, has pursued a hybrid model combining regulatory oversight with market-based supervision. The Competition and Markets Authority (CMA) has issued the Green Claims Code, while the Financial Conduct Authority (FCA) has introduced anti-greenwashing rules and Sustainability Disclosure Requirements (SDR). The UK model prioritises clarity, consumer protection, and proportional enforcement. Rather than layering extensive prescriptive legislation, the UK relies on targeted enforcement and sector-specific guidance. While this approach allows flexibility and adaptability, questions remain about enforcement consistency and deterrent impact.
              </p>

              <p>
                <strong>In contrast, the United States</strong> traditionally relies on anti-fraud and securities law frameworks. The Federal Trade Commission’s Green Guides and the Securities and Exchange Commission’s climate-related disclosure proposals reflect an incremental regulatory approach. US regulation is often reactive, grounded in misrepresentation doctrines rather than a comprehensive sustainability compliance regime. While enforcement actions can be significant, the absence of a harmonised federal sustainability reporting structure creates fragmentation and uncertainty.
              </p>

              <p>
                Comparatively, the EU’s model appears the most structurally robust in embedding sustainability compliance into corporate operations. The UK demonstrates pragmatic regulatory calibration, whereas the US emphasises litigation-driven accountability. Yet effectiveness ultimately depends not only on regulatory design but on enforcement capacity, cross-border coordination, and corporate behavioural change.
              </p>

              <p>
                Greenwashing regulation is no longer merely about consumer protection; it is about safeguarding the integrity of sustainable finance and ensuring that environmental markets function transparently. As climate urgency intensifies, regulatory convergence may become necessary to prevent jurisdictional arbitrage and maintain trust in global sustainability commitments.
              </p>

              <p style={{ fontWeight: 600, color: "#D4AD62", fontSize: "0.98rem" }}>
                The question is no longer whether to regulate greenwashing but how to design frameworks that are stringent enough to ensure accountability, yet flexible enough to foster innovation.
              </p>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(184, 154, 90, 0.3)", borderRadius: "8px", padding: "1.2rem", marginTop: "1rem" }}>
                <span style={{ fontSize: "0.74rem", color: "#B89A5A", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block" }}>AUTHOR &amp; PUBLICATION DETAILS</span>
                <div style={{ fontSize: "0.85rem", color: "#FCFBF8", margin: "0.4rem 0 0.2rem 0" }}>
                  <strong>Author:</strong> Gauri Goswami
                </div>
                <div style={{ fontSize: "0.82rem", color: "#C8BFB5" }}>
                  <strong>Categories:</strong> Practitioner Column &bull; Rising Practitioner &bull; Women In Law
                </div>
                <div style={{ fontSize: "0.82rem", color: "#C8BFB5" }}>
                  <strong>Country:</strong> United Kingdom &bull; Published 17 Mar 2026
                </div>
                <p style={{ fontSize: "0.74rem", color: "#999", fontStyle: "italic", marginTop: "0.8rem", margin: "0.8rem 0 0 0" }}>
                  Disclaimer: This article is for informational purposes only and does not constitute legal advice. The views expressed are those of the author. For corrections or updates, write to editorial@barsacross.com
                </p>
              </div>
            </div>

            <div style={{ marginTop: "1.8rem", textAlign: "right" }}>
              <button className={styles.goldBtn} onClick={() => setShowGreenwashingArticle(false)}>
                Close Article &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULL NORTHEAST INDIAN DIASPORA LONDON READER MODAL */}
      {showLondonDiasporaArticle && (
        <div className={styles.modalBackdrop} onClick={() => setShowLondonDiasporaArticle(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalCloseBtn} onClick={() => setShowLondonDiasporaArticle(false)}>
              <FaXmark />
            </button>

            {/* CATEGORIES BADGES */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <span style={{ background: "#8C6D2D", color: "#FFFFFF", padding: "3px 10px", borderRadius: "14px", fontSize: "0.7rem", fontWeight: 700 }}>INTERNATIONAL PRESS</span>
              <span style={{ background: "#FAF6F0", border: "1px solid rgba(184, 154, 90, 0.4)", color: "#B89A5A", padding: "3px 10px", borderRadius: "14px", fontSize: "0.7rem", fontWeight: 600 }}>CULTURAL DIPLOMACY</span>
              <span style={{ background: "#B89A5A", color: "#171717", padding: "3px 10px", borderRadius: "14px", fontSize: "0.7rem", fontWeight: 700 }}>UNITED KINGDOM</span>
            </div>



            {/* ARTICLE TITLE & BYLINE */}
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#FCFBF8", margin: "0 0 0.5rem 0", lineHeight: 1.25 }}>
              Northeast Indian diaspora brings region’s colours to London
            </h2>
            <div style={{ fontSize: "0.82rem", color: "#D4AD62", marginBottom: "1.5rem", borderBottom: "1px solid rgba(184, 154, 90, 0.3)", paddingBottom: "0.8rem" }}>
              By <strong>Ashfaq Choudhury</strong> &bull; Published 14 July 2026 &bull; <em>Indian Gymkhana Club, London, United Kingdom</em>
            </div>

            {/* ARTICLE BODY PARAGRAPHS */}
            <div style={{ fontSize: "0.92rem", color: "rgba(252, 251, 248, 0.9)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <p style={{ fontSize: "1.02rem", fontWeight: 500, color: "#D4AD62", lineHeight: 1.6, fontStyle: "italic", borderLeft: "3px solid #B89A5A", paddingLeft: "1rem" }}>
                On a summer evening at the Indian Gymkhana Club in London, the sounds of folk music and the sight of handwoven textiles carried the spirit of a region thousands of miles away.
              </p>

              <p>
                On July 11, members of the Northeast Indian diaspora gathered for the <strong>United Colours of North East India</strong> event, turning a corner of the British capital into a vivid showcase of heritage from all eight northeastern states.
              </p>

              <p>
                The volunteer-led celebration was organised by <em>North East Indians in UK (NEIUK)</em>, with support from Pradyot Bikram Manikya Debbarma, head of Tripura’s erstwhile royal family. Through regional cuisine, folk songs, musical performances and traditional handloom displays, the evening offered international audiences a window into a part of India often overlooked or misunderstood.
              </p>

              <p>
                For <strong>Afifa Fatemi</strong>, an Assam representative at the event, the gathering was about more than performance. <em>“We are bringing a piece of our unique heritage, living history and soul to the world by turning our ancestral traditions into a bridge for cross-cultural learning and understanding,”</em> she said.
              </p>

              <p>
                That idea of building bridges was echoed by <strong>Thoiba Thoudam</strong>, a representative from Manipur, who spoke of the vision behind the initiative. <em>“It was our desire to bring people from the Northeast and around the world together to celebrate the richness, diversity and beauty of the region through food, folk songs, music, handloom displays and much more,”</em> the representative said.
              </p>

              <p>
                Organisers see events like this as a way to chip away at persistent gaps in awareness about Northeast India abroad — including basic misconceptions about where the region sits, who lives there, and its layered history. Their hope is that the London gathering will do more than entertain, sparking conversations that lead people to learn more about the region long after the evening ends.
              </p>

              <p>
                But the celebration also looked inward, offering the diaspora itself a rare chance to connect. As a <strong>Meghalaya representative</strong> put it, <em>“Beyond celebrating culture, the festival creates networking and support opportunities for the Northeast Indian diaspora by bringing together professionals, entrepreneurs, artists, students and community members.”</em>
              </p>

              <p>
                In bringing together such a cross-section of the community, organisers hope gatherings like this can do double duty — fostering collaboration and meaningful connections while strengthening a sense of belonging among northeasterners far from home.
              </p>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(184, 154, 90, 0.3)", borderRadius: "8px", padding: "1.2rem", marginTop: "1rem" }}>
                <span style={{ fontSize: "0.74rem", color: "#B89A5A", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block" }}>PRESS COVERAGE DETAILS</span>
                <div style={{ fontSize: "0.85rem", color: "#FCFBF8", margin: "0.4rem 0 0.2rem 0" }}>
                  <strong>Article By:</strong> Ashfaq Choudhury
                </div>
                <div style={{ fontSize: "0.82rem", color: "#C8BFB5" }}>
                  <strong>Event:</strong> United Colours of North East India &bull; Organised by NEIUK
                </div>
                <div style={{ fontSize: "0.82rem", color: "#C8BFB5" }}>
                  <strong>Venue:</strong> Indian Gymkhana Club, London, United Kingdom &bull; Published 14 July 2026
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1.8rem", textAlign: "right" }}>
              <button className={styles.goldBtn} onClick={() => setShowLondonDiasporaArticle(false)}>
                Close Article &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
