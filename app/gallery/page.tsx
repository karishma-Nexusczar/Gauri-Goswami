"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export interface GalleryPhoto {
  id: string;
  category: "Law" | "Academics" | "Kathak" | "Research" | "Awards" | "Culture" | "Travel" | "Media";
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description: string;
  image: string;
  aspect: "portrait" | "landscape" | "tall" | "square";
}

const allGalleryPhotos: GalleryPhoto[] = [
  {
    id: "p16",
    category: "Law",
    title: "Law Scholars Waterfront Excursion",
    subtitle: "LL.M. Academic Cohort Gathering",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Legal practice scholars and LL.M. international academic cohort gathering along the UK waterfront during an academic retreat.",
    image: "/legal-practice-riverside-cohort.jpg",
    aspect: "landscape"
  },
  {
    id: "p1",
    category: "Law",
    title: "Legal Practice & Academic Cohort",
    subtitle: "National Law University & Judicial Academy",
    location: "Guwahati / Delhi, India",
    date: "2023–Present",
    description: "National Law University & Judicial Academy legal scholar cohort group photograph and academic honour presentation.",
    image: "/legal-practice-cohort-group.jpg",
    aspect: "landscape"
  },
  {
    id: "p1_2",
    category: "Law",
    title: "Legal Scholar & Counsel",
    subtitle: "Commercial Legal Research & Practice",
    location: "New Delhi / London",
    date: "2024–Present",
    description: "Counsel portrait representing commercial legal research, litigation, and scholarly work in law libraries.",
    image: "/legal-scholar-law-library.jpg",
    aspect: "portrait"
  },
  {
    id: "p7",
    category: "Law",
    title: "Delhi High Court Counsel",
    subtitle: "Legal Practice & Advisory",
    location: "New Delhi, India",
    date: "2023–Present",
    description: "Counsel portrait representing commercial litigation practice across Delhi High Court and Supreme Court of India.",
    image: "/delhi-high-court-red-blazer.png",
    aspect: "tall"
  },
  {
    id: "p13",
    category: "Law",
    title: "High Court Chambers & Advisory",
    subtitle: "Litigation & Commercial Practice",
    location: "New Delhi, India",
    date: "2023–2024",
    description: "Legal practice advisory session and commercial litigation research presentation in advocate chambers.",
    image: "/gallery-1-red-blazer-sofa.jpg",
    aspect: "landscape"
  },
  {
    id: "p14",
    category: "Law",
    title: "School of Law Arched Hallway",
    subtitle: "Faculty of Law & Academic Chambers",
    location: "University of Nottingham, UK",
    date: "2024–2025",
    description: "Historic School of Law corridor at the University of Nottingham connecting law lecture halls, moot courts, and commercial law research suites.",
    image: "/legal-practice-school-of-law-corridor.jpg",
    aspect: "tall"
  },
  {
    id: "p15",
    category: "Law",
    title: "International Commercial Law Seminar",
    subtitle: "LL.M. Legal Practice & Seminar Cohort",
    location: "University of Nottingham, UK",
    date: "2024–2025",
    description: "LL.M. International Commercial Law scholars and legal researchers gathered in the law faculty interactive seminar room.",
    image: "/legal-practice-nottingham-seminar.jpg",
    aspect: "landscape"
  },
  {
    id: "p17",
    category: "Law",
    title: "Legal Cohort Cultural Exchange",
    subtitle: "Campus Life & Student Advisory",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Legal cohort members and international postgraduate law scholars participating in campus engagement and cultural exchange events.",
    image: "/legal-practice-cohort-outdoor-event.jpg",
    aspect: "landscape"
  },
  {
    id: "a1",
    category: "Academics",
    title: "Postgraduate Excellence Awardees",
    subtitle: "University of Nottingham",
    location: "Nottingham, United Kingdom",
    date: "November 2024",
    description: "Postgraduate Excellence Award scholars celebrating academic honours at the University of Nottingham Great Hall.",
    image: "/academics-postgraduate-excellence-ceremony.jpg",
    aspect: "tall"
  },
  {
    id: "a2",
    category: "Academics",
    title: "University Scholars Recognition",
    subtitle: "University of Nottingham Presentation",
    location: "Nottingham, United Kingdom",
    date: "2024–2025",
    description: "Official presentation of the University of Nottingham insignia tote bag to Gauri Goswami for academic engagement.",
    image: "/academics-nottingham-gift-presentation.jpg",
    aspect: "tall"
  },
  {
    id: "a3",
    category: "Academics",
    title: "High Pavement College Outreach",
    subtitle: "Postgraduate Student Ambassador",
    location: "Nottingham, United Kingdom",
    date: "2024–2025",
    description: "Gauri Goswami with student ambassadors at High Pavement Sixth Form, Nottingham College for legal academic outreach.",
    image: "/academics-high-pavement-college-outreach.jpg",
    aspect: "tall"
  },
  {
    id: "a4",
    category: "Academics",
    title: "South Asia Postgraduate Celebration",
    subtitle: "Scholarship Ceremony Stage",
    location: "University of Nottingham, UK",
    date: "29th November 2024",
    description: "Official University of Nottingham South Asia Postgraduate Excellence Award celebration group photograph on stage.",
    image: "/academics-scholarship-celebration-stage.jpg",
    aspect: "landscape"
  },
  {
    id: "a5",
    category: "Academics",
    title: "Faculty Grand Library Reception",
    subtitle: "Academic & Legal Research Forum",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Academic scholars and legal researchers gathering at the historic university library fireplace room during a faculty reception.",
    image: "/academics-library-fireplace-reception.jpg",
    aspect: "tall"
  },
  {
    id: "k3",
    category: "Kathak",
    title: "Classical Kathak Lawn Recital",
    subtitle: "Traditional Nritta & Mudras",
    location: "United Kingdom",
    date: "2024",
    description: "Seated classical Kathak posture demonstrating intricate mudras and traditional dance attire.",
    image: "/kathak-lawn-classical-pose.jpg",
    aspect: "landscape"
  },
  {
    id: "k16",
    category: "Kathak",
    title: "London Rongali Bihu Celebration",
    subtitle: "Assam Heritage & Cultural Recital",
    location: "London, UK",
    date: "2024",
    description: "Gauri Goswami in traditional red and cream Assamese Mekhela Chador at London Rongali Bihu 2024.",
    image: "/kathak-london-rongali-bihu-2024.jpg",
    aspect: "tall"
  },
  {
    id: "k1",
    category: "Kathak",
    title: "Asam Sahitya Sabha UK Recital",
    subtitle: "London Annual Cultural Convention",
    location: "London, UK",
    date: "2024",
    description: "Live classical performance by Gauri Goswami at the Asam Sahitya Sabha UK Chapter annual convention in London.",
    image: "/kathak-asam-sahitya-sabha-uk.png",
    aspect: "tall"
  },
  {
    id: "k2",
    category: "Kathak",
    title: "Traditional Jaapi Stage Recital",
    subtitle: "Assamese Heritage & Classical Arts",
    location: "London, UK",
    date: "2024",
    description: "Gauri Goswami featuring traditional Assamese Jaapi rhythm dance on stage in London.",
    image: "/kathak-jaapi-stage-recital.jpg",
    aspect: "landscape"
  },
  {
    id: "k4",
    category: "Kathak",
    title: "Golden Mekhela Chador Stage Recital",
    subtitle: "Traditional Assamese Silk Presentation",
    location: "London, UK",
    date: "2024",
    description: "Full stage portrait of Gauri Goswami in golden Assamese Mekhela Chador during a cultural performance.",
    image: "/kathak-golden-chador-stage.jpg",
    aspect: "tall"
  },
  {
    id: "k5",
    category: "Kathak",
    title: "Loktak Lake Exhibition Recital",
    subtitle: "High Commission of India Showcase",
    location: "High Commission of India, London",
    date: "2024",
    description: "Cultural presentation portrait in traditional attire at the High Commission of India Loktak Lake exhibition.",
    image: "/kathak-loktak-exhibit-portrait.jpg",
    aspect: "tall"
  },
  {
    id: "k17",
    category: "Kathak",
    title: "Abhiveera Festival Stage Walk",
    subtitle: "NLUJA Cultural & Arts Festival",
    location: "Guwahati, Assam, India",
    date: "April 2023",
    description: "Gauri Goswami performing on stage at Abhiveera '23 Literary & Sports Festival of NLUJA Assam.",
    image: "/kathak-abhiveera-gold-stage-walk.jpg",
    aspect: "tall"
  },
  {
    id: "k18",
    category: "Kathak",
    title: "Traditional Crown Stage Presentation",
    subtitle: "Abhiveera '23 Cultural Pageant",
    location: "Guwahati, Assam, India",
    date: "April 2023",
    description: "Full length portrait of Gauri Goswami in golden Assamese silk attire with traditional crown and jewelry.",
    image: "/kathak-abhiveera-traditional-crown.jpg",
    aspect: "tall"
  },
  {
    id: "k19",
    category: "Kathak",
    title: "Abhiveera Gold Dress Portrait",
    subtitle: "NLUJA Stage Showcase",
    location: "Guwahati, Assam, India",
    date: "April 2023",
    description: "Stage portrait of Gauri Goswami during the Abhiveera '23 cultural evening event.",
    image: "/kathak-abhiveera-gold-dress-portrait.jpg",
    aspect: "tall"
  },
  {
    id: "k20",
    category: "Kathak",
    title: "Seated Classical Saree Portrait",
    subtitle: "Cultural Event Backstage",
    location: "India",
    date: "2023",
    description: "Close-up portrait of Gauri Goswami in traditional silk saree with classical bindi and jewelry.",
    image: "/kathak-seated-saree-portrait.jpg",
    aspect: "landscape"
  },
  {
    id: "r0",
    category: "Research",
    title: "University Law Library Archives",
    subtitle: "Multi-Level Legal Research Complex",
    location: "University of Nottingham, UK",
    date: "2024–2025",
    description: "The grand multi-level Law Library and research archives at the University of Nottingham housing international commercial law collections.",
    image: "/research-multilevel-law-library.jpg",
    aspect: "tall"
  },
  {
    id: "r1",
    category: "Research",
    title: "Grays Inn Legal Society Cohort",
    subtitle: "The Honorable Society of Grays Inn",
    location: "London, United Kingdom",
    date: "2024–2025",
    description: "International legal scholars and LL.M. research cohort gathered in front of the historic Honorable Society of Grays Inn entrance in London.",
    image: "/research-grays-inn-society-cohort.png",
    aspect: "tall"
  },
  {
    id: "r2",
    category: "Research",
    title: "Oxford Bodleian Library Research",
    subtitle: "Radcliffe Camera Legal Studies",
    location: "University of Oxford, UK",
    date: "2024–2025",
    description: "Gauri Goswami at Radcliffe Camera, University of Oxford Bodleian Library during commercial law academic research.",
    image: "/research-oxford-radcliffe-camera.png",
    aspect: "tall"
  },
  {
    id: "r3",
    category: "Research",
    title: "Academic & Legal Research Dialogue",
    subtitle: "Scholarly Collaboration & Exchange",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Gauri Goswami collaborating with fellow postgraduate legal researchers during academic symposium proceedings.",
    image: "/research-academic-scholars-dialogue.jpg",
    aspect: "portrait"
  },
  {
    id: "r4",
    category: "Research",
    title: "Gothic Vaulted Law Hall",
    subtitle: "Historic Faculty Chambers & Library",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Historic gothic vaulted hall and arched ceilings connecting academic law chambers and research archives.",
    image: "/research-gothic-vaulted-library-hall.jpg",
    aspect: "tall"
  },
  {
    id: "r5",
    category: "Research",
    title: "Cathedral Spire Academic Forum",
    subtitle: "International Legal Research",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Gauri Goswami participating in international legal research symposium events in historic UK academic settings.",
    image: "/research-cathedral-spire-portrait.jpg",
    aspect: "tall"
  },
  {
    id: "p3",
    category: "Awards",
    title: "South Asia Excellence Award",
    subtitle: "Scholarship Ceremony",
    location: "Nottingham, UK",
    date: "Nov 2024",
    description: "Official University of Nottingham South Asia Postgraduate Excellence Award celebration event on stage.",
    image: "/south-asia-excellence-award.jpg",
    aspect: "tall"
  },
  {
    id: "c1",
    category: "Culture",
    title: "Asam Sahitya Sabha Stage Recital",
    subtitle: "Traditional Folk & Classical Dance",
    location: "London, United Kingdom",
    date: "2024",
    description: "Classical Assamese folk and classical dance performance on stage in front of the Asam Sahitya Sabha UK banner in London.",
    image: "/culture-asam-sahitya-sabha-stage-recital.jpg",
    aspect: "landscape"
  },
  {
    id: "c2",
    category: "Culture",
    title: "NLU Assam Foundation Day Recital",
    subtitle: "National Law University & Judicial Academy",
    location: "Guwahati, Assam, India",
    date: "Sept 2022",
    description: "Traditional dance performance on stage celebrating Foundation Day at National Law University & Judicial Academy, Assam.",
    image: "/culture-nlu-assam-foundation-day-dance.jpg",
    aspect: "landscape"
  },
  {
    id: "c3",
    category: "Culture",
    title: "London Rongali Bihu Hall Showcase",
    subtitle: "Assamese Silk & Heritage Dress",
    location: "London, United Kingdom",
    date: "2026",
    description: "Gauri Goswami standing gracefully in traditional Assamese Mekhela Chador at the London Rongali Bihu 2026 hall venue.",
    image: "/culture-london-rongali-bihu-hall.jpg",
    aspect: "portrait"
  },
  {
    id: "c4",
    category: "Culture",
    title: "Backstage Dance Troupe Group",
    subtitle: "Traditional Costumes & Ornaments",
    location: "London, United Kingdom",
    date: "2024",
    description: "Backstage group photograph of Gauri Goswami with fellow classical performers wearing traditional head ornaments and costumes.",
    image: "/culture-backstage-dance-troupe-group.jpg",
    aspect: "landscape"
  },
  {
    id: "c5",
    category: "Culture",
    title: "London Rongali Bihu Delegates",
    subtitle: "Cultural Ambassadors & Elders",
    location: "London, United Kingdom",
    date: "2026",
    description: "Gauri Goswami with senior cultural delegates and community leaders at the London Rongali Bihu celebration.",
    image: "/culture-london-rongali-bihu-delegates.jpg",
    aspect: "portrait"
  },
  {
    id: "c6",
    category: "Culture",
    title: "North East Festival London Poster",
    subtitle: "Official Cultural Ambassador Graphic",
    location: "London, United Kingdom",
    date: "2024",
    description: "Official poster graphic for North East Festival London featuring Gauri Goswami in traditional Assamese silk Mekhela Chador.",
    image: "/culture-northeast-festival-official-poster.jpg",
    aspect: "landscape"
  },
  {
    id: "c7",
    category: "Culture",
    title: "North-East India Cultural Circuit",
    subtitle: "Heritage & Dance Artistry Banner",
    location: "London / Assam",
    date: "2024",
    description: "Official North-East India Cultural Circuit presentation banner celebrating regional dance, music, and heritage.",
    image: "/culture-northeast-circuit-banner.jpg",
    aspect: "landscape"
  },
  {
    id: "c8",
    category: "Culture",
    title: "High Commission Stage Recital",
    subtitle: "Loktak Lake Exhibition Presentation",
    location: "High Commission of India, London",
    date: "2024",
    description: "Live stage recital and cultural presentation in traditional silk attire at the High Commission of India in London.",
    image: "/culture-high-commission-loktak-presentation.jpg",
    aspect: "portrait"
  },
  {
    id: "c9",
    category: "Culture",
    title: "London Rongali Bihu 2026 Poster",
    subtitle: "Featured Performer Artwork",
    location: "London, United Kingdom",
    date: "2026",
    description: "Official London Rongali Bihu 2026 poster banner artwork highlighting Gauri Goswami's feature performance.",
    image: "/culture-london-rongali-bihu-poster-banner.jpg",
    aspect: "landscape"
  },
  {
    id: "c10",
    category: "Culture",
    title: "Indian Cultural Heritage Mandala",
    subtitle: "Sacred Art & Classical Dance Emblem",
    location: "India / UK",
    date: "2024",
    description: "Intricate Indian cultural heritage mandala wheel illustrating classical dance forms, temple architecture, and traditional arts.",
    image: "/culture-indian-heritage-mandala-emblem.jpg",
    aspect: "square"
  },
  {
    id: "p5",
    category: "Culture",
    title: "High Commission of India",
    subtitle: "Cultural Diplomacy",
    location: "London, UK",
    date: "2024",
    description: "Cultural diplomacy presentation at the High Commission of India Loktak Lake exhibition in London.",
    image: "/high-commission-loktak.jpg",
    aspect: "tall"
  },
  {
    id: "p6",
    category: "Culture",
    title: "North East Festival London",
    subtitle: "International Representation",
    location: "London, UK",
    date: "2024",
    description: "Official North-East India Cultural Circuit presentation showcasing Assamese heritage in the UK.",
    image: "/gallery-6-northeast-festival.jpg",
    aspect: "landscape"
  },
  {
    id: "p10",
    category: "Culture",
    title: "High Commission Exhibition",
    subtitle: "Loktak Lake & Heritage Presentation",
    location: "High Commission of India, London",
    date: "2024",
    description: "Gauri Goswami in golden Assamese silk sari at the High Commission of India Loktak Lake cultural exhibition.",
    image: "/high-commission-loktak.jpg",
    aspect: "tall"
  }
];

const timelineNodes = [
  { year: "2019", title: "Consulta Juris", desc: "Commercial & Corporate Legal Internship", id: "p11" },
  { year: "2020", title: "Gauhati High Court", desc: "Writ Litigation & High Court Practice", id: "p7" },
  { year: "2022", title: "N. Unni Krishnan Chambers", desc: "Commercial Disputes & Advisory", id: "p1" },
  { year: "2023", title: "Delhi High Court", desc: "Litigation Practice & Court Appearances", id: "p7" },
  { year: "2023", title: "Supreme Court", desc: "Special Leave Petitions & Appellate Research", id: "p11" },
  { year: "2023", title: "DLSA Kamrup Metro", desc: "Pro Bono & Access to Justice Advocacy", id: "p1" },
  { year: "2023–Present", title: "Singhania & Associates", desc: "Corporate Legal Associate & Dispute Advisory", id: "p7" },
  { year: "2025", title: "South Asia Excellence Award", desc: "University of Nottingham Postgraduate Scholarship", id: "p3" },
  { year: "2026", title: "University of Nottingham", desc: "LL.M. International Commercial Law", id: "p2" },
  { year: "2026", title: "International Performances", desc: "London Cultural Diplomacy & Stage Recitals", id: "p4" }
];

const verifiedEventsRow1 = [
  {
    role: "FEATURED PERFORMER",
    title: "London Rongali Bihu 2026",
    location: "📍 London, United Kingdom",
    summary: "Featured performer at London's premier Rongali Bihu celebration, representing Assamese culture before an international audience.",
    image: "/london-rongali-bihu-2026-cover.jpg",
    cat: "Kathak"
  },
  {
    role: "CULTURAL AMBASSADOR",
    title: "North East Festival London",
    location: "📍 London, United Kingdom",
    summary: "Represented Northeast India's rich cultural heritage through traditional Assamese dance performances.",
    image: "/northeast-festival-london-official-banner.jpg",
    cat: "Culture"
  },
  {
    role: "CULTURAL PERFORMANCE",
    title: "High Commission of India",
    location: "📍 London, United Kingdom",
    summary: "Participated in cultural programmes celebrating Indian heritage and strengthening Indo-UK cultural exchange.",
    image: "/high-commission-loktak-stage-full.jpg",
    cat: "Culture"
  }
];

const verifiedEventsRow2 = [
  {
    role: "CULTURAL REPRESENTATION",
    title: "University of Nottingham",
    location: "📍 Nottingham, United Kingdom",
    summary: "Participated in university cultural initiatives promoting Indian traditions within an international academic environment.",
    image: "/nottingham-scholarship-stage-group.jpg",
    cat: "Academics"
  },
  {
    role: "CULTURAL PERFORMANCE",
    title: "Assam Sahitya Sabha (Shankar Jayanti)",
    location: "📍 Kings Langley, Hertfordshire, United Kingdom",
    summary: "Performed at the Assam Sahitya Sabha UK celebration of Shankar Jayanti, showcasing traditional Assamese dance and promoting cultural heritage.",
    image: "/assam-sahitya-sabha-shankar-jayanti-poster.png",
    posterImage: "/assam-sahitya-sabha-shankar-jayanti-poster.png",
    cat: "Culture"
  }
];

const allVerifiedEvents = [
  ...verifiedEventsRow1,
  ...verifiedEventsRow2
];

const videoCards = [
  { 
    id: "v1",
    title: "Sonowal Kachari | Assamese Bihu Song 2024", 
    label: "Official Bihu Music Video", 
    duration: "YouTube Video", 
    image: "/sonowal-kachari-bihu-song-cover.png",
    youtubeId: "8N-uDHqPi-E",
    youtubeUrl: "https://youtu.be/8N-uDHqPi-E?si=NjlPzEcV9YIfbQG9"
  },
  { 
    id: "v2",
    title: "ADUJ x ABHIVEERA 2023 || NLU Assam", 
    label: "National Law University & Judicial Academy", 
    duration: "YouTube Video", 
    image: "/aduj-abhiveera-23-stage-wide-banner.png",
    youtubeId: "hXfBr71eY7o",
    youtubeUrl: "https://youtu.be/hXfBr71eY7o?si=8KJefpptwsQ0D4Gr"
  }
];

export default function EditorialGalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);
  const [showAllCategories, setShowAllCategories] = useState<boolean>(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof videoCards[0] | null>(null);
  const [eventStartIndex, setEventStartIndex] = useState<number>(0);

  const handlePrevEvent = () => {
    setEventStartIndex((prev) => (prev > 0 ? prev - 1 : allVerifiedEvents.length - 3));
  };

  const handleNextEvent = () => {
    setEventStartIndex((prev) => (prev < allVerifiedEvents.length - 3 ? prev + 1 : 0));
  };

  const heroSlideImages = [
    "/hero-slide-1-kathak.jpg",
    "/hero-slide-2-culture.jpg",
    "/hero-slide-3-campus.jpg"
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState<number>(0);

  // Automatic Left-to-Right background slide transition every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlideImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlideImages.length]);

  const filteredPhotos = activeFilter === "All" 
    ? allGalleryPhotos 
    : allGalleryPhotos.filter(p => p.category === activeFilter);

  const visiblePhotos = showAllPhotos ? filteredPhotos : filteredPhotos.slice(0, 8);

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") setSelectedPhotoIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % filteredPhotos.length : null));
      }
      if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  return (
    <div className="editorial-gallery-page">
      <Navbar currentPath="/gallery" />

      {/* SECTION 1 — PREMIUM CINEMATIC GALLERY HERO */}
      <section className="ed-gallery-hero-widescreen" id="top">
        {/* Widescreen Background Banner Image */}
        <div className="ed-hero-widescreen-bg">
          <Image
            src="/gallery-hero-banner.jpg"
            alt="Gauri Goswami Kathak Performance Widescreen Banner"
            fill
            priority
            quality={100}
            className="ed-widescreen-bg-img"
          />
          <div className="ed-hero-red-dark-overlay" />
        </div>

        <div className="ed-container ed-hero-layout-container">
          <div className="ed-hero-text-area">
            <span className="ed-hero-small-label">VISUAL PORTFOLIO</span>
            <h1 className="ed-hero-main-title">Gallery</h1>
            <div className="ed-hero-divider-ornament">
              <span className="ed-divider-line" />
              <span className="ed-divider-symbol">❦</span>
              <span className="ed-divider-line" />
            </div>
            <p className="ed-hero-description-text">
              A visual journey through law, scholarship,<br />
              Kathak, international performances,<br />
              cultural diplomacy, and professional milestones.
            </p>
            <div className="ed-hero-cta-wrap">
              <a href="#featured" className="ed-btn-gold">
                Explore Collections <span className="ed-btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — GALLERY INTRODUCTION (STEP 2) */}
      <section className="ed-gallery-intro-step2" id="featured">
        <div className="ed-container">
          <div className="ed-intro-step2-grid">
            <div className="ed-intro-step2-left">
              <span className="ed-section-tag-gold">GALLERY</span>
              <h2 className="ed-intro-step2-title">Moments That Define My Journey</h2>
              <div className="ed-intro-small-divider" />
              <p className="ed-intro-step2-text">
                Every photograph reflects a chapter of my journey—from courtrooms and legal scholarship to international stages, cultural diplomacy and academic excellence.
              </p>
            </div>
            <div className="ed-intro-step2-right">
              <div className="ed-camera-illustration-wrapper">
                <Image
                  src="/gallery-camera-illustration.png"
                  alt="Vintage Camera Illustration"
                  width={480}
                  height={340}
                  className="ed-camera-img"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED COLLECTION (STEP 3) */}
      <section className="ed-featured-collection-step3">
        <div className="ed-container">
          <div className="ed-section-header">
            <span className="ed-section-tag-gold">FEATURED COLLECTION</span>
            <h2>Curated Highlights</h2>
          </div>

          <div className="ed-showcase-grid-step3">
            {/* Left 60% Large Featured Card */}
            <div className="ed-showcase-large-card" onClick={() => setSelectedPhotoIndex(3)}>
              <Image
                src="/cultural-heritage-london-stage.jpg"
                alt="Cultural Heritage Stage Presentation London"
                fill
                quality={100}
                className="ed-showcase-large-img"
              />
              <div className="ed-showcase-card-overlay">
                <span className="ed-showcase-tag">FEATURED</span>
                <h3>Cultural Heritage</h3>
                <p>North East Festival London • Stage Recital Showcase</p>
                <button type="button" className="ed-showcase-sm-btn">VIEW COLLECTION →</button>
              </div>
            </div>

            {/* Right 40% Three Stacked Small Cards */}
            <div className="ed-showcase-small-stack">
              <div className="ed-showcase-sm-card" onClick={() => setSelectedPhotoIndex(1)}>
                <Image
                  src="/academics-postgraduate-excellence-ceremony.jpg"
                  alt="University of Nottingham Postgraduate Excellence"
                  fill
                  quality={100}
                  className="ed-showcase-sm-img-top"
                />
                <div className="ed-showcase-sm-overlay">
                  <h4>University</h4>
                  <p>LL.M. International Commercial Law</p>
                </div>
              </div>

              <div className="ed-showcase-sm-card" onClick={() => setSelectedPhotoIndex(6)}>
                <Image
                  src="/delhi-high-court-red-blazer.png"
                  alt="Delhi High Court Advocate Practice"
                  fill
                  quality={100}
                  className="ed-showcase-sm-img-portrait"
                />
                <div className="ed-showcase-sm-overlay">
                  <h4>Delhi High Court</h4>
                  <p>Advocacy &amp; Commercial Disputes</p>
                </div>
              </div>

              <div className="ed-showcase-sm-card" onClick={() => setSelectedPhotoIndex(2)}>
                <Image
                  src="/south-asia-excellence-award.jpg"
                  alt="South Asia Excellence Award Ceremony"
                  fill
                  quality={100}
                  className="ed-showcase-sm-img-award"
                />
                <div className="ed-showcase-sm-overlay">
                  <h4>South Asia Excellence Award</h4>
                  <p>Scholarship Ceremony • Nov 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — EXPLORE COLLECTIONS (CATEGORY CARDS) */}
      <section className="ed-categories-section">
        <div className="ed-container">
          <div className="ed-section-header center">
            <span className="ed-section-tag">CURATED ARCHIVES</span>
            <h2>Explore Collections</h2>
          </div>

          <div className="ed-category-grid">
            {(() => {
              const allCategories = [
                { title: "Legal Practice", count: "8 Photos", img: "/legal-practice-riverside-cohort.jpg", cat: "Law" },
                { title: "Academic Excellence", count: "5 Photos", img: "/academics-scholarship-celebration-stage.jpg", cat: "Academics" },
                { title: "Kathak Performances", count: "10 Photos", img: "/kathak-lawn-classical-pose.jpg", cat: "Kathak" },
                { title: "Cultural Diplomacy", count: "10 Photos", img: "/cultural-heritage-london-stage.jpg", cat: "Culture" },
                { title: "Research & Conferences", count: "6 Photos", img: "/research-multilevel-law-library.jpg", cat: "Research" },
                { title: "Behind the Journey", count: "14 Photos", img: "/gallery-8-academic-engagement.jpg", cat: "Travel" }
              ];
              const visibleCategories = showAllCategories ? allCategories : allCategories.slice(0, 3);
              return visibleCategories.map((c, i) => (
                <div 
                  key={i} 
                  className={`ed-cat-card cat-${c.cat.toLowerCase()}`}
                  onClick={() => {
                    setActiveFilter(c.cat as any);
                    setSelectedPhotoIndex(0);
                  }}
                >
                  <div className="ed-cat-img-frame">
                    <Image src={c.img} alt={c.title} fill quality={90} />
                  </div>
                  <div className="ed-cat-info">
                    <h3>{c.title}</h3>
                    <span>{c.count}</span>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* View All Collections Toggle Button */}
          {!showAllCategories && (
            <div className="ed-view-all-wrap">
              <button
                type="button"
                className="ed-btn-gold ed-view-all-btn"
                onClick={() => setShowAllCategories(true)}
              >
                View All Collections (6) <span className="ed-btn-arrow">↓</span>
              </button>
            </div>
          )}
          {showAllCategories && (
            <div className="ed-view-all-wrap">
              <button
                type="button"
                className="ed-btn-outline ed-view-all-btn"
                onClick={() => setShowAllCategories(false)}
              >
                Show Less <span className="ed-btn-arrow">↑</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5 — CAREER TIMELINE */}
      <section className="ed-timeline-section">
        <div className="ed-container">
          <div className="ed-section-header">
            <span className="ed-section-tag">CHRONOLOGICAL MILESTONES</span>
            <h2>Career &amp; Academic Timeline</h2>
          </div>

          <div className="ed-timeline-track">
            {timelineNodes.map((node, index) => (
              <div 
                key={index} 
                className="ed-timeline-node"
                onClick={() => {
                  const foundIdx = filteredPhotos.findIndex(p => p.id === node.id);
                  if (foundIdx !== -1) setSelectedPhotoIndex(foundIdx);
                  else setSelectedPhotoIndex(0);
                }}
              >
                <div className="ed-node-dot" />
                <span className="ed-node-year">{node.year}</span>
                <h4>{node.title}</h4>
                <p>{node.desc}</p>
                <span className="ed-node-link">View Photos →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — GLOBAL EVENTS & CULTURAL ENGAGEMENT */}
      <section className="ed-events-section" id="global-events">
        <div className="ed-container">
          <div className="ed-section-header flex-between align-center">
            <div>
              <span className="ed-section-tag">GLOBAL EVENTS &amp; CULTURAL ENGAGEMENT</span>
              <h2>Representing Indian Culture Across International Platforms</h2>
              <p className="ed-section-subdesc">
                From prestigious cultural festivals and diplomatic events to academic institutions and international forums, Gauri Goswami has proudly represented the rich cultural heritage of Assam and India through classical and folk dance performances, cultural exchange, and community engagement.
              </p>
            </div>
            <div className="ed-events-header-right">
              <div className="ed-events-nav-controls">
                <button
                  type="button"
                  className="ed-slider-arrow-btn"
                  onClick={handlePrevEvent}
                  aria-label="Previous event"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="ed-slider-arrow-btn"
                  onClick={handleNextEvent}
                  aria-label="Next event"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Smooth Carousel Viewport displaying 3 cards at a time */}
          <div className="ed-events-carousel-viewport">
            <div
              className="ed-events-carousel-track"
              style={{ transform: `translateX(-${eventStartIndex * (100 / 3)}%)` }}
            >
              {allVerifiedEvents.map((ev, idx) => (
                <div
                  key={idx}
                  className="ed-event-card"
                  onClick={() => {
                    setActiveFilter(ev.cat as any);
                    setSelectedPhotoIndex(0);
                  }}
                >
                  <div className="ed-event-img-wrap">
                    <Image src={ev.image} alt={ev.title} fill quality={90} />
                  </div>
                  <div className="ed-event-body">
                    <div>
                      <span className="ed-event-role">{ev.role}</span>
                      <h3>{ev.title}</h3>
                      <p className="ed-event-loc">{ev.location}</p>
                      <p className="ed-event-summary">{ev.summary}</p>
                    </div>
                    <span className="ed-event-link">View Event →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — YOUTUBE VIDEO GALLERY */}
      <section className="ed-video-section" id="videos">
        <div className="ed-container">
          <div className="ed-section-header center">
            <span className="ed-section-tag">YOUTUBE &amp; LIVE PERFORMANCES</span>
            <h2>Video Gallery Highlights</h2>
          </div>

          <div className="ed-video-grid">
            {videoCards.map((v) => (
              <div 
                key={v.id} 
                className="ed-video-card"
                onClick={() => setSelectedVideo(v)}
              >
                <div className="ed-video-thumb">
                  <Image src={v.image} alt={v.title} fill quality={90} />
                  <div className="ed-play-overlay">
                    <div className="ed-play-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0D0B09">
                        <polygon points="6,3 20,12 6,21" />
                      </svg>
                    </div>
                  </div>
                  <span className="ed-video-badge">
                    <svg width="14" height="10" viewBox="0 0 24 17" fill="#FF0000" style={{ marginRight: '5px' }}>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                      <polygon points="9.545,15.568 15.818,12 9.545,8.432" fill="#FFFFFF" />
                    </svg>
                    YouTube • {v.duration}
                  </span>
                </div>
                <div className="ed-video-info">
                  <span className="ed-video-label">{v.label}</span>
                  <h3>{v.title}</h3>
                  <div className="ed-video-watch-link">Watch Video ▶</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEO PLAYER MODAL OVERLAY */}
      {selectedVideo && (
        <div className="ed-video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="ed-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="ed-video-modal-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close Video Modal"
            >
              ✕
            </button>

            <div className="ed-video-modal-player-wrap">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="ed-youtube-iframe"
              />
            </div>

            <div className="ed-video-modal-details">
              <div>
                <span className="ed-video-label">{selectedVideo.label}</span>
                <h3>{selectedVideo.title}</h3>
              </div>
              <a 
                href={selectedVideo.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ed-btn-gold ed-youtube-external-btn"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 8 — MASONRY PHOTO WALL */}
      <section className="ed-masonry-section">
        <div className="ed-container">
          <div className="ed-section-header center">
            <span className="ed-section-tag">FULL VISUAL ARCHIVE</span>
            <h2>Moments That Define My Journey</h2>
          </div>

          {/* Filter Tabs */}
          <div className="ed-filter-tabs">
            {["All", "Law", "Academics", "Kathak", "Culture", "Awards"].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`ed-tab-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => {
                  setActiveFilter(cat);
                  setShowAllPhotos(false);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="ed-masonry-grid">
            {visiblePhotos.map((photo, index) => {
              const realIndex = filteredPhotos.findIndex((p) => p.id === photo.id);
              return (
                <div
                  key={photo.id}
                  className={`ed-masonry-item ${photo.aspect}`}
                  onClick={() => setSelectedPhotoIndex(realIndex !== -1 ? realIndex : index)}
                >
                  <div className="ed-masonry-img-frame">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      quality={90}
                      className="ed-masonry-img"
                    />
                    <div className="ed-masonry-overlay">
                      <div className="ed-zoom-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                      <span className="ed-masonry-tag">{photo.category}</span>
                      <h4>{photo.title}</h4>
                      <p>{photo.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Images Toggle Button */}
          {!showAllPhotos && filteredPhotos.length > 8 && (
            <div className="ed-view-all-wrap">
              <button
                type="button"
                className="ed-btn-gold ed-view-all-btn"
                onClick={() => setShowAllPhotos(true)}
              >
                View All Images ({filteredPhotos.length}) <span className="ed-btn-arrow">↓</span>
              </button>
            </div>
          )}
          {showAllPhotos && filteredPhotos.length > 8 && (
            <div className="ed-view-all-wrap">
              <button
                type="button"
                className="ed-btn-outline ed-view-all-btn"
                onClick={() => setShowAllPhotos(false)}
              >
                Show Less <span className="ed-btn-arrow">↑</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 9 — FULLSCREEN LIGHTBOX POPUP */}
      {currentPhoto && selectedPhotoIndex !== null && (
        <div
          className="ed-lightbox-backdrop"
          onClick={() => setSelectedPhotoIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="ed-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ed-lightbox-close"
              onClick={() => setSelectedPhotoIndex(null)}
            >
              ✕
            </button>

            {/* Prev / Next Controls */}
            <button
              type="button"
              className="ed-lightbox-nav prev"
              onClick={() => setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length)}
            >
              ‹
            </button>

            <button
              type="button"
              className="ed-lightbox-nav next"
              onClick={() => setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length)}
            >
              ›
            </button>

            <div className="ed-lightbox-main">
              <div className="ed-lightbox-img-box">
                <Image
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  fill
                  quality={95}
                  className="ed-lightbox-img"
                />
              </div>

              <div className="ed-lightbox-details">
                <span className="ed-lb-cat">{currentPhoto.category} • {currentPhoto.date}</span>
                <h2 className="ed-lb-title">{currentPhoto.title}</h2>
                <h3 className="ed-lb-sub">{currentPhoto.subtitle}</h3>
                <p className="ed-lb-loc">📍 {currentPhoto.location}</p>
                <p className="ed-lb-desc">{currentPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 10 — COLLABORATION CTA & CONTACT */}
      <section className="contact-cta" id="contact">
        <div>
          <p className="section-kicker">Let&apos;s Connect</p>
          <h2>Let&apos;s Build Meaningful Connections</h2>
          <p>Whether you&apos;re seeking legal collaboration, academic engagement, research partnerships, Kathak performances, cultural events, workshops, or speaking sessions, I welcome opportunities to connect, collaborate, and create meaningful experiences.</p>
          <a 
            className="gold-button" 
            href="mailto:info@gaurigoswami.com?subject=Inquiry%20%26%20Collaboration%20—%20Gauri%20Goswami&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20regarding%20a%20collaboration%20%2F%20inquiry.%0A%0AName%3A%0AOrganization%20%2F%20Institution%3A%0AMessage%20%2F%20Inquiry%20Details%3A%0APhone%20%2F%20Contact%3A%0A%0ABest%20regards%2C"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Gauri Goswami home">
            <Image
              className="brand-logo"
              src="/brand-logo.png"
              alt="Gauri Goswami Logo"
              width={96}
              height={96}
              unoptimized
            />
          </Link>
          <p className="footer-about">
            Gauri Goswami is an Advocate, LL.M. in International Commercial Law, Kathak Visharad-II, researcher, and cultural ambassador.
          </p>
          <div className="footer-social" aria-label="Social media links">
            <a href="#" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
            <a href="#" aria-label="Instagram" title="Instagram"><FaInstagram aria-hidden="true" /></a>
            <a href="#" aria-label="Facebook" title="Facebook"><FaFacebookF aria-hidden="true" /></a>
            <a href="#" aria-label="YouTube" title="YouTube"><FaYoutube aria-hidden="true" /></a>
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
              <Link href="/#blog">Blog</Link>
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
          <Link href="/#kathak">Testimonials</Link>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40gaurigoswami.com&su=Performance%20Booking%20Inquiry" target="_blank" rel="noreferrer">Book Performance</a>
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
    </div>
  );
}
