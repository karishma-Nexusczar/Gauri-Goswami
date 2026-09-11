"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const performanceInquiryUrl =
  "mailto:info@gaurigoswami.com?subject=Kathak%20Performance%20%26%20Event%20Booking%20—%20Gauri%20Goswami&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20Kathak%20performance%20%2F%20cultural%20event.%0A%0AName%3A%0AOrganization%20%2F%20Event%3A%0AEvent%20Date%3A%0AVenue%20%2F%20City%3A%0APerformance%20Requirements%3A%0APhone%20Number%3A%0A%0ABest%20regards%2C";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const isHome = currentPath === "/";
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const getHref = (hashOrPath: string) => {
    if (hashOrPath.startsWith("/")) return hashOrPath;
    if (isHome) return hashOrPath;
    return `/${hashOrPath}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Hash scroll listener on mount / page change
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 150);
    }
  }, [currentPath]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleDropdown = (name: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.removeAttribute("open");
    }
  };

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    pagePath: string,
    targetId: string
  ) => {
    setOpenDropdown(null);
    closeMobileMenu();

    const isCurrentPage = currentPath === pagePath || (currentPath === "" && pagePath === "/");

    if (isCurrentPage) {
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        const hashPath = pagePath === "/" ? `/#${targetId}` : `${pagePath}#${targetId}`;
        window.history.pushState(null, "", hashPath);
      }
    }
  };

  return (
    <header className="nav" ref={headerRef} suppressHydrationWarning>
      <Link className="brand" href={isHome ? "#home" : "/"} aria-label="Gauri Goswami home">
        <Image
          className="brand-logo"
          src="/brand-logo.png"
          alt="Gauri Goswami Logo"
          width={80}
          height={80}
          style={{ maxHeight: "76px", width: "auto" }}
          priority
          unoptimized
          suppressHydrationWarning
        />
      </Link>

      <nav aria-label="Primary navigation" suppressHydrationWarning>
        <Link className={isHome ? "active" : ""} href={getHref("#home")}>
          Home
        </Link>
        <Link className={currentPath === "/about" ? "active" : ""} href="/about">
          About
        </Link>

        {/* 1. LEGAL CAREER DROPDOWN */}
        <div
          className={`nav-dropdown ${openDropdown === "legal" ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("legal")}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            className={`dropdown-toggle ${openDropdown === "legal" ? "active" : ""}`}
            onClick={(e) => toggleDropdown("legal", e)}
            aria-expanded={openDropdown === "legal"}
          >
            Legal Career<span className="nav-caret">▾</span>
          </button>
          <div className="dropdown-menu">
            <Link
              href={getHref("#professional-overview")}
              onClick={(e) => handleSectionClick(e, "/", "professional-overview")}
            >
              Professional Experience
            </Link>
            <Link
              href={getHref("#practice-areas")}
              onClick={(e) => handleSectionClick(e, "/", "practice-areas")}
            >
              Practice Areas
            </Link>
            <Link
              href={getHref("#courts-tribunals")}
              onClick={(e) => handleSectionClick(e, "/", "courts-tribunals")}
            >
              Courts &amp; Tribunals
            </Link>
            <Link
              href={getHref("#matters")}
              onClick={(e) => handleSectionClick(e, "/", "matters")}
            >
              Representative Matters
            </Link>
            <Link
              href="/legal-career/credentials"
            >
              Legal / Professional Credentials
            </Link>
          </div>
        </div>

        {/* 2. ACADEMICS DROPDOWN */}
        <div
          className={`nav-dropdown ${openDropdown === "academics" ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("academics")}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            className={`dropdown-toggle ${currentPath === "/academics" || openDropdown === "academics" ? "active" : ""}`}
            onClick={(e) => toggleDropdown("academics", e)}
            aria-expanded={openDropdown === "academics"}
          >
            Academics<span className="nav-caret">▾</span>
          </button>
          <div className="dropdown-menu">
            <Link
              href="/academics#education"
              onClick={(e) => handleSectionClick(e, "/academics", "education")}
            >
              Education
            </Link>
            <Link
              href="/academics#qualifications"
              onClick={(e) => handleSectionClick(e, "/academics", "qualifications")}
            >
              Qualifications
            </Link>
            <Link
              href="/academics#achievements"
              onClick={(e) => handleSectionClick(e, "/academics", "achievements")}
            >
              Academic Achievements
            </Link>
            <Link
              href="/academics#credentials"
              onClick={(e) => handleSectionClick(e, "/academics", "credentials")}
            >
              Certificates &amp; Recognition
            </Link>
          </div>
        </div>

        {/* 3. RESEARCH DROPDOWN */}
        <div
          className={`nav-dropdown ${openDropdown === "research" ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("research")}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            className={`dropdown-toggle ${currentPath === "/research" || openDropdown === "research" ? "active" : ""}`}
            onClick={(e) => toggleDropdown("research", e)}
            aria-expanded={openDropdown === "research"}
          >
            Research<span className="nav-caret">▾</span>
          </button>
          <div className="dropdown-menu">
            <Link
              href="/research#publications"
              onClick={(e) => handleSectionClick(e, "/research", "publications")}
            >
              Publications &amp; Papers
            </Link>
            <Link
              href="/research#greenwashing"
              onClick={(e) => handleSectionClick(e, "/research", "greenwashing")}
            >
              Greenwashing Regulation (EU/UK/US)
            </Link>
            <Link
              href="/research#conferences"
              onClick={(e) => handleSectionClick(e, "/research", "conferences")}
            >
              Conference Presentations
            </Link>
            <Link
              href="/research#research-areas"
              onClick={(e) => handleSectionClick(e, "/research", "research-areas")}
            >
              Research Areas
            </Link>
          </div>
        </div>

        {/* 4. KATHAK DROPDOWN */}
        <div
          className={`nav-dropdown ${openDropdown === "kathak" ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("kathak")}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            className={`dropdown-toggle ${currentPath === "/kathak" || openDropdown === "kathak" ? "active" : ""}`}
            onClick={(e) => toggleDropdown("kathak", e)}
            aria-expanded={openDropdown === "kathak"}
          >
            Dance<span className="nav-caret">▾</span>
          </button>
          <div className="dropdown-menu">
            <Link
              href="/kathak#about-kathak"
              onClick={(e) => handleSectionClick(e, "/kathak", "about-kathak")}
            >
              About Kathak
            </Link>
            <Link
              href="/kathak#artist-journey"
              onClick={(e) => handleSectionClick(e, "/kathak", "artist-journey")}
            >
              Artist&apos;s Journey
            </Link>
            <Link
              href="/kathak#gurus-training"
              onClick={(e) => handleSectionClick(e, "/kathak", "gurus-training")}
            >
              Gurus &amp; Training
            </Link>
            <Link
              href="/kathak#performances"
              onClick={(e) => handleSectionClick(e, "/kathak", "performances")}
            >
              Performances
            </Link>
            <Link
              href="/kathak#cultural-heritage"
              onClick={(e) => handleSectionClick(e, "/kathak", "cultural-heritage")}
            >
              Cultural Heritage
            </Link>
            <Link
              href="/kathak#artistic-expression"
              onClick={(e) => handleSectionClick(e, "/kathak", "artistic-expression")}
            >
              Artistic Expression
            </Link>
          </div>
        </div>

        <Link className={currentPath === "/gallery" ? "active" : ""} href="/gallery">
          Gallery
        </Link>
        <Link className={currentPath === "/contact" ? "active" : ""} href="/contact">Contact</Link>
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
      <details className="mobile-menu" ref={mobileMenuRef}>
        <summary aria-label="Open navigation">☰</summary>
        <div className="mobile-menu-inner">
          <Link href={getHref("#home")} onClick={closeMobileMenu}>Home</Link>
          <Link href="/about" onClick={closeMobileMenu}>About</Link>

          <details className="mobile-sub-menu">
            <summary className="mobile-sub-summary">
              Legal Career<span className="nav-caret">▾</span>
            </summary>
            <div className="mobile-sub-links">
              <Link
                href={getHref("#professional-overview")}
                onClick={(e) => handleSectionClick(e, "/", "professional-overview")}
              >
                Professional Experience
              </Link>
              <Link
                href={getHref("#practice-areas")}
                onClick={(e) => handleSectionClick(e, "/", "practice-areas")}
              >
                Practice Areas
              </Link>
              <Link
                href={getHref("#courts-tribunals")}
                onClick={(e) => handleSectionClick(e, "/", "courts-tribunals")}
              >
                Courts &amp; Tribunals
              </Link>
              <Link
                href={getHref("#matters")}
                onClick={(e) => handleSectionClick(e, "/", "matters")}
              >
                Representative Matters
              </Link>
              <Link
                href="/legal-career/credentials"
                className="dropdown-item"
              >
                Legal Credentials
              </Link>
            </div>
          </details>

          <details className="mobile-sub-menu">
            <summary className="mobile-sub-summary">
              Academics<span className="nav-caret">▾</span>
            </summary>
            <div className="mobile-sub-links">
              <Link
                href="/academics#education"
                onClick={(e) => handleSectionClick(e, "/academics", "education")}
              >
                Education
              </Link>
              <Link
                href="/academics#qualifications"
                onClick={(e) => handleSectionClick(e, "/academics", "qualifications")}
              >
                Qualifications
              </Link>
              <Link
                href="/academics#achievements"
                onClick={(e) => handleSectionClick(e, "/academics", "achievements")}
              >
                Academic Achievements
              </Link>
              <Link
                href="/academics#credentials"
                onClick={(e) => handleSectionClick(e, "/academics", "credentials")}
              >
                Certificates &amp; Recognition
              </Link>
            </div>
          </details>

          <details className="mobile-sub-menu">
            <summary className="mobile-sub-summary">
              Research<span className="nav-caret">▾</span>
            </summary>
            <div className="mobile-sub-links">
              <Link
                href="/research#publications"
                onClick={(e) => handleSectionClick(e, "/research", "publications")}
              >
                Publications &amp; Papers
              </Link>
              <Link
                href="/research#greenwashing"
                onClick={(e) => handleSectionClick(e, "/research", "greenwashing")}
              >
                Greenwashing Regulation
              </Link>
              <Link
                href="/research#conferences"
                onClick={(e) => handleSectionClick(e, "/research", "conferences")}
              >
                Conferences &amp; Presentations
              </Link>
              <Link
                href="/research#research-areas"
                onClick={(e) => handleSectionClick(e, "/research", "research-areas")}
              >
                Research Areas
              </Link>
            </div>
          </details>

          <details className="mobile-sub-menu">
            <summary className="mobile-sub-summary">
              Dance<span className="nav-caret">▾</span>
            </summary>
            <div className="mobile-sub-links">
              <Link
                href="/kathak#about-kathak"
                onClick={(e) => handleSectionClick(e, "/kathak", "about-kathak")}
              >
                About Kathak
              </Link>
              <Link
                href="/kathak#artist-journey"
                onClick={(e) => handleSectionClick(e, "/kathak", "artist-journey")}
              >
                Artist&apos;s Journey
              </Link>
              <Link
                href="/kathak#gurus-training"
                onClick={(e) => handleSectionClick(e, "/kathak", "gurus-training")}
              >
                Gurus &amp; Training
              </Link>
              <Link
                href="/kathak#performances"
                onClick={(e) => handleSectionClick(e, "/kathak", "performances")}
              >
                Performances
              </Link>
              <Link
                href="/kathak#cultural-heritage"
                onClick={(e) => handleSectionClick(e, "/kathak", "cultural-heritage")}
              >
                Cultural Heritage
              </Link>
              <Link
                href="/kathak#artistic-expression"
                onClick={(e) => handleSectionClick(e, "/kathak", "artistic-expression")}
              >
                Artistic Expression
              </Link>
            </div>
          </details>

          <Link href="/gallery" className={currentPath === "/gallery" ? "active" : ""} onClick={closeMobileMenu}>Gallery</Link>
          <Link href="/contact" className={currentPath === "/contact" ? "active" : ""} onClick={closeMobileMenu}>Contact</Link>
          <a
            className="mobile-booking-btn"
            href={performanceInquiryUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMobileMenu}
          >
            Book Performance
          </a>
        </div>
      </details>
    </header>
  );
}
