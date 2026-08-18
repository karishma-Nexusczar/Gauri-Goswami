"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface EventItem {
  year: string;
  category: string;
  title: string;
  location: string;
  img: string;
  desc: string;
}

const homeGlobalEvents: EventItem[] = [
  {
    year: "2026",
    category: "CULTURAL PERFORMANCE",
    title: "United Colours of North East India",
    location: "📍 London, United Kingdom",
    img: "/united-colours-northeast-stage-cover.jpg",
    desc: "Fashion Show representing the state of Assam with a graceful Red Muga Mekhela Chador paired with a matching Muga blouse and Riha, complemented by authentic Assamese jewellery, including Gamkharu, Dhulbiri, Jhunbiri, and Golpota. The look is completed with a traditional hair bun adorned with vibrant red flowers, adding a touch of elegance and cultural charm."
  },
  {
    year: "2026",
    category: "CULTURAL FESTIVAL",
    title: "London Rongali Bihu",
    location: "📍 London, United Kingdom",
    img: "/london-rongali-bihu-2026-cover.jpg",
    desc: "Celebrated traditional Assamese Rongali Bihu festival performance in London, presenting authentic Bihu dance, traditional attire, and folk heritage before international delegates and diaspora."
  },
  {
    year: "2026",
    category: "FOLK HERITAGE",
    title: "Rongali Bihu Celebration",
    location: "📍 London, United Kingdom",
    img: "/kathak-london-rongali-bihu-2024.jpg",
    desc: "Invited Assamese folk performance at London Rongali Bihu, showcasing vibrant cultural rhythms, traditional Assamese attire, and community celebration."
  },
  {
    year: "2025",
    category: "CLASSICAL RECITALS",
    title: "Shankar Jayanti",
    location: "📍 London, United Kingdom",
    img: "/assam-sahitya-sabha-shankar-jayanti-poster.png",
    desc: "Honoured classical Kathak and devotional performance commemorating Mahapurush Srimanta Sankardev, celebrating Assam's spiritual philosophy and classical arts."
  },
  {
    year: "2025",
    category: "CULTURAL DIPLOMACY",
    title: "Assam Sahitya Sabha",
    location: "📍 London, United Kingdom",
    img: "/culture-asam-sahitya-sabha-stage-recital.jpg",
    desc: "Cultural presentation hosted by Assam Sahitya Sabha (UK Branch), bringing Assamese literature, classical Kathak dance, and cultural diplomacy to London."
  }
];

export default function HomeGlobalEvents() {
  const [expandedHomeEvents, setExpandedHomeEvents] = useState<Record<number, boolean>>({});

  return (
    <div className="home-global-events-grid">
      {homeGlobalEvents.map((event, idx) => {
        const isExpanded = !!expandedHomeEvents[idx];
        const isLongText = event.desc.length > 130;
        const displayText = isExpanded || !isLongText ? event.desc : `${event.desc.substring(0, 110)}...`;

        return (
          <div key={idx} className="home-event-card">
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div className="home-event-img-wrap">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  unoptimized
                />
                <span className="home-event-year-badge">{event.year}</span>
              </div>
              <div className="home-event-body">
                <div>
                  <span className="home-event-category">{event.category}</span>
                  <h3 className="home-event-title">{event.title}</h3>
                  <div className="home-event-location">{event.location}</div>
                  <p className="home-event-desc">{displayText}</p>
                </div>

                <div className="home-event-footer-wrap">
                  {isLongText && (
                    <button
                      type="button"
                      className="home-event-read-more-btn"
                      onClick={() => setExpandedHomeEvents(prev => ({ ...prev, [idx]: !prev[idx] }))}
                    >
                      {isExpanded ? "Read Less ↑" : "Read More ↓"}
                    </button>
                  )}
                  <Link href="/gallery#global-events" className="home-event-view-link">
                    VIEW EVENT →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
