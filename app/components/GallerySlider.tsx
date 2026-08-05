"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export interface GalleryItem {
  id: string;
  category: "Professional" | "Graduation" | "Scholarship" | "Kathak" | "International" | "Legal" | "Academic";
  title: string;
  subtitle: string;
  caption: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    category: "Professional",
    title: "Professional Identity",
    subtitle: "Advocate & Researcher",
    caption: "Professional identity as an Advocate & Legal Researcher pictured with UK Law cohort.",
    image: "/gallery-1-law-cohort-group.jpg"
  },
  {
    id: "2",
    category: "Graduation",
    title: "LL.M. Graduation",
    subtitle: "University of Nottingham",
    caption: "LL.M. Postgraduate Law Cohort at the University of Nottingham podium.",
    image: "/gallery-2-llm-graduation.jpg"
  },
  {
    id: "3",
    category: "Scholarship",
    title: "South Asia Excellence Award",
    subtitle: "Scholarship Award",
    caption: "Official South Asia Postgraduate Excellence Award Celebration Event on stage at Nottingham.",
    image: "/gallery-3-scholarship-award.jpg"
  },
  {
    id: "4",
    category: "Kathak",
    title: "Kathak Performance",
    subtitle: "Solo Stage Recital",
    caption: "Live stage performance at United Colours of North East India UK cultural festival in London.",
    image: "/gallery-4-kathak-stage.jpg"
  },
  {
    id: "5",
    category: "International",
    title: "High Commission of India",
    subtitle: "Cultural Diplomacy",
    caption: "Cultural diplomacy presentation at the High Commission of India Loktak Lake exhibition in London.",
    image: "/high-commission-loktak.jpg"
  },
  {
    id: "6",
    category: "International",
    title: "North East Festival London",
    subtitle: "International Performance",
    caption: "North-East India Cultural Circuit international festival feature.",
    image: "/gallery-6-northeast-festival.jpg"
  },
  {
    id: "7",
    category: "Legal",
    title: "Delhi High Court",
    subtitle: "Legal Practice",
    caption: "Counsel desk portrait representing practice across Delhi High Court and Supreme Court of India.",
    image: "/gallery-7-delhi-high-court.jpg"
  },
  {
    id: "8",
    category: "Academic",
    title: "School of Law",
    subtitle: "Academic Engagement",
    caption: "School of Law corridor leading to academic workshops, lectures, and legal research seminars.",
    image: "/gallery-8-academic-engagement.jpg"
  }
];

// Tripled track array so cards seamlessly fill both left and right edges with ZERO blank space
const loopTrackItems = [...galleryItems, ...galleryItems, ...galleryItems];

export default function GallerySlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Smooth automatic Left-to-Right advance across 8 unique items
  useEffect(() => {
    if (isPaused || selectedItem !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, selectedItem]);

  // Keyboard escape key listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const cardStep = 220 + 16; // card width (220px) + gap (16px) = 236px
  // Offset start at middle set (galleryItems.length + activeIndex) so cards extend infinitely on both left and right
  const trackOffset = - (galleryItems.length + activeIndex) * cardStep;

  return (
    <section className="moments-gallery-section" id="gallery" aria-label="Gallery">
      {/* Header Block */}
      <div className="moments-header-block">
        <div className="moments-kicker-wrap">
          <span className="moments-line" />
          <span className="moments-kicker">PORTFOLIO IN MOTION</span>
          <span className="moments-line" />
        </div>
        <h2 className="moments-title">Moments That Define My Journey</h2>
        <p className="moments-desc">
          A visual journey through legal practice, international academic achievements, Kathak performances, research, cultural diplomacy, and professional milestones. Click any image to view details.
        </p>
      </div>

      {/* Slide Track with ZERO right-side blank space */}
      <div
        className="moments-slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="moments-slides-track"
          style={{
            transform: `translateX(${trackOffset}px)`,
            transition: "transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)"
          }}
        >
          {loopTrackItems.map((item, idx) => {
            const isItemActive = idx % galleryItems.length === activeIndex;
            return (
              <div
                key={`${item.id}-${idx}`}
                className={`moments-photo-card ${isItemActive ? "active" : ""}`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="moments-photo-wrapper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 195px, 220px"
                    quality={90}
                  />
                  
                  {/* Hover overlay with title, subtitle/location, View Image button */}
                  <div className="moments-card-hover-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <span>View Image &amp; Caption →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 8 Pagination Dots Row */}
      <div className="moments-dots-row">
        {galleryItems.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`moments-dot ${idx === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Outlined Gold CTA Button */}
      <div className="moments-cta-wrap">
        <Link className="moments-explore-btn" href="/gallery">
          Explore Complete Gallery →
        </Link>
      </div>

      {/* Image Lightbox Modal */}
      {selectedItem && (
        <div
          className="gallery-lightbox-overlay"
          onClick={() => setSelectedItem(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="gallery-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close image modal"
            >
              ✕
            </button>

            {/* Modal Image Box */}
            <div className="gallery-lightbox-img-wrap">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                quality={95}
                className="gallery-lightbox-img"
              />
            </div>

            {/* Modal Details & Caption Box */}
            <div className="gallery-lightbox-info">
              <span className="gallery-lightbox-tag">{selectedItem.category}</span>
              <h3 className="gallery-lightbox-title">{selectedItem.title}</h3>
              <h4 className="gallery-lightbox-subtitle">{selectedItem.subtitle}</h4>
              <p className="gallery-lightbox-caption">{selectedItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
