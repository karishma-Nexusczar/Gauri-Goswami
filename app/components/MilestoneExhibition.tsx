"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaCheckCircle, FaChevronDown, FaChevronUp, FaAward, FaTimes } from "react-icons/fa";
import { LuArrowRight, LuBriefcaseBusiness } from "react-icons/lu";

type Experience = {
  year: string;
  displayYear?: string;
  organisation: string;
  role: string;
  duration?: string;
  location?: string;
  image: string;
  sideImage?: string;
  isLogo?: boolean;
  certificateImage?: string;
  about?: string;
  responsibilities: string;
  responsibilityBullets?: string[];
  courtExposureTitle?: string;
  courtExposure?: string;
  courtExposureBullets?: string[];
  representativeMattersTitle?: string;
  representativeMattersBullets?: string[];
  achievements: string;
  skills: string[];
};

const experiences: Experience[] = [
  {
    year: "July 2019 – August 2019",
    displayYear: "July 2019",
    organisation: "Consulta Juris Law Firm, Gujarat",
    role: "Legal Intern",
    duration: "📅 July 2019 – August 2019",
    location: "📍 Surat, Gujarat, India",
    image: "/advocate-library-portrait.png",
    certificateImage: "/consulta-juris-certificate.png",
    about: "Completed a legal internship at Consulta Juris Law Firm, gaining practical exposure to legal research, case analysis, court procedures, and professional legal drafting while working alongside experienced advocates.",
    responsibilities: "Researched relevant case laws, drafted legal summaries, assisted advocates with legal documentation and case preparation, reviewed legal records, and participated in litigation research.",
    responsibilityBullets: [
      "Researched relevant case laws for client matters.",
      "Drafted legal summaries and case briefs.",
      "Assisted advocates with legal documentation and case preparation.",
      "Reviewed legal records and supporting documents.",
      "Participated in legal research for ongoing litigation.",
      "Observed professional legal drafting and client case analysis."
    ],
    courtExposure: "Attended proceedings at the Surat District Court, observing courtroom practices, litigation procedures, case management, and court filings.",
    courtExposureBullets: [
      "Attended proceedings at the Surat District Court.",
      "Observed courtroom practices and litigation procedures.",
      "Learned practical aspects of legal advocacy and case management.",
      "Developed an understanding of court filing and legal workflow."
    ],
    achievements: "Successfully completed a four-week internship at Consulta Juris Law Firm, receiving appreciation for being punctual, hardworking, and sincere, as recognized in the firm's internship certificate.",
    skills: [
      "Legal Research",
      "Case Law Analysis",
      "Legal Drafting",
      "Case Brief Preparation",
      "Court Procedures",
      "Documentation",
      "Litigation Support",
      "Professional Ethics"
    ]
  },
  {
    year: "Dec 2019 – Jan 2020",
    displayYear: "Dec 2019",
    organisation: "Abdul Latif Jameel Poverty Action Lab (J-PAL)",
    role: "Legal Research Intern",
    duration: "📅 Dec 2019 – Jan 2020",
    location: "📍 Surat, Gujarat, India",
    image: "/jpal-logo.png",
    isLogo: true,
    about: "Completed a legal research internship with J-PAL, contributing to environmental law research by analysing regulatory compliance under the Air (Prevention and Control of Pollution) Act, 1981. The work focused on evaluating Continuous Emission Monitoring Systems (CEMS) data and its role in strengthening environmental governance in India.",
    responsibilities: "Conducted legal research on environmental regulations and policy frameworks, analysed CEMS data, studied compliance under the Air Act (1981), and assisted in preparing research findings.",
    responsibilityBullets: [
      "Conducted legal research on environmental regulations and policy frameworks.",
      "Analysed the validity and reliability of CEMS (Continuous Emission Monitoring Systems) data.",
      "Studied compliance requirements under the Air Act, 1981.",
      "Reviewed legal and regulatory documents related to pollution control.",
      "Assisted in preparing research findings and legal documentation."
    ],
    courtExposureTitle: "Research Highlights",
    courtExposure: "Evaluated CEMS in environmental monitoring, examined technology in regulatory compliance, and explored data-driven environmental governance.",
    courtExposureBullets: [
      "Evaluated the effectiveness of CEMS in environmental monitoring.",
      "Examined how technology can improve regulatory compliance.",
      "Explored the impact of data-driven monitoring on environmental governance.",
      "Contributed to research supporting evidence-based policy analysis."
    ],
    achievements: "Successfully contributed to legal research assessing CEMS data under the Air Act (1981), gaining practical experience in environmental law, policy evaluation, and evidence-based regulatory research.",
    skills: [
      "Legal Research",
      "Environmental Law",
      "Policy Analysis",
      "Regulatory Compliance",
      "Case Analysis",
      "Data Validation",
      "Research Documentation",
      "Analytical Thinking"
    ]
  },
  {
    year: "Jul 2020 – Aug 2020",
    displayYear: "Jul 2020 – Aug 2020",
    organisation: "Chambers of Mr. S.P. Roy (Advocate), Gauhati High Court",
    role: "Legal Intern",
    duration: "📅 Jul – Aug 2020",
    location: "📍 Guwahati, Assam, India",
    image: "/gauhati-high-court-emblem.png",
    isLogo: true,
    about: "Completed a legal internship under the guidance of Mr. S.P. Roy, Advocate at the Gauhati High Court, gaining practical exposure to High Court litigation, legal drafting, case preparation, and courtroom procedures.",
    responsibilities: "Assisted in legal research for High Court matters, reviewed case files and petitions, drafted legal notes and case summaries, and prepared documentation for ongoing cases.",
    responsibilityBullets: [
      "Assisted in legal research for High Court matters.",
      "Reviewed case files, petitions, and supporting legal documents.",
      "Drafted legal notes and case summaries.",
      "Assisted in preparing briefs and documentation for ongoing cases.",
      "Observed legal proceedings and litigation strategies at the Gauhati High Court."
    ],
    courtExposureTitle: "Court Exposure",
    courtExposure: "Attended proceedings at the Gauhati High Court, observing courtroom advocacy, judicial proceedings, and High Court case management.",
    courtExposureBullets: [
      "Attended proceedings at the Gauhati High Court.",
      "Observed courtroom advocacy and judicial proceedings.",
      "Learned practical aspects of litigation and legal practice.",
      "Gained insights into High Court procedures and case management."
    ],
    achievements: "Successfully completed the internship under Mr. S.P. Roy (Advocate), gaining valuable experience in High Court litigation, legal research, drafting, and courtroom practices.",
    skills: [
      "Legal Research",
      "Legal Drafting",
      "High Court Litigation",
      "Case Preparation",
      "Court Procedures",
      "Litigation Support",
      "Legal Documentation",
      "Analytical Thinking",
      "Professional Ethics"
    ]
  },
  {
    year: "Jan 2022",
    displayYear: "Jan 2022",
    organisation: "Chambers of Senior Advocate N. Unni Krishnan Nair, Gauhati High Court",
    role: "Legal Intern",
    duration: "📅 January 2022 • 1 Month",
    location: "📍 Guwahati, Assam, India",
    image: "/gauhati-high-court-emblem.png",
    isLogo: true,
    certificateImage: "/unni-krishnan-certificate.png",
    about: "Completed a legal internship under the mentorship of Senior Advocate N. Unni Krishnan Nair at the Gauhati High Court, gaining practical exposure to High Court litigation, legal drafting, case preparation, and courtroom proceedings.",
    responsibilities: "Conducted legal research on ongoing High Court matters, assisted in drafting legal notes and petitions, reviewed case files, and supported litigation preparation.",
    responsibilityBullets: [
      "Conducted legal research on ongoing High Court matters.",
      "Assisted in drafting legal notes, petitions, and case briefs.",
      "Reviewed case files, judicial precedents, and legal documents.",
      "Supported litigation preparation and legal documentation.",
      "Observed courtroom proceedings and advocacy practices."
    ],
    courtExposureTitle: "Court Exposure",
    courtExposure: "Attended proceedings at the Gauhati High Court, observing litigation strategy, courtroom advocacy, and High Court case management.",
    courtExposureBullets: [
      "Attended proceedings at the Gauhati High Court.",
      "Observed litigation strategy and courtroom advocacy.",
      "Learned practical aspects of High Court procedures.",
      "Gained experience in legal documentation and case management."
    ],
    achievements: "Successfully completed the internship under Senior Advocate N. Unni Krishnan Nair, strengthening practical knowledge of High Court litigation, legal drafting, and courtroom procedures.",
    skills: [
      "Legal Research",
      "Legal Drafting",
      "Case Preparation",
      "High Court Litigation",
      "Legal Documentation",
      "Court Procedures",
      "Litigation Support",
      "Professional Ethics"
    ]
  },
  {
    year: "Jan 2023 – Feb 2023",
    displayYear: "Jan 2023 – Feb 2023",
    organisation: "Chambers of Advocate Amit Bhagat, Delhi High Court",
    role: "Legal Intern",
    duration: "📅 January 2023 – February 2023 • 2 Months",
    location: "📍 New Delhi, India",
    image: "/delhi-high-court-seal.png",
    isLogo: true,
    certificateImage: "/amit-bhagat-certificate.png",
    about: "Completed a legal internship under Advocate Amit Bhagat at the Delhi High Court, gaining practical experience in arbitration, civil litigation, legal drafting, and courtroom procedures. The internship also included exposure to district court proceedings and matters under the Negotiable Instruments Act.",
    responsibilities: "Drafted pleadings and legal documents for arbitration and civil matters, assisted in preparing legal briefs, conducted research on commercial disputes, and worked on Section 138 NI Act matters.",
    responsibilityBullets: [
      "Drafted pleadings and legal documents for arbitration and civil matters.",
      "Assisted in preparing legal briefs, case summaries, and supporting documentation.",
      "Conducted legal research on civil and commercial disputes.",
      "Worked on matters related to Section 138 of the Negotiable Instruments Act, 1881.",
      "Reviewed case files and relevant judicial precedents."
    ],
    courtExposureTitle: "Court Exposure",
    courtExposure: "Attended proceedings at the Delhi High Court and visited Saket District Court, New Delhi to gain practical civil litigation and arbitration experience.",
    courtExposureBullets: [
      "Attended proceedings at the Delhi High Court.",
      "Visited Saket District Court, New Delhi to gain practical litigation experience.",
      "Observed courtroom advocacy, hearings, and case management.",
      "Developed an understanding of civil litigation and arbitration proceedings."
    ],
    achievements: "Successfully completed the internship under Advocate Amit Bhagat, gaining hands-on experience in arbitration, civil litigation, legal drafting, and proceedings before the Delhi High Court and Saket District Court.",
    skills: [
      "Legal Drafting",
      "Arbitration Law",
      "Civil Litigation",
      "Legal Research",
      "Case Preparation",
      "Negotiable Instruments Act",
      "Court Procedures",
      "Litigation Support"
    ]
  },
  {
    year: "Feb 2023 – Mar 2023",
    displayYear: "Feb 2023 – Mar 2023",
    organisation: "Chambers of Mr. Kaushik Choudhary, Advocate-on-Record, Supreme Court of India",
    role: "Legal Intern",
    duration: "📅 February 2023 – March 2023",
    location: "📍 New Delhi, India",
    image: "/supreme-court-emblem.png",
    sideImage: "/supreme-court-building.png",
    isLogo: true,
    certificateImage: "/kaushik-choudhury-certificate.png",
    about: "Completed a legal internship under Mr. Kaushik Choudhary, Advocate-on-Record at the Supreme Court of India, gaining high-level exposure to Supreme Court proceedings, appellate litigation, constitutional matters, NCLT corporate disputes, and complex legal research.",
    responsibilities: "Conducted legal research on constitutional, civil, criminal, service law, and arbitration matters; assisted in preparing Supreme Court briefs and petitions; reviewed case files for NCLT and appellate proceedings.",
    responsibilityBullets: [
      "Conducted legal research on constitutional law, service law, and arbitration matters.",
      "Assisted in legal drafting and documentation for Supreme Court petitions and appellate briefs.",
      "Worked on matters related to Section 138 of the Negotiable Instruments Act and Consumer Disputes.",
      "Reviewed case files and legal records for corporate disputes before NCLT.",
      "Observed oral arguments and judicial proceedings at the Supreme Court of India."
    ],
    courtExposureTitle: "Court & Tribunal Exposure",
    courtExposure: "Attended proceedings at the Supreme Court of India and NCLT, observing appellate litigation, constitutional hearings, and corporate insolvency proceedings.",
    courtExposureBullets: [
      "Observed constitutional and appellate litigation at the Supreme Court of India.",
      "Attended corporate and insolvency proceedings before NCLT.",
      "Learned appellate practice procedures and Supreme Court filings.",
      "Gained insights into high-level litigation strategies and advocacy."
    ],
    achievements: "Successfully completed the internship under Advocate-on-Record Mr. Kaushik Choudhary, receiving an official internship appreciation certificate recognizing meticulous research work, diligence, and sincere contribution to Supreme Court & NCLT litigation matters.",
    skills: [
      "Constitutional Law",
      "Service Law",
      "Civil & Criminal Matters",
      "Arbitration",
      "Negotiable Instruments Act",
      "Consumer Disputes",
      "Supreme Court Proceedings",
      "NCLT Court Exposure"
    ]
  },
  {
    year: "Jun 2023 – Jul 2023",
    displayYear: "Jun 2023 – Jul 2023",
    organisation: "District Legal Services Authority (Kamrup Metro)",
    role: "Legal Intern",
    duration: "📅 June 2023 – July 2023",
    location: "📍 Guwahati, Assam, India",
    image: "/gauhati-high-court-emblem.png",
    isLogo: true,
    certificateImage: "/dlsa-kamrup-certificate.png",
    about: "During my internship with the District Legal Services Authority (Kamrup Metro), Guwahati, I gained practical exposure to the functioning of the district judiciary and various trial courts. I attended proceedings before the Chief Judicial Magistrate (CJM) Court, Sessions Court, Family Court, and Special Courts dealing with POCSO and NDPS matters, allowing me to observe the practical application of criminal and family laws.\n\nI assisted in the preparation and drafting of bail applications under Sections 437, 438, and 439 of the Code of Criminal Procedure (CrPC), along with petitions and other procedural documents. The internship also provided first-hand exposure to cross-examination, trial proceedings, courtroom procedures, and judicial processes, strengthening my understanding of litigation practice and criminal procedure.",
    responsibilities: "Drafted petitions and bail applications under CrPC (Sections 437, 438, 439), assisted in legal research and case documentation, reviewed case files, and assisted advocates in criminal litigation.",
    responsibilityBullets: [
      "Attended proceedings before the Chief Judicial Magistrate (CJM) Court.",
      "Observed Sessions Court, Family Court, POCSO Court, and NDPS Court proceedings.",
      "Drafted bail applications under Sections 437, 438, and 439 CrPC.",
      "Assisted in drafting petitions and procedural applications.",
      "Observed cross-examinations and trial proceedings in criminal matters.",
      "Gained practical exposure to district court litigation and judicial procedures."
    ],
    courtExposureTitle: "Court Exposure",
    courtExposure: "Attended proceedings at the CJM Court, Family Court, Sessions Court, Special POCSO Court, and NDPS Court, observing trial proceedings and cross-examinations.",
    courtExposureBullets: [
      "Attended proceedings before the Chief Judicial Magistrate (CJM) Court.",
      "Observed hearings in the Family Court, Sessions Court, POCSO, and NDPS Courts.",
      "Observed cross-examinations, witness examinations, and trial proceedings."
    ],
    achievements: "Successfully completed the internship at the District Legal Services Authority (Kamrup Metro) with distinction, receiving an official appreciation certificate for sincere, honest, and dedicated legal internship service.",
    skills: [
      "Criminal Law",
      "Legal Drafting",
      "Bail Applications (CrPC 437/438/439)",
      "Court Procedures",
      "Trial Observation",
      "Cross-Examination",
      "Legal Research",
      "Litigation Support"
    ]
  },
  {
    year: "August 2023 – Present",
    displayYear: "August 2023 – Present",
    organisation: "Singhania & Associates",
    role: "Legal Associate",
    duration: "📅 August 2023 – Present",
    location: "📍 New Delhi, India",
    image: "/brand-logo.png",
    sideImage: "/ncdrc-upbhokta-nyay-bhawan.png",
    isLogo: true,
    certificateImage: "/singhania-certificate.png",
    about: "As a Legal Associate at Singhania & Associates, I have been actively involved in consumer litigation, legal research, drafting, and dispute resolution before the National Consumer Disputes Redressal Commission (NCDRC), State Consumer Commissions, District Consumer Commissions, the Delhi High Court, and various District Courts. My work primarily focuses on representing leading automobile manufacturers and corporate clients in complex consumer disputes.\n\nMy responsibilities include drafting Written Submissions, Written Synopses, Rejoinders, Lists of Dates & Events, procedural applications, and litigation documents, while conducting comprehensive legal research and case analysis. I have also coordinated court filings, prepared case records, organized documentary evidence, and assisted senior advocates during hearings. Through this role, I have developed strong expertise in litigation strategy, procedural compliance, legal drafting, and courtroom practice.",
    responsibilities: "Drafting Written Submissions, Written Synopses, Rejoinders, Lists of Dates & Events, procedural applications, conducting comprehensive legal research, case analysis, and coordinating court filings before NCDRC, High Court, and Consumer Commissions.",
    responsibilityBullets: [
      "Consumer litigation before NCDRC, State and District Consumer Commissions.",
      "Drafting Written Submissions, Written Synopses, Rejoinders, and procedural applications.",
      "Legal research, case analysis, and litigation strategy.",
      "Preparation of Lists of Dates & Events, Indices, and compilation of annexures.",
      "Court appearances and exposure before the Delhi High Court and District Courts.",
      "Representation in major automobile consumer disputes involving Maruti Suzuki, Nissan, Volkswagen, and Skoda Auto India.",
      "Litigation documentation, procedural compliance, and case management."
    ],
    representativeMattersTitle: "Representative Matters",
    representativeMattersBullets: [
      "Maruti Suzuki v. Nalinbhai Shah & Others",
      "Maruti Suzuki v. Rita Jain & Others",
      "Anuppama Aggarwal v. Nissan Motors & Others",
      "Neetu Singh v. Nissan Motors & Others",
      "Vijay Suresh v. Volkswagen & Others",
      "XS Infoways v. Volkswagen & Others",
      "Skoda Auto India Volkswagen Pvt. Ltd. v. K.P. Aggarwal & Others",
      "Srikant v. Skoda Auto India Pvt. Ltd."
    ],
    courtExposureTitle: "Forum Exposure",
    courtExposure: "Appears and represents clients before the National Consumer Disputes Redressal Commission (NCDRC), State Consumer Commissions, Delhi High Court, and District Courts.",
    courtExposureBullets: [
      "National Consumer Disputes Redressal Commission (NCDRC - Upbhokta Nyay Bhawan).",
      "Delhi High Court & District Courts.",
      "State & District Consumer Disputes Redressal Commissions."
    ],
    achievements: "Actively representing leading automobile manufacturers and multinational corporate clients in high-stakes consumer litigation, achieving favorable outcomes through meticulous drafting, research, and litigation strategy.",
    skills: [
      "Consumer Litigation",
      "NCDRC Advocacy",
      "Automobile Disputes",
      "Legal Research & Strategy",
      "Written Submissions & Synopses",
      "Rejoinders & Pleadings",
      "High Court & District Court Practice",
      "Case Management"
    ]
  }
];

export default function MilestoneExhibition() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCertModal, setActiveCertModal] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const active = experiences[activeIndex];
  const timelineRef = useRef<HTMLDivElement>(null);

  // Auto-play timer: automatically move left to right every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Smoothly scroll active card HORIZONTALLY ONLY inside the container (prevents vertical page jumping)
  useEffect(() => {
    if (!timelineRef.current) return;
    const container = timelineRef.current;
    const activeItem = container.children[activeIndex] as HTMLElement;
    if (activeItem) {
      const itemOffset = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;
      const containerWidth = container.clientWidth;
      const targetScrollLeft = itemOffset - (containerWidth / 2) + (itemWidth / 2);

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  const scrollTimeline = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      timelineRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleSelectRole = (index: number) => {
    setActiveIndex(index);
    setIsExpanded(false);
  };

  return (
    <section className="career-journey" id="experience" aria-labelledby="career-heading">
      <header className="career-journey-header">
        <p>Professional Journey</p>
        <h2 id="career-heading">Work Experience &amp; Internship</h2>
        <span>Select any role to view highlights.</span>
      </header>

      {/* Timeline Wrapper with Clean Arrow Buttons & Hidden Scrollbar */}
      <div 
        className="career-timeline-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="timeline-nav-btn prev"
          onClick={() => scrollTimeline("left")}
          aria-label="Scroll timeline left"
        >
          ‹
        </button>

        <div className="career-timeline" ref={timelineRef} aria-label="Work experience timeline">
          {experiences.map((experience, index) => (
            <div className="career-timeline-item" key={experience.organisation}>
              <button
                type="button"
                className={`career-card ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleSelectRole(index)}
                aria-pressed={index === activeIndex}
              >
                <span className="career-year">{experience.displayYear || experience.year}</span>
                <strong>{experience.organisation}</strong>
                <small>{experience.role}</small>
              </button>
              {index < experiences.length - 1 && <LuArrowRight className="career-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="timeline-nav-btn next"
          onClick={() => scrollTimeline("right")}
          aria-label="Scroll timeline right"
        >
          ›
        </button>
      </div>

      {/* Professional Expandable Detail Box */}
      <article className={`career-detail-compact ${isExpanded ? "expanded" : ""}`} aria-live="polite">
        <figure
          className={`career-detail-compact-photo ${active.isLogo && !active.sideImage ? "logo-frame" : ""}`}
          onClick={() => active.certificateImage && setActiveCertModal(active.certificateImage)}
          style={{ cursor: active.certificateImage ? "pointer" : "default" }}
          title={active.certificateImage ? "Click to view full certificate" : undefined}
        >
          {active.sideImage ? (
            <Image
              src={active.sideImage}
              alt={`${active.organisation} building`}
              fill
              sizes="(max-width: 768px) 100vw, 260px"
              unoptimized
              style={{ objectFit: "cover" }}
            />
          ) : active.isLogo ? (
            <div className="logo-emblem-wrapper">
              <Image
                src={active.image}
                alt={`${active.organisation} logo`}
                width={110}
                height={110}
                unoptimized
                style={{ objectFit: "contain" }}
              />
            </div>
          ) : (
            <Image
              src={active.image}
              alt={`${active.organisation} experience`}
              fill
              sizes="(max-width: 768px) 100vw, 260px"
              unoptimized
            />
          )}
          <div className="career-photo-overlay" />
        </figure>

        <div className="career-detail-compact-copy">
          <div className="career-compact-header">
            <span className="career-compact-kicker">
              <LuBriefcaseBusiness aria-hidden="true" /> {active.year} • {active.role}
              {active.location && <span style={{ marginLeft: "14px", color: "var(--gold-subtitle)" }}>{active.location}</span>}
            </span>
            <h3 className="career-compact-title">{active.organisation}</h3>
          </div>

          <div className="career-compact-body">
            {/* Short Summary (always visible) */}
            <div className="compact-info-row">
              <span className="compact-info-label">Key Highlights</span>
              <p className="compact-info-text">
                {active.about ? active.about : active.responsibilities}
              </p>
            </div>

            {/* Collapsed Skills Snippet */}
            {!isExpanded && (
              <div className="compact-skills-row">
                {active.skills.slice(0, 4).map((skill) => (
                  <span className="compact-skill-badge" key={skill}>
                    <FaCheckCircle aria-hidden="true" /> {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Expanded Full Details */}
            {isExpanded && (
              <>
                <div className="compact-info-row">
                  <span className="compact-info-label">Key Responsibilities</span>
                  {active.responsibilityBullets ? (
                    <ul className="compact-info-bullets">
                      {active.responsibilityBullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="compact-info-text">{active.responsibilities}</p>
                  )}
                </div>

                {active.courtExposureBullets ? (
                  <div className="compact-info-row">
                    <span className="compact-info-label">{active.courtExposureTitle || "Court Exposure"}</span>
                    <ul className="compact-info-bullets">
                      {active.courtExposureBullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ) : active.courtExposure ? (
                  <div className="compact-info-row">
                    <span className="compact-info-label">{active.courtExposureTitle || "Court Exposure"}</span>
                    <p className="compact-info-text">{active.courtExposure}</p>
                  </div>
                ) : null}

                {active.representativeMattersBullets && (
                  <div className="compact-info-row">
                    <span className="compact-info-label">{active.representativeMattersTitle || "Representative Matters"}</span>
                    <ul className="compact-info-bullets">
                      {active.representativeMattersBullets.map((m: string, i: number) => (
                        <li key={i}><strong>{m}</strong></li>
                      ))}
                    </ul>
                  </div>
                )}

                {active.achievements && (
                  <div className="compact-info-row">
                    <span className="compact-info-label">Achievement &amp; Recognition</span>
                    <p className="compact-info-text">{active.achievements}</p>
                  </div>
                )}

                <div className="compact-skills-row">
                  {active.skills.map((skill) => (
                    <span className="compact-skill-badge" key={skill}>
                      <FaCheckCircle aria-hidden="true" /> {skill}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Action Buttons Row */}
            <div className="career-action-buttons-wrap">
              <button
                type="button"
                className="career-expand-toggle-btn"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>Show Less <FaChevronUp aria-hidden="true" /></>
                ) : (
                  <>Read Full Details <FaChevronDown aria-hidden="true" /></>
                )}
              </button>

              {active.certificateImage && (
                <button
                  type="button"
                  className="career-certificate-thumb-btn"
                  onClick={() => setActiveCertModal(active.certificateImage || null)}
                >
                  <FaAward aria-hidden="true" /> View Internship Certificate
                </button>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Certificate Modal Lightbox */}
      {activeCertModal && (
        <div className="career-cert-modal" onClick={() => setActiveCertModal(null)} role="dialog" aria-label="Internship Certificate Modal">
          <div className="career-cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="career-cert-modal-close"
              onClick={() => setActiveCertModal(null)}
              aria-label="Close modal"
            >
              <FaTimes aria-hidden="true" />
            </button>
            <figure className="career-cert-modal-figure">
              <Image
                src={activeCertModal}
                alt="Internship Certificate"
                width={800}
                height={600}
                unoptimized
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <figcaption style={{ color: "var(--gold-light)", textAlign: "center", marginTop: "1rem", fontSize: "0.85rem" }}>
                Official Internship Certificate — {active.organisation}
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </section>
  );
}
