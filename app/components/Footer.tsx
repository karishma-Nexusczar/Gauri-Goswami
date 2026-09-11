"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const performanceInquiryUrl =
  "mailto:info@gaurigoswami.com?subject=Kathak%20Performance%20%26%20Event%20Booking%20—%20Gauri%20Goswami&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20Kathak%20performance%20%2F%20cultural%20event.%0A%0AName%3A%0AOrganization%20%2F%20Event%3A%0AEvent%20Date%3A%0AVenue%20%2F%20City%3A%0APerformance%20Requirements%3A%0APhone%20Number%3A%0A%0ABest%20regards%2C";

export default function Footer() {
  return (
    <footer className="footer shell" suppressHydrationWarning>
      <div className="footer-brand">
        <Link className="brand" href="/" aria-label="Gauri Goswami Home">
          <Image
            className="brand-logo"
            src="/brand-logo.png"
            alt="Gauri Goswami Logo"
            width={90}
            height={90}
            style={{ maxHeight: "90px", width: "auto" }}
            unoptimized
            suppressHydrationWarning
          />
        </Link>
        <p className="footer-about">
          Gauri Goswami is an Advocate, LL.M. in International Commercial Law, Kathak practitioner (Kathak Visharad-II), researcher, and cultural ambassador.
        </p>
        <div className="footer-social" aria-label="Social media links">
          <a
            href="https://www.instagram.com/goswamigauri1999/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://www.youtube.com/@gaurigoswami-j1q"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
          >
            <FaYoutube aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/gauri-goswami-68b1a3162/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-quick-links-col">
        <h4>Quick Links</h4>
        <div className="footer-quick-links-grid">
          <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/#professional-overview">Legal Career</Link>
            <Link href="/academics">Academics</Link>
            <Link href="/research">Research</Link>
          </div>
          <div>
            <Link href="/kathak">Dance</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <a href={performanceInquiryUrl} target="_blank" rel="noreferrer">
              Book Performance
            </a>
          </div>
        </div>
      </div>

      <div>
        <h4>Resources</h4>
        <Link href="/research#publications">Research Publications</Link>
        <Link href="/#matters">Representative Matters</Link>
        <Link href="/academics#awards">Awards &amp; Recognition</Link>
        <Link href="/contact">Media &amp; Enquiries</Link>
        <a href={performanceInquiryUrl} target="_blank" rel="noreferrer">
          Book Performance
        </a>
      </div>

      <div id="footer-contact">
        <h4>Get in Touch</h4>
        <a href="mailto:info@gaurigoswami.com">info@gaurigoswami.com</a>
        <div style={{ marginTop: "0.4rem" }}>
          <span style={{ display: "block", fontSize: "0.78rem", color: "#D4AD62", fontWeight: 600 }}>
            Nottingham, United Kingdom (Phone &amp; WhatsApp)
          </span>
          <a href="tel:+447587338945" style={{ fontSize: "0.88rem" }}>
            +44 7587 338945
          </a>
        </div>
      </div>

      <div className="copyright">
        © 2026 Nexus Czar Pvt. Ltd. All Rights Reserved.
        <span>www.gaurigoswami.com</span>
      </div>
    </footer>
  );
}
