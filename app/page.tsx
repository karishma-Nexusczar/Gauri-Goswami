import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MilestoneExhibition from "./components/MilestoneExhibition";
import RepresentativeMatters from "./components/RepresentativeMatters";
import ResearchPublications from "./components/ResearchPublications";
import AwardsRecognition from "./components/AwardsRecognition";
import TestimonialsSlider from "./components/TestimonialsSlider";
import GallerySlider from "./components/GallerySlider";
import Navbar from "./components/Navbar";
import ClassInquiryModal from "./components/ClassInquiryModal";
import GetInTouchModal from "./components/GetInTouchModal";
import {
  FaBalanceScale,
  FaBookOpen,
  FaFacebookF,
  FaGlobe,
  FaGraduationCap,
  FaInstagram,
  FaLandmark,
  FaLinkedinIn,
  FaTheaterMasks,
  FaYoutube,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Gauri Goswami — Law, Scholarship & Kathak",
  description: "The official portfolio of Gauri Goswami — barrister, academic, Kathak artist, researcher and cultural storyteller.",
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
      <section className="hero" id="home">
        <Navbar currentPath="/" />

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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <FaFacebookF aria-hidden="true" />
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
          <p className="eyebrow">LAW • COMMERCIAL PRACTICE • RESEARCH • KATHAK</p>
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
          <div className="academic-homepage-footer">
            <Link href="/academics" className="academic-profile-link">
              <span>Academic Profile</span> <span className="academic-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <AwardsRecognition />

      {/* SECTION 10 — CULTURE & KATHAK (DARK THEME BACKGROUND + REDDISH LEFT & YELLOWISH RIGHT CARDS) */}
      <section className="culture-section dark-section" id="kathak" aria-label="Culture and Kathak">
        <div className="section-header-block">
          <p className="section-kicker">✦ CULTURE &amp; KATHAK</p>
          <h2>Preserving Heritage Through Kathak &amp; Cultural Diplomacy</h2>
        </div>

        {/* 2-Column Split Section: Reddish Left Card + Yellowish Right Card on Dark Background */}
        <div className="anannya-split-grid">
          {/* Left Column: Featured Performances & Engagements (Reddish Burgundy Card) */}
          <div className="anannya-engagements-card">
            <div className="anannya-card-content">
              <div>
                <span className="anannya-card-tag">FEATURED</span>
                <h3 className="anannya-card-title">Performances &amp; Engagements</h3>

                <div className="anannya-events-list">
                  <div className="anannya-event-row">
                    <div className="anannya-date-badge">
                      <span className="anannya-date-day">02</span>
                      <span className="anannya-date-month">MAY</span>
                      <span className="anannya-date-year">2026</span>
                    </div>
                    <div className="anannya-event-info">
                      <h4>University of Nottingham</h4>
                      <p>Churchill College / Law Faculty, UK</p>
                    </div>
                    <a href="#contact" className="anannya-event-link">VIEW DETAILS</a>
                  </div>

                  <div className="anannya-event-row">
                    <div className="anannya-date-badge">
                      <span className="anannya-date-day">25</span>
                      <span className="anannya-date-month">APR</span>
                      <span className="anannya-date-year">2026</span>
                    </div>
                    <div className="anannya-event-info">
                      <h4>London Rongali Bihu</h4>
                      <p>London Bihu Committee, London</p>
                    </div>
                    <a href="#contact" className="anannya-event-link">VIEW DETAILS</a>
                  </div>

                  <div className="anannya-event-row">
                    <div className="anannya-date-badge">
                      <span className="anannya-date-day">13</span>
                      <span className="anannya-date-month">MAR</span>
                      <span className="anannya-date-year">2026</span>
                    </div>
                    <div className="anannya-event-info">
                      <h4>High Commission of India</h4>
                      <p>The Nehru Centre, London</p>
                    </div>
                    <a href="#contact" className="anannya-event-link">VIEW DETAILS</a>
                  </div>

                  <div className="anannya-event-row">
                    <div className="anannya-date-badge">
                      <span className="anannya-date-day">08</span>
                      <span className="anannya-date-month">NOV</span>
                      <span className="anannya-date-year">2025</span>
                    </div>
                    <div className="anannya-event-info">
                      <h4>North East Festival London</h4>
                      <p>International Cultural Showcase, UK</p>
                    </div>
                    <a href="#contact" className="anannya-event-link">VIEW DETAILS</a>
                  </div>
                </div>
              </div>

              <div className="anannya-card-btn-wrap">
                <Link href="/research#publications" className="anannya-outline-btn">VIEW ALL EVENTS</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Learn With Gauri (Yellowish Golden Tan Card) */}
          <div className="anannya-learn-card">
            <div className="anannya-learn-left">
              <div>
                <span className="anannya-card-tag dark">LEARN</span>
                <h3 className="anannya-card-title dark">Learn With Gauri</h3>
                <p className="anannya-learn-desc">
                  Join Gauri in exploring the beauty of Kathak and Bihu through classes, workshops, and interactive cultural sessions.
                </p>

                <ul className="anannya-checklist">
                  <li><span className="anannya-check">✓</span> Kathak Foundations</li>
                  <li><span className="anannya-check">✓</span> Bihu Workshops</li>
                  <li><span className="anannya-check">✓</span> Cultural Immersion Sessions</li>
                  <li><span className="anannya-check">✓</span> School &amp; Community Workshops</li>
                  <li><span className="anannya-check">✓</span> Private / Group Sessions</li>
                </ul>
              </div>

              <div className="anannya-card-btn-wrap">
                <ClassInquiryModal />
              </div>
            </div>

            <div className="anannya-learn-right">
              <div className="anannya-learn-photo-frame">
                <Image
                  src="/kathak-high-pixel.jpg"
                  alt="Kathak Dance Recital Gauri Goswami"
                  fill
                  sizes="260px"
                  quality={90}
                />
              </div>
            </div>
          </div>
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

      <footer>
        <div className="footer-brand">
          <a className="brand" href="#home"><Image className="brand-logo" src="/brand-logo.png" alt="Gauri Goswami" width={96} height={96} unoptimized suppressHydrationWarning /></a>
          <p className="footer-about">Gauri Goswami is an Advocate, LL.M. in International Commercial Law, Kathak Visharad-II, researcher, and cultural ambassador.</p>
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
              <a href="/about">About</a>
              <a href="#career">Legal Career</a>
              <a href="/academics">Academics</a>
              <a href="#research">Research</a>
              <a href="#kathak">Kathak</a>
              <a href="#culture">Culture</a>
            </div>
            <div>
              <a href="/about#travel">Travel</a>
              <a href="#contact">Media</a>
              <a href="/gallery">Gallery</a>
              <a href="#testimonials">Testimonials</a>
              <a href="/research#publications">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#research">Research Publications</a>
          <a href="#matters">Representative Matters</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Media</a>
          <a href="#kathak">Testimonials</a>
          <a href={performanceInquiryUrl} target="_blank" rel="noreferrer">Book Performance</a>
        </div>
        <div id="footer-contact">
          <h4>Get in Touch</h4>
          <a href="mailto:info@gaurigoswami.com">info@gaurigoswami.com</a>
          <div style={{ marginTop: '0.4rem' }}>
            <span style={{ display: 'block', fontSize: '0.78rem', color: '#D4AD62', fontWeight: 600 }}>🇬🇧 London, UK (Phone &amp; WhatsApp)</span>
            <a href="tel:+447587338945" style={{ fontSize: '0.88rem' }}>+44 7587 338945</a>
          </div>
          <div style={{ marginTop: '0.4rem' }}>
            <span style={{ display: 'block', fontSize: '0.78rem', color: '#D4AD62', fontWeight: 600 }}>🇮🇳 India (Phone &amp; WhatsApp)</span>
            <a href="tel:+919864012345" style={{ fontSize: '0.88rem' }}>+91 98640 12345</a>
          </div>
        </div>
        <div className="copyright">
          © 2026 Nexus Czar Pvt. Ltd. All Rights Reserved.
          <span>www.gaurigoswami.com</span>
        </div>
      </footer>
    </main>
  );
}
