"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AwardsRecognition() {
  const [previewImage, setPreviewImage] = React.useState<{ src: string; alt: string } | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewImage(null);
    };
    if (previewImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewImage]);

  return (
    <section className="luxury-awards-section" id="awards" aria-label="Awards and Recognition">
      <div className="luxury-awards-container">
        
        {/* Header */}
        <div className="luxury-awards-header">
          <span className="luxury-awards-label">
            <span className="luxury-label-dash">—</span> AWARDS &amp; <span className="luxury-label-star">✦</span> RECOGNITION <span className="luxury-label-dash">—</span>
          </span>
          <h2 className="luxury-awards-heading">
            Honours, Awards &amp; Global Recognition
          </h2>
          <p className="luxury-awards-desc">
            Recognising a journey of academic excellence, international scholarships, legal distinction, research excellence, cultural leadership, and global recognition across leading universities and institutions.
          </p>
        </div>

        {/* Top 2-Column Split Layout: Featured Story (70%) + Visual Cards (30%) */}
        <div className="awards-main-grid">
          
          {/* Left Column (70%): Large Featured Story Card */}
          <article className="featured-story-card">
            <div className="featured-story-header">
              <span className="featured-story-badge">FEATURED ACHIEVEMENT</span>
              <span className="featured-story-uni">University of Nottingham</span>
            </div>
            
            <h3 className="featured-story-title">University of Nottingham – South Asia Postgraduate Excellence Award</h3>

            {/* Collage Hero Image Grid */}
            <div className="featured-story-collage-grid">
              <div
                className="collage-item"
                onClick={() =>
                  setPreviewImage({
                    src: "/nottingham-masters-experience-reflections.jpg",
                    alt: "University of Nottingham Master's Experience Reflections",
                  })
                }
                title="Click to view full image"
              >
                <Image
                  src="/nottingham-masters-experience-reflections.jpg"
                  alt="University of Nottingham Master's Experience Reflections"
                  fill
                  sizes="35vw"
                  className="featured-story-img"
                  quality={95}
                />
              </div>
              <div
                className="collage-item"
                onClick={() =>
                  setPreviewImage({
                    src: "/nottingham-advantage-award-certificate.png",
                    alt: "Nottingham Advantage Award Certificate 2024-25 — Gauri Goswami",
                  })
                }
                title="Click to view full image"
              >
                <Image
                  src="/nottingham-advantage-award-certificate.png"
                  alt="Nottingham Advantage Award Certificate 2024-25"
                  fill
                  sizes="30vw"
                  className="featured-story-img"
                  unoptimized
                />
              </div>
              <div
                className="collage-item"
                onClick={() =>
                  setPreviewImage({
                    src: "/nottingham-advantage-award-badge.png",
                    alt: "Nottingham Advantage Award Postgraduate Presentation Badge",
                  })
                }
                title="Click to view full image"
              >
                <Image
                  src="/nottingham-advantage-award-badge.png"
                  alt="Nottingham Advantage Award Postgraduate Presentation Badge"
                  fill
                  sizes="25vw"
                  className="featured-story-img"
                  unoptimized
                />
              </div>
            </div>

            <div className="featured-story-body">
              <p>
                After graduating with First Class Honours from the National Law University and Judicial Academy, Assam, Gauri began her legal career in litigation and corporate advisory while preparing for postgraduate study abroad.
              </p>
              <p>
                Securing admission and the prestigious <strong>South Asia Postgraduate Excellence Award</strong> from the University of Nottingham represented a pivotal turning point in her academic journey—opening opportunities across leading UK universities and international legal forums.
              </p>
              <p>
                Today, this achievement anchors her portfolio of international merit scholarships, legal research, academic distinctions, and cultural representation across India and the United Kingdom.
              </p>

              <div className="featured-story-action" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/academics" className="gold-button">
                  Read Scholarship Journey →
                </Link>
                <Link href="/academics" className="outline-button">
                  View Academic Profile
                </Link>
              </div>
            </div>
          </article>

          {/* Right Column (30%): 6 Authentic Visual Achievement Cards */}
          <div className="awards-cards-column">
            
            {/* Card 1 */}
            <div className="awards-visual-card">
              <div
                className="awards-visual-thumb"
                onClick={() =>
                  setPreviewImage({
                    src: "/ntu-scholarship.png",
                    alt: "International Scholarships — Nottingham Trent Law School Academic Excellence Scholarship",
                  })
                }
                title="Click to view full image"
              >
                <Image src="/ntu-scholarship.png" alt="International Scholarships" fill unoptimized />
              </div>
              <div className="awards-visual-content">
                <h4>International Scholarships</h4>
                <p>University of Nottingham, Leeds, Glasgow, Birmingham, Durham, Queen Mary and Exeter merit scholarships worth thousands of pounds.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="awards-visual-card">
              <div
                className="awards-visual-thumb"
                onClick={() =>
                  setPreviewImage({
                    src: "/nottingham-university.png",
                    alt: "Academic Excellence — University of Nottingham Law School",
                  })
                }
                title="Click to view full image"
              >
                <Image src="/nottingham-university.png" alt="Academic Excellence" fill unoptimized />
              </div>
              <div className="awards-visual-content">
                <h4>Academic Excellence</h4>
                <p>Highest marks across Constitutional Law, Evidence, Environmental Law, Intellectual Property, Mergers &amp; Acquisitions, Comparative Legal Systems and more.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="awards-visual-card">
              <div
                className="awards-visual-thumb"
                onClick={() =>
                  setPreviewImage({
                    src: "/academics-postgraduate-excellence-ceremony.jpg",
                    alt: "International Recognition — Postgraduate Excellence Ceremony",
                  })
                }
                title="Click to view full image"
              >
                <Image src="/academics-postgraduate-excellence-ceremony.jpg" alt="International Recognition" fill quality={85} />
              </div>
              <div className="awards-visual-content">
                <h4>International Recognition</h4>
                <p>Scholarships, Advantage Awards, professional certifications and legal achievements from leading UK universities.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="awards-visual-card">
              <div
                className="awards-visual-thumb"
                onClick={() =>
                  setPreviewImage({
                    src: "/award-advocate.png",
                    alt: "Legal Competitions & Advocacy Certificate",
                  })
                }
                title="Click to view full image"
              >
                <Image src="/award-advocate.png" alt="Legal Competitions" fill unoptimized />
              </div>
              <div className="awards-visual-content">
                <h4>Legal Competitions</h4>
                <p>National Moot Court, Mediation, Parliamentary Debate, Model United Nations, Plea Competition and Advocacy Workshops.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="awards-visual-card">
              <div
                className="awards-visual-thumb"
                onClick={() =>
                  setPreviewImage({
                    src: "/legal-scholar-law-library.jpg",
                    alt: "Research & Professional Development — Law Library",
                  })
                }
                title="Click to view full image"
              >
                <Image src="/legal-scholar-law-library.jpg" alt="Research & Professional Development" fill quality={85} />
              </div>
              <div className="awards-visual-content">
                <h4>Research &amp; Professional Development</h4>
                <p>Commercial Law, Human Rights, AI &amp; Law, Corporate Governance, Sustainability, Insolvency, International Commercial Law.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="awards-visual-card">
              <div
                className="awards-visual-thumb"
                onClick={() =>
                  setPreviewImage({
                    src: "/kathak-jaapi-stage-recital.jpg",
                    alt: "Cultural Excellence — Kathak & Assamese Cultural Recital in UK",
                  })
                }
                title="Click to view full image"
              >
                <Image src="/kathak-jaapi-stage-recital.jpg" alt="Cultural Excellence" fill quality={85} />
              </div>
              <div className="awards-visual-content">
                <h4>Cultural Excellence</h4>
                <p>Felicitated in the United Kingdom for promoting Assamese culture through traditional dance performances.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Achievement Timeline */}
        <div className="awards-timeline-block">
          <h3 className="awards-timeline-heading">JOURNEY OF EXCELLENCE &amp; ACHIEVEMENT</h3>
          
          <div className="awards-timeline-track">
            <div className="timeline-node">
              <span className="node-year">2018</span>
              <strong>NLU Assam</strong>
              <small>Law Journey Begins</small>
            </div>
            <div className="timeline-arrow">→</div>

            <div className="timeline-node">
              <span className="node-year">2019</span>
              <strong>Debates &amp; MUN</strong>
              <small>Competitions</small>
            </div>
            <div className="timeline-arrow">→</div>

            <div className="timeline-node">
              <span className="node-year">2020–2023</span>
              <strong>Academic Excellence</strong>
              <small>Highest Scores &amp; Research</small>
            </div>
            <div className="timeline-arrow">→</div>
            
            <div className="timeline-node">
              <span className="node-tag">PRACTICE</span>
              <strong>Legal Practice</strong>
              <small>Delhi Litigation &amp; Corporate Law</small>
            </div>
            <div className="timeline-arrow">→</div>

            <div className="timeline-node status-offers">
              <span className="node-year">2024</span>
              <strong>10+ UK Offers</strong>
              <small>International Scholarships</small>
            </div>
            <div className="timeline-arrow">→</div>

            <div className="timeline-node status-award">
              <span className="node-tag gold">AWARDED</span>
              <strong>South Asia Award</strong>
              <small>University of Nottingham</small>
            </div>
            <div className="timeline-arrow">→</div>

            <div className="timeline-node status-final">
              <span className="node-year">2025–2026</span>
              <strong>LL.M. &amp; Research</strong>
              <small>Professional Awards &amp; Recognition</small>
            </div>
          </div>
        </div>

        {/* Highlighted Quote Block */}
        <div className="awards-quote-banner">
          <blockquote>
            “Excellence is built through perseverance, continuous learning, and the courage to embrace opportunities across borders.”
          </blockquote>
          <cite>— GAURI GOSWAMI</cite>
        </div>

        {/* Bottom Statistics Strip */}
        <div className="awards-stats-strip">
          <div className="awards-stat-box">
            <strong>8+</strong>
            <span>International Scholarships</span>
          </div>
          <div className="awards-stat-divider">•</div>

          <div className="awards-stat-box">
            <strong>10+</strong>
            <span>UK University Offers</span>
          </div>
          <div className="awards-stat-divider">•</div>

          <div className="awards-stat-box">
            <strong>35+</strong>
            <span>Awards &amp; Honours</span>
          </div>
          <div className="awards-stat-divider">•</div>

          <div className="awards-stat-box">
            <strong>8+</strong>
            <span>Academic Excellence Awards</span>
          </div>
          <div className="awards-stat-divider">•</div>

          <div className="awards-stat-box">
            <strong>12+</strong>
            <span>Legal Competitions</span>
          </div>
          <div className="awards-stat-divider">•</div>

          <div className="awards-stat-box">
            <strong>25+</strong>
            <span>Research &amp; Workshops</span>
          </div>
          <div className="awards-stat-divider">•</div>

          <div className="awards-stat-box">
            <strong>5+</strong>
            <span>Cultural Recognition Awards</span>
          </div>
        </div>

        {/* Achievement Categories Grid */}
        <div className="achievement-categories-block">
          <div className="achievement-categories-header">
            <span className="achievement-cat-badge">✦ PORTFOLIO SPECTRUM</span>
            <h3 className="achievement-cat-title">Achievement Categories</h3>
            <p className="achievement-cat-desc">
              Explore the complete spectrum of academic honors, international scholarships, legal achievements, research excellence, and cultural leadership.
            </p>
          </div>

          <div className="achievement-categories-grid">
            {/* Category 1 */}
            <div className="achievement-cat-card">
              <div className="cat-card-header">
                <span className="cat-card-icon">🏆</span>
                <h4>International Scholarships</h4>
              </div>
              <ul className="cat-card-list">
                <li><span>✦</span> University of Nottingham</li>
                <li><span>✦</span> University of Glasgow</li>
                <li><span>✦</span> Durham University</li>
                <li><span>✦</span> University of Leeds</li>
                <li><span>✦</span> University of Birmingham</li>
                <li><span>✦</span> University of Exeter</li>
                <li><span>✦</span> Queen Mary University London</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="achievement-cat-card">
              <div className="cat-card-header">
                <span className="cat-card-icon">📚</span>
                <h4>Academic Excellence</h4>
              </div>
              <ul className="cat-card-list">
                <li><span>✦</span> First Class Honours</li>
                <li><span>✦</span> Highest Marks Awards</li>
                <li><span>✦</span> Merit Certificates</li>
                <li><span>✦</span> Dean&apos;s Scholarship</li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="achievement-cat-card">
              <div className="cat-card-header">
                <span className="cat-card-icon">⚖️</span>
                <h4>Legal Excellence</h4>
              </div>
              <ul className="cat-card-list">
                <li><span>✦</span> Moot Court</li>
                <li><span>✦</span> Pleading Competition</li>
                <li><span>✦</span> Mediation</li>
                <li><span>✦</span> Advocacy Workshops</li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="achievement-cat-card">
              <div className="cat-card-header">
                <span className="cat-card-icon">🌍</span>
                <h4>Research &amp; Conferences</h4>
              </div>
              <ul className="cat-card-list">
                <li><span>✦</span> Human Rights</li>
                <li><span>✦</span> AI &amp; Law</li>
                <li><span>✦</span> Corporate Governance</li>
                <li><span>✦</span> International Commercial Law</li>
              </ul>
            </div>

            {/* Category 5 */}
            <div className="achievement-cat-card">
              <div className="cat-card-header">
                <span className="cat-card-icon">🎭</span>
                <h4>Cultural Recognition</h4>
              </div>
              <ul className="cat-card-list">
                <li><span>✦</span> Assam Sahitya Sabha UK</li>
                <li><span>✦</span> London Performances</li>
                <li><span>✦</span> Cultural Ambassador</li>
                <li><span>✦</span> Felicitation Awards</li>
              </ul>
            </div>

            {/* Category 6 */}
            <div className="achievement-cat-card">
              <div className="cat-card-header">
                <span className="cat-card-icon">👑</span>
                <h4>Leadership</h4>
              </div>
              <ul className="cat-card-list">
                <li><span>✦</span> Think India Assam</li>
                <li><span>✦</span> NSS</li>
                <li><span>✦</span> MUN</li>
                <li><span>✦</span> Parliamentary Debate</li>
                <li><span>✦</span> Community Leadership</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA Buttons */}
        <div className="awards-final-cta-wrap">
          <Link href="/academics" className="gold-button">
            Read Scholarship Journey →
          </Link>
          <Link href="/academics" className="outline-button">
            View Academic Profile
          </Link>
        </div>

      {/* Interactive Lightbox Modal */}
      {previewImage && (
        <div
          className="awards-lightbox-backdrop"
          onClick={() => setPreviewImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="awards-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="awards-lightbox-close"
              onClick={() => setPreviewImage(null)}
              aria-label="Close image preview"
            >
              ✕
            </button>
            <div className="awards-lightbox-img-wrap">
              <Image
                src={previewImage.src}
                alt={previewImage.alt}
                width={1200}
                height={900}
                style={{ objectFit: "contain", maxWidth: "90vw", maxHeight: "82vh", width: "auto", height: "auto" }}
                unoptimized
              />
            </div>
            <p className="awards-lightbox-caption">{previewImage.alt}</p>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
