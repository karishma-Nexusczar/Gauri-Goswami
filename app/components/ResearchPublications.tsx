"use client";

import React, { useState } from "react";

const allPublications = [
  "International Commercial Law",
  "Corporate Governance",
  "Greenwashing",
  "Trade Finance",
  "AI Regulation",
  "Consumer Protection",
  "Cross Border Commerce"
];

export default function ResearchPublications() {
  const [showAll, setShowAll] = useState(false);

  const displayedPubs = showAll ? allPublications : allPublications.slice(0, 4);

  return (
    <section className="research dark-section" id="research" aria-label="Research and Publications">
      <div className="book" aria-hidden="true">
        <div className="book-inner">
          <small>Research &amp;</small>
          <strong>Publications</strong>
          <i>Commercial Law</i>
          <span>✦</span>
        </div>
      </div>

      <div className="research-lead" id="blog">
        <p className="section-kicker">✦ Featured Research</p>
        <h2>Research &amp;<br />Publications</h2>
        <div className="research-topics-inline" aria-label="Research areas">
          {[
            'Commercial Law',
            'Corporate Governance',
            'Trade Finance',
            'Greenwashing',
            'Artificial Intelligence',
            'International Commercial Law'
          ].map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
        <p>
          Exploring International Commercial Law, corporate governance, sustainability, and public policy through academic research while preserving India&apos;s cultural heritage through Kathak and international cultural engagement.
        </p>
        <a className="gold-button" href="#contact">Explore Research →</a>
      </div>

      <div className="paper-list">
        {displayedPubs.map((pub) => (
          <a href="#contact" key={pub}>
            <b>{pub}</b>
            <small>VIEW PUBLICATION →</small>
          </a>
        ))}
        <button
          type="button"
          className="view-all"
          onClick={() => setShowAll(!showAll)}
          style={{ width: '100%', cursor: 'pointer' }}
        >
          {showAll ? "SHOW FEWER PUBLICATIONS" : "VIEW ALL PUBLICATIONS →"}
        </button>
      </div>
    </section>
  );
}
