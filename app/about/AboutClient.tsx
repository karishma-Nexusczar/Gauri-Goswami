"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import {
  FaBalanceScale,
  FaBookOpen,
  FaBrain,
  FaFacebookF,
  FaGlobe,
  FaGraduationCap,
  FaInstagram,
  FaLandmark,
  FaLinkedinIn,
  FaMicrophone,
  FaTheaterMasks,
  FaYoutube,
  FaCheck,
  FaDownload,
  FaArrowRight,
  FaAward,
  FaMapMarkerAlt,
  FaFileAlt,
  FaQuoteLeft,
  FaUniversity,
  FaBuilding,
  FaUserTie,
  FaGavel,
  FaGlobeEurope,
  FaHandshake,
  FaLightbulb
} from "react-icons/fa";
import styles from "./about.module.css";

// 1. Featured Highlights List (Section 3)
const featuredHighlightsList = [
  "Dedicated to advancing excellence in Commercial Law, legal research, and cross-border legal practice.",
  "Strong expertise in legal drafting, litigation support, regulatory analysis, and commercial dispute resolution.",
  "Passionate about academic scholarship, interdisciplinary research, and policy development.",
  "Committed to promoting Indian classical heritage through Kathak and cultural diplomacy.",
  "Experienced in collaborating across legal, academic, and international cultural platforms.",
  "Driven by continuous professional development, innovation, and lifelong learning."
];

// Professional Credentials Grid Items (Section 3)
const highlightsData = [
  { icon: FaGavel, title: "Advocate" },
  { icon: FaUserTie, title: "Legal Associate" },
  { icon: FaLandmark, title: "Commercial Law Scholar" },
  { icon: FaGraduationCap, title: "LL.M. – University of Nottingham" },
  { icon: FaBookOpen, title: "Published Researcher" },
  { icon: FaAward, title: "International Scholar" },
  { icon: FaTheaterMasks, title: "Kathak Visharad-II" },
  { icon: FaMicrophone, title: "Public Speaker" },
  { icon: FaFileAlt, title: "Legal Researcher" },
  { icon: FaGlobe, title: "Cultural Ambassador" },
  { icon: FaBrain, title: "Artificial Intelligence & Law" },
  { icon: FaBuilding, title: "Corporate Governance" },
  { icon: FaHandshake, title: "Commercial Arbitration" },
  { icon: FaBalanceScale, title: "Consumer Litigation" },
  { icon: FaUniversity, title: "Corporate Advisory" },
  { icon: FaGlobeEurope, title: "International Commercial Law" },
  { icon: FaFileAlt, title: "Legal Drafting & Advocacy" }
];

// 2. Timeline Data (Section 4)
const timelineData = [
  {
    year: "2018",
    title: "Assam, India",
    desc: "Foundational roots in academic excellence, debating, literature, and Assamese classical arts."
  },
  {
    year: "2023",
    title: "National Law University Assam",
    desc: "Graduated B.A. LL.B. (Hons.) with First Class Distinction and multiple academic gold medals."
  },
  {
    year: "2023",
    title: "Delhi High Court Advocate",
    desc: "Enrolled Advocate in India; chamber experience in commercial & civil litigation."
  },
  {
    year: "2024",
    title: "University of Nottingham, UK",
    desc: "Earned LL.M. in International Commercial Law supported by international merit scholarships."
  },
  {
    year: "2025",
    title: "Legal & Policy Research",
    desc: "Published papers on Greenwashing, AI Regulation, Corporate Governance & ESG."
  },
  {
    year: "2026",
    title: "Commercial Bar & Cultural Ambassador",
    desc: "Practicing law while performing Kathak recitals on high-level international stages."
  }
];

// 3. Academic Excellence Subjects (Section 5)
const academicsData = [
  { title: "Highest Marks in Constitutional Law", desc: "Rank 1 in Law School" },
  { title: "Highest Marks in Law of Evidence", desc: "Highest Distinction" },
  { title: "Highest Marks in Environmental Law", desc: "Academic Medal Recipient" },
  { title: "Highest Marks in Intellectual Property", desc: "Top Honors" },
  { title: "Highest Marks in Mergers & Acquisitions", desc: "Commercial Law Excellence" },
  { title: "Highest Marks in Comparative Systems", desc: "International Legal Research" },
  { title: "Certificate of Academic Excellence", desc: "NLUJA Assam Merit Award" },
  { title: "University Gold Medallist", desc: "Summa Cum Laude Honors" }
];

// 4. Areas of Expertise (Section 7)
const expertiseData = [
  { icon: FaLandmark, title: "Commercial Law" },
  { icon: FaBuilding, title: "Corporate Advisory" },
  { icon: FaGavel, title: "Consumer Litigation" },
  { icon: FaBookOpen, title: "Legal Research" },
  { icon: FaUniversity, title: "Corporate Governance" },
  { icon: FaHandshake, title: "Commercial Arbitration" },
  { icon: FaBrain, title: "Artificial Intelligence & Law" },
  { icon: FaBalanceScale, title: "Competition Law" },
  { icon: FaGlobeEurope, title: "International Commercial Law" },
  { icon: FaAward, title: "Intellectual Property" },
  { icon: FaGlobe, title: "Cross-border Transactions" },
  { icon: FaLightbulb, title: "ESG & Sustainability" }
];

// 5. Why Work With Gauri (Section 11)
const whyData = [
  { icon: FaGraduationCap, title: "Internationally Educated", desc: "LL.M. from University of Nottingham, UK & First Class Honors B.A. LL.B. from NLU Assam." },
  { icon: FaLandmark, title: "Commercial Law Specialist", desc: "Deep analytical expertise across corporate governance, arbitration, and regulatory frameworks." },
  { icon: FaBookOpen, title: "Published Research", desc: "Author of peer-reviewed articles on AI, greenwashing, and international trade law." },
  { icon: FaAward, title: "International Scholarships", desc: "Recipient of competitive global merit awards and academic excellence stipends." },
  { icon: FaGavel, title: "Courtroom Experience", desc: "Advocacy foundation built in Delhi litigation chambers and high court practice." },
  { icon: FaBuilding, title: "Corporate Advisory", desc: "Drafting, compliance, legal opinion, and advisory for commercial transactions." },
  { icon: FaFileAlt, title: "Precision Legal Writing", desc: "Exemplary drafting skills recognized by senior advocates and law professors." },
  { icon: FaMicrophone, title: "Public Speaking & Keynotes", desc: "Experienced conference speaker, panellist, and academic presenter." },
  { icon: FaTheaterMasks, title: "Cultural Representation", desc: "Kathak Visharad-II promoting Indian classical performing arts internationally." }
];

// 6. Achievements in Numbers (Section 12)
const statsData = [
  { number: "40+", label: "Awards & Recognitions" },
  { number: "15+", label: "Scholarships & Merit Awards" },
  { number: "30+", label: "Legal Conferences & Forums" },
  { number: "10+", label: "Research Projects & Papers" },
  { number: "2", label: "Countries Represented (India & UK)" },
  { number: "100+", label: "Academic Certificates & Honors" }
];

// 7. Gallery Preview (Section 13)
const galleryData = [
  { tag: "Academic", title: "LL.M. Graduation — University of Nottingham", image: "/gallery-2-llm-graduation.jpg" },
  { tag: "Court & Advocacy", title: "High Court Litigation & Chamber Advocacy", image: "/delhi-high-court-red-blazer.png" },
  { tag: "Research", title: "International Law Research Colloquium", image: "/research-classroom-group.jpg" },
  { tag: "Kathak Dance", title: "Classical Recital Stage Performance", image: "/kathak-high-pixel.jpg" },
  { tag: "International", title: "Cultural Diplomacy — London Stage", image: "/northeast-festival-london-stage-cover.jpg" },
  { tag: "Awards", title: "Scholarship & Merit Award Ceremony", image: "/gallery-3-scholarship-award.jpg" }
];

// 8. Testimonials Preview (Section 14)
const testimonialsData = [
  {
    quote: "Gauri is an exceptionally hardworking and dedicated legal professional with outstanding drafting and analytical skills, approaching every case with precision.",
    author: "Advocate Pramod Gupta",
    role: "Delhi High Court Advocate, New Delhi",
    avatar: "/pramod-gupta.jpg"
  },
  {
    quote: "Gauri possesses excellent communication skills, particularly in legal writing, and has consistently ranked among the finest students of her batch.",
    author: "Professor Diptimoni Boruah",
    role: "Professor of Law, NLUJA Assam",
    avatar: "/diptimoni-boruah.jpg"
  },
  {
    quote: "She is a graceful and expressive performer who brings passion, beauty, and dedication to every performance. Her commitment is truly admirable.",
    author: "Anannya Mahanta Jugnarain",
    role: "Performing Artist | Founder, Sutraya, London",
    avatar: "/anannya-mahanta.jpg"
  }
];

export default function AboutClient() {
  return (
    <main className={styles.page}>
      <Navbar currentPath="/about" />

      {/* ==========================================
          SECTION 1 — HERO
          ========================================== */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.kickerLine} />
                <span>ABOUT GAURI GOSWAMI</span>
              </div>
              <h1 className={styles.heroTitle}>
                Bridging Law, Scholarship &amp; <em>Indian Cultural Heritage</em>
              </h1>
              <p className={styles.heroRole}>
                Advocate · Commercial Law Scholar · Kathak Visharad-II · Cultural Ambassador
              </p>
              <p className={styles.heroLead}>
                From Assam, India to the United Kingdom, Gauri Goswami has built a distinguished journey at the intersection of commercial law, legal research, academic excellence and Indian cultural diplomacy. Her work combines courtroom advocacy, internationally recognised scholarship, published research and classical performing arts.
              </p>
              <div className={styles.actions}>
                <a className={styles.btnGold} href="/Gauri-Goswami-CV.pdf" download>
                  <FaDownload /> Download CV
                </a>
                <a className={styles.btnOutline} href="#who">
                  Explore Journey <FaArrowRight />
                </a>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/about-gauri-red-blazer-darkbg.png"
                  alt="Gauri Goswami — Advocate & Scholar"
                  fill
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2 — WHO IS GAURI
          ========================================== */}
      <section className={styles.whoSection} id="who">
        <div className={styles.container}>
          <div className={styles.whoGrid}>
            <div className={styles.whoImageFrame}>
              <Image
                src="/about-gauri-bookshelf.jpg"
                alt="Gauri Goswami — Academic & Researcher"
                fill
                unoptimized
              />
            </div>

            <div className={styles.whoText}>
              <div className={styles.kickerLight}>
                <span className={styles.kickerLineLight} />
                <span>WHO IS GAURI</span>
              </div>
              <h2 className={styles.titleLight}>
                Every Journey Begins with <em>Purpose</em>
              </h2>
              <p className={styles.whoParagraph}>
                Gauri Goswami is an Advocate, Commercial Law Researcher, and Kathak Visharad-II with an international academic background in commercial law.
              </p>
              <p className={styles.whoParagraph}>
                She completed her LL.M. in International Commercial Law from the University of Nottingham after graduating with First Class Honours with Distinction in B.A. LL.B. (Hons.) from the National Law University and Judicial Academy, Assam.
              </p>
              <p className={styles.whoParagraph}>
                Her work bridges legal practice, research, international scholarship, public speaking and cultural representation across India and the United Kingdom.
              </p>

              <div className={styles.whoStatsList}>
                <div className={styles.whoStatItem}>
                  <FaCheck className={styles.whoCheckIcon} />
                  <span>Advocate</span>
                </div>
                <div className={styles.whoStatItem}>
                  <FaCheck className={styles.whoCheckIcon} />
                  <span>LL.M. International Commercial Law</span>
                </div>
                <div className={styles.whoStatItem}>
                  <FaCheck className={styles.whoCheckIcon} />
                  <span>Published Author</span>
                </div>
                <div className={styles.whoStatItem}>
                  <FaCheck className={styles.whoCheckIcon} />
                  <span>Cultural Ambassador</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3 — PROFESSIONAL HIGHLIGHTS
          ========================================== */}
      <section className={styles.highlightsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} />
              <span>✦ DISTINCTION &amp; CREDENTIALS</span>
              <span className={styles.kickerLine} />
            </div>
            <h2 className={styles.title}>
              Professional <em>Highlights</em>
            </h2>
            <p className={styles.subtitle}>
              A multidisciplinary profile spanning courtroom advocacy, international commercial law, academic research, global scholarships, and Indian classical performing arts.
            </p>
          </div>

          {/* 6 Featured Highlights Statements */}
          <div className={styles.featuredHighlightsBox}>
            <div className={styles.featuredHighlightsGrid}>
              {featuredHighlightsList.map((statement, idx) => (
                <div className={styles.featuredHighlightItem} key={idx}>
                  <span className={styles.featuredHighlightBullet}>✦</span>
                  <span>{statement}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className={styles.credentialsHeading}>
            <span>✦ Professional Credentials</span>
          </h3>

          {/* 17 Professional Credentials Cards */}
          <div className={styles.highlightsGrid}>
            {highlightsData.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div className={styles.highlightCard} key={index}>
                  <IconComp className={styles.highlightIcon} />
                  <h4 className={styles.highlightTitle}>{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4 — MY JOURNEY (TIMELINE)
          ========================================== */}
      <section className={styles.journeySection} id="journey">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} />
              <span>✦ EVOLUTION &amp; MILESTONES</span>
              <span className={styles.kickerLine} />
            </div>
            <h2 className={styles.title}>
              The Journey <em>So Far</em>
            </h2>
            <p className={styles.subtitle}>
              From Assam to National Law University, the High Court Chambers of New Delhi, and the University of Nottingham, UK.
            </p>
          </div>

          <div className={styles.timelineTrack}>
            {timelineData.map((step, index) => (
              <div className={styles.timelineNode} key={index}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>{step.year}</span>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                  <p className={styles.timelineDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5 — ACADEMIC EXCELLENCE
          ========================================== */}
      <section className={styles.academicsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} />
              <span>✦ SCHOLARLY MERIT</span>
              <span className={styles.kickerLine} />
            </div>
            <h2 className={styles.title}>
              Academic <em>Excellence</em>
            </h2>
            <p className={styles.subtitle}>
              Gauri&apos;s academic journey reflects consistent excellence across constitutional law, corporate law, commercial law and legal research.
            </p>
          </div>

          <div className={styles.academicGrid}>
            {academicsData.map((item, index) => (
              <div className={styles.academicBadgeCard} key={index}>
                <FaAward className={styles.academicBadgeIcon} />
                <div>
                  <h3 className={styles.academicBadgeTitle}>{item.title}</h3>
                  <p className={styles.academicBadgeDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.centerBtn}>
            <Link className={styles.btnGold} href="/academics">
              View Academic Credentials <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6 — INTERNATIONAL JOURNEY
          ========================================== */}
      <section className={styles.internationalSection}>
        <div className={styles.container}>
          <div className={styles.internationalGrid}>
            <div>
              <div className={styles.kickerLight}>
                <span className={styles.kickerLineLight} />
                <span>✦ GLOBAL FOOTPRINT</span>
              </div>
              <h2 className={styles.titleLight}>
                From India to the <em>United Kingdom</em>
              </h2>
              <p className={styles.whoParagraph}>
                From India to the United Kingdom, Gauri has earned multiple international scholarships and completed advanced legal education while representing Indian culture globally.
              </p>

              <div className={styles.locationCards}>
                <div className={styles.locationCard}>
                  <div className={styles.locationIcon}>
                    <FaLandmark />
                  </div>
                  <div className={styles.locationText}>
                    <h4>India (Guwahati &amp; New Delhi)</h4>
                    <p>B.A. LL.B. (Hons.) NLUJA Assam &amp; High Court Chamber Litigation</p>
                  </div>
                </div>

                <div className={styles.locationCard}>
                  <div className={styles.locationIcon}>
                    <FaUniversity />
                  </div>
                  <div className={styles.locationText}>
                    <h4>United Kingdom (Nottingham &amp; London)</h4>
                    <p>LL.M. International Commercial Law, University of Nottingham &amp; Cultural Stage Recitals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mapGraphic}>
              <div className={styles.mapOverlay} />
              <div className={styles.mapPins}>
                <div className={styles.mapPinBadge}>
                  <FaMapMarkerAlt /> <span>India — NLUJA Assam &amp; Delhi High Court</span>
                </div>
                <div className={styles.mapPinBadge}>
                  <FaMapMarkerAlt /> <span>Nottingham, UK — Law School Campus</span>
                </div>
                <div className={styles.mapPinBadge}>
                  <FaMapMarkerAlt /> <span>London, UK — House of Lords &amp; Nehru Centre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7 — AREAS OF EXPERTISE
          ========================================== */}
      <section className={styles.expertiseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} />
              <span>✦ SPECIALISATIONS</span>
              <span className={styles.kickerLine} />
            </div>
            <h2 className={styles.title}>
              Areas of <em>Expertise</em>
            </h2>
            <p className={styles.subtitle}>
              Core disciplines across practice, corporate advisory, academic inquiry, and international regulation.
            </p>
          </div>

          <div className={styles.expertiseGrid}>
            {expertiseData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div className={styles.expertiseCard} key={index}>
                  <IconComponent className={styles.expertiseIcon} />
                  <h3 className={styles.expertiseTitle}>{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 8 — RESEARCH & PUBLICATIONS
          ========================================== */}
      <section className={styles.researchSection}>
        <div className={styles.container}>
          <div className={styles.researchGrid}>
            <div className={styles.researchImageFrame}>
              <Image
                src="/research-classroom-group.jpg"
                alt="Gauri Goswami — Legal Research & Policy"
                fill
                unoptimized
              />
            </div>

            <div>
              <div className={styles.kicker}>
                <span className={styles.kickerLine} />
                <span>✦ INTELLECTUAL INQUIRY</span>
              </div>
              <h2 className={styles.title}>
                Research &amp; <em>Publications</em>
              </h2>
              <p className={styles.whoParagraph}>
                Gauri&apos;s scholarship focuses on contemporary legal challenges at the intersection of technology, corporate governance, environmental regulation, and international commercial law.
              </p>

              <div className={styles.researchList}>
                <div className={styles.researchItem}>
                  <span className={styles.researchBullet}>✦</span>
                  <span>Commercial Law</span>
                </div>
                <div className={styles.researchItem}>
                  <span className={styles.researchBullet}>✦</span>
                  <span>Artificial Intelligence &amp; Law</span>
                </div>
                <div className={styles.researchItem}>
                  <span className={styles.researchBullet}>✦</span>
                  <span>Greenwashing &amp; Consumer Protection</span>
                </div>
                <div className={styles.researchItem}>
                  <span className={styles.researchBullet}>✦</span>
                  <span>Corporate Governance</span>
                </div>
                <div className={styles.researchItem}>
                  <span className={styles.researchBullet}>✦</span>
                  <span>International Commercial Arbitration</span>
                </div>
                <div className={styles.researchItem}>
                  <span className={styles.researchBullet}>✦</span>
                  <span>Human Rights &amp; Pro Bono</span>
                </div>
              </div>

              <div className={styles.actions}>
                <Link className={styles.btnGold} href="/#research">
                  Research Publications <FaArrowRight />
                </Link>
                <a
                  className={styles.btnOutline}
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe /> Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 9 — BEYOND LAW (KATHAK & CULTURE)
          ========================================== */}
      <section className={styles.cultureSection}>
        <div className={styles.container}>
          <div className={styles.cultureGrid}>
            <div>
              <div className={styles.kicker}>
                <span className={styles.kickerLine} />
                <span>✦ CLASSICAL DIPLOMACY</span>
              </div>
              <h2 className={styles.title}>
                Law Meets <em>Culture</em>
              </h2>
              <p className={styles.cultureParagraph}>
                Beyond legal practice, Gauri is a Kathak Visharad-II and an active ambassador of Indian cultural heritage.
              </p>
              <p className={styles.cultureParagraph}>
                Through recitals across India and the United Kingdom, she promotes Assamese and Indian classical traditions on international platforms, believing that culture strengthens identity, diplomacy and human connection.
              </p>
              <div className={styles.actions} style={{ marginTop: "1.5rem" }}>
                <Link className={styles.btnGold} href="/#kathak">
                  Explore Cultural Journey <FaArrowRight />
                </Link>
              </div>
            </div>

            <div className={styles.cultureImageFrame}>
              <Image
                src="/about-kathak-lawn.jpg"
                alt="Gauri Goswami — Kathak Recital"
                fill
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 10 — VALUES & PHILOSOPHY (QUOTE)
          ========================================== */}
      <section className={styles.quoteSection}>
        <div className={styles.container}>
          <div className={styles.quoteBox}>
            <div className={styles.quoteMark}>&ldquo;</div>
            <blockquote className={styles.quoteText}>
              Law demands precision.<br />
              Scholarship demands curiosity.<br />
              Culture demands authenticity.
            </blockquote>
            <div className={styles.quoteAuthor}>— GAURI GOSWAMI</div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 11 — WHY WORK WITH GAURI
          ========================================== */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} />
              <span>✦ COLLABORATION VALUE</span>
              <span className={styles.kickerLine} />
            </div>
            <h2 className={styles.title}>
              Why Collaborate With <em>Gauri</em>
            </h2>
            <p className={styles.subtitle}>
              A rare combination of international legal education, courtroom advocacy, published research, and cultural ambassadorship.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {whyData.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div className={styles.whyCard} key={index}>
                  <IconComp className={styles.whyIcon} />
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 12 — ACHIEVEMENTS IN NUMBERS
          ========================================== */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} />
              <span>✦ METRICS OF EXCELLENCE</span>
              <span className={styles.kickerLine} />
            </div>
            <h2 className={styles.title}>
              Achievements in <em>Numbers</em>
            </h2>
          </div>

          <div className={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <div className={styles.statCard} key={index}>
                <div className={styles.statNumber}>{stat.number}</div>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 13 — GALLERY PREVIEW
          ========================================== */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} />
              <span>✦ VISUAL LOG</span>
              <span className={styles.kickerLine} />
            </div>
            <h2 className={styles.title}>
              Moments &amp; <em>Milestones</em>
            </h2>
          </div>

          <div className={styles.galleryGrid}>
            {galleryData.map((item, index) => (
              <div className={styles.galleryCard} key={index}>
                <Image src={item.image} alt={item.title} fill unoptimized />
                <div className={styles.galleryCardOverlay}>
                  <span className={styles.galleryTag}>{item.tag}</span>
                  <h4 className={styles.galleryTitle}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.centerBtn}>
            <Link className={styles.btnGold} href="/gallery">
              View Complete Gallery <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 14 — TESTIMONIAL PREVIEW (WARM IVORY LIGHT THEME)
          ========================================== */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderLight}>
            <div className={styles.kickerLight}>
              <span className={styles.kickerLineLight} />
              <span>✦ ENDORSEMENTS</span>
              <span className={styles.kickerLineLight} />
            </div>
            <h2 className={styles.titleLight}>
              Professional &amp; Academic <em>Acclaim</em>
            </h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonialsData.map((item, index) => (
              <div className={styles.testimonialCard} key={index}>
                <p className={styles.testimonialQuote}>&ldquo;{item.quote}&rdquo;</p>
                <div className={styles.testimonialAuthorRow}>
                  <div className={styles.testimonialAvatar}>
                    <Image src={item.avatar} alt={item.author} fill unoptimized />
                  </div>
                  <div className={styles.testimonialMeta}>
                    <h4>{item.author}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.centerBtn}>
            <Link className={styles.btnDarkIvory} href="/#testimonials">
              Read All Testimonials <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 15 — CALL TO ACTION & FOOTER
          ========================================== */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} />
              <span>✦ LET&apos;S CONNECT</span>
              <span className={styles.kickerLine} />
            </div>
            <h2 className={styles.title}>
              Let&apos;s Build Meaningful <em>Collaborations</em>
            </h2>
            <p>
              Whether for legal consultation, academic collaboration, speaking engagements, research projects or cultural performances, Gauri welcomes opportunities to create meaningful impact through law, scholarship and culture.
            </p>
            <div className={styles.ctaActions}>
              <a className={styles.btnGold} href="mailto:info@gaurigoswami.com?subject=Legal%20Consultation">
                Book Consultation
              </a>
              <a className={styles.btnOutline} href="/Gauri-Goswami-CV.pdf" download>
                <FaDownload /> Download CV
              </a>
              <a className={styles.btnOutline} href="mailto:info@gaurigoswami.com">
                Contact Now <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer shell">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <Image
              className="brand-logo"
              src="/brand-logo.png"
              alt="Gauri Goswami"
              width={96}
              height={96}
              unoptimized
            />
          </Link>
          <p className="footer-about">
            Gauri Goswami is an Advocate, LL.M. in International Commercial Law, Kathak Visharad-II, researcher, and cultural ambassador.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
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
            </div>
            <div>
              <Link href="/gallery">Gallery</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/#blog">Blog</Link>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        <div>
          <h4>Resources</h4>
          <Link href="/#research">Research Publications</Link>
          <Link href="/#matters">Representative Matters</Link>
          <Link href="/#awards">Awards</Link>
          <a href="mailto:info@gaurigoswami.com">Book Performance</a>
        </div>

        <div id="footer-contact">
          <h4>Get in Touch</h4>
          <a href="mailto:info@gaurigoswami.com">info@gaurigoswami.com</a>
          <a href="tel:+447587338945">+44 7587 338945</a>
          <p>United Kingdom</p>
          <a href="https://wa.me/447587338945">WhatsApp</a>
          <p>New Delhi, India</p>
        </div>

        <div className="copyright">
          © 2026 Nexus Czar Pvt. Ltd. All Rights Reserved.
          <span>www.gaurigoswami.com</span>
        </div>
      </footer>
    </main>
  );
}
