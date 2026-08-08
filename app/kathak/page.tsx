"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXmark,
} from "react-icons/fa6";
import Navbar from "../components/Navbar";
import styles from "./kathak.module.css";

import TempleArchSvg from "./TempleArchSvg";

const performanceInquiryUrl =
  "mailto:info@gaurigoswami.com?subject=Kathak%20Performance%20%26%20Event%20Booking%20—%20Gauri%20Goswami&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20Kathak%20performance%20%2F%20cultural%20event.%0A%0AName%3A%0AOrganization%20%2F%20Event%3A%0AEvent%20Date%3A%0AVenue%20%2F%20City%3A%0APerformance%20Requirements%3A%0APhone%20Number%3A%0A%0ABest%20regards%2C";

// Recitals data with full original content for Read More modal
const recitalsData = [
  {
    id: 1,
    year: "2013",
    title: "Kathak Group Presentation",
    venue: "Guwahati Medical College Auditorium",
    fullContent:
      "A grand group classical Kathak recital presented at Guwahati Medical College Auditorium, demonstrating intricate rhythmic footwork (Tatkar), synchronized turns (Chakkars), and traditional Assamese classical fusion compositions before a distinguished audience of artists and medical professionals.",
  },
  {
    id: 2,
    year: "2015",
    title: "Pure Classical Kathak",
    venue: "Cotton College Auditorium",
    fullContent:
      "A solo pure classical Kathak performance showcasing Lucknow and Jaipur Gharana repertoire, including TeenTaal, Tukdas, Parans, and expressive Abhinaya centered on classical Indian literature and devotional poetry.",
  },
  {
    id: 3,
    year: "2015",
    title: "College Week Classical Recital",
    venue: "Cotton College Cultural Festival",
    fullContent:
      "Featured solo Kathak performance during Cotton College Week, securing top honours in classical dance competitions and showcasing advanced rhythm math (Layakari) and expressiveness.",
  },
  {
    id: 4,
    year: "2017",
    title: "Rajdhani College Recital",
    venue: "University of Delhi",
    fullContent:
      "Invited classical recital at Rajdhani College, University of Delhi, bringing classical Kathak traditions to inter-university cultural platforms and celebrating national artistic heritage.",
  },
  {
    id: 5,
    year: "2018",
    title: "Laxmibai College Cultural Showcase",
    venue: "University of Delhi",
    fullContent:
      "Distinguished Kathak presentation at Laxmibai College, University of Delhi, combining classical dance aesthetics with lecture-demonstration on the history and spiritual discipline of Kathak.",
  },
];

// 18-24 real performance images for Masonry Gallery
const galleryImages = [
  { src: "/kathak-red-spin-hero.jpg", alt: "Kathak Red Spin Classical Pose" },
  { src: "/kathak-hero-editorial.jpg", alt: "Kathak Editorial Spotlight Pose" },
  { src: "/cultural-heritage-london-stage.jpg", alt: "London Stage Recital" },
  { src: "/kathak-lawn-classical-pose.jpg", alt: "Classical Kathak Lawn Recital" },
  { src: "/high-commission-loktak-stage-full.jpg", alt: "High Commission India House London" },
  { src: "/culture-asam-sahitya-sabha-stage-recital.jpg", alt: "Assam Sahitya Sabha UK Recital" },
  { src: "/northeast-festival-london-stage-cover.jpg", alt: "Northeast Festival London Stage" },
  { src: "/kathak-abhiveera-gold-dress-portrait.jpg", alt: "Abhiveera Classical Gold Dress" },
  { src: "/kathak-jaapi-stage-recital.jpg", alt: "Assam Traditional Jaapi Stage Recital" },
  { src: "/kathak-golden-chador-stage.jpg", alt: "Golden Chador Kathak Recital" },
  { src: "/kathak-loktak-exhibit-portrait.jpg", alt: "Loktak Cultural Exhibit Recital" },
  { src: "/kathak-london-rongali-bihu-2024.jpg", alt: "London Rongali Bihu 2024" },
  { src: "/kathak-spotlight-stage.jpg", alt: "Kathak Spotlight Stage Recital" },
  { src: "/aduj-abhiveera-nlu-assam-stage-cover.jpg", alt: "NLU Assam Stage Recital" },
  { src: "/culture-nlu-assam-foundation-day-dance.jpg", alt: "NLU Assam Foundation Day Dance" },
  { src: "/culture-london-rongali-bihu-delegates.jpg", alt: "London Rongali Bihu Delegates" },
  { src: "/culture-london-rongali-bihu-hall.jpg", alt: "London Rongali Bihu Hall Recital" },
  { src: "/gallery-4-kathak-stage.jpg", alt: "Kathak Stage Performance" },
  { src: "/gallery-5-cultural-diplomacy.jpg", alt: "Cultural Diplomacy Stage" },
  { src: "/gallery-6-northeast-festival.jpg", alt: "Northeast Festival Recital" },
  { src: "/kathak-seated-saree-portrait.jpg", alt: "Seated Classical Saree Portrait" },
];

export default function KathakPage() {
  const [selectedRecital, setSelectedRecital] = useState<typeof recitalsData[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className={styles.page}>
      {/* HEADER (Full site Navbar) */}
      <Navbar currentPath="/kathak" />

      {/* ========================================================================
          SECTION 1 — HERO SECTION (100vh) — FULL BACKDROP IMAGE INTEGRATION
          ======================================================================== */}
      <section className={styles.hero}>
        {/* Full Right Backdrop Kathak Red Spin Cutout Photograph */}
        <div className={styles.heroBackdropImageWrap}>
          <Image
            src="/kathak-red-spin-cutout.png"
            alt="Gauri Goswami Kathak classical spin pose"
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 60vw"
            className={styles.heroBackdropImg}
            unoptimized
          />
        </div>

        <div className={styles.heroBackground} />
        <div className={styles.templeArchOverlay}>
          <TempleArchSvg />
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroCopy}>
            <span className={styles.heroTagline}>ABOUT KATHAK</span>
            <h1 className={styles.heroTitle}>
              The Art That Shapes Discipline, Identity &amp; Cultural Heritage
            </h1>

            <p className={styles.heroSubtext}>
              A lifelong journey of rhythm, expression, storytelling and devotion — preserving the timeless traditions of Kathak while representing Assam and India on international stages.
            </p>

            <div className={styles.heroActions}>
              <a href="#journey" className={styles.primaryBtn}>
                Explore Journey <FaArrowRight />
              </a>
              <a href="#performances" className={styles.secondaryBtn}>
                View Performances <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 2 — THE JOURNEY OF KATHAK (EDITORIAL LAYOUT)
          ======================================================================== */}
      <section className={`${styles.section} ${styles.journeySection}`} id="journey">
        <div className={styles.journeyGrid}>
          {/* Left Side: Large Image */}
          <div className={styles.journeyImageWrap}>
            <Image
              src="/cultural-heritage-london-stage.jpg"
              alt="Gauri Goswami performing Kathak on stage"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.portraitImg}
            />
          </div>

          {/* Right Side: Editorial Text / Poem */}
          <div className={styles.journeyText}>
            <h2>My Kathak Journey</h2>
            <div className={styles.poemBlock}>
              <p>Kathak is not merely a dance form.</p>
              <p>It is discipline.</p>
              <p>Devotion.</p>
              <p>Storytelling.</p>
              <p>Identity.</p>
              <p style={{ marginTop: "1rem", color: "#C8A75A" }}>
                Every performance has become a celebration of India&apos;s living cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 3 — VISHARAD JOURNEY (LUXURY TIMELINE)
          ======================================================================== */}
      <section className={`${styles.section} ${styles.timelineSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>✦ CLASSICAL MILESTONES</span>
          <h2 className={styles.sectionTitle}>Visharad Journey</h2>
          <p className={styles.sectionDesc}>
            A dedicated path of classical discipline, rigorous examinations, and mastery.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineVerticalLine} />

          {[
            { year: "2003", title: "Started Dance" },
            { year: "2006", title: "Classical Training" },
            { year: "2010", title: "Kathak Workshop" },
            { year: "2012", title: "Bhatkhande Sangit Vidyapith" },
            { year: "2014", title: "Kathak Visharad I" },
            { year: "2016", title: "Kathak Visharad II Distinction" },
            { year: "2024", title: "International Performances" },
          ].map((item, index, arr) => (
            <div key={item.year + item.title} className={styles.timelineNode}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineTitle}>{item.title}</div>
                {index < arr.length - 1 && <span className={styles.timelineArrow}>↓</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================
          SECTION 4 — WORKSHOPS & PROFESSIONAL TRAINING (LIGHT GOLD CARDS)
          ======================================================================== */}
      <section className={`${styles.section} ${styles.workshopsSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>✦ MAESTRO LEARNING</span>
          <h2 className={styles.sectionTitle}>Workshops &amp; Professional Training</h2>
        </div>

        <div className={styles.workshopsGrid}>
          {/* Card 1 */}
          <div className={styles.workshopCard}>
            <span className={styles.workshopType}>CLASSICAL MASTERCLASS</span>
            <h3 className={styles.workshopTitle}>Kathak Workshop</h3>
            <div className={styles.workshopGuru}>Pandit Birju Maharaj</div>
            <div className={styles.workshopYear}>2013</div>
          </div>

          {/* Card 2 */}
          <div className={styles.workshopCard}>
            <span className={styles.workshopType}>CONTEMPORARY FUSION</span>
            <h3 className={styles.workshopTitle}>Modern Dance Workshop</h3>
            <div className={styles.workshopGuru}>Ashim Baishya</div>
            <div className={styles.workshopYear}>2014</div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 5 — KATHAK RECITALS (MAGAZINE STYLE WITH MODAL READ MORE)
          ======================================================================== */}
      <section className={`${styles.section} ${styles.recitalsSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>✦ STAGE RECITALS</span>
          <h2 className={styles.sectionTitle}>Kathak Recitals</h2>
          <p className={styles.sectionDesc}>
            Selected solo and group classical performances across premier institutions.
          </p>
        </div>

        <div className={styles.recitalsGrid}>
          {recitalsData.map((recital) => (
            <div key={recital.id} className={styles.recitalCard}>
              <div>
                <div className={styles.recitalYear}>{recital.year}</div>
                <h3 className={styles.recitalTitle}>{recital.title}</h3>
                <div className={styles.recitalVenue}>{recital.venue}</div>
              </div>
              <button
                className={styles.readMoreBtn}
                onClick={() => setSelectedRecital(recital)}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* Modal Window for Read More */}
        {selectedRecital && (
          <div className={styles.modalOverlay} onClick={() => setSelectedRecital(null)}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeModalBtn}
                onClick={() => setSelectedRecital(null)}
                aria-label="Close modal"
              >
                <FaXmark />
              </button>
              <div className={styles.recitalYear}>{selectedRecital.year}</div>
              <h3 className={styles.recitalTitle}>{selectedRecital.title}</h3>
              <div className={styles.recitalVenue}>{selectedRecital.venue}</div>
              <p style={{ color: "#F8F4EF", lineHeight: 1.8, fontSize: "1.1rem" }}>
                {selectedRecital.fullContent}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================
          SECTION 6 — TIMELINE OF CULTURAL PERFORMANCES (BIGGEST SECTION)
          ======================================================================== */}
      <section className={`${styles.section} ${styles.culturalTimelineSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>✦ CHRONOLOGICAL HERITAGE</span>
          <h2 className={styles.sectionTitle}>Timeline of Cultural Performances</h2>
          <p className={styles.sectionDesc}>
            A comprehensive journey representing Assam and India on national &amp; international stages.
          </p>
        </div>

        <div className={styles.bigTimeline}>
          <div className={styles.bigTimelineLine} />

          {/* 2026 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2026</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> United Colours of North East India</li>
              <li><span className={styles.arrowGold}>↓</span> London Rongali Bihu</li>
              <li><span className={styles.arrowGold}>↓</span> Leicester Rongali Bihu</li>
            </ul>
          </div>

          {/* 2025 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2025</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> Shankar Jayanti</li>
              <li><span className={styles.arrowGold}>↓</span> Assam Sahitya Sabha</li>
            </ul>
          </div>

          {/* 2024 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2024</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> University of Nottingham Cultural Showcase</li>
            </ul>
          </div>

          {/* 2023 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2023</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> NLU Assam Abhiveera Stage</li>
              <li><span className={styles.arrowGold}>↓</span> Miss Congeniality Cultural Recital</li>
            </ul>
          </div>

          {/* 2022 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2022</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> Foundation Day Cultural Celebration</li>
              <li><span className={styles.arrowGold}>↓</span> Lachit Diwas 400th Birth Anniversary</li>
            </ul>
          </div>

          {/* 2021 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2021</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> Lachit Diwas Celebration</li>
            </ul>
          </div>

          {/* 2019 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2019</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> Climate Conference Cultural Prelude</li>
            </ul>
          </div>

          {/* 2017 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2017</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> Delhi University Classical Arts Fest</li>
            </ul>
          </div>

          {/* 2015 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2015</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> Cotton College Annual Festival</li>
            </ul>
          </div>

          {/* 2010 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2010</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> School State-level Cultural Competitions</li>
            </ul>
          </div>

          {/* 2003 */}
          <div className={styles.bigTimelineItem}>
            <div className={styles.bigYear}>2003</div>
            <div className={styles.bigTimelineDot} />
            <ul className={styles.bigTimelineList}>
              <li><span className={styles.arrowGold}>↓</span> First Stage Kathak Performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 7 — INTERNATIONAL CULTURAL REPRESENTATION (LUXURY GRID)
          ======================================================================== */}
      <section className={`${styles.section} ${styles.intlSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>✦ GLOBAL AMBASSADOR</span>
          <h2 className={styles.sectionTitle}>International Cultural Representation</h2>
        </div>

        <div className={styles.intlGrid}>
          {[
            {
              title: "London Rongali Bihu",
              loc: "United Kingdom",
              desc: "Representing Assamese folk and classical Kathak fusion before international audiences in London.",
              img: "/culture-london-rongali-bihu-poster-banner.jpg",
            },
            {
              title: "North East Festival",
              loc: "London, United Kingdom",
              desc: "Solo Kathak performance promoting Northeast Indian art and cultural heritage.",
              img: "/culture-northeast-festival-official-poster.jpg",
            },
            {
              title: "United Colours",
              loc: "United Kingdom",
              desc: "Multicultural classical dance recital fostering cross-border artistic dialogue.",
              img: "/cultural-heritage-london-stage.jpg",
            },
            {
              title: "Assam Sahitya Sabha",
              loc: "United Kingdom",
              desc: "Preserving literary and classical dance traditions across the UK diaspora.",
              img: "/culture-asam-sahitya-sabha-stage-recital.jpg",
            },
            {
              title: "University of Nottingham",
              loc: "Nottingham, UK",
              desc: "Academic and cultural integration through classical dance workshops and performances.",
              img: "/academics-hero-sofa.png",
            },
            {
              title: "Leicester Cultural Meet",
              loc: "Leicester, UK",
              desc: "Classical recital representing Indian heritage for diverse international communities.",
              img: "/kathak-london-rongali-bihu-2024.jpg",
            },
            {
              title: "High Commission Events",
              loc: "India House, London",
              desc: "Official diplomatic performances representing India's performing arts.",
              img: "/culture-high-commission-loktak-presentation.jpg",
            },
          ].map((item) => (
            <div key={item.title} className={styles.intlCard}>
              <div className={styles.intlImgWrap}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 380px"
                  className={styles.portraitImg}
                />
              </div>
              <div className={styles.intlContent}>
                <h3 className={styles.intlTitle}>{item.title}</h3>
                <span className={styles.intlLocation}>{item.loc}</span>
                <p className={styles.intlDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================
          SECTION 8 — COMMUNITY SERVICE (SPLIT LAYOUT)
          ======================================================================== */}
      <section className={`${styles.section} ${styles.communitySection}`}>
        <div className={styles.splitGrid}>
          <div className={styles.splitImageWrap}>
            <Image
              src="/academics-high-pavement-college-outreach.jpg"
              alt="Community Service and Volunteer Work"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.portraitImg}
            />
          </div>

          <div className={styles.splitContent}>
            <span className={styles.sectionKicker}>✦ SOCIAL IMPACT</span>
            <h2>Community Service &amp; Outreach</h2>
            <div className={styles.serviceList}>
              <div className={styles.serviceItem}><span className={styles.goldDot}>✦</span> Pro Bono Outreach</div>
              <div className={styles.serviceItem}><span className={styles.goldDot}>✦</span> National Service Scheme</div>
              <div className={styles.serviceItem}><span className={styles.goldDot}>✦</span> University of Delhi</div>
              <div className={styles.serviceItem}><span className={styles.goldDot}>✦</span> NLU Assam</div>
              <div className={styles.serviceItem}><span className={styles.goldDot}>✦</span> Ministry Projects</div>
              <div className={styles.serviceItem}><span className={styles.goldDot}>✦</span> Inclusive Education</div>
              <div className={styles.serviceItem}><span className={styles.goldDot}>✦</span> Volunteer Work</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 9 — TEACHING CHILDREN
          ======================================================================== */}
      <section className={`${styles.section} ${styles.teachingSection}`}>
        <div className={styles.teachingCard}>
          <div className={styles.teachingImgWrap}>
            <Image
              src="/about-gauri-bookshelf.jpg"
              alt="Teaching and Mentoring Children"
              fill
              sizes="(max-width: 900px) 100vw, 400px"
              className={styles.portraitImg}
            />
          </div>
          <div className={styles.teachingContent}>
            <span className={styles.sectionKicker}>✦ INCLUSIVE ART &amp; EDUCATION</span>
            <h2>Teaching &amp; Empowerment</h2>
            <ul className={styles.teachingList}>
              <li><span className={styles.goldDot}>✦</span> Ashalaya Educational Initiatives</li>
              <li><span className={styles.goldDot}>✦</span> Teaching Visually Impaired (Blind) Children</li>
              <li><span className={styles.goldDot}>✦</span> Teaching Hearing Impaired (Deaf) Children</li>
              <li><span className={styles.goldDot}>✦</span> Inclusive Arts Education &amp; Dance Movement</li>
              <li><span className={styles.goldDot}>✦</span> Social Responsibility &amp; Youth Mentorship</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 10 — GALLERY (MASONRY GRID - 18-24 REAL IMAGES)
          ======================================================================== */}
      <section className={`${styles.section} ${styles.gallerySection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>✦ VISUAL ARCHIVE</span>
          <h2 className={styles.sectionTitle}>Performance Gallery</h2>
        </div>

        <div className={styles.masonryGrid}>
          {galleryImages.map((img, idx) => (
            <div key={img.src + idx} className={styles.masonryItem}>
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={500}
                className={styles.masonryImg}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================
          SECTION 11 — AWARDS & MILESTONES (LUXURY COUNTER)
          ======================================================================== */}
      <section className={styles.awardsSection}>
        <div className={styles.statsGrid}>
          <div>
            <div className={styles.statNumber}>Visharad II</div>
            <div className={styles.statLabel}>Distinction Certification</div>
          </div>
          <div>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Years of Learning</div>
          </div>
          <div>
            <div className={styles.statNumber}>30+</div>
            <div className={styles.statLabel}>Major Performances</div>
          </div>
          <div>
            <div className={styles.statNumber}>UK &amp; India</div>
            <div className={styles.statLabel}>International Stages</div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 12 — PHILOSOPHY (LUXURY QUOTE)
          ======================================================================== */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteBox}>
          <p className={styles.quoteText}>
            &ldquo;Kathak is not merely movement. It is storytelling, discipline, identity, and devotion.&rdquo;
          </p>
          <div className={styles.quoteAuthor}>— Gauri Goswami</div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 13 — FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ======================================================================== */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>✦ INQUIRIES &amp; DETAILS</span>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqContainer}>
          {[
            {
              q: "What style of Kathak does Gauri perform?",
              a: "Gauri holds a Kathak Visharad-II distinction with classical training blending the graceful elegance of the Lucknow Gharana and the rhythmic precision of the Jaipur Gharana.",
            },
            {
              q: "Does she perform internationally?",
              a: "Yes. Gauri has represented India on international platforms including the High Commission of India (London), London Rongali Bihu, Northeast Festival London, and university forums across the UK.",
            },
            {
              q: "Can she conduct workshops and lecture-demonstrations?",
              a: "Yes. Gauri conducts classical Kathak workshops, rhythm math (Taal/Layakari) sessions, abhinaya masterclasses, and inclusive arts workshops for students of all backgrounds.",
            },
            {
              q: "Is she available for performances?",
              a: "Yes. She is available for solo classical recitals, diplomatic showcases, cultural festivals, and university performances.",
            },
            {
              q: "Can organizations invite her for collaboration?",
              a: "Organizations, cultural committees, educational institutions, and international festivals can invite Gauri through direct email inquiry.",
            },
          ].map((faq, index) => (
            <div
              key={faq.q}
              className={`${styles.faqItem} ${openFaq === index ? styles.faqItemOpen : ""}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.q}</span>
                <span className={styles.faqIcon}>
                  {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openFaq === index && <div className={styles.faqAnswer}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================
          SECTION 14 — BOOK PERFORMANCE (LARGE CTA)
          ======================================================================== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>Let&apos;s Celebrate Indian Heritage Together</h2>
          <div className={styles.ctaBadges}>
            <span className={styles.ctaBadgeItem}>✦ Book Cultural Performance</span>
            <span className={styles.ctaBadgeItem}>✦ Invite for Workshops</span>
            <span className={styles.ctaBadgeItem}>✦ Cultural Collaboration</span>
          </div>
          <a
            href={performanceInquiryUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.primaryBtn}
          >
            Book Performance <FaArrowRight />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Link href="/">
            <Image
              src="/brand-logo.png"
              alt="Gauri Goswami"
              width={96}
              height={96}
            />
          </Link>
          <p>
            Gauri Goswami is an Advocate, LL.M. in International Commercial Law, Kathak Visharad-II artist, researcher, and cultural ambassador.
          </p>
          <div className={styles.socials} aria-label="Social media links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/kathak">Kathak &amp; Dance</Link>
          <Link href="/gallery">Gallery</Link>
        </div>

        <div>
          <h3>Kathak Repertoire</h3>
          <Link href="/kathak#journey">Artistic Journey</Link>
          <Link href="/kathak#recitals">Stage Recitals</Link>
          <Link href="/kathak#timeline">Performance Timeline</Link>
          <a href={performanceInquiryUrl} target="_blank" rel="noreferrer">Book Performance</a>
        </div>

        <div>
          <h3>Get In Touch</h3>
          <a href="mailto:info@gaurigoswami.com">info@gaurigoswami.com</a>
          <a href="tel:+447587338945">+44 7587 338945 · United Kingdom</a>
          <p>New Delhi, India &amp; London, UK</p>
        </div>

        <div className={styles.copyright}>
          <span>© 2026 Gauri Goswami. All Rights Reserved.</span>
          <span>www.gaurigoswami.com</span>
        </div>
      </footer>
    </main>
  );
}
