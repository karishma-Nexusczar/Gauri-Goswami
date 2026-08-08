"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXmark,
  FaBookOpen,
  FaGraduationCap,
  FaGlobe,
  FaHeart,
  FaCrown,
} from "react-icons/fa6";
import { FaTheaterMasks } from "react-icons/fa";
import Navbar from "../components/Navbar";
import styles from "./kathak.module.css";
import TempleArchSvg from "./TempleArchSvg";

const performanceInquiryUrl =
  "mailto:info@gaurigoswami.com?subject=Kathak%20Performance%20%26%20Event%20Booking%20—%20Gauri%20Goswami&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20Kathak%20performance%20%2F%20cultural%20event.%0A%0AName%3A%0AOrganization%20%2F%20Event%3A%0AEvent%20Date%3A%0AVenue%20%2F%20City%3A%0APerformance%20Requirements%3A%0APhone%20Number%3A%0A%0ABest%20regards%2C";

export default function KathakPage() {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  return (
    <main className={styles.page}>
      {/* HEADER (Full site Navbar) */}
      <Navbar currentPath="/kathak" />

      {/* ========================================================================
          SECTION 1 — HERO SECTION (UNCHANGED AS REQUESTED)
          ======================================================================== */}
      <section className={styles.hero}>
        {/* Full Right Backdrop Kathak Red Spin Cutout Photograph */}
        <div className={styles.heroBackdropImageWrap}>
          <Image
            src="/hero-right-kathak-v6.png"
            alt="Gauri Goswami Kathak classical spin pose"
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 60vw"
            className={styles.heroBackdropImg}
            unoptimized
          />
        </div>

        <div className={styles.heroBackground} />
        <div className={styles.templeArchOverlay}>
          <TempleArchSvg />
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroCopy}>
            <span className={styles.heroTagline}>THE ART THAT SHAPES MY IDENTITY</span>
            <h1 className={styles.heroTitle}>KATHAK</h1>
            <p className={styles.heroSubtitle}>Where Every Step Sings.</p>

            <p className={styles.heroSubtext}>
              A lifelong journey of rhythm, expression, discipline and cultural heritage.
            </p>

            <div className={styles.heroActions}>
              <a href="#more-than-dance" className={styles.primaryBtn}>
                EXPLORE MY JOURNEY <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 2 — MORE THAN DANCE (A LIFELONG CONNECTION WITH KATHAK)
          Light Ivory Section matching reference design
          ======================================================================== */}
      <section className={styles.moreThanDanceSection} id="more-than-dance">
        <div className={styles.ivoryCardContainer}>
          {/* Left Column: Real Outdoor Pink-and-White Kathak Photograph */}
          <div className={styles.ivoryImageWrap}>
            <Image
              src="/kathak-lawn-classical-pose.jpg"
              alt="Gauri Goswami Kathak outdoor pink and white classical dance pose"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.ivoryImg}
            />
          </div>

          {/* Right Column: Editorial Text */}
          <div className={styles.ivoryTextContent}>
            <span className={styles.kickerGold}>MORE THAN DANCE</span>
            <h2 className={styles.ivoryTitle}>
              A Lifelong Connection With Kathak
            </h2>
            <div className={styles.goldDividerOrnament}>✦ ─── ✦ ─── ✦</div>

            <p className={styles.ivoryPara}>
              For Gauri, Kathak is more than a dance form—it is a lifelong pursuit of artistic excellence, self-expression, and cultural preservation.
            </p>

            <p className={styles.ivoryPara}>
              Her journey through classical dance has been shaped by disciplined training, expressive storytelling and a deep connection with India&apos;s cultural heritage.
            </p>

            <p className={styles.ivoryPara}>
              Through every performance, she seeks to preserve tradition while creating a meaningful connection with audiences.
            </p>

            <div className={styles.ivoryBtnWrap}>
              <a href="#artistic-journey" className={styles.outlineDarkBtn}>
                READ MY JOURNEY <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 3 — ARTISTIC JOURNEY (FROM LEARNING TO LEGACY)
          Horizontal Gold Interconnected Icon Nodes on Dark Background
          ======================================================================== */}
      <section className={styles.artisticJourneySection} id="artistic-journey">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.kickerGold}>ARTISTIC JOURNEY</span>
          <h2 className={styles.darkSectionTitle}>From Learning to Legacy</h2>
          <div className={styles.goldDividerOrnament}>✦ ─── ✦ ─── ✦</div>
        </div>

        {/* 6 Interconnected Nodes */}
        <div className={styles.nodesContainer}>
          <div className={styles.connectingGoldLine} />

          <div className={styles.nodesGrid}>
            <div className={styles.nodeItem}>
              <div className={styles.nodeIconCircle}><FaBookOpen /></div>
              <h3>Early Learning</h3>
              <p>Foundation of Kathak in childhood under the guidance of family and gurus.</p>
            </div>

            <div className={styles.nodeItem}>
              <div className={styles.nodeIconCircle}><FaTheaterMasks /></div>
              <h3>Training</h3>
              <p>Years of dedicated training in technique, expression and storytelling.</p>
            </div>

            <div className={styles.nodeItem}>
              <div className={styles.nodeIconCircle}><FaGraduationCap /></div>
              <h3>Workshops</h3>
              <p>Learning from legendary maestros and enriching masterclasses.</p>
            </div>

            <div className={styles.nodeItem}>
              <div className={styles.nodeIconCircle}><FaCrown /></div>
              <h3>Performances</h3>
              <p>Performing on art platforms and cultural events across India and abroad.</p>
            </div>

            <div className={styles.nodeItem}>
              <div className={styles.nodeIconCircle}><FaGlobe /></div>
              <h3>Representation</h3>
              <p>Representing Assam and India at national and international cultural platforms.</p>
            </div>

            <div className={styles.nodeItem}>
              <div className={styles.nodeIconCircle}><FaHeart /></div>
              <h3>Continuing Journey</h3>
              <p>A lifelong commitment to continue learning, performing and preserving this art.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 4 — BENTO GRID: GURUS & LINEAGE | WORKSHOPS | PERFORMANCE JOURNEY
          3 Horizontal Cards matching reference layout
          ======================================================================== */}
      <section className={styles.bentoSection}>
        <div className={styles.bento3Grid}>
          {/* Card 1: Gurus & Lineage (Light Ivory) */}
          <div className={`${styles.bentoCard} ${styles.bentoCardIvory}`}>
            <span className={styles.kickerGold}>GURUS &amp; LINEAGE</span>
            <h3 className={styles.bentoCardTitleDark}>The Gurus Who Shaped My Journey</h3>
            
            <ul className={styles.gurusList}>
              <li><span className={styles.goldDot}>✦</span> Khagen Goswami</li>
              <li><span className={styles.goldDot}>✦</span> Bipul Das</li>
              <li><span className={styles.goldDot}>✦</span> Mother &amp; Early Guidance</li>
              <li><span className={styles.goldDot}>✦</span> Pt. Birju Maharaj (Workshop)</li>
              <li><span className={styles.goldDot}>✦</span> Saswati Sen</li>
              <li><span className={styles.goldDot}>✦</span> Moromi Medhi</li>
              <li><span className={styles.goldDot}>✦</span> Megharanjani Medhi</li>
            </ul>

            <div className={styles.visharadBadgeBox}>
              <strong>Kathak Visharad-II (Distinction)</strong>
              <span>Bhatkhande Sangeet Vidyapith, Lucknow</span>
            </div>
          </div>

          {/* Card 2: Workshops & Training (Light Ivory) */}
          <div className={`${styles.bentoCard} ${styles.bentoCardIvory}`}>
            <span className={styles.kickerGold}>WORKSHOPS &amp; TRAINING</span>
            <h3 className={styles.bentoCardTitleDark}>Learning From the Masters</h3>

            <div className={styles.timelinePillWrap}>
              <div className={styles.timelinePillNode}>
                <span className={styles.yearCircle}>2013</span>
                <div>
                  <h4>Kathak Workshop</h4>
                  <strong>Pandit Birju Maharaj</strong>
                  <p>Guwahati, Assam, India. Successful completion under the guidance of one of the greatest Kathak maestros.</p>
                </div>
              </div>

              <div className={styles.timelinePillNode}>
                <span className={styles.yearCircleAlt}>Later</span>
                <div>
                  <h4>Modern Dance Workshop</h4>
                  <strong>Ashim Baishya</strong>
                  <p>Expanded technical skills and artistic versatility across contemporary dance forms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Performance Journey (Dark Image Card) */}
          <div className={`${styles.bentoCard} ${styles.bentoCardDarkImage}`}>
            <Image
              src="/cultural-heritage-london-stage.jpg"
              alt="Kathak Performance Stage Recital"
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className={styles.bentoBgImg}
            />
            <div className={styles.bentoDarkOverlay} />

            <div className={styles.bentoDarkContent}>
              <span className={styles.kickerGold}>PERFORMANCE JOURNEY</span>
              <h3 className={styles.bentoCardTitleLight}>
                Performing Tradition Across Borders
              </h3>

              <a href="#gallery" className={styles.goldOutlineBtn}>
                VIEW PERFORMANCES <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 5 — CULTURAL AMBASSADOR & GHUNGROO BANNER
          2-Column Split matching reference layout
          ======================================================================== */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerSplitGrid}>
          {/* Left Column: Cultural Ambassador */}
          <div className={styles.culturalAmbassadorCard}>
            <div className={styles.ambassadorImgFrame}>
              <Image
                src="/kathak-hero-editorial.jpg"
                alt="Gauri Goswami Cultural Ambassador Assamese Attire"
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
                className={styles.ambassadorImg}
              />
            </div>

            <div className={styles.ambassadorContent}>
              <span className={styles.kickerGold}>CULTURAL AMBASSADOR</span>
              <h3 className={styles.bannerTitle}>From Assam to the World</h3>
              <p className={styles.bannerSub}>
                Proudly representing Assamese culture and Indian heritage through traditional performances in the United Kingdom.
              </p>

              <ul className={styles.bulletListGold}>
                <li><span className={styles.goldDot}>✦</span> North East Festival London</li>
                <li><span className={styles.goldDot}>✦</span> London Rongali Bihu</li>
                <li><span className={styles.goldDot}>✦</span> Cultural events &amp; celebrations</li>
              </ul>

              <div className={styles.honourBadge}>
                <span className={styles.goldDot}>✦</span> Honoured with traditional symbols of Assam — Japi and Gamusa.
              </div>
            </div>
          </div>

          {/* Right Column: Ghungroo Feature (Burgundy / Dark Red Card) */}
          <div className={styles.ghungrooFeatureCard}>
            <div className={styles.ghungrooImgBgWrap}>
              <Image
                src="/milestone-2023.png"
                alt="Close-up of golden Kathak Ghungroo bells"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.ghungrooBgImg}
              />
              <div className={styles.ghungrooRedOverlay} />
            </div>

            <div className={styles.ghungrooContent}>
              <span className={styles.kickerGoldLight}>THE SOUND OF TRADITION</span>
              <h3 className={styles.ghungrooTitle}>Where Art Finds Its Sound.</h3>
              <p className={styles.ghungrooSub}>
                The sound of ghungroos is where tradition meets the soul.
              </p>

              <blockquote className={styles.ghungrooQuoteBox}>
                “A ghungroo is not just an ornament; it is the heartbeat of every dancer.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 6 — MOMENTS THROUGH THE LENS (Kathak in Motion)
          5-Card Asymmetric Bento Grid matching reference layout
          ======================================================================== */}
      <section className={styles.momentsSection} id="gallery">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.kickerGold}>MOMENTS THROUGH THE LENS</span>
          <h2 className={styles.darkSectionTitle}>Kathak in Motion</h2>
          <div className={styles.goldDividerOrnament}>✦ ─── ✦ ─── ✦</div>
        </div>

        <div className={styles.asymmetricBentoGrid}>
          {/* Left Large Card (60% width) */}
          <div className={styles.largeBentoCard}>
            <Image
              src="/kathak-london-rongali-bihu-2024.jpg"
              alt="Kathak Stage Recital Large Performance"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={styles.bentoBgImg}
            />
            <div className={styles.largeBentoOverlay} />

            <div className={styles.largeBentoContent}>
              <h3 className={styles.largeBentoTitle}>Kathak Performance</h3>
              <button
                className={styles.goldSolidSmallBtn}
                onClick={() => setSelectedGalleryImg("/kathak-london-rongali-bihu-2024.jpg")}
              >
                VIEW IMAGE <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right 4 Small Cards Grid (2x2) */}
          <div className={styles.smallCards2x2Grid}>
            <div className={styles.smallBentoCard} onClick={() => setSelectedGalleryImg("/kathak-lawn-classical-pose.jpg")}>
              <Image
                src="/kathak-lawn-classical-pose.jpg"
                alt="Outdoor Classical Kathak Recital"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className={styles.bentoBgImg}
              />
              <div className={styles.smallCardHoverOverlay}>
                <span>VIEW IMAGE →</span>
              </div>
            </div>

            <div className={styles.smallBentoCard} onClick={() => setSelectedGalleryImg("/kathak-hero-editorial.jpg")}>
              <Image
                src="/kathak-hero-editorial.jpg"
                alt="Traditional Assamese Stage Performance"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className={styles.bentoBgImg}
              />
              <div className={styles.smallCardHoverOverlay}>
                <span>VIEW IMAGE →</span>
              </div>
            </div>

            <div className={styles.smallBentoCard} onClick={() => setSelectedGalleryImg("/northeast-festival-london-stage-cover.jpg")}>
              <Image
                src="/northeast-festival-london-stage-cover.jpg"
                alt="Northeast Festival Stage Cover Recital"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className={styles.bentoBgImg}
              />
              <div className={styles.smallCardHoverOverlay}>
                <span>VIEW IMAGE →</span>
              </div>
            </div>

            <div className={styles.smallBentoCard} onClick={() => setSelectedGalleryImg("/kathak-abhiveera-gold-dress-portrait.jpg")}>
              <Image
                src="/kathak-abhiveera-gold-dress-portrait.jpg"
                alt="Kathak Gold Classical Pose"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className={styles.bentoBgImg}
              />
              <div className={styles.smallCardHoverOverlay}>
                <span>VIEW IMAGE →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Window for Gallery Zoom */}
        {selectedGalleryImg && (
          <div className={styles.galleryModalOverlay} onClick={() => setSelectedGalleryImg(null)}>
            <div className={styles.galleryModalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.closeModalBtn}
                onClick={() => setSelectedGalleryImg(null)}
                aria-label="Close image modal"
              >
                <FaXmark />
              </button>
              <div className={styles.fullImgContainer}>
                <Image
                  src={selectedGalleryImg}
                  alt="Kathak Performance Full Image"
                  width={1200}
                  height={800}
                  className={styles.fullModalImg}
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================
          SECTION 7 — THE ESSENCE OF KATHAK (5 Horizontal Pillars Strip)
          matching reference layout
          ======================================================================== */}
      <section className={styles.essenceSection}>
        <div className={styles.essenceContainer}>
          {/* Left Kicker Header Card */}
          <div className={styles.essenceKickerCard}>
            <span className={styles.kickerGold}>THE ESSENCE OF KATHAK</span>
            <h2>Discipline, Devotion and Expression</h2>
            <div className={styles.goldDividerOrnament}>✦ ─── ✦</div>
          </div>

          {/* 5 Light Ivory Pillar Cards */}
          <div className={styles.essencePillarsRow}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}><FaBookOpen /></div>
              <h4>DISCIPLINE</h4>
              <p>Precision in every movement.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}><FaTheaterMasks /></div>
              <h4>EXPRESSION</h4>
              <p>Emotion beyond words.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}><FaHeart /></div>
              <h4>DEVOTION</h4>
              <p>Respect for a timeless tradition.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}><FaCrown /></div>
              <h4>HERITAGE</h4>
              <p>Preserving culture. Inspiring others.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}><FaGraduationCap /></div>
              <h4>PASS ON</h4>
              <p>A lifelong pursuit of excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 8 — FINAL CTA (LET THE RHYTHM CONTINUE)
          ======================================================================== */}
      <section className={styles.finalCtaSection}>
        <div className={styles.finalCtaBgWrap}>
          <Image
            src="/milestone-2023.png"
            alt="Ghungroo bells background texture"
            fill
            sizes="100vw"
            className={styles.ctaBgImg}
          />
          <div className={styles.finalCtaOverlay} />
        </div>

        <div className={styles.finalCtaContent}>
          <h2 className={styles.finalCtaTitle}>Let the Rhythm Continue</h2>
          <p className={styles.finalCtaSub}>
            For cultural collaborations, performances, workshops and artistic engagements.
          </p>

          <div className={styles.finalCtaActions}>
            <a
              href={performanceInquiryUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.goldFillBtn}
            >
              BOOK A PERFORMANCE <FaArrowRight />
            </a>
            <a
              href="mailto:info@gaurigoswami.com"
              className={styles.goldOutlineLargeBtn}
            >
              GET IN TOUCH <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Link href="/">
            <Image
              src="/brand-logo.png"
              alt="Gauri Goswami"
              width={96}
              height={96}
            />
          </Link>
          <p>
            Gauri Goswami is an Advocate, LL.M. in International Commercial Law, Kathak Visharad-II artist, researcher, and cultural ambassador.
          </p>
          <div className={styles.socials} aria-label="Social media links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/kathak">Kathak &amp; Dance</Link>
          <Link href="/gallery">Gallery</Link>
        </div>

        <div>
          <h3>Kathak Repertoire</h3>
          <a href="#more-than-dance">Artistic Journey</a>
          <a href="#gallery">Moments &amp; Gallery</a>
          <a href="#more-than-dance">Gurus &amp; Lineage</a>
          <a href={performanceInquiryUrl} target="_blank" rel="noreferrer">Book Performance</a>
        </div>

        <div>
          <h3>Get In Touch</h3>
          <a href="mailto:info@gaurigoswami.com">info@gaurigoswami.com</a>
          <a href="tel:+447587338945">+44 7587 338945 · United Kingdom</a>
          <p>New Delhi, India &amp; London, UK</p>
        </div>

        <div className={styles.copyright}>
          <span>© 2026 Gauri Goswami. All Rights Reserved.</span>
          <span>www.gaurigoswami.com</span>
        </div>
      </footer>
    </main>
  );
}
