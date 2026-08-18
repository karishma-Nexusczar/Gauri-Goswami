"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface TestimonialItem {
  id: string;
  category: string;
  quote: string;
  author: string;
  title: string;
  company?: string;
  location: string;
  avatar: string;
  theme: "red" | "yellow";
}

const initialTestimonials: TestimonialItem[] = [
  {
    id: "1",
    category: "Founder & Industry Leader",
    quote: "It was a pleasure working with Gauri Goswami during her student life when she undertook a modelling assignment with NISA'S. From the very beginning, Gauri displayed a highly professional attitude, punctuality, and a strong commitment to her work. She carried herself with confidence, followed directions exceptionally well, and maintained excellent discipline throughout the assignment. Her positive attitude, graceful presence, and willingness to learn made her a delight to work with. Despite being a student, she demonstrated maturity and professionalism that matched experienced models. I appreciate Gauri's dedication and work ethic and am confident that she will continue to excel in the modelling and fashion industry. I wish her every success in all her future endeavors.",
    author: "Nisa Sarma",
    title: "Founder of Nisa’s Hand Made Collection",
    location: "Assam, India",
    avatar: "/nisa-sarma.jpg",
    theme: "red"
  },
  {
    id: "2",
    category: "Senior Advocates",
    quote: "I had the privilege of working with Ms. Gauri Goswami in my litigation chamber in Delhi before she pursued her LL.M. in the United Kingdom. She is an exceptionally hardworking and dedicated legal professional with outstanding drafting and analytical skills, approaching every case with precision and attention to detail. Beyond her academic and advocacy excellence, Gauri is also a gifted dancer whose performances reflect the same discipline and passion she brings to her profession. She is truly an inspiration to young professionals, especially women, and I am confident she will continue to achieve great success.",
    author: "Advocate Pramod Gupta",
    title: "Delhi High Court Advocate",
    location: "New Delhi, India",
    avatar: "/pramod-gupta.jpg",
    theme: "red"
  },
  {
    id: "3",
    category: "Law Professors",
    quote: "Gauri is a fine young lady with remarkable focus and single-mindedness, exemplary behavior, and commitment to excellence in everything she undertakes. She possesses excellent communication skills, particularly in legal writing, and has consistently ranked among the finest students of her batch. Her dedicated work as a Pro Bono Associate, active participation in legal awareness initiatives, mooting, literary activities, and cultural events reflects her leadership, compassion, and exceptional potential.",
    author: "Professor Diptimoni Boruah",
    title: "Professor of Law",
    location: "National Law University and Judicial Academy, Assam",
    avatar: "/diptimoni-boruah.jpg",
    theme: "red"
  },
  {
    id: "4",
    category: "Cultural Leaders",
    quote: "Since the day I first met Gauri, I have known her as a talented and promising folk dancer. She is a graceful and expressive performer who brings passion, beauty, and dedication to every performance. Her commitment to both her art and her academics is truly admirable. I wish her every success in her future projects and throughout her academic and artistic journey.",
    author: "Anannya Mahanta Jugnarain",
    title: "Performing Artist | Founder, Sutraya",
    location: "London, United Kingdom",
    avatar: "/anannya-mahanta.jpg",
    theme: "yellow"
  },
  {
    id: "5",
    category: "Academics",
    quote: "Gauri is distinctively attentive, proactive, and inquisitive, consistently pursuing projects beyond the classroom. Her active participation in conferences on Intellectual Property Rights, Traditional Knowledge, and Indigenous Rights demonstrates both academic curiosity and professional commitment. With her exceptional dedication, multidisciplinary interests, and strong work ethic, I am confident she will excel in every endeavor she undertakes.",
    author: "Mr. Ankur Madhia",
    title: "Assistant Professor of Law",
    location: "National Law University and Judicial Academy, Assam",
    avatar: "/ankur-madhia.jpg",
    theme: "yellow"
  },
  {
    id: "6",
    category: "Cultural Leaders",
    quote: "It has been a pleasure knowing Gauri. Her professionalism, creativity, and dedication are reflected in everything she undertakes. Whether representing her culture through dance or pursuing excellence in academics, she demonstrates confidence, discipline, and a genuine commitment to making a meaningful impact. I wish her continued success in all her future endeavors.",
    author: "Sisi Xi",
    title: "Partner and Head of Global Marketing & Operations",
    company: "Easy Transfer",
    location: "International",
    avatar: "/sisi-xi.jpg",
    theme: "yellow"
  },
  {
    id: "7",
    category: "Government & Cultural Leaders",
    quote: "Having known Gauri for many years now, I have always been awed by her passion and aptitude for dance, in addition to her academic acumen. She is equally well versed in various different idioms of the art form, be it classical, folk or modern, and has showcased her ability at various stages throughout her career to great acclaim. She approaches dance with the focus of an academic and zeal of a conservationist. I am certain that her talents will reach a still wider audience, and get the recognition it deserves in the not too distant future.",
    author: "Sandipan Goswami",
    title: "Block Development Officer",
    location: "PNRD, Government of Assam • Assam, India",
    avatar: "/sandipan-goswami.jpg",
    theme: "red"
  }
];

export default function TestimonialsSlider() {
  const [cardsPerPage, setCardsPerPage] = useState<number>(3);
  const [page, setPage] = useState<number>(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) setCardsPerPage(1);
      else if (window.innerWidth <= 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(initialTestimonials.length / cardsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const visibleCards = Array.from({ length: cardsPerPage }).map((_, offset) => {
    const startIdx = page * cardsPerPage;
    return initialTestimonials[(startIdx + offset) % initialTestimonials.length];
  });

  return (
    <section className="voices-testimonials-section" id="testimonials" aria-label="Testimonials">
      {/* Title Header */}
      <div className="voices-header-block">
        <h2 className="voices-section-title">TESTIMONIALS</h2>
      </div>

      {/* Slider Wrapper */}
      <div
        className="voices-slider-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="voices-arrow arrow-left"
          onClick={handlePrev}
          aria-label="Previous testimonials page"
        >
          <FaChevronLeft />
        </button>

        <div className="voices-cards-grid">
          {visibleCards.map((card) => {
            const isExpanded = expandedId === card.id;
            const themeClass = card.theme === "red" ? "theme-red" : "theme-yellow";
            return (
              <article className={`voices-card-box ${themeClass}`} key={card.id}>
                {/* 1. Top Circular Photo Avatar Inside Card */}
                <div className="voices-photo-circle">
                  <Image
                    src={card.avatar}
                    alt={card.author}
                    width={96}
                    height={96}
                    className="voices-photo-img"
                    unoptimized
                  />
                </div>

                {/* 2. Quote Text */}
                <p className={`voices-quote-text ${isExpanded ? "" : "clamped"}`}>
                  {card.quote}
                </p>

                {/* 3. Closing Signature */}
                <div className="voices-closing-wrap">
                  <p className="voices-best-wishes">Best wishes,</p>
                  <p className="voices-from-line">From, {card.author}</p>
                  <p className="voices-author-loc">{card.title}</p>
                  {card.company && (
                    <p className="voices-author-loc">{card.company}</p>
                  )}
                  <p className="voices-author-loc" style={{ marginTop: '2px', fontSize: '0.65rem' }}>{card.location}</p>
                </div>

                {/* 4. Read More Toggle */}
                <div className="voices-read-more-wrap">
                  <button
                    type="button"
                    className="voices-read-more-btn"
                    onClick={() => toggleExpand(card.id)}
                  >
                    {isExpanded ? "Read Less ↑" : "Read More →"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="voices-arrow arrow-right"
          onClick={handleNext}
          aria-label="Next testimonials page"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dynamic Pagination Dots */}
      <div className="voices-dots-row">
        {Array.from({ length: totalPages }).map((_, pIdx) => (
          <button
            key={pIdx}
            type="button"
            className={`voices-dot ${pIdx === page ? "active" : ""}`}
            onClick={() => setPage(pIdx)}
            aria-label={`Go to testimonial page ${pIdx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
