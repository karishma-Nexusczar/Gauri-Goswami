"use client";

import React from "react";
import Link from "next/link";

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
        <Link className="gold-button" href="/research#publications">Explore Research →</Link>
      </div>

      <div className="paper-list">
        {allPublications.slice(0, 4).map((pub) => (
          <Link href="/research#publications" key={pub}>
            <b>{pub}</b>
            <small>VIEW PUBLICATION →</small>
          </Link>
        ))}
        <Link
          href="/research#publications"
          className="view-all"
          style={{ width: '100%', cursor: 'pointer', textAlign: 'center', display: 'block' }}
        >
          VIEW ALL PUBLICATIONS →
        </Link>
      </div>
    </section>
  );
}
