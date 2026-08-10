"use client";

import React, { useState } from "react";

export interface MatterItem {
  brand: string;
  title: string;
  forum: string;
  image: string;
  roles: string[];
}

interface RepresentativeMattersProps {
  matters?: MatterItem[];
}

const featuredMatter: MatterItem = {
  brand: "Maruti Suzuki",
  title: "Maruti Suzuki v. Nalinbhai Shah & Others",
  forum: "National Consumer Disputes Redressal Commission (NCDRC)",
  image: "/maruti-suzuki-hall.jpg",
  roles: [
    "Drafted Written Synopsis",
    "Prepared Written Submissions",
    "Conducted Legal Research",
    "Assisted During Hearings"
  ]
};

const defaultMatters: MatterItem[] = [
  {
    brand: "Volkswagen",
    title: "Vijay Suresh v. Volkswagen & Others",
    forum: "National Consumer Disputes Redressal Commission (NCDRC)",
    image: "/volkswagen-synopsis.jpg",
    roles: [
      "Written Submissions",
      "List of Dates & Events",
      "Evidence Review",
      "Litigation Brief Preparation"
    ]
  },
  {
    brand: "Skoda Auto",
    title: "Skoda Auto India Volkswagen Pvt. Ltd. v. K.P. Aggarwal & Others",
    forum: "National Consumer Disputes Redressal Commission (NCDRC)",
    image: "/skoda-synopsis.png",
    roles: [
      "Written Synopsis",
      "Legal Research",
      "Hearing Preparation",
      "Record Compilation"
    ]
  },
  {
    brand: "Nissan",
    title: "Anuppama Aggarwal v. Nissan Motors & Others",
    forum: "National Consumer Disputes Redressal Commission (NCDRC)",
    image: "/nissan-litigation.jpg",
    roles: [
      "List of Dates & Events",
      "Filing Coordination",
      "Procedural Compliance",
      "Index & Annexures"
    ]
  },
  {
    brand: "Maruti Suzuki",
    title: "Maruti Suzuki v. Rita Jain & Others",
    forum: "National Consumer Disputes Redressal Commission (NCDRC)",
    image: "/maruti-suzuki-hall.jpg",
    roles: [
      "Written Synopsis",
      "Written Submissions",
      "Legal Research",
      "Courtroom Assistance"
    ]
  },
  {
    brand: "Nissan",
    title: "Neetu Singh v. Nissan Motors & Others",
    forum: "National Consumer Disputes Redressal Commission (NCDRC)",
    image: "/nissan-litigation.jpg",
    roles: [
      "List of Dates & Events",
      "Index of Documents",
      "Litigation Documentation",
      "Procedural Applications"
    ]
  },
  {
    brand: "Volkswagen",
    title: "XS Infoways v. Volkswagen & Others",
    forum: "National Consumer Disputes Redressal Commission (NCDRC)",
    image: "/volkswagen-synopsis.jpg",
    roles: [
      "Legal Research",
      "Case Analysis",
      "Consumer Protection Law",
      "Litigation Strategy"
    ]
  },
  {
    brand: "Skoda Auto",
    title: "Srikant v. Skoda Auto India Pvt. Ltd.",
    forum: "National Consumer Disputes Redressal Commission (NCDRC)",
    image: "/skoda-synopsis.png",
    roles: [
      "Rejoinder",
      "Written Submissions",
      "Legal Research",
      "Statutory Analysis"
    ]
  }
];

const keyAreasOfContribution = [
  "Consumer Litigation",
  "Legal Research",
  "Written Submissions",
  "Written Synopsis",
  "Rejoinders",
  "Litigation Strategy",
  "Procedural Compliance",
  "Courtroom Assistance",
  "Document Review",
  "Case Management"
];

export default function RepresentativeMatters({ matters }: RepresentativeMattersProps) {
  const [showAll, setShowAll] = useState(false);

  const listToUse = (matters && matters.length > 0 && (matters[0] as MatterItem).roles) ? matters : defaultMatters;
  const displayedTwoColGrid = showAll ? listToUse : listToUse.slice(0, 2);

  return (
    <section className="editorial-representative-matters" id="matters" aria-labelledby="matters-heading">
      <div className="editorial-matters-container">
        
        {/* Header Block */}
        <header className="editorial-matters-header">
          <div className="editorial-header-copy">
            <p className="editorial-matters-kicker">LEGAL PORTFOLIO</p>
            <h2 id="matters-heading">REPRESENTATIVE MATTERS</h2>
            <p className="editorial-matters-sub">
              A selection of representative consumer litigation matters handled before the National Consumer Disputes Redressal Commission (NCDRC), demonstrating legal research, drafting, procedural compliance and appellate advocacy.
            </p>
          </div>
          <div className="editorial-header-action">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="editorial-header-btn"
            >
              <span>{showAll ? "View Featured Matters" : "View All Matters"}</span>
              <span className="editorial-header-arrow">→</span>
            </button>
          </div>
        </header>

        {/* Featured Matter (Large Full Width Banner Card) */}
        <article className="featured-matter-card">
          <div className="featured-card-top-bar">
            <span className="featured-card-badge">✦ FEATURED MATTER</span>
            <span className="featured-brand-pill">{featuredMatter.brand}</span>
          </div>

          <div className="featured-card-main-content">
            <h3 className="featured-card-title">{featuredMatter.title}</h3>
            <p className="featured-card-forum">{featuredMatter.forum}</p>

            <ul className="featured-roles-grid">
              {featuredMatter.roles.map((role, idx) => (
                <li key={idx} className="featured-role-item">
                  <span className="featured-role-bullet">✦</span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>

            <div className="featured-card-action">
              <a href="#contact" className="featured-matter-btn" aria-label={`View ${featuredMatter.title}`}>
                <span>VIEW MATTER DETAILS</span>
                <span className="featured-btn-arrow">→</span>
              </a>
            </div>
          </div>
        </article>

        {/* Two Column Grid */}
        <div className="editorial-two-col-grid">
          {displayedTwoColGrid.map((matter, idx) => (
            <article className="editorial-grid-card" key={`${matter.title || matter.brand || idx}-${idx}`}>
              <div className="editorial-card-header">
                <span className="editorial-brand-pill">{matter.brand || "CASE STUDY"}</span>
              </div>
              <p className="editorial-card-forum">{matter.forum || "National Consumer Disputes Redressal Commission"}</p>
              <h3 className="editorial-card-title">{matter.title}</h3>

              {matter.roles && matter.roles.length > 0 && (
                <ul className="editorial-roles-list">
                  {matter.roles.map((role, rIdx) => (
                    <li key={rIdx} className="editorial-role-item">
                      <span className="editorial-bullet">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="editorial-card-action">
                <a href="#contact" className="editorial-card-link" aria-label={`View ${matter.title}`}>
                  <span>VIEW DETAILS</span> <span className="editorial-link-arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Contribution Section (Premium Legal Skills Panel) */}
        <div className="editorial-contributions-panel" id="legal-skills">
          <h4 className="editorial-contributions-title">KEY AREAS OF CONTRIBUTION</h4>
          <div className="editorial-contributions-tags">
            {keyAreasOfContribution.map((tag) => (
              <span key={tag} className="editorial-tag-pill">✦ {tag}</span>
            ))}
          </div>
        </div>

        {/* Bottom Toggle CTA */}
        <div className="editorial-matters-footer">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="editorial-matters-toggle-btn"
          >
            <span>{showAll ? "SHOW FEWER MATTERS" : "EXPLORE ALL 8 REPRESENTATIVE MATTERS"}</span>
            <span className={`editorial-toggle-arrow ${showAll ? "expanded" : ""}`}>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
