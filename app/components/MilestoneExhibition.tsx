"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useRef, useEffect, useCallback } from "react";
import { FaCheckCircle, FaChevronDown, FaChevronUp, FaAward, FaTimes, FaBuilding, FaGavel } from "react-icons/fa";
import { LuArrowRight, LuBriefcaseBusiness } from "react-icons/lu";

type SignificantMatter = {
  title: string;
  desc: string;
};

type CorporateProject = {
  client: string;
  title: string;
  desc: string;
  focusAreas: string[];
  legislationResearched: string[];
  analysisScope: string[];
  complianceMatrixItems: string[];
  regulatoryCoverage: string[];
  documentationReviewItems: string[];
};

type Experience = {
  category: "Legal Associate" | "Internship";
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
  significantMatters?: SignificantMatter[];
  corporateProject?: CorporateProject[];
  achievements: string;
  skills: string[];
};

const experiences: Experience[] = [
  {
    category: "Legal Associate",
    year: "Sept 2023 – Oct 2023",
    displayYear: "Sept 2023 – Oct 2023",
    organisation: "Singhania & Associates",
    role: "Legal Associate",
    duration: "📅 September 2023 – October 2023",
    location: "📍 New Delhi, India",
    image: "/brand-logo.png",
    sideImage: "/ncdrc-upbhokta-nyay-bhawan.png",
    isLogo: true,
    certificateImage: "/singhania-certificate.png",
    about: "During her tenure at Singhania & Associates, Gauri worked extensively on consumer litigation before the National Consumer Disputes Redressal Commission (NCDRC), State Consumer Commissions, and District Consumer Commissions. Her responsibilities included legal research, drafting pleadings, preparing written submissions, compiling case records, coordinating filings, and assisting senior advocates during court proceedings.\n\nShe regularly appeared before Consumer Commissions at Saini Enclave, Janakpuri, and Shalimar Bagh, and attended proceedings before the Tis Hazari District Courts, Karkardooma Courts, and the Delhi High Court in civil and dispute resolution matters.",
    responsibilities: "Drafting Written Submissions, Written Synopses, Rejoinders, Lists of Dates & Events, procedural applications, conducting comprehensive legal research, case analysis, and coordinating court filings before NCDRC, High Court, and Consumer Commissions.",
    responsibilityBullets: [
      "Litigation Strategy & Case Analysis: Formulating litigation strategies, case analysis, and procedural compliance before consumer forums and High Courts.",
      "Consumer Litigation Practice: Extensive practice before NCDRC (Upbhokta Nyay Bhawan), State Consumer Commissions, and District Consumer Commissions.",
      "Pleadings & Legal Drafting: Drafting Written Submissions, Written Synopses, Rejoinders, and procedural applications.",
      "Litigation Documentation: Preparing Lists of Dates & Events, Indices, compiling documentary evidence annexures, and case record preparation.",
      "Courtroom Practice & Advocacy: Appearing before Consumer Commissions at Saini Enclave, Janakpuri, Shalimar Bagh, Tis Hazari Courts, Karkardooma Courts, and Delhi High Court.",
      "MNC & Corporate Representation: Representing leading automobile manufacturers including Maruti Suzuki, Nissan Motors, Volkswagen, and Skoda Auto India."
    ],
    significantMatters: [
      {
        title: "1. Maruti Suzuki v. Nalinbhai Shah & Others",
        desc: "Drafted the Written Synopsis and Written Submissions following detailed research into statutory provisions, judicial precedents, and the factual matrix. Assisted with documentary evidence and preparation for final arguments. Attended proceedings before the National Consumer Disputes Redressal Commission."
      },
      {
        title: "2. Anuppama Aggarwal v. Nissan Motors & Others",
        desc: "Prepared the List of Dates and Events and assisted with filing before the NCDRC, including preparation of the index, arrangement of annexures, verification of procedural compliance, and coordination of pleadings."
      },
      {
        title: "3. Maruti Suzuki v. Rita Jain & Others",
        desc: "Drafted the Written Synopsis and Written Submissions after analysing pleadings, evidence, and consumer protection law. Assisted with relevant precedents and attended hearings before the National Consumer Commission, including supervised presentation of arguments on specific aspects of the matter."
      },
      {
        title: "4. Vijay Suresh v. Volkswagen & Others",
        desc: "Prepared Written Submissions and a structured List of Dates and Events. Examined annexures, organized documentary evidence, cross-verified references, and ensured legal contentions were supported by appropriate documents and precedents."
      },
      {
        title: "5. Neetu Singh v. Nissan Motors & Others",
        desc: "Prepared the List of Dates and Events, Index of Documents, applications, and supporting annexures while ensuring procedural compliance and proper document organization."
      },
      {
        title: "6. XS Infoways v. Volkswagen & Others",
        desc: "Conducted detailed legal research and case analysis, including examination of the Consumer Protection Act, procedural issues, and relevant judicial precedents. Prepared research notes to support the litigation team's legal arguments."
      },
      {
        title: "7. Skoda Auto India Volkswagen Pvt. Ltd. v. K.P. Aggarwal & Others",
        desc: "Drafted the Written Synopsis, analysed pleadings and documentary evidence, assisted in compiling the record of proceedings, and prepared supporting documents for hearing before the National Consumer Commission."
      },
      {
        title: "8. Srikant v. Skoda Auto India Volkswagen Pvt. Ltd.",
        desc: "Drafted the Rejoinder and Written Submissions after reviewing the opposite parties' pleadings. Conducted legal research and supported the submissions with relevant statutory provisions and judicial precedents."
      }
    ],
    courtExposureTitle: "Forum & Courtroom Practice",
    courtExposure: "Appeared and represented corporate clients before NCDRC, State Consumer Commissions (Saini Enclave, Janakpuri, Shalimar Bagh), Tis Hazari District Courts, Karkardooma Courts, and Delhi High Court.",
    courtExposureBullets: [
      "National Consumer Disputes Redressal Commission (NCDRC - Upbhokta Nyay Bhawan).",
      "Delhi High Court & District Courts (Tis Hazari Courts & Karkardooma Courts).",
      "State & District Consumer Disputes Redressal Commissions (Saini Enclave, Janakpuri & Shalimar Bagh)."
    ],
    achievements: "Represented leading automobile manufacturers and corporate clients in high-stakes consumer litigation, delivering meticulous drafting, legal research, and courtroom assistance before premier judicial forums.",
    skills: [
      "Written Submissions",
      "Written Synopsis",
      "Rejoinders & Pleadings",
      "Lists of Dates & Events",
      "Indices & Annexures",
      "Consumer Protection Law",
      "NCDRC Advocacy",
      "State & District Consumer Commissions",
      "Delhi High Court Practice",
      "Litigation Strategy",
      "Case Analysis",
      "Procedural Compliance"
    ]
  },
  {
    category: "Legal Associate",
    year: "August 2023 – Feb 2024",
    displayYear: "August 2023 – Feb 2024",
    organisation: "Chambers of Mr. Pramod Gupta",
    role: "Legal Associate",
    duration: "📅 August 2023 – February 2024",
    location: "📍 Delhi High Court, New Delhi, India",
    image: "/delhi-high-court-red-blazer.png",
    sideImage: "/the-honourable-society-of-grays-inn-london.jpg",
    isLogo: false,
    certificateImage: "/pramod-gupta-certificate.png",
    about: "During her tenure at the Chambers of Mr. Pramod Gupta, Advocate, Delhi High Court, Gauri was involved in a wide spectrum of litigation, legal research, legal drafting, corporate advisory, statutory compliance, regulatory research, case analysis, legal due diligence, and client advisory.\n\nHer work encompassed constitutional law, civil law, corporate law, labour law, regulatory law, education law, service law, and commercial law matters. She researched Central and State legislation, judicial precedents, government notifications, and delegated legislation, while assisting with legal opinions, pleadings, advisory notes, legal notices, replies to complaints, client correspondence, case strategy, and document review.",
    responsibilities: "Conducting comprehensive legal research, drafting legal opinions, pleadings, advisory notes, legal notices, replies to complaints, case strategy notes, and leading extensive corporate advisory and statutory compliance projects for multinational corporate clients.",
    responsibilityBullets: [
      "Constitutional & Civil Law Research: In-depth legal research on Central & State legislation, constitutional provisions, statutory frameworks, and judicial precedents.",
      "Corporate & Regulatory Advisory: Researching regulatory compliance, employment regulations, taxation, and statutory obligations for MNC clients.",
      "Pleadings & Legal Drafting: Drafting legal notices, replies to complaints, petitions, legal opinions, research-based legal documents, and advisory notes.",
      "Delhi High Court Litigation Practice: Regularly monitoring proceedings before the Delhi High Court, preparing detailed case-hearing updates, analysing court observations, recording procedural developments, and communicating legal implications to clients.",
      "Case Strategy & Legal Due Diligence: Reviewing documentary evidence, managing statutory records, formulating case strategy, and performing legal due diligence in education, service, labour, and commercial disputes."
    ],
    corporateProject: [
      {
        client: "Multinational Corporate Client — DIAGEO",
        title: "DIAGEO — Corporate Compliance & Legal Research Project",
        desc: "Gauri was entrusted with an extensive legal research and compliance project for multinational corporate client DIAGEO, involving a comprehensive examination of statutory and regulatory obligations governing private establishments in India.",
        focusAreas: [
          "Labour Law & Employment Regulations",
          "Corporate Statutory Compliance",
          "Taxation Framework & GST",
          "Business Registration & Operations",
          "Regulatory Authority Approvals"
        ],
        legislationResearched: [
          "Rights of Persons with Disabilities Act",
          "Payment of Bonus Act",
          "Apprentices Act",
          "Shops and Establishments Act",
          "Equal Remuneration Act",
          "Minimum Wages Act",
          "Labour Welfare Fund Legislation",
          "Goods and Services Tax (GST) Framework"
        ],
        analysisScope: [
          "Applicability & Mandatory Registrations",
          "Compliance Obligations & Statutory Timelines",
          "Documentation Standards & Prescribed Forms",
          "Reporting Mechanisms & Regulatory Authorities",
          "Statutory Registers & Annual/Periodic Filings",
          "Record-Keeping Obligations & Inspection Requirements"
        ],
        complianceMatrixItems: [
          "Competent Regulatory Authorities & Prescribed Forms",
          "Mandatory Statutory Registers & Documentation Standards",
          "Annual Returns & Periodic Statutory Filings",
          "Employer Obligations & Equal Opportunity Policies",
          "Employee Welfare Measures & Bonus Computation",
          "Apprenticeship Registration & State Labour Compliance"
        ],
        regulatoryCoverage: [
          "GST Registration & Input Service Distributor (ISD) Registration",
          "Import Export Code (IEC) & Non-STPI Registrations",
          "Branch Office Compliance & Overseas Business Operations"
        ],
        documentationReviewItems: [
          "Statutory Registers & Annual Returns Verification",
          "Financial Records & Employer Declarations Review",
          "Employment Records & Regulatory Filings Compilation",
          "Structured Reference Document for Compliance & Risk Mitigation"
        ]
      }
    ],
    courtExposureTitle: "Litigation & Courtroom Practice — Delhi High Court",
    courtExposure: "Regularly monitored proceedings before the Delhi High Court, prepared detailed case-hearing updates following effective hearings, analysed Court observations, recorded procedural developments, identified subsequent compliance requirements, and communicated legal implications to clients across constitutional, civil, corporate, labour, education, service, and commercial disputes.",
    courtExposureBullets: [
      "Delhi High Court (Chambers & Courtroom Proceedings Monitoring).",
      "Education Law, Service Law, Labour Legislation & Commercial Disputes.",
      "Case-hearing updates, procedural compliance, evidence review, and client communications."
    ],
    achievements: "Demonstrated exceptional dedication and proficiency in High Court litigation, corporate advisory, and MNC compliance risk assessment, earning an official Experience Certificate from Advocate Pramod Gupta.",
    skills: [
      "Legal Research",
      "Statutory Interpretation",
      "Legal Drafting",
      "Corporate Compliance",
      "Regulatory Analysis",
      "Litigation Support",
      "Corporate Advisory",
      "Legal Due Diligence",
      "Case Strategy",
      "Client Communication",
      "Courtroom Practice",
      "Compliance Risk Assessment"
    ]
  },
  {
    category: "Internship",
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
    category: "Internship",
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
    category: "Internship",
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
    category: "Internship",
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
    category: "Internship",
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
    category: "Internship",
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
    category: "Internship",
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
  }
];

function CareerDetailCard({ 
  active, 
  setActiveCertModal,
  isExpanded,
  setIsExpanded,
  onHeightChange
}: { 
  active: Experience, 
  setActiveCertModal: (img: string | null) => void,
  isExpanded: boolean,
  setIsExpanded: (val: boolean) => void,
  onHeightChange?: () => void
}) {
  const [showMatters, setShowMatters] = useState(false);
  const [showCorporateProject, setShowCorporateProject] = useState(false);

  useEffect(() => {
    onHeightChange?.();
  }, [showMatters, showCorporateProject, isExpanded, onHeightChange]);

  return (
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
              <span style={{ 
                marginLeft: "10px", 
                padding: "2px 8px", 
                borderRadius: "4px", 
                fontSize: "0.72rem", 
                fontWeight: 700, 
                letterSpacing: "0.05em",
                background: active.category === "Legal Associate" ? "#B89A5A" : "rgba(184, 154, 90, 0.15)", 
                color: active.category === "Legal Associate" ? "#000" : "#B89A5A",
                border: "1px solid #B89A5A",
                textTransform: "uppercase"
              }}>
                {active.category}
              </span>
              {active.location && <span style={{ marginLeft: "10px", color: "var(--gold-subtitle)" }}>{active.location}</span>}
            </span>
            <h3 className="career-compact-title">{active.organisation}</h3>
          </div>

          <div className="career-compact-body">
            {/* Short Summary (always visible) */}
            <div className="compact-info-row">
              <span className="compact-info-label">Key Highlights</span>
              <p className="compact-info-text" style={{ whiteSpace: "pre-line" }}>
                {isExpanded ? (
                  active.about ? active.about : active.responsibilities
                ) : (
                  <>
                    {active.about
                      ? (active.about.length > 130 ? active.about.substring(0, 130) + "..." : active.about)
                      : (active.responsibilities.length > 130 ? active.responsibilities.substring(0, 130) + "..." : active.responsibilities)}
                    {((active.about && active.about.length > 130) || (!active.about && active.responsibilities.length > 130)) && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsExpanded(true);
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--gold-subtitle)",
                          fontWeight: "700",
                          cursor: "pointer",
                          padding: "0 0 0 6px",
                          fontSize: "inherit",
                          textDecoration: "underline",
                          display: "inline",
                          fontFamily: "inherit"
                        }}
                      >
                        read more
                      </button>
                    )}
                  </>
                )}
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
                  <span className="compact-info-label">Professional Responsibilities</span>
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

                {/* EXPANDABLE SIGNIFICANT MATTERS (SINGHANIA & ASSOCIATES) */}
                {active.significantMatters && (
                  <div className="compact-info-row" style={{ marginTop: "1.2rem", paddingTop: "1rem", borderTop: "1px dashed rgba(184, 154, 90, 0.4)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                      <span className="compact-info-label" style={{ color: "#7A5A1C", fontSize: "0.92rem", margin: 0, fontWeight: 800, letterSpacing: "0.05em" }}>
                        <FaGavel style={{ marginRight: "6px", color: "#C89D58" }} /> Representative Matters (8 Matters)
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowMatters(!showMatters)}
                        style={{
                          background: "#28231D",
                          border: "1.5px solid #C89D58",
                          color: "#F5D780",
                          fontSize: "0.78rem",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          cursor: "pointer",
                          fontWeight: 700,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                          transition: "all 0.2s ease"
                        }}
                      >
                        {showMatters ? "Hide Matters ↑" : "View 8 Matters →"}
                      </button>
                    </div>

                    {showMatters && (
                      <div style={{ marginTop: "0.9rem", display: "grid", gap: "0.9rem" }}>
                        {active.significantMatters.map((matter, idx) => (
                          <div key={idx} style={{ background: "#1C1814", borderLeft: "4px solid #C89D58", borderTop: "1px solid rgba(200, 157, 88, 0.25)", borderRight: "1px solid rgba(200, 157, 88, 0.25)", borderBottom: "1px solid rgba(200, 157, 88, 0.25)", padding: "12px 16px", borderRadius: "0 8px 8px 0", boxShadow: "0 4px 12px rgba(0,0,0,0.18)" }}>
                            <strong style={{ color: "#F5D780", fontSize: "0.94rem", display: "block", fontWeight: 700, marginBottom: "4px" }}>{matter.title}</strong>
                            <p style={{ color: "#FFFFFF", fontSize: "0.86rem", margin: 0, lineHeight: 1.6, fontWeight: 400 }}>{matter.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* EXPANDABLE CORPORATE COMPLIANCE PROJECT (DIAGEO - PRAMOD GUPTA) */}
                {active.corporateProject && active.corporateProject.map((proj, pIdx) => (
                  <div key={pIdx} className="compact-info-row" style={{ marginTop: "1.2rem", paddingTop: "1rem", borderTop: "1px dashed rgba(184, 154, 90, 0.4)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                      <span className="compact-info-label" style={{ color: "#7A5A1C", fontSize: "0.92rem", margin: 0, fontWeight: 800, letterSpacing: "0.05em" }}>
                        <FaBuilding style={{ marginRight: "6px", color: "#C89D58" }} /> {proj.title}
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowCorporateProject(!showCorporateProject)}
                        style={{
                          background: "#28231D",
                          border: "1.5px solid #C89D58",
                          color: "#F5D780",
                          fontSize: "0.78rem",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          cursor: "pointer",
                          fontWeight: 700,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                          transition: "all 0.2s ease"
                        }}
                      >
                        {showCorporateProject ? "Hide DIAGEO Project ↑" : "View DIAGEO Corporate Compliance →"}
                      </button>
                    </div>

                    {showCorporateProject && (
                      <div style={{ marginTop: "0.9rem", background: "#1C1814", border: "1.5px solid #C89D58", borderRadius: "12px", padding: "20px 22px", boxShadow: "0 6px 20px rgba(0,0,0,0.22)" }}>
                        <strong style={{ color: "#F5D780", fontSize: "1.05rem", display: "block", fontWeight: 800, letterSpacing: "0.02em" }}>{proj.client} — Statutory &amp; Regulatory Compliance</strong>
                        <p style={{ color: "#FFFFFF", fontSize: "0.88rem", margin: "8px 0 16px 0", lineHeight: 1.6, fontWeight: 400 }}>{proj.desc}</p>

                        <div style={{ margin: "16px 0" }}>
                          <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#E6C280", textTransform: "uppercase", display: "block", marginBottom: "8px", letterSpacing: "0.06em" }}>Statutory &amp; Regulatory Legislation Researched</span>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {proj.legislationResearched.map((leg, lIdx) => (
                              <span key={lIdx} style={{ background: "#2C251F", color: "#FFFFFF", padding: "6px 13px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 600, border: "1px solid #C89D58", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
                                • {leg}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div style={{ margin: "16px 0" }}>
                          <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#E6C280", textTransform: "uppercase", display: "block", marginBottom: "8px", letterSpacing: "0.06em" }}>Comprehensive Statutory Compliance Matrix</span>
                          <ul style={{ margin: 0, paddingLeft: "1.3rem", color: "#F2EBE1", fontSize: "0.88rem", lineHeight: 1.65 }}>
                            {proj.complianceMatrixItems.map((cItem, cIdx) => (
                              <li key={cIdx} style={{ marginBottom: "6px" }}>{cItem}</li>
                            ))}
                          </ul>
                        </div>

                        <div style={{ margin: "16px 0" }}>
                          <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#E6C280", textTransform: "uppercase", display: "block", marginBottom: "8px", letterSpacing: "0.06em" }}>Indirect Tax &amp; Corporate Regulatory Requirements</span>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {proj.regulatoryCoverage.map((reg, rIdx) => (
                              <span key={rIdx} style={{ background: "#26201A", color: "#F5D780", padding: "6px 13px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 600, border: "1px solid rgba(200, 157, 88, 0.5)", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
                                ✓ {reg}
                              </span>
                            ))}
                          </div>
                        </div>

                        {proj.documentationReviewItems && (
                          <div style={{ margin: "16px 0 0 0" }}>
                            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#E6C280", textTransform: "uppercase", display: "block", marginBottom: "8px", letterSpacing: "0.06em" }}>Documentation &amp; Statutory Compliance Review</span>
                            <ul style={{ margin: 0, paddingLeft: "1.3rem", color: "#F2EBE1", fontSize: "0.88rem", lineHeight: 1.65 }}>
                              {proj.documentationReviewItems.map((docItem, dIdx) => (
                                <li key={dIdx} style={{ marginBottom: "6px" }}>{docItem}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {active.courtExposureBullets ? (
                  <div className="compact-info-row" style={{ marginTop: "0.8rem" }}>
                    <span className="compact-info-label">{active.courtExposureTitle || "Court Exposure"}</span>
                    <ul className="compact-info-bullets">
                      {active.courtExposureBullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ) : active.courtExposure ? (
                  <div className="compact-info-row" style={{ marginTop: "0.8rem" }}>
                    <span className="compact-info-label">{active.courtExposureTitle || "Court Exposure"}</span>
                    <p className="compact-info-text">{active.courtExposure}</p>
                  </div>
                ) : null}

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
                  <FaAward aria-hidden="true" />{" "}
                  {active.category === "Legal Associate"
                    ? "VIEW WORK EXPERIENCE / CERTIFICATE →"
                    : "VIEW INTERNSHIP CERTIFICATE →"}
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
  );
}

export default function MilestoneExhibition() {
  const [filterCategory, setFilterCategory] = useState<"ALL" | "Legal Associate" | "Internship">("ALL");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [activeCertModal, setActiveCertModal] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [swiper, setSwiper] = useState<any>(null);

  const filteredExperiences = filterCategory === "ALL" 
    ? experiences 
    : experiences.filter((e) => e.category === filterCategory);

  const active = filteredExperiences[activeIndex] || filteredExperiences[0] || experiences[0];
  const timelineRef = useRef<HTMLDivElement>(null);

  const shouldPause = isPaused || isHovered || isCardClicked || isExpanded || !!activeCertModal;

  const handleUpdateHeight = useCallback(() => {
    if (swiper) {
      setTimeout(() => {
        if (typeof swiper.updateAutoHeight === "function") swiper.updateAutoHeight();
        if (typeof swiper.update === "function") swiper.update();
      }, 50);
    }
  }, [swiper]);

  useEffect(() => {
    setActiveIndex(0);
    setIsExpanded(false);
    setIsCardClicked(false);
  }, [filterCategory]);

  useEffect(() => {
    if (swiper && swiper.activeIndex !== activeIndex) {
      swiper.slideTo(activeIndex);
    }
  }, [activeIndex, swiper]);

  // Handle autoplay start / stop dynamically
  useEffect(() => {
    if (swiper && swiper.autoplay) {
      if (shouldPause) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
    }
  }, [shouldPause, swiper]);

  // Document click listener to unselect / resume auto movement when clicking outside section
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const section = document.getElementById("experience");
      if (section && !section.contains(e.target as Node)) {
        setIsCardClicked(false);
        setIsHovered(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    if (swiper) {
      const timer = setTimeout(() => {
        swiper.updateAutoHeight();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, swiper, isExpanded, filterCategory]);

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
  }, [activeIndex, filterCategory]);

  const scrollTimeline = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      timelineRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleSelectRole = (index: number) => {
    setActiveIndex(index);
    setIsCardClicked(true);
  };

  return (
    <section 
      className="career-journey" 
      id="experience" 
      aria-labelledby="career-heading"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsCardClicked(false);
      }}
    >
      <header className="career-journey-header">
        <p>Professional Journey</p>
        <h2 id="career-heading">Legal Career &amp; Experience</h2>
        <span>Select any role to view highlights.</span>

        {/* Category Filters: LEGAL ASSOCIATE vs INTERNSHIP */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "1rem", flexWrap: "wrap" }}>
          {(["ALL", "Legal Associate", "Internship"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setFilterCategory(cat);
                setIsCardClicked(true);
              }}
              style={{
                background: filterCategory === cat ? "#B89A5A" : "rgba(255, 255, 255, 0.05)",
                color: filterCategory === cat ? "#000" : "#D4AD62",
                border: "1px solid #B89A5A",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "0.82rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s ease",
                letterSpacing: "0.05em"
              }}
            >
              {cat === "ALL" ? "ALL ROLES" : cat === "Legal Associate" ? "LEGAL ASSOCIATE (2)" : "INTERNSHIPS (7)"}
            </button>
          ))}
        </div>
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
          onClick={() => {
            scrollTimeline("left");
            setIsCardClicked(true);
          }}
          aria-label="Scroll timeline left"
        >
          ‹
        </button>

        <div className="career-timeline" ref={timelineRef} aria-label="Work experience timeline">
          {filteredExperiences.map((experience, index) => (
            <div className="career-timeline-item" key={`${experience.organisation}-${experience.role}-${index}`}>
              <button
                type="button"
                className={`career-card ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleSelectRole(index)}
                aria-pressed={index === activeIndex}
              >
                <span className="career-year">
                  {experience.displayYear || experience.year}
                  <small style={{ 
                    display: "inline-block", 
                    marginLeft: "6px", 
                    color: experience.category === "Legal Associate" ? "#B89A5A" : "#a49c91",
                    fontWeight: 700 
                  }}>
                    • {experience.category}
                  </small>
                </span>
                <strong>{experience.organisation}</strong>
                <small>{experience.role}</small>
              </button>
              {index < filteredExperiences.length - 1 && <LuArrowRight className="career-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="timeline-nav-btn next"
          onClick={() => {
            scrollTimeline("right");
            setIsCardClicked(true);
          }}
          aria-label="Scroll timeline right"
        >
          ›
        </button>
      </div>

      {/* Professional Expandable Detail Box */}
      <Swiper
        modules={[Autoplay]}
        autoplay={shouldPause ? false : { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        onSwiper={setSwiper}
        onSlideChange={(s) => {
          setActiveIndex(s.activeIndex);
          setTimeout(() => {
            if (typeof s.updateAutoHeight === "function") s.updateAutoHeight();
            if (typeof s.update === "function") s.update();
          }, 100);
        }}
        className="career-swiper"
        observer={true}
        observeParents={true}
        autoHeight={true}
      >
        {filteredExperiences.map((exp, idx) => (
          <SwiperSlide key={`slide-${exp.organisation}-${idx}`}>
            <CareerDetailCard 
              active={exp} 
              setActiveCertModal={setActiveCertModal} 
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              onHeightChange={handleUpdateHeight}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Certificate Modal Lightbox */}
      {activeCertModal && (
        <div className="career-cert-modal" onClick={() => setActiveCertModal(null)} role="dialog" aria-label="Experience Certificate Modal">
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
                alt="Experience Certificate"
                width={800}
                height={600}
                unoptimized
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <figcaption style={{ color: "var(--gold-light)", textAlign: "center", marginTop: "1rem", fontSize: "0.85rem" }}>
                Official {active.category === "Legal Associate" ? "Legal Associate Work Experience Certificate" : "Internship Certificate"} — {active.organisation}
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </section>
  );
}
