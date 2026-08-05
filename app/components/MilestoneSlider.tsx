"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

interface MilestoneCard {
  year: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export default function MilestoneSlider({ cards }: { cards: MilestoneCard[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="milestones-slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button 
        className="slider-arrow arrow-left" 
        onClick={() => scroll("left")}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <div className="milestones-scroll-track" ref={scrollRef}>
        {cards.map((card, idx) => (
          <article className="landscape-milestone-card" key={`${card.title}-${idx}`}>
            <div className="card-image-landscape">
              <Image src={card.image} alt={card.title} fill sizes="340px" unoptimized />
            </div>
            <div className="card-landscape-content">
              <div className="card-header-row">
                <span className="card-year">{card.year}</span>
                <span className="card-category">{card.category}</span>
              </div>
              <h3>{card.title}</h3>
              <p className="card-subtitle">{card.subtitle}</p>
              <a className="card-cta-link" href="#contact">
                {card.cta}
              </a>
            </div>
          </article>
        ))}
      </div>

      <button 
        className="slider-arrow arrow-right" 
        onClick={() => scroll("right")}
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}
