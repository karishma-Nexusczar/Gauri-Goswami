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
  location: string;
  avatar: string;
}

const initialTestimonials: TestimonialItem[] = [
  {
    id: "1",
    category: "Senior Advocates",
    quote: "I had the privilege of working with Ms. Gauri Goswami in my litigation chamber in Delhi before she pursued her LL.M. in the United Kingdom. She is an exceptionally hardworking and dedicated legal professional with outstanding drafting and analytical skills, approaching every case with precision and attention to detail. Beyond her academic and advocacy excellence, Gauri is also a gifted dancer whose performances reflect the same discipline and passion she brings to her profession. She is truly an inspiration to young professionals, especially women, and I am confident she will continue to achieve great success.",
    author: "Advocate Pramod Gupta",
    title: "Delhi High Court Advocate",
    location: "New Delhi, India",
    avatar: "/pramod-gupta.jpg"
  },
  {
    id: "2",
    category: "Law Professors",
    quote: "Gauri is a fine young lady with remarkable focus and single-mindedness, exemplary behavior, and commitment to excellence in everything she undertakes. She possesses excellent communication skills, particularly in legal writing, and has consistently ranked among the finest students of her batch. Her dedicated work as a Pro Bono Associate, active participation in legal awareness initiatives, mooting, literary activities, and cultural events reflects her leadership, compassion, and exceptional potential.",
    author: "Professor Diptimoni Boruah",
    title: "Professor of Law",
    location: "National Law University and Judicial Academy, Assam",
    avatar: "/diptimoni-boruah.jpg"
  },
  {
    id: "3",
    category: "Cultural Leaders",
    quote: "Since the day I first met Gauri, I have known her as a talented and promising folk dancer. She is a graceful and expressive performer who brings passion, beauty, and dedication to every performance. Her commitment to both her art and her academics is truly admirable. I wish her every success in her future projects and throughout her academic and artistic journey.",
    author: "Anannya Mahanta Jugnarain",
    title: "Performing Artist | Founder, Sutraya",
    location: "London, United Kingdom",
    avatar: "/anannya-mahanta.jpg"
  },
  {
    id: "4",
    category: "Academics",
    quote: "Gauri is distinctively attentive, proactive, and inquisitive, consistently pursuing projects beyond the classroom. Her active participation in conferences on Intellectual Property Rights, Traditional Knowledge, and Indigenous Rights demonstrates both academic curiosity and professional commitment. With her exceptional dedication, multidisciplinary interests, and strong work ethic, I am confident she will excel in every endeavor she undertakes.",
    author: "Mr. Ankur Madhia",
    title: "Assistant Professor of Law",
    location: "National Law University and Judicial Academy, Assam",
    avatar: "/ankur-madhia.jpg"
  },
  {
    id: "5",
    category: "Cultural Leaders",
    quote: "It has been a pleasure knowing Gauri. Her professionalism, creativity, and dedication are reflected in everything she undertakes. Whether representing her culture through dance or pursuing excellence in academics, she demonstrates confidence, discipline, and a genuine commitment to making a meaningful impact. I wish her continued success in all her future endeavors.",
    author: "Sisi Xi",
    title: "International Professional & Cultural Supporter",
    location: "International",
    avatar: "/sisi-xi.jpg"
  }
];

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = initialTestimonials.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 2 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 2) % total);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Auto Slider Effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 2) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Visible 3 cards starting from activeIndex
  const visibleCards = [];
  for (let i = 0; i < 3; i++) {
    const idx = (activeIndex + i) % total;
    visibleCards.push(initialTestimonials[idx]);
  }

  return (
    <section className="voices-testimonials-section" id="testimonials" aria-label="Testimonials">
      {/* Gold Flanked Kicker */}
      <div className="voices-header-block">
        <div className="voices-kicker-wrap">
          <span className="voices-line" />
          <span className="voices-kicker">ENDORSEMENTS &amp; PROFESSIONAL ACCLAIM</span>
          <span className="voices-line" />
        </div>
      </div>

      {/* Slider Container with Left & Right Arrows */}
      <div
        className="voices-slider-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="voices-arrow arrow-left"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>

        <div className="voices-cards-grid">
          {visibleCards.map((card) => {
            const isExpanded = expandedId === card.id;
            return (
              <article className={`voices-card ${isExpanded ? "expanded" : ""}`} key={`${card.id}-${activeIndex}`}>
                <div className="voices-card-top">
                  <div className="voices-quote-icon">&ldquo;</div>
                  <p className={`voices-quote-text ${isExpanded ? "" : "clamped"}`}>
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </div>

                <div className="voices-card-bottom-stack">
                  <div className="voices-author-row">
                    <div className="voices-avatar">
                      <Image src={card.avatar} alt={card.author} fill sizes="40px" unoptimized />
                    </div>
                    <div className="voices-author-meta">
                      <h4>{card.author}</h4>
                      <p className="voices-author-role">{card.title}</p>
                      <p className="voices-author-loc">{card.location}</p>
                    </div>

                    <div className="voices-read-more-wrap">
                      <button
                        type="button"
                        className="voices-read-more-btn"
                        onClick={() => toggleExpand(card.id)}
                      >
                        {isExpanded ? "Read Less ↑" : "Read More →"}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="voices-arrow arrow-right"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="voices-dots-row">
        {initialTestimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`voices-dot ${idx === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to testimonial slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
