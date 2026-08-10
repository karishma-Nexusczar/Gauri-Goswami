"use client";

import React, { useState, useRef } from "react";
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

  const [isEditorialExpanded, setIsEditorialExpanded] = useState(false);
  const [expandedMilestones, setExpandedMilestones] = useState<Record<number, boolean>>({});
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const [isTimelinePaused, setIsTimelinePaused] = useState(false);

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

  // Section 10 — Ghungroo Rotating Quotes & Subtitles State
  const ghungrooQuotes = React.useMemo(() => [
    "“A ghungroo is not just an ornament; it is the heartbeat of every dancer.”",
    "“When words fall silent, the ghungroo speaks through rhythm.”",
    "“Every chime carries a story of passion, discipline, and devotion.”",
    "“The sound of ghungroos is where tradition meets the soul.”",
    "“Great dancers don't just wear ghungroos—they earn their music.”",
    "“Every step with ghungroos is a tribute to timeless art.”",
    "“In every bell lies a dream waiting to dance.”",
    "“The sweetest melody begins beneath a dancer's feet.”"
  ], []);

  const ghungrooSubtitles = React.useMemo(() => [
    "Every Bell, A Beat of Heritage.",
    "Tied with Tradition, Moved by Passion.",
    "Where Every Step Sings.",
    "Heritage in Motion.",
    "Grace in Every Chime.",
    "Echoes of Elegance.",
    "From Tradition to Timeless Elegance."
  ], []);

  const [activeGhungrooQuoteIndex, setActiveGhungrooQuoteIndex] = useState(0);

  React.useEffect(() => {
    const quoteInterval = setInterval(() => {
      setActiveGhungrooQuoteIndex((prev) => (prev + 1) % ghungrooQuotes.length);
    }, 4500);
    return () => clearInterval(quoteInterval);
  }, [ghungrooQuotes.length]);

  const evolutionTrackRef = useRef<HTMLDivElement>(null);
  const artistCarouselRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isTimelinePaused) return;
    const interval = setInterval(() => {
      setActiveMilestoneIndex((prev) => {
        const nextIdx = (prev + 1) % 7;
        if (evolutionTrackRef.current) {
          evolutionTrackRef.current.scrollTo({
            left: nextIdx * 265,
            behavior: "smooth",
          });
        }
        return nextIdx;
      });
    }, 3800);
    return () => clearInterval(interval);
  }, [isTimelinePaused]);

  const handleNextTimelineSlide = () => {
    setActiveMilestoneIndex((prev) => {
      const nextIdx = (prev + 1) % 7;
      if (evolutionTrackRef.current) {
        evolutionTrackRef.current.scrollTo({
          left: nextIdx * 265,
          behavior: "smooth",
        });
      }
      return nextIdx;
    });
  };

  const handlePrevTimelineSlide = () => {
    setActiveMilestoneIndex((prev) => {
      const nextIdx = (prev - 1 + 7) % 7;
      if (evolutionTrackRef.current) {
        evolutionTrackRef.current.scrollTo({
          left: nextIdx * 265,
          behavior: "smooth",
        });
      }
      return nextIdx;
    });
  };

  const handleNextArtistSlide = () => {
    if (artistCarouselRef.current) {
      artistCarouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const handlePrevArtistSlide = () => {
    if (artistCarouselRef.current) {
      artistCarouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className={styles.page}>
      {/* HEADER (Full site Navbar) */}
      <Navbar currentPath="/kathak" />

      {/* ========================================================================
          SECTION 1 — HERO SECTION (EXACT MATCH FOR REFERENCE SCREENSHOT 2)
          ======================================================================== */}
      <section className={styles.hero} id="hero">
        {/* Right Side Full Length Uncropped Backdrop Artwork Pose */}
        <div className={styles.heroBackdropImageWrap}>
          <Image
            src="/kathak-red-spin-transparent.png"
            alt="Gauri Goswami Kathak Classical Dance Recital Full Transparent Cutout Pose"
            fill
            priority
            className={styles.heroBackdropImg}
            unoptimized
          />
          <div className={styles.heroBackdropOverlay} />
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroCopy}>
            <span className={styles.heroTagline}>ABOUT KATHAK</span>
            <h1 className={styles.heroTitle}>
              The Art That Shapes<br />
              Discipline, Identity<br />
              &amp; Cultural Heritage
            </h1>
            <p className={styles.heroSubtext}>
              A lifelong journey of rhythm, expression, storytelling and devotion — preserving the timeless traditions of Kathak while representing Assam and India on international stages.
            </p>
            <div className={styles.heroActions}>
              <a href="#journey" className={styles.primaryBtn}>
                EXPLORE JOURNEY →
              </a>
              <a href="#recitals" className={styles.secondaryBtn}>
                VIEW PERFORMANCES →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 2 — KATHAK INTRODUCTION (MORE THAN DANCE)
          ======================================================================== */}
      <section className={styles.introSection} id="about-kathak">
        <div id="journey" />
        <div className={styles.introContainer}>
          {/* Left Side: Real Kathak Classical Recital Mudra Studio Photograph (Cream Background) */}
          <div className={styles.introImageWrap}>
            <Image
              src="/kathak-intro-cream-pose.jpg"
              alt="Gauri Goswami Kathak Classical Dance Mudra Pose"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.introImg}
              priority
            />
          </div>

          {/* Right Side: Content Box with Warm Cream Theme & Watermark */}
          <div className={styles.introContentWrap}>
            {/* Right End Kathak Red Spin Image Artwork */}
            <div className={styles.introWatermark} aria-hidden="true">
              <Image
                src="/kathak-spin-watermark-processed.png"
                alt=""
                fill
                sizes="420px"
                className={styles.watermarkImg}
                unoptimized
              />
            </div>

            <div className={styles.introTextInner}>
              <span className={styles.introKicker}>MORE THAN DANCE</span>

              <h2 className={styles.introHeading}>
                More Than Dance. A Lifelong Connection.
              </h2>

              <div className={styles.introDivider}>
                <span className={styles.introDividerLine}></span>
                <span className={styles.introDividerSymbol}>❖</span>
                <span className={styles.introDividerLine}></span>
              </div>

              <div className={styles.introBody}>
                <p>
                  For Gauri, Kathak is more than a dance form—it is a lifelong pursuit of artistic excellence, self-expression, and cultural preservation.
                </p>
                <p>
                  Her journey through classical dance has been shaped by disciplined training, expressive storytelling and a deep connection with India&apos;s cultural heritage.
                </p>
                <p>
                  Through every performance, she seeks to preserve tradition while creating a meaningful connection with audiences.
                </p>
              </div>

              <div className={styles.introAction}>
                <a href="#timeline" className={styles.readJourneyBtn}>
                  EXPLORE MY JOURNEY <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 3 — STANDALONE ARTISTIC JOURNEY (EDITORIAL DARK LUXURY THEME)
          ======================================================================== */}
      <section className={styles.artisticMasterSection} id="artist-journey">
        <div className={styles.artisticMasterContainer}>
          
          {/* 1. SECTION HEADER */}
          <div className={styles.artisticHeaderBlock}>
            <span className={styles.artisticKicker}>ARTISTIC JOURNEY</span>
            <div className={styles.kickerLotusIcon}>❖</div>
            <h2 className={styles.artisticMainHeading}>
              A Journey in Rhythm, Discipline &amp; Expression
            </h2>
            <div className={styles.artisticFlowSubLine}>
              <span>From Childhood</span>
              <span className={styles.flowArrow}>→</span>
              <span>Training</span>
              <span className={styles.flowArrow}>→</span>
              <span>Kathak Recitals</span>
              <span className={styles.flowArrow}>→</span>
              <span>Cultural Representation</span>
            </div>
            <div className={styles.thinGoldHeaderDivider} />
          </div>

          {/* 2. MAIN EDITORIAL AREA (55% LEFT / 45% RIGHT) */}
          <div className={styles.editorialGridArea}>
            {/* LEFT 55%: GAURI'S REAL PHOTOGRAPH */}
            <div className={styles.editorialLeft55}>
              <div className={styles.editorialImageFrame}>
                <Image
                  src="/artistic-journey-stage-left.jpg"
                  alt="Gauri Goswami Performing Kathak Recital"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className={styles.editorialRealImg}
                  priority
                  unoptimized
                />
                <div className={styles.imageSubtleGoldBorder} />
                <div className={styles.imageOverlayTag}>
                  KATHAK • SĀDHANA • EXPRESSION
                </div>
              </div>
            </div>

            {/* RIGHT 45%: EDITORIAL TEXT BLOCK */}
            <div className={styles.editorialRight45}>
              <span className={styles.editorialEyebrow}>A LIFELONG PRACTICE</span>
              <h3 className={styles.editorialRightTitle}>
                Kathak has been a lifelong journey of rhythm, grace, discipline, storytelling, and devotion for Gauri Goswami.
              </h3>
              
              <div className={styles.editorialTextParagraphs}>
                <p>
                  My journey with Kathak began at the age of five. I still cherish the memories of walking into my dance school with a tiny pair of ghungroos around my ankles, learning my very first bols — “Ta Thei Thei Tat.” Those early steps marked the beginning of a lifelong passion for this beautiful classical dance form.
                </p>
                {isEditorialExpanded && (
                  <>
                    <p>
                      My Kathak journey continued through dedicated training under accomplished gurus including Shri Bipul Das, Smt. Moromi Medhi, and Megharanjani Medhi, alongside guidance and workshops with legendary Kathak maestros Pt. Birju Maharaj and Smt. Saswati Sen.
                    </p>
                    <p>
                      Gauri also credits her mother as her greatest inspiration, whose guidance and support nurtured her dedication to rhythm, grace, discipline, and cultural heritage from the very beginning.
                    </p>
                  </>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsEditorialExpanded(!isEditorialExpanded)}
                className={styles.highlightedJourneyBtn}
              >
                {isEditorialExpanded ? "READ LESS ↑" : "READ MORE ↓"}
              </button>
            </div>
          </div>

          {/* 3. SECOND PART — EVOLUTION TIMELINE (AUTOMATIC MOTION CAROUSEL) */}
          <div className={styles.evolutionTimelineBlock} id="evolution-timeline">
            <div className={styles.timelineHeaderBox}>
              <span className={styles.timelineSectionKicker}>THE EVOLUTION OF THE ARTIST</span>
              <div className={styles.kickerLotusIcon}>❖</div>
            </div>

            <div className={styles.evolutionCarouselContainer}>
              <button
                type="button"
                onClick={handlePrevTimelineSlide}
                aria-label="Previous Milestone"
                className={`${styles.carouselNavArrow} ${styles.evolutionNavLeft}`}
              >
                ‹
              </button>

              <div className={styles.evolutionTrackWrapper} ref={evolutionTrackRef}>
                <div className={styles.evolutionMarqueeTrack}>
                  {(() => {
                    const singleSet = [
                      {
                        year: "AGE 5",
                        title: "THE FIRST GHUNGROOS",
                        desc: "My journey with Kathak began at the age of five. I still cherish the memories of walking into my dance school with a tiny pair of ghungroos around my ankles and learning my very first bols — “Ta Thei Thei Tat.”",
                        isFeatured: false,
                      },
                      {
                        year: "2013",
                        title: "KATHAK WORKSHOP & GROUP PRESENTATION",
                        desc: "Participated in a Kathak workshop conducted by the legendary Pt. Birju Maharaj and renowned Kathak exponent Smt. Saswati Sen in Guwahati, Assam, India.\n\nAlso performed in a Kathak group presentation at the Guwahati Medical College Auditorium under the guidance of Shri Bipul Das, Smt. Moromi Medhi and Megharanjani Medhi.",
                        isFeatured: false,
                      },
                      {
                        year: "2015",
                        title: "CLASSICAL KATHAK RECITALS",
                        desc: "Performed pure classical Kathak recitals at the Cotton College Auditorium, Guwahati, Assam, India, demonstrating Nritta and Nritya, with Bhav, Abhinaya, Tatkar, Chakkars, Laya and Taal, accompanied by live Tabla and Harmonium.",
                        isFeatured: false,
                      },
                      {
                        year: "2017",
                        title: "VISHARAD PART-II — DISTINCTION",
                        desc: "Successfully completed Visharad Part-II in Kathak from Bhatkhande Sangeet Vidyapith, Lucknow, with Distinction in both practical and theory examinations.\n\nAlso presented a pure classical Kathak performance at Rajdhani College, University of Delhi.",
                        isFeatured: true,
                      },
                      {
                        year: "2018",
                        title: "KATHAK AT LAXMIBAI COLLEGE",
                        desc: "Performed at the Annual Cultural Fest of Laxmibai College, University of Delhi, showcasing the elegance and richness of the Kathak classical dance tradition through Tatkār, Chakkars, Abhinaya, Bhāva, Hasta Mudrās, Nṛtta and Nritya.",
                        isFeatured: false,
                      },
                      {
                        year: "2024",
                        title: "UNIVERSITY OF NOTTINGHAM PERFORMANCE",
                        desc: "Performed at the University of Nottingham Scholarship Celebration in November 2024, held at the Great Hall, Trent Building, University of Nottingham, Nottingham, United Kingdom.",
                        isFeatured: false,
                      },
                      {
                        year: "2025–2026",
                        title: "CULTURAL REPRESENTATION IN THE UNITED KINGDOM",
                        desc: "Continued participating in cultural performances in the United Kingdom, including Shankar Jayanti, Assam Sahitya Sabha, Leicester Rongali Bihu, London Rongali Bihu, and United Colours of North East India.\n\n2025:\n• Shankar Jayanti — group performance on Guxai Naas & Raghunath Saranam, London\n• Assam Sahitya Sabha — traditional folk dance representing Assam, London\n\n2026:\n• Leicester Rongali Bihu — cultural performance\n• London Rongali Bihu — Bihu dance representing Assam\n• United Colours of North East India — group folk dance representing the seven sisters of Northeast India; cultural show & fashion show, London",
                        isFeatured: false,
                      },
                    ];
                    return [...singleSet, ...singleSet, ...singleSet, ...singleSet].map((item, idx) => {
                      const isCardActive = activeMilestoneIndex === (idx % 7);
                      return (
                        <div
                          key={`${item.year}-${idx}`}
                          onClick={() => {
                            setActiveMilestoneIndex(idx % 7);
                            if (evolutionTrackRef.current) {
                              evolutionTrackRef.current.scrollTo({
                                left: (idx % 7) * 265,
                                behavior: "smooth",
                              });
                            }
                          }}
                          className={`${styles.evolutionCardItem} ${item.isFeatured ? styles.evolutionCardFeatured : ''} ${isCardActive ? styles.evolutionCardActive : ''} ${expandedMilestones[idx] ? styles.evolutionCardItemExpanded : ''}`}
                        >
                      <div>
                        <div className={styles.evolutionCardHeader}>
                          <span className={styles.evolutionYearBadge}>{item.year}</span>
                          {item.isFeatured && <span className={styles.featuredBadgeTag}>★ DISTINCTION</span>}
                        </div>
                        <h4 className={styles.evolutionCardTitle}>{item.title}</h4>
                        <p className={`${styles.evolutionCardDesc} ${expandedMilestones[idx] ? styles.evolutionCardDescExpanded : ''}`}>
                          {item.desc}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setExpandedMilestones((prev) => ({
                            ...prev,
                            [idx]: !prev[idx],
                          }));
                        }}
                        className={styles.cardReadMoreBtn}
                      >
                        {expandedMilestones[idx] ? "Read Less ↑" : "Read More ↓"}
                      </button>
                    </div>
                  );
                });
              })()}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNextTimelineSlide}
                aria-label="Next Milestone"
                className={`${styles.carouselNavArrow} ${styles.evolutionNavRight}`}
              >
                ›
              </button>
            </div>
          </div>

          {/* 4. THIRD PART — THE ARTIST'S JOURNEY CAROUSEL */}
          <div className={styles.artistsJourneyCarouselBlock}>
            <div className={styles.timelineHeaderBox}>
              <span className={styles.timelineSectionKicker}>THE ARTIST'S JOURNEY</span>
              <div className={styles.kickerLotusIcon}>❖</div>
            </div>

            <div
              className={styles.carouselStageContainer}
              onMouseEnter={() => setIsTimelinePaused(true)}
              onMouseLeave={() => setIsTimelinePaused(false)}
            >
              <button
                type="button"
                onClick={handlePrevArtistSlide}
                aria-label="Previous Slide"
                className={`${styles.carouselNavArrow} ${styles.carouselNavLeft}`}
              >
                ‹
              </button>

              <div className={styles.carouselTrackWrapper} ref={artistCarouselRef}>
                <div className={styles.carouselMarqueeTrack}>
                  {(() => {
                    const artistCards = [
                      {
                        title: "CHILDHOOD",
                        subtitle: "The journey begins",
                        detail: "Age 5 • First ghungroos • “Ta Thei Thei Tat”",
                        img: "/card-childhood.jpg",
                        icon: "/icon-childhood-gold.png",
                      },
                      {
                        title: "WORKSHOP",
                        subtitle: "Learning from legendary Kathak exponents",
                        detail: "Pt. Birju Maharaj • Smt. Saswati Sen • 2013",
                        img: "/birju-maharaj-saswati-sen-kathak-workshop-certificate.png",
                        icon: "/icon-performances-gold.png",
                      },
                      {
                        title: "GUIDANCE",
                        subtitle: "Performance & artistic guidance",
                        detail: "Shri Bipul Das • Smt. Moromi Medhi • Megharanjani Medhi",
                        img: "/card-training.jpg",
                        icon: "/icon-training-gold.png",
                      },
                      {
                        title: "VISHARAD",
                        subtitle: "A major classical milestone",
                        detail: "Visharad Part-II • Distinction • 2017",
                        img: "/bhatkhande-visharad-kathak-certificate.png",
                        icon: "/icon-journey-gold.png",
                      },
                      {
                        title: "RECITALS",
                        subtitle: "Rhythm meets expression",
                        detail: "Kathak performances • 2013–2018",
                        img: "/card-recitals.jpg",
                        icon: "/icon-performances-gold.png",
                      },
                      {
                        title: "CULTURAL REPRESENTATION",
                        subtitle: "Indian heritage on international platforms",
                        detail: "United Kingdom • 2024–2026",
                        img: "/card-representation.jpg",
                        icon: "/icon-representation-gold.png",
                      },
                    ];
                    return [...artistCards, ...artistCards].map((card, idx) => (
                      <div key={`${card.title}-${idx}`} className={styles.editorialMuseumCard}>
                        {/* Top Thumbnail Image */}
                        <div className={styles.cardImageHeader}>
                          <Image
                            src={card.img}
                            alt={card.title}
                            fill
                            className={styles.cardHeaderImg}
                            unoptimized
                          />
                          {/* Overlaid Gold Circular Icon Badge */}
                          <div className={styles.cardIconBadgeWrap}>
                            <Image
                              src={card.icon}
                              alt=""
                              width={22}
                              height={22}
                              className={styles.cardIconBadgeImg}
                              unoptimized
                            />
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className={styles.cardContentBody}>
                          <h4 className={styles.cardTitleText}>{card.title}</h4>
                          <p className={styles.cardSubtitleText}>{card.subtitle}</p>
                          <p className={styles.cardDetailText}>{card.detail}</p>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNextArtistSlide}
                aria-label="Next Slide"
                className={`${styles.carouselNavArrow} ${styles.carouselNavRight}`}
              >
                ›
              </button>
            </div>
          </div>

          {/* 5. FINAL QUOTE AREA & BOTTOM FOOTER STRIP */}
          <div className={styles.finalQuoteArea}>
            <div className={styles.bgQuoteMark}>“</div>
            <blockquote className={styles.finalQuoteText}>
              For me, Kathak is more than a dance form—it is a journey of grace, discipline, storytelling, and self-expression that continues to shape who I am today.
            </blockquote>
            <cite className={styles.finalQuoteAuthor}>— Gauri Goswami</cite>

            <div className={styles.bottomFooterStrip}>
              <span>RHYTHM</span>
              <span className={styles.stripDot}>•</span>
              <span>GRACE</span>
              <span className={styles.stripDot}>•</span>
              <span>DISCIPLINE</span>
              <span className={styles.stripDot}>•</span>
              <span>HERITAGE</span>
            </div>
          </div>

        </div>
      </section>



      {/* ========================================================================
          SECTION 4 — GURUS & LINEAGE (HERITAGE WARM IVORY THEME)
          ======================================================================== */}
      <section className={styles.gurusLineageSection} id="gurus-training">
        <div className={styles.gurusContainer}>
          <div className={styles.gurusHeaderBlock}>
            <span className={styles.gurusKicker}>✦ HERITAGE &amp; PEDAGOGY</span>
            <h2 className={styles.gurusMainHeading}>The Gurus Who Shaped My Journey</h2>
          </div>

          {/* Horizontal Lineage Design */}
          <div className={styles.lineageFlowWrapper}>
            <div className={styles.lineageFlowTrack}>
              {[
                "Childhood Training",
                "Khagen Goswami",
                "Bipul Das",
                "Mother & Early Guidance",
                "Pt. Birju Maharaj Workshop",
                "Saswati Sen",
                "Moromi Medhi",
                "Megharanjani Medhi",
                "Visharad — Bhatkhande Sangeet Vidyapith",
              ].map((item, index, array) => (
                <React.Fragment key={item}>
                  <div className={styles.lineageNode}>
                    <span className={styles.lineageNodeTitle}>{item}</span>
                  </div>
                  {index < array.length - 1 && (
                    <div className={styles.lineageConnector}>
                      <span className={styles.lineageArrowSymbol}>→</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Content Text Paragraphs */}
          <div className={styles.gurusContentBox}>
            <p className={styles.gurusParagraph}>
              I have been trained in Kathak since childhood under the guidance of several distinguished gurus, including Khagen Goswami, Bipul Das, and my mother, who laid the foundation of my artistic journey.
            </p>
            <p className={styles.gurusParagraph}>
              I have also attended workshops conducted by Pt. Birju Maharaj, as well as Kathak exponents Moromi Medhi and Megharanjani Medhi.
            </p>
            <p className={styles.gurusParagraph}>
              I hold the Visharad degree in Kathak from Bhatkhande Sangeet Vidyapith, Lucknow, reflecting my formal training within its esteemed lineage.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 5 — KATHAK TRAINING / VISHARAD (QUALIFICATION HIGHLIGHT)
          ======================================================================== */}
      <section className={styles.visharadSection} id="visharad-qualification">
        <div className={styles.visharadContainer}>
          <div className={styles.visharadCardFrame}>
            <div className={styles.visharadCornerTL} />
            <div className={styles.visharadCornerTR} />
            <div className={styles.visharadCornerBL} />
            <div className={styles.visharadCornerBR} />

            <span className={styles.visharadBadgeTag}>2017 ★ DISTINCTION</span>

            <h2 className={styles.visharadMainTitle}>KATHAK VISHARAD</h2>

            <div className={styles.visharadInstitution}>
              Bhatkhande Sangeet Vidyapith
            </div>
            <div className={styles.visharadLocation}>
              Lucknow
            </div>

            <div className={styles.visharadGoldDividerLine} />

            <div className={styles.visharadCertificationSub}>
              Classical Kathak Certification — 2017
            </div>
            <div className={styles.visharadTrainingDetail}>
              Formal Classical Training
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 6 — WORKSHOPS & MASTERCLASSES (CLEAN TIMELINE)
          ======================================================================== */}
      <section className={styles.cleanWorkshopsTimelineSection} id="workshops-masterclasses">
        <div className={styles.cleanWorkshopsContainer}>
          <div className={styles.cleanWorkshopsHeader}>
            <span className={styles.cleanWorkshopsKicker}>✦ WORKSHOPS &amp; MASTERCLASSES</span>
            <h2 className={styles.cleanWorkshopsTitle}>Learning From the Masters</h2>
          </div>

          <div className={styles.cleanWorkshopsTimelineTrack}>
            <div className={styles.cleanTimelineVerticalLine} />

            {/* 2013 Pandit Birju Maharaj */}
            <div className={styles.cleanTimelineItem}>
              <span className={styles.cleanTimelineBadge}>2013</span>
              <div className={styles.cleanTimelineDot} />
              <div className={styles.cleanTimelineContent}>
                <h3 className={styles.cleanTimelineWorkshopTitle}>Kathak Workshop</h3>
                <div className={styles.cleanTimelineMaestro}>
                  Pandit Birju Maharaj — Guwahati, Assam
                </div>
                <p className={styles.cleanTimelineDesc}>
                  Successfully completed a Kathak dance workshop conducted by Pandit Birju Maharaj, gaining exposure to the classical Indian dance tradition under one of its most celebrated maestros.
                </p>
              </div>
            </div>

            {/* 2014 Ashim Baishya */}
            <div className={styles.cleanTimelineItem}>
              <span className={styles.cleanTimelineBadge}>2014</span>
              <div className={styles.cleanTimelineDot} />
              <div className={styles.cleanTimelineContent}>
                <h3 className={styles.cleanTimelineWorkshopTitle}>Modern Dance Workshop</h3>
                <div className={styles.cleanTimelineMaestro}>
                  Ashim Baishya
                </div>
                <p className={styles.cleanTimelineDesc}>
                  Expanded technical skills and artistic versatility across contemporary dance forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 7 — PERFORMANCE JOURNEY (MAJOR VISUAL SHOWCASE - BLACK THEME)
          ======================================================================== */}
      <section className={styles.performanceJourneyMajorSection} id="performances">
        <div className={styles.pjContainer}>
          <div className={styles.pjHeaderBlock}>
            <span className={styles.pjKicker}>PERFORMANCE JOURNEY</span>
            <h2 className={styles.pjMainHeading}>Performing Tradition Across Borders</h2>
            <p className={styles.pjIntroText}>
              Throughout her journey, Gauri has performed at cultural events and artistic platforms, using dance as a medium to connect with audiences and celebrate India&apos;s classical and cultural traditions.
            </p>
          </div>

          {/* 3-Image Single Row Grid */}
          <div className={styles.pj3ImageRow}>
            <div className={styles.pjImageCard}>
              <div className={styles.pjImageCardFrame}>
                <Image
                  src="/pj-1.jpg"
                  alt="Kathak Recital Red Spin"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className={styles.pjRealImg}
                  priority
                  unoptimized
                />
              </div>
            </div>

            <div className={styles.pjImageCard}>
              <div className={styles.pjImageCardFrame}>
                <Image
                  src="/pj-2.jpg"
                  alt="Kathak Recital Cream & Red Pose"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className={styles.pjRealImg}
                  priority
                  unoptimized
                />
              </div>
            </div>

            <div className={styles.pjImageCard}>
              <div className={styles.pjImageCardFrame}>
                <Image
                  src="/pj-3.jpg"
                  alt="Kathak Recital Teal Pose"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className={styles.pjRealImg}
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 8 — CULTURAL AMBASSADOR (SPLIT LAYOUT: IMAGE LEFT + TEXT RIGHT)
          ======================================================================== */}
      <section className={styles.culturalAmbassadorSection} id="cultural-heritage">
        <div className={styles.caContainer}>
          <div className={styles.caGrid}>
            {/* Left 50%: Large Real Performance Image */}
            <div className={styles.caImageColumn}>
              <div className={styles.caImageFrame}>
                <Image
                  src="/kathak-jaapi-stage-recital.jpg"
                  alt="Gauri Goswami Cultural Ambassador Traditional Performance with Jaapi &amp; Gamusa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className={styles.caRealImg}
                  priority
                  unoptimized
                />
                <div className={styles.caImageGoldBorder} />
                <div className={styles.caImageBadge}>
                  UK &amp; INTERNATIONAL STAGES
                </div>
              </div>
            </div>

            {/* Right 50%: Text Column */}
            <div className={styles.caTextColumn}>
              <span className={styles.caEyebrow}>CULTURAL AMBASSADOR</span>
              <h2 className={styles.caMainHeading}>From the Stage to the World</h2>
              <div className={styles.caSubtitle}>
                Representing Indian culture through dance
              </div>

              <div className={styles.caParagraphs}>
                <p>
                  Beyond her legal career, Gauri has actively represented Indian cultural heritage through performances in the United Kingdom.
                </p>
                <p>
                  She has represented Assam at cultural events including the North East Festival London and London Rongali Bihu, performing traditional Assamese folk dances and showcasing the richness of Northeast India&apos;s cultural traditions.
                </p>
                <p>
                  Her cultural contributions have also been recognised through traditional honours including the Japi and Gamusa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 9 — KATHAK + ASSAMESE CULTURE (SPLIT SCREEN: HERITAGE THEME)
          ======================================================================== */}
      <section className={styles.assameseCultureSection} id="kathak-assamese-culture">
        <div className={styles.acContainer}>
          <div className={styles.acGrid}>
            {/* Left Column: Assamese Cultural Performance Photograph */}
            <div className={styles.acImageColumn}>
              <div className={styles.acImageFrame}>
                <Image
                  src="/cultural-representation-northeast.jpg"
                  alt="Gauri Goswami Traditional Assamese Cultural Performance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className={styles.acRealImg}
                  priority
                  unoptimized
                />
                <div className={styles.acImageOverlayGradient} />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className={styles.acTextColumn}>
              <span className={styles.acEyebrow}>HERITAGE &amp; IDENTITY</span>
              <h2 className={styles.acMainHeading}>
                Where Classical Expression Meets Cultural Heritage
              </h2>

              <div className={styles.acParagraphs}>
                <p>
                  Growing up in a traditional Assamese family, Gauri has always remained deeply connected to the cultural traditions of Assam.
                </p>
                <p>
                  Dance has provided a bridge between her Indian roots and her international journey, allowing her to share the richness of Indian culture with audiences beyond India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 10 — GHUNGROO FEATURE SECTION (FINAL MINIMAL PREMIUM DESIGN)
          ======================================================================== */}
      <section className={styles.ghungrooArtisticSection} id="ghungroo-feature">
        <div className={styles.ghungrooContainer}>
          
          {/* Eyebrow & Headings */}
          <span className={styles.ghungrooEyebrow}>THE SOUND OF KATHAK</span>

          <h2 className={styles.ghungrooMainHeading}>
            Where Art Finds Its Sound.
          </h2>

          <div key={`sub-${activeGhungrooQuoteIndex}`} className={styles.ghungrooSecondaryLine}>
            {ghungrooSubtitles[activeGhungrooQuoteIndex % ghungrooSubtitles.length]}
          </div>

          {/* Hero Visual: Authentic Ghungroo Frame */}
          <div className={styles.ghungrooHeroFrame}>
            <Image
              src="/ghungroo-close-up.jpg"
              alt="Authentic Kathak Ghungroo Close-Up Ankle Bells with Alta"
              fill
              sizes="(max-width: 768px) 300px, 440px"
              className={styles.ghungrooHeroImg}
              priority
              unoptimized
            />
            <div className={styles.ghungrooSubtleGlowOverlay} />
          </div>

          {/* Rotating Main Quote */}
          <div className={styles.ghungrooQuoteRotator}>
            <blockquote key={activeGhungrooQuoteIndex} className={styles.ghungrooActiveQuote}>
              {ghungrooQuotes[activeGhungrooQuoteIndex]}
            </blockquote>
          </div>

          <div className={styles.ghungrooThinGoldLine} />

          {/* Supporting Text */}
          <p className={styles.ghungrooSupportingText}>
            The sound of ghungroos is where tradition meets the soul. Every chime carries a story of passion, discipline, and devotion.
          </p>

          {/* Small Bottom Line */}
          <div className={styles.ghungrooBottomHeritageLine}>
            HERITAGE IN MOTION • GRACE IN EVERY CHIME
          </div>

        </div>
      </section>

      {/* ========================================================================
          STEP 11 — PERFORMANCE PHILOSOPHY
          ======================================================================== */}
      <section className={styles.philosophySection} id="artistic-expression">
        <div className={styles.philosophyContainer}>
          <span className={styles.philosophyEyebrow}>PERFORMANCE PHILOSOPHY</span>

          <div className={styles.philosophyWordsGrid}>
            <div className={styles.philosophyCard}>
              <h2 className={styles.philosophyWord}>DISCIPLINE</h2>
              <p className={styles.philosophySub}>Precision in every movement.</p>
            </div>
            <div className={styles.philosophyCard}>
              <h2 className={styles.philosophyWord}>EXPRESSION</h2>
              <p className={styles.philosophySub}>Emotion beyond words.</p>
            </div>
            <div className={styles.philosophyCard}>
              <h2 className={styles.philosophyWord}>DEVOTION</h2>
              <p className={styles.philosophySub}>Respect for a timeless tradition.</p>
            </div>
          </div>

          <p className={styles.philosophySummary}>
            Her performances reflect a harmonious blend of technical precision and emotional expression, embodying the essence of Kathak&apos;s storytelling tradition.
          </p>
        </div>
      </section>

      {/* ========================================================================
          STEP 12 — GALLERY / FEATURED MOMENTS (SIMPLE & ELEGANT REAL PHOTO GRID)
          ======================================================================== */}
      <section className={styles.galleryFeaturedSection} id="featured-moments">
        <div className={styles.gfContainer}>
          <div className={styles.gfHeader}>
            <span className={styles.gfKicker}>FEATURED MOMENTS</span>
            <h2 className={styles.gfTitle}>Moments Through the Lens</h2>
            <p className={styles.gfSubTitle}>
              Selected stage performances and cultural representations across India and the United Kingdom.
            </p>
          </div>

          <div className={styles.gfThreeColGrid}>
            {/* Card 1 */}
            <div className={styles.gfCard}>
              <div className={styles.gfImageFrame}>
                <Image
                  src="/pj-1.jpg"
                  alt="Classical Kathak Recital on Stage"
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  className={styles.gfImgFramed}
                  unoptimized
                />
              </div>
              <div className={styles.gfCardMeta}>
                <span className={styles.gfCardKicker}>STAGE PERFORMANCE</span>
                <h3 className={styles.gfCardHeader}>Classical Kathak Recital</h3>
                <p className={styles.gfCardText}>
                  Expressive abhinaya, intricate footwork and storytelling on international stages.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.gfCard}>
              <div className={styles.gfImageFrame}>
                <Image
                  src="/pj-2.jpg"
                  alt="Assamese Traditional Dance Representation"
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  className={styles.gfImgFramed}
                  unoptimized
                />
              </div>
              <div className={styles.gfCardMeta}>
                <span className={styles.gfCardKicker}>CULTURAL AMBASSADOR</span>
                <h3 className={styles.gfCardHeader}>Assamese Cultural Heritage</h3>
                <p className={styles.gfCardText}>
                  Representing Assam through traditional folk forms and cultural honours.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.gfCard}>
              <div className={styles.gfImageFrame}>
                <Image
                  src="/pj-3.jpg"
                  alt="Northeast India Stage Performance"
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  className={styles.gfImgFramed}
                  unoptimized
                />
              </div>
              <div className={styles.gfCardMeta}>
                <span className={styles.gfCardKicker}>INTERNATIONAL DIPLOMACY</span>
                <h3 className={styles.gfCardHeader}>Northeast India Showcase</h3>
                <p className={styles.gfCardText}>
                  Promoting Indian heritage and cross-cultural dialogue across the United Kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 13 — ARTISTIC HIGHLIGHTS (PRACTICE BEHIND THE PERFORMANCE)
          ======================================================================== */}
      <section className={styles.practiceHighlightsSection} id="practice-highlights">
        <div className={styles.phContainer}>
          <div className={styles.phHeader}>
            <span className={styles.phKicker}>ARTISTIC HIGHLIGHTS</span>
            <h2 className={styles.phTitle}>The Practice Behind the Performance</h2>
          </div>

          <div className={styles.phHorizontalStrip}>
            <div className={styles.phStripCard}>
              <div className={styles.phCardIcon}>✦</div>
              <h3 className={styles.phCardTitle}>Classical Training</h3>
              <p className={styles.phCardDesc}>Formal Kathak training and Visharad qualification.</p>
            </div>
            <div className={styles.phStripCard}>
              <div className={styles.phCardIcon}>✦</div>
              <h3 className={styles.phCardTitle}>Guru Tradition</h3>
              <p className={styles.phCardDesc}>Learning through distinguished teachers and workshops.</p>
            </div>
            <div className={styles.phStripCard}>
              <div className={styles.phCardIcon}>✦</div>
              <h3 className={styles.phCardTitle}>Expression</h3>
              <p className={styles.phCardDesc}>Developing abhinaya, storytelling and emotional expression.</p>
            </div>
            <div className={styles.phStripCard}>
              <div className={styles.phCardIcon}>✦</div>
              <h3 className={styles.phCardTitle}>Performance</h3>
              <p className={styles.phCardDesc}>Presenting dance across cultural and artistic platforms.</p>
            </div>
            <div className={styles.phStripCard}>
              <div className={styles.phCardIcon}>✦</div>
              <h3 className={styles.phCardTitle}>Preservation</h3>
              <p className={styles.phCardDesc}>Keeping Indian classical and cultural traditions alive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 14 — KATHAK & LEGAL IDENTITY (LAW × KATHAK COMPARISON)
          ======================================================================== */}
      <section className={styles.lawKathakSection} id="law-kathak-identity">
        <div className={styles.lkContainer}>
          <div className={styles.lkHeader}>
            <span className={styles.lkKicker}>PERSONAL BRAND IDENTITY</span>
            <h2 className={styles.lkTitle}>Two Paths. One Identity.</h2>
          </div>

          <div className={styles.lkComparisonGrid}>
            <div className={styles.lkColumn}>
              <h3 className={styles.lkColHeader}>LAW</h3>
              <ul className={styles.lkList}>
                <li><span className={styles.lkDot}>✦</span> Discipline</li>
                <li><span className={styles.lkDot}>✦</span> Research</li>
                <li><span className={styles.lkDot}>✦</span> Precision</li>
                <li><span className={styles.lkDot}>✦</span> Advocacy</li>
                <li><span className={styles.lkDot}>✦</span> Communication</li>
                <li><span className={styles.lkDot}>✦</span> Cultural understanding</li>
              </ul>
            </div>

            <div className={styles.lkCenterDivider} />

            <div className={styles.lkColumn}>
              <h3 className={styles.lkColHeader}>KATHAK</h3>
              <ul className={styles.lkList}>
                <li><span className={styles.lkDot}>✦</span> Discipline</li>
                <li><span className={styles.lkDot}>✦</span> Practice</li>
                <li><span className={styles.lkDot}>✦</span> Precision</li>
                <li><span className={styles.lkDot}>✦</span> Expression</li>
                <li><span className={styles.lkDot}>✦</span> Storytelling</li>
                <li><span className={styles.lkDot}>✦</span> Cultural preservation</li>
              </ul>
            </div>
          </div>

          <p className={styles.lkSummaryText}>
            The discipline developed through Kathak complements Gauri&apos;s professional journey in law. Focus, communication, confidence, patience and attention to detail are qualities that connect both worlds.
          </p>
        </div>
      </section>

      {/* ========================================================================
          STEP 15 — ARTISTIC STATEMENT
          ======================================================================== */}
      <section className={styles.artisticStatementSection} id="artistic-statement">
        <div className={styles.asContainer}>
          <span className={styles.asKicker}>ARTISTIC STATEMENT</span>
          <h2 className={styles.asTitle}>Dance as Storytelling</h2>

          <div className={styles.asTextParagraphs}>
            <p>
              As an artist, Gauri sees creativity as a way to express emotions, ideas and personal experiences.
            </p>
            <p>
              Through dance, she strives to create meaningful experiences that evoke emotion, spark curiosity and encourage audiences to see beauty from a fresh perspective.
            </p>
            <p>
              She believes art has the power to connect people, tell stories and inspire positive change.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 16 — PERSONAL REFLECTION (IVORY THEME)
          ======================================================================== */}
      <section className={styles.personalReflectionSection} id="personal-reflection">
        <div className={styles.prContainer}>
          <span className={styles.prKicker}>PERSONAL REFLECTION</span>
          <h2 className={styles.prTitle}>A Lifelong Relationship With Dance</h2>

          <div className={styles.prTextParagraphs}>
            <p>
              For Gauri Goswami, Kathak remains more than a performing art; it represents a lifelong connection to culture, creativity and self-expression.
            </p>
            <p>
              The skills developed through Kathak—confidence, communication, focus and emotional expression—have complemented her professional life as a lawyer.
            </p>
            <p>
              Her journey demonstrates how artistic pursuits and professional ambitions can enrich one another, creating a more complete and meaningful career.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================
          STEP 17 — FINAL QUOTE (FULL-WIDTH BLACK SECTION)
          ======================================================================== */}
      <section className={styles.finalQuoteSection} id="final-quote">
        <div className={styles.fqContainer}>
          <blockquote className={styles.fqHugeText}>
            &ldquo;Every step with ghungroos is a tribute to timeless art.&rdquo;
          </blockquote>
          <div className={styles.fqAuthor}>— Gauri Goswami</div>
        </div>
      </section>

      {/* ========================================================================
          STEP 18 — FINAL CTA (LET THE RHYTHM CONTINUE)
          ======================================================================== */}
      <section className={styles.finalCtaSection} id="final-cta">
        <div className={styles.fcContainer}>
          <h2 className={styles.fcTitle}>Let the Rhythm Continue</h2>
          <p className={styles.fcText}>
            For cultural collaborations, performances, workshops and artistic engagements.
          </p>

          <div className={styles.fcButtonWrap}>
            <a
              href={performanceInquiryUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.fcPrimaryBtn}
            >
              Book a Performance →
            </a>
            <a
              href="mailto:info@gaurigoswami.com"
              className={styles.fcSecondaryBtn}
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER — EXACT SAME AS HOME PAGE */}
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
            />
          </Link>
          <p className="footer-about">
            Gauri Goswami is an Advocate, LL.M. in International Commercial Law, Kathak Visharad-II, researcher, and cultural ambassador.
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
              <Link href="/kathak">Kathak</Link>
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
          <Link href="/#research">Research Publications</Link>
          <Link href="/#matters">Representative Matters</Link>
          <Link href="/#awards">Awards</Link>
          <Link href="/#contact">Media</Link>
          <Link href="/#testimonials">Testimonials</Link>
          <a href={performanceInquiryUrl} target="_blank" rel="noreferrer">Book Performance</a>
        </div>
        <div id="footer-contact">
          <h4>Get in Touch</h4>
          <a href="mailto:info@gaurigoswami.com">info@gaurigoswami.com</a>
          <a href="tel:+447587338945">+44 7587 338945</a>
          <p style={{ margin: '0.25rem 0 0.5rem', color: '#a49c91' }}>United Kingdom</p>
          <a href="https://wa.me/447587338945" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <p style={{ margin: '0.25rem 0 0', color: '#a49c91' }}>New Delhi, India</p>
        </div>
        <div className="copyright">
          © 2026 Nexus Czar Pvt. Ltd. All Rights Reserved.
          <span>www.gaurigoswami.com</span>
        </div>
      </footer>
    </main>
  );
}
