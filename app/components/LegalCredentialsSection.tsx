"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../legal-credentials/legal-credentials.module.css";

interface CredentialItem {
  id: string;
  category: string;
  title: string;
  authority: string;
  jurisdiction: string;
  issuedDate: string;
  credentialNo: string;
  extraNo?: string;
  description: string;
  imageSrc: string;
}

const credentialsList: CredentialItem[] = [
  {
    id: "enrolment-certificate",
    category: "LEGAL PROFESSIONAL CREDENTIAL",
    title: "Certificate of Enrolment — Advocate",
    authority: "The Bar Council of Assam, Nagaland, Mizoram, Arunachal Pradesh & Sikkim",
    jurisdiction: "High Court of Gauhati",
    issuedDate: "August 2023",
    credentialNo: "Number on the Roll: 2366 of 2023",
    description: "Certificate confirming Gauri Goswami’s enrolment as an Advocate with the State Bar Council under the Advocates Act, 1961.",
    imageSrc: "/legal-certificate-of-enrolment-advocate.png"
  },
  {
    id: "cop-certificate",
    category: "LEGAL PROFESSIONAL CERTIFICATION",
    title: "Certificate of Practice (COP)",
    authority: "Bar Council of India",
    jurisdiction: "Under the Advocates Act, 1961",
    issuedDate: "March 2024",
    credentialNo: "AIBE Roll No: 18039078",
    extraNo: "SBC Enrolment No: 2366 of 2023",
    description: "Certificate of Practice issued by the Bar Council of India following qualification in the All India Bar Examination, confirming entitlement to practise the profession of law in India.",
    imageSrc: "/legal-certificate-of-practice-cop.png"
  }
];

export default function LegalCredentialsSection() {
  const [selectedDoc, setSelectedDoc] = useState<CredentialItem | null>(null);

  return (
    <div className={styles.pageWrap}>
      {/* HERO SECTION */}
      <section className={styles.heroSection} id="credentials">
        <div className={styles.heroContainer}>
          <span className={styles.smallLabel}>LEGAL CAREER • PROFESSIONAL CREDENTIALS</span>
          <h2 className={styles.mainHeading}>Legal Credentials &amp; Professional Recognition</h2>
          <div className={styles.goldDivider}></div>
          <p className={styles.supportingText}>
            Verified professional credentials documenting Gauri Goswami’s enrolment as an Advocate and qualification to practise law in India.
          </p>
        </div>
      </section>

      {/* CREDENTIAL CARDS SECTION */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrid}>
            {credentialsList.map((item) => (
              <div key={item.id} className={styles.credentialCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.categoryBadge}>{item.category}</span>
                </div>

                {/* Certificate Preview Frame */}
                <div
                  className={styles.imageFrame}
                  onClick={() => setSelectedDoc(item)}
                  title={`View ${item.title}`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className={styles.certImage}
                    unoptimized
                    priority
                  />
                  <div className={styles.imageOverlay}>
                    <span>Click to Enlarge</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <div className={styles.authorityRow}>
                    <strong>Issuing Authority:</strong> {item.authority}
                  </div>
                  <div className={styles.metaRow}>
                    <div><strong>Jurisdiction / Basis:</strong> {item.jurisdiction}</div>
                    <div><strong>Issued:</strong> {item.issuedDate}</div>
                  </div>
                  <div className={styles.numberBadgeWrap}>
                    <span className={styles.numberBadge}>{item.credentialNo}</span>
                    {item.extraNo && <span className={styles.numberBadge}>{item.extraNo}</span>}
                  </div>
                  <p className={styles.factualDesc}>{item.description}</p>

                  <div className={styles.cardFooter}>
                    <button
                      type="button"
                      className={styles.viewBtn}
                      onClick={() => setSelectedDoc(item)}
                    >
                      VIEW CERTIFICATE &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL / LIGHTBOX VIEWER */}
      {selectedDoc && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedDoc(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalCategory}>{selectedDoc.category}</span>
                <h4 className={styles.modalTitle}>{selectedDoc.title}</h4>
                <p className={styles.modalSub}>{selectedDoc.authority}</p>
              </div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setSelectedDoc(null)}
                aria-label="Close Certificate Preview"
              >
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalImageWrap}>
                <Image
                  src={selectedDoc.imageSrc}
                  alt={selectedDoc.title}
                  width={900}
                  height={1200}
                  className={styles.modalImage}
                  unoptimized
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <span>{selectedDoc.credentialNo} {selectedDoc.extraNo ? `• ${selectedDoc.extraNo}` : ""}</span>
              <button
                type="button"
                className={styles.modalCloseFooterBtn}
                onClick={() => setSelectedDoc(null)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
