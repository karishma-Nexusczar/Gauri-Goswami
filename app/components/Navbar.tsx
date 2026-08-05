"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const performanceInquiryUrl =
  "mailto:info@gaurigoswami.com?subject=Kathak%20Performance%20%26%20Event%20Booking%20—%20Gauri%20Goswami&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20Kathak%20performance%20%2F%20cultural%20event.%0A%0AName%3A%0AOrganization%20%2F%20Event%3A%0AEvent%20Date%3A%0AVenue%20%2F%20City%3A%0APerformance%20Requirements%3A%0APhone%20Number%3A%0A%0ABest%20regards%2C";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const isHome = currentPath === "/";

  const getHref = (hashOrPath: string) => {
    if (hashOrPath.startsWith("/")) return hashOrPath;
    if (isHome) return hashOrPath;
    return `/${hashOrPath}`;
  };

  return (
    <header className="nav shell">
      <Link className="brand" href={isHome ? "#home" : "/"} aria-label="Gauri Goswami home">
        <Image
          className="brand-logo"
          src="/brand-logo.png"
          alt="Gauri Goswami Logo"
          width={96}
          height={96}
          priority
          unoptimized
          suppressHydrationWarning
        />
      </Link>

      <nav aria-label="Primary navigation">
        <Link className={isHome ? "active" : ""} href={getHref("#home")}>
          Home
        </Link>
        <Link className={currentPath === "/about" ? "active" : ""} href="/about">
          About
        </Link>

        {/* 1. LEGAL CAREER DROPDOWN */}
        <div className="nav-dropdown">
          <Link className="dropdown-toggle" href="/about#who">
            Legal Career <FiChevronDown className="caret" />
          </Link>
          <div className="dropdown-menu">
            <Link href="/about#who">Professional Overview</Link>
            <Link href={getHref("#experience")}>Experience</Link>
            <Link href={getHref("#practice-areas")}>Practice Areas</Link>
            <Link href={getHref("#courts-tribunals")}>Courts &amp; Tribunals</Link>
            <Link href={getHref("#matters")}>Representative Matters</Link>
            <Link href={getHref("#legal-skills")}>Legal Skills</Link>
          </div>
        </div>

        {/* 2. ACADEMICS DROPDOWN */}
        <div className="nav-dropdown">
          <Link
            className={`dropdown-toggle ${currentPath === "/academics" ? "active" : ""}`}
            href="/academics"
          >
            Academics <FiChevronDown className="caret" />
          </Link>
          <div className="dropdown-menu">
            <Link href="/academics">University of Nottingham</Link>
            <Link href="/academics">NLU Assam</Link>
            <Link href={getHref("#awards")}>Awards &amp; Certifications</Link>
          </div>
        </div>

        {/* 3. RESEARCH DROPDOWN */}
        <div className="nav-dropdown">
          <Link className="dropdown-toggle" href={getHref("#research")}>
            Research <FiChevronDown className="caret" />
          </Link>
          <div className="dropdown-menu">
            <Link href={getHref("#research")}>Research Areas</Link>
            <Link href={getHref("#research")}>Publications</Link>
            <Link href={getHref("#blog")}>Articles</Link>
            <Link href={getHref("#contact")}>Conferences</Link>
          </div>
        </div>

        {/* 4. KATHAK DROPDOWN (Includes Culture) */}
        <div className="nav-dropdown">
          <Link className="dropdown-toggle" href={getHref("#kathak")}>
            Kathak <FiChevronDown className="caret" />
          </Link>
          <div className="dropdown-menu">
            <Link href={getHref("#kathak")}>Artistic Journey</Link>
            <Link href={getHref("#kathak")}>Gurus &amp; Lineage</Link>
            <Link href={getHref("#kathak")}>Performances</Link>
            <Link href={getHref("#kathak")}>Workshops</Link>
            <Link href={getHref("#culture")}>Culture</Link>
          </div>
        </div>

        <Link className={currentPath === "/gallery" ? "active" : ""} href="/gallery">
          Gallery
        </Link>
        <Link href={getHref("#blog")}>Blog</Link>
        <Link href={getHref("#contact")}>Contact</Link>
      </nav>

      <a
        className="outline-button nav-cta booking-cta"
        href={performanceInquiryUrl}
        target="_blank"
        rel="noreferrer"
      >
        Book Performance
      </a>

      {/* MOBILE MENU ACCORDION */}
      <details className="mobile-menu">
        <summary aria-label="Open navigation">☰</summary>
        <div className="mobile-menu-inner">
          <Link href={getHref("#home")}>Home</Link>
          <Link href="/about">About</Link>

          <details className="mobile-sub-menu">
            <summary className="mobile-sub-summary">
              Legal Career <FiChevronDown className="mobile-caret" />
            </summary>
            <div className="mobile-sub-links">
              <Link href="/about#who">Professional Overview</Link>
              <Link href={getHref("#experience")}>Experience</Link>
              <Link href={getHref("#practice-areas")}>Practice Areas</Link>
              <Link href={getHref("#courts-tribunals")}>Courts &amp; Tribunals</Link>
              <Link href={getHref("#matters")}>Representative Matters</Link>
              <Link href={getHref("#legal-skills")}>Legal Skills</Link>
            </div>
          </details>

          <details className="mobile-sub-menu">
            <summary className="mobile-sub-summary">
              Academics <FiChevronDown className="mobile-caret" />
            </summary>
            <div className="mobile-sub-links">
              <Link href="/academics">University of Nottingham</Link>
              <Link href="/academics">NLU Assam</Link>
              <Link href={getHref("#awards")}>Awards &amp; Certifications</Link>
            </div>
          </details>

          <details className="mobile-sub-menu">
            <summary className="mobile-sub-summary">
              Research <FiChevronDown className="mobile-caret" />
            </summary>
            <div className="mobile-sub-links">
              <Link href={getHref("#research")}>Research Areas</Link>
              <Link href={getHref("#research")}>Publications</Link>
              <Link href={getHref("#blog")}>Articles</Link>
              <Link href={getHref("#contact")}>Conferences</Link>
            </div>
          </details>

          <details className="mobile-sub-menu">
            <summary className="mobile-sub-summary">
              Kathak <FiChevronDown className="mobile-caret" />
            </summary>
            <div className="mobile-sub-links">
              <Link href={getHref("#kathak")}>Artistic Journey</Link>
              <Link href={getHref("#kathak")}>Gurus &amp; Lineage</Link>
              <Link href={getHref("#kathak")}>Performances</Link>
              <Link href={getHref("#kathak")}>Workshops</Link>
              <Link href={getHref("#culture")}>Culture</Link>
            </div>
          </details>

          <Link href="/gallery" className={currentPath === "/gallery" ? "active" : ""}>Gallery</Link>
          <Link href={getHref("#blog")}>Blog</Link>
          <Link href={getHref("#contact")}>Contact</Link>
          <a
            className="mobile-booking-btn"
            href={performanceInquiryUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book Performance
          </a>
        </div>
      </details>
    </header>
  );
}
