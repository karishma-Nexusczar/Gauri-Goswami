import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LegalCredentialsSection from "./components/LegalCredentialsSection";
import MilestoneExhibition from "./components/MilestoneExhibition";
import RepresentativeMatters from "./components/RepresentativeMatters";
import ResearchPublications from "./components/ResearchPublications";
import AwardsRecognition from "./components/AwardsRecognition";
import TestimonialsSlider from "./components/TestimonialsSlider";
import GallerySlider from "./components/GallerySlider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClassInquiryModal from "./components/ClassInquiryModal";
import GetInTouchModal from "./components/GetInTouchModal";
import HomeGlobalEvents from "./components/HomeGlobalEvents";
import {
  FaBalanceScale,
  FaBookOpen,
  FaGlobe,
  FaGraduationCap,
  FaInstagram,
  FaLandmark,
  FaLinkedinIn,
  FaTheaterMasks,
  FaYoutube,
} from "react-icons/fa";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://gaurigoswami.com/#person",
      "name": "Gauri Goswami",
      "url": "https://gaurigoswami.com",
      "jobTitle": "Advocate, Legal Scholar & Kathak Artist",
      "knowsAbout": [
        "International Commercial Law",
        "Classical Kathak Dance",
        "Legal Research",
        "Cultural Diplomacy"
      ],
      "almaMater": [
        "University of Nottingham",
        "National Law University and Judicial Academy Assam"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/gauri-goswami-a467771ab/",
        "https://www.instagram.com/gaurigoswamiii/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://gaurigoswami.com/#website",
      "url": "https://gaurigoswami.com",
      "name": "Gauri Goswami Portfolio",
      "publisher": { "@id": "https://gaurigoswami.com/#person" }
    }
  ]
};



const professionalRoles = [
  { icon: FaLandmark, name: "Advocate", description: "Legal practice and advocacy." },
  { icon: FaGraduationCap, name: "LL.M. International Commercial Law", description: "University of Nottingham" },
  { icon: FaTheaterMasks, name: "Kathak Visharad-II", description: "Classical dance distinction." },
  { icon: FaBookOpen, name: "Researcher", description: "Law, culture, and policy." },
  { icon: FaGlobe, name: "Cultural Ambassador", description: "Representing Indian heritage." },
  { icon: FaBalanceScale, name: "Speaker & Mentor", description: "Legal and cultural dialogue." },
];

const achievementHighlights = [
  "LL.M. University of Nottingham",
  "Enrolled Advocate",
  "Kathak Visharad-II",
  "Published Research",
  "International Performer",
];

const representativeMatters = [
  { client: "Maruti Suzuki", document: "Written Submission", forum: "NCDRC", image: "/maruti-suzuki-hall.jpg" },
  { client: "Volkswagen", document: "Written Synopsis", forum: "Consumer Litigation", image: "/volkswagen-synopsis.jpg" },
  { client: "Nissan", document: "Consumer Litigation", forum: "Consumer Litigation", image: "/nissan-litigation.jpg" },
  { client: "Skoda", document: "Written Synopsis", forum: "Consumer Litigation", image: "/skoda-synopsis.png" },
  { client: "Hyundai", document: "Legal Research", forum: "Consumer Litigation", image: "/research-classroom-group.jpg" },
  { client: "Tata Motors", document: "Written Submission", forum: "District Consumer Commission", image: "/bar-council-advocate.jpg" },
  { client: "Honda", document: "Case Brief", forum: "State Consumer Commission", image: "/law-building-outside.png" },
  { client: "Kia", document: "Legal Drafting", forum: "Consumer Litigation", image: "/kia-drafting.jpg" },
];



const performanceInquiryUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=info%40gaurigoswami.com&su=Performance%20Booking%20Inquiry&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20enquire%20about%20booking%20a%20Kathak%20performance.%0A%0AName%3A%0AOrganisation%3A%0AEvent%20date%3A%0AVenue%20%2F%20city%3A%0APerformance%20requirements%3A%0AAudience%20or%20event%20details%3A%0APhone%20number%3A%0A%0AKind%20regards%2C";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar currentPath="/" />
      <section className="hero" id="home">

        <div className="hero-left-media" aria-hidden="true">
          <Image
            src="/about-gauri-red-blazer.jpg"
            alt="Gauri Goswami Advocate"
            fill
            priority
            quality={95}
            className="hero-left-portrait"
            unoptimized
          />
          <div className="hero-vignette-overlay" />
        </div>

        <div className="hero-right-media" aria-hidden="true">
          <Image
            src="/hero-right-kathak-v6.png"
            alt="Gauri Goswami Kathak Artist"
            fill
            priority
            quality={95}
            className="hero-right-portrait"
            unoptimized
          />
          <div className="hero-vignette-overlay-right" />
        </div>

        <div className="hero-social-sidebar" aria-label="Social media links">
          <a
            href="https://www.instagram.com/goswamigauri1999/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://www.youtube.com/@gaurigoswami-j1q"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
          >
            <FaYoutube aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/gauri-goswami-68b1a3162/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </div>

        <div className="hero-content">
          <p className="eyebrow">LAW • COMMERCIAL PRACTICE • RESEARCH • DANCE</p>
          <h1>Gauri<br />Goswami</h1>
          <p className="roles">Advocate <i /> LL.M. (University of Nottingham)<br />Kathak Visharad-II <i /> Researcher <i /> Cultural Ambassador</p>
          <p className="tagline">Building a career in Commercial Law while representing India&apos;s classical heritage through legal scholarship, Kathak, and cultural diplomacy.</p>
          <div className="hero-actions">
            <a className="gold-button explore-journey" href="#professional-overview">
              Explore Journey
            </a>
            <a className="outline-button" href={performanceInquiryUrl} target="_blank" rel="noreferrer">Book Performance</a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT GAURI GOSWAMI */}
      <section className="about-editorial-section" id="professional-overview" aria-label="About Gauri Goswami">
        <div className="about-editorial-container">
          <figure className="about-editorial-photo">
            <Image
              src="/about-gauri-bookshelf.jpg"
              alt="Gauri Goswami Advocate in law library"
              fill
              sizes="(max-width: 960px) 100vw, 440px"
              unoptimized
            />
          </figure>

          <div className="about-editorial-content">
            <p className="about-editorial-kicker">WHO IS GAURI</p>
            <h2 className="about-editorial-title">Every Journey Begins with Purpose</h2>
            <p className="about-editorial-subtitle">Advocate • Academic • Kathak Artist • Researcher</p>

            <p className="about-editorial-para">
              Advocate, LL.M. graduate from the University of Nottingham, Kathak Visharad-II artist, researcher, and cultural ambassador working at the intersection of international commercial law, academic scholarship, classical performing arts, and global diplomacy.
            </p>

            {/* 6 Highlight Cards Grid in 2 Columns */}
            <div className="about-roles-grid">
              {professionalRoles.map(({ icon: Icon, name, description }) => (
                <div className="about-role-mini-card" key={name}>
                  <span className="about-role-icon" aria-hidden="true"><Icon /></span>
                  <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Box with Left Gold Vertical Accent Line */}
            <div className="about-editorial-quote-box">
              <blockquote className="about-quote-text">
                “Law builds justice. Dance preserves culture. Together they create meaningful change.”
              </blockquote>
              <span className="quote-source">— GAURI GOSWAMI</span>
            </div>

            <div className="about-editorial-btn-wrap">
              <Link href="/about" className="about-editorial-btn">
                ABOUT GAURI <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Achievement Strip */}
        <div className="about-achievement-strip">
          {achievementHighlights.map((title, idx) => (
            <React.Fragment key={title}>
              {idx > 0 && <span className="strip-divider" aria-hidden="true">•</span>}
              <div className="strip-item">
                <strong>{title}</strong>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="stats" aria-label="Professional achievements">
        {[["7+", "Legal Internships"], ["1", "Legal Associate"], ["8+", "Representative Matters"], ["5+", "Courts & Tribunals"], ["10+", "Research Projects"], ["20+", "Cultural Performances"]].map(([num, label]) => <div key={label}><strong>{num}</strong><span>{label}</span></div>)}
      </section>

      <LegalCredentialsSection />

      <MilestoneExhibition />

      <section className="courts-practice" id="practice-areas" aria-labelledby="courts-practice-heading">
        <header className="courts-practice-header">
          <p>Legal Practice</p>
          <h2 id="courts-practice-heading">Courts &amp; Practice Areas</h2>
          <span>Experience across forums, disciplines, and legal workstreams.</span>
        </header>
        <div className="courts-grid" id="courts-tribunals" aria-label="Courts and tribunals">
          {["Delhi High Court", "Supreme Court", "NCDRC", "State Consumer Commission"].map((court) => (
            <article className="practice-card court-card" key={court}>
              <FaLandmark aria-hidden="true" />
              <h3>{court}</h3>
              <p>Forum exposure</p>
            </article>
          ))}
        </div>
        <div className="practice-areas-grid" aria-label="Practice areas">
          {["Commercial Law", "Consumer Litigation", "Corporate Advisory", "Legal Drafting"].map((area) => (
            <article className="practice-card area-card" key={area}>
              <FaBalanceScale aria-hidden="true" />
              <h3>{area}</h3>
              <p>Practice area</p>
            </article>
          ))}
        </div>
      </section>

      <RepresentativeMatters />

      <ResearchPublications />

      {/* ACADEMICS SECTION (PREMIUM UNIVERSITY PROFILE) */}
      <section className="academic-homepage-section" id="academics" aria-label="Academic Excellence">
        <div className="academic-homepage-container">
          {/* Header */}
          <div className="academic-homepage-header">
            <div className="academic-badge-pill">
              <span className="academic-badge-star">✦</span>
              <span className="academic-badge-text">ACADEMIC EXCELLENCE</span>
            </div>

            <h2 className="academic-main-title">
              Academic Excellence Rooted in Curiosity, Dedication, and Global Legal Scholarship
            </h2>

            <div className="academic-subtitle-row">
              <span className="academic-dash">—</span>
              <span className="academic-subtitle">University of Nottingham (Russell Group) • NLU Assam</span>
              <span className="academic-dash">—</span>
            </div>

            <p className="academic-description">
              Building knowledge through international legal education, academic research, and continuous learning while preparing for a distinguished career in commercial law and cross-border legal practice.
            </p>
          </div>

          {/* 4 Premium Cards Grid */}
          <div className="academic-cards-grid">
            {/* Card 1 */}
            <div className="academic-mini-card">
              <div className="academic-icon-circle">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
                </svg>
              </div>
              <h3 className="academic-card-heading">South Asia<br />Excellence Award</h3>
              <span className="academic-card-divider" />
              <p className="academic-card-sub">Merit Scholarship<br />University of Nottingham</p>
            </div>

            {/* Card 2 */}
            <div className="academic-mini-card">
              <div className="academic-icon-circle">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="academic-card-heading">University of<br />Nottingham</h3>
              <span className="academic-card-divider" />
              <p className="academic-card-sub">Russell Group<br />Law School</p>
            </div>

            {/* Card 3 */}
            <div className="academic-mini-card">
              <div className="academic-icon-circle">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="academic-card-heading">International<br />Commercial Law</h3>
              <span className="academic-card-divider" />
              <p className="academic-card-sub">LL.M. Specialisation<br />High Distinction</p>
            </div>

            {/* Card 4 */}
            <div className="academic-mini-card">
              <div className="academic-icon-circle">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="academic-card-heading">Research<br />Focus</h3>
              <span className="academic-card-divider" />
              <p className="academic-card-sub">Commercial Law • Corporate Governance • AI &amp; Law</p>
            </div>
          </div>

          {/* Academic Statistics Strip */}
          <div className="academic-stats-strip">
            <div className="academic-stat-item">
              <strong>LL.M.</strong>
              <span>International Commercial Law</span>
            </div>
            <div className="academic-stat-divider">✦</div>
            <div className="academic-stat-item">
              <strong>First Class</strong>
              <span>Honours with Distinction</span>
            </div>
            <div className="academic-stat-divider">✦</div>
            <div className="academic-stat-item">
              <strong>2</strong>
              <span>Law Degrees</span>
            </div>
            <div className="academic-stat-divider">✦</div>
            <div className="academic-stat-item">
              <strong>15+</strong>
              <span>Research Projects</span>
            </div>
            <div className="academic-stat-divider">✦</div>
            <div className="academic-stat-item">
              <strong>10+</strong>
              <span>Academic Publications</span>
            </div>
          </div>

          {/* Bottom Link Button */}
          <div className="academic-homepage-footer" style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/academics" className="academic-profile-link">
              <span>Academic Profile</span> <span className="academic-arrow">→</span>
            </Link>
            <a href="#experience" className="academic-profile-link">
              <span>Read Scholarship</span> <span className="academic-arrow">↓</span>
            </a>
          </div>
        </div>
      </section>

      <AwardsRecognition />

      {/* SECTION 10 — GLOBAL EVENTS & CULTURAL ENGAGEMENT */}
      <section className="culture-section dark-section" id="kathak" aria-label="Global Events and Cultural Engagement">
        <div className="section-header-block" style={{ maxWidth: "880px", margin: "0 auto 2.5rem auto", textAlign: "center" }}>
          <p className="section-kicker">✦ GLOBAL EVENTS &amp; CULTURAL ENGAGEMENT</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", color: "#FFFFFF", margin: "0.5rem 0 0.85rem" }}>
            Representing Indian Culture Across International Platforms
          </h2>
          <p className="section-desc" style={{ color: "#D1C5B8", fontSize: "0.98rem", lineHeight: 1.65, margin: "0 auto", maxWidth: "800px" }}>
            From prestigious cultural festivals and diplomatic events to academic institutions and international forums, Gauri Goswami has proudly represented the rich cultural heritage of Assam and India through classical and folk dance performances, cultural exchange, and community engagement.
          </p>
        </div>

        {/* 5 Event Cards Horizontal Grid */}
        <HomeGlobalEvents />

        {/* Bottom Button to Comprehensive Archive */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2.8rem" }}>
          <Link href="/gallery#global-events" className="home-view-all-events-btn">
            VIEW ALL EVENTS →
          </Link>
        </div>
      </section>

      {/* SECTION 11 — GALLERY */}
      <GallerySlider />

      {/* SECTION 12 — TESTIMONIALS ⭐ */}
      <TestimonialsSlider />

      <section className="contact-cta" id="contact">
        <div>
          <p className="section-kicker">Let&apos;s Connect</p>
          <h2>Let&apos;s Build Meaningful Connections</h2>
          <p>Whether you&apos;re seeking legal collaboration, academic engagement, research partnerships, Kathak performances, cultural events, workshops, or speaking sessions, I welcome opportunities to connect, collaborate, and create meaningful experiences.</p>
          <GetInTouchModal />
        </div>
      </section>

      <Footer />
    </main>
  );
}
