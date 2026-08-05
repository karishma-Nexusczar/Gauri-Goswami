import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaBalanceScale, FaBookOpen, FaCertificate, FaGlobeAmericas,
  FaGraduationCap, FaGavel, FaLandmark, FaQuoteLeft,
  FaTheaterMasks, FaUniversity, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube,
} from "react-icons/fa";
import styles from "./academics.module.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = { title: "Academics | Gauri Goswami", description: "Academic journey, scholarship and teaching experience." };

const expertise = [
  [FaBalanceScale, "Constitutional Law", "Analysing legal frameworks and constitutional interpretations."],
  [FaGlobeAmericas, "Legal Research", "Conducting in-depth research and producing impactful legal insights."],
  [FaGavel, "Human Rights", "Advocating for justice, equity and protection of fundamental rights."],
  [FaLandmark, "Cultural Studies", "Exploring the intersection of culture, heritage and law."],
  [FaGraduationCap, "Higher Education", "Committed to academic excellence and knowledge sharing."],
];
const certificates = ["International Human Rights Law", "Advanced Negotiation Legal Research", "Teaching & Learning in Higher Education", "Intellectual Property Law"];
const gallery = ["portfolio-slide-01.png", "portfolio-slide-02.png", "portfolio-slide-03.png", "portfolio-slide-05.png", "portfolio-slide-08.png"];
const galleryLoop = [...gallery, ...gallery];

export default function AcademicsPage() { return <main className={styles.page}>
  <section className={styles.hero}><Navbar currentPath="/academics" /><div className={styles.heroInner}><div className={styles.heroCopy}><h1>Academics</h1><p className={styles.goldLine}>Knowledge. Research. Excellence.</p><p>Dedicated to excellence in legal education, interdisciplinary research, and inspiring future generations through academic leadership.</p><a href="#timeline" className={styles.primary}>Explore my academic journey</a></div><div className={styles.heroPhoto}><Image src="/academics-hero-sofa.png" alt="Gauri Goswami seated in an academic setting" fill priority sizes="(max-width: 800px) 100vw, 54vw" /></div></div></section>

  <section className={styles.portfolio}><div className={styles.dancer}><Image src="/personal-portfolio-kathak.png" alt="Gauri performing Kathak" fill sizes="260px" /></div><div className={styles.journey}><h2>Personal portfolio journey</h2><em>A Life in Motion. A Mind in Pursuit.</em><p>From the rhythm of Kathak to the rigour of law, from classrooms to conference halls, my journey is a blend of art, intellect and purpose.</p></div><div className={styles.personas}>{[[FaTheaterMasks,"Artist","Kathak is my soul, my expression, my identity."],[FaBookOpen,"Scholar","Knowledge empowers me to create impact."],[FaUniversity,"Leader","Leadership is my commitment to serve society."],[FaGlobeAmericas,"Explorer","Travel broadens my perspective and creativity."]].map(([Icon,title,text])=>{const I=Icon as typeof FaBookOpen;return <article key={title as string}><I/><h3>{title as string}</h3><p>{text as string}</p></article>})}</div></section>

  <section className={styles.stats}><div><FaTheaterMasks/><b>50+</b><span>Live Performances</span></div><div><FaUniversity/><b>20+</b><span>Cultural Festivals</span></div><div><FaTheaterMasks/><b>15+</b><span>Choreographed Productions</span></div><div><FaCertificate/><b>10+</b><span>Prestigious Venues</span></div><blockquote><FaQuoteLeft/>Where rhythm meets reason,<br />and grace meets purpose.</blockquote></section>

  <section className={styles.timeline} id="timeline"><h2>Academic journey timeline</h2><div className={styles.timelineLine}>{[["2013",FaGraduationCap,"LL.B.","University of Delhi", "India"],["2015",FaBookOpen,"LL.M.","University of Delhi", "India"],["2017",FaGlobeAmericas,"International Studies","Short Term Programme", "The Hague Academy, Netherlands"],["2020",FaCertificate,"Research & Scholarship","Focus on Legal Research", "and Interdisciplinary Areas"],["Present",FaUniversity,"Academic Leadership","Mentoring, Teaching &", "Shaping Future Leaders"]].map(([year,Icon,title,a,b])=>{const I=Icon as typeof FaBookOpen;return <article key={year as string}><b>{year as string}</b><span><I/></span><h3>{title as string}</h3><p>{a as string}<br />{b as string}</p></article>})}</div></section>

  <section className={styles.expertise}><h2>Areas of expertise</h2><div>{expertise.map(([Icon,title,text])=>{const I=Icon as typeof FaBookOpen;return <article key={title as string}><I/><h3>{title as string}</h3><p>{text as string}</p></article>})}</div></section>

  <section className={styles.columns}><article className={styles.research}><div><h2>Research & publications</h2><p><FaBookOpen/> Research Areas: Constitutional Law, Human Rights, Cultural Heritage Law, Women Empowerment.</p><p><FaBookOpen/> Published papers in national & international journals.</p><p><FaBookOpen/> Presented research at global conferences.</p><div><a href="#publications" className={styles.darkButton}>Read publications</a><a href="#publications" className={styles.lightButton}>Research profile</a></div></div><Image src="/portfolio-slide-06.png" alt="Books" fill sizes="50vw" /></article><article className={styles.teaching}><div><h2>Teaching experience</h2><p><FaBookOpen/><b>Guest Lecturer</b>Delivered guest lectures at reputed institutions.</p><p><FaBookOpen/><b>Faculty</b>Teaching law subjects at undergraduate and postgraduate levels.</p><p><FaBookOpen/><b>Research Mentor</b>Guided students in legal research and academic writing.</p><p><FaBookOpen/><b>Academic Advisor</b>Advising students on academic and career pathways.</p></div><Image src="/portfolio-slide-08.png" alt="Academic study" fill sizes="50vw" /></article></section>

  <section className={styles.showcase} id="publications"><article><Image src="/portfolio-slide-04.png" alt="Women and law publication" fill sizes="180px" /></article><div><h2>Publications showcase</h2><h3>Women and Law in India: Emerging Perspectives</h3><p>An in-depth exploration of the evolving legal framework for women&apos;s rights in India and the challenges of implementation.</p><small>2022 | Published by LexisNexis</small></div><ul><li>Access to Justice and Human Rights in India<br /><small>Journal of Legal Studies | 2021</small></li><li>Constitutional Morality and Democracy Values<br /><small>Indian Law Review | 2020</small></li><li>Cultural Heritage and Intellectual Property Rights<br /><small>International Journal of Law | 2019</small></li></ul><div className={styles.certWrap}><h2>Certifications</h2><div className={styles.certs}>{certificates.map((name,i)=><article key={name}><small>{name}</small><p>{i===0?"University of Oxford":i===1?"Harvard Law School":"University of London"}</p><b>{2018+i}</b><FaCertificate/></article>)}</div></div></section>

  <section className={styles.gallery}><h2>Academic gallery</h2><div className={styles.galleryViewport}><div className={styles.galleryTrack}>{galleryLoop.map((file,i)=><figure key={`${file}-${i}`}><Image src={`/${file}`} alt={`Academic moment ${(i % gallery.length) + 1}`} fill sizes="(max-width: 700px) 78vw, 320px" /></figure>)}</div></div></section>
  <section className={styles.cta}><h2>Let’s advance knowledge together</h2><p>Collaborating through education, legal scholarship, interdisciplinary research,<br />and academic leadership to create meaningful impact.</p><a className={styles.primary} href="mailto:info@gaurigoswami.com">Academic collaboration</a><a className={styles.outline} href="#publications">View publications</a></section>
  <footer className={styles.footer}>
    <div className={styles.footerBrand}>
      <Link href="/"><Image src="/brand-logo.png" alt="Gauri Goswami" width={96} height={96}/></Link>
      <p>Gauri Goswami is a Barrister, Academic, Kathak Artist, Researcher, and Traveller.</p>
      <div className={styles.socials} aria-label="Social media links"><a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="#" aria-label="Instagram"><FaInstagram /></a><a href="#" aria-label="Facebook"><FaFacebookF /></a><a href="#" aria-label="YouTube"><FaYoutube /></a></div>
    </div>
    <div><h3>Quick links</h3><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/academics">Academics</Link><Link href="/#career">Professional Career</Link><Link href="/#kathak">Kathak &amp; Dance</Link><Link href="/#research">Research &amp; Publications</Link><Link href="/#contact">Contact</Link></div>
    <div><h3>Resources</h3><Link href="/#gallery">Awards</Link><Link href="/#travel">Travel</Link><Link href="/gallery">Gallery</Link><Link href="/#blog">Blog</Link><Link href="/#events">Events</Link><Link href="/#kathak">Testimonials</Link><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a><a href="#">Cookie Policy</a><a href="#">Disclaimer</a></div>
    <div><h3>Get in touch</h3><a href="mailto:info@gaurigoswami.com">info@gaurigoswami.com</a><a href="tel:+447587338945">+44 7587 338945 · United Kingdom</a><a href="https://wa.me/919876543210">WhatsApp</a><p>New Delhi, India</p></div>
    <div className={styles.copyright}>© 2026 Gauri Goswami. All Rights Reserved.<span>www.gaurigoswami.com</span></div>
  </footer>
</main> }
