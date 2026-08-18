"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export interface GalleryPhoto {
  id: string;
  category: "Law" | "Academics" | "Kathak" | "Research" | "Awards" | "Culture" | "Travel" | "Media" | "Fashion" | "Community" | "Networking";
  title: string;
  subtitle: string;
  location: string;
  date: string;
  modalDate?: string;
  description: string;
  modalDescription?: string;
  image: string;
  aspect: "square" | "landscape" | "portrait" | "tall" | "wide";
  collection?: string;
}

const allGalleryPhotos: GalleryPhoto[] = [
  {
    id: "mc_1",
    category: "Awards",
    title: "Miss Congeniality",
    subtitle: "Beauty Pageant: The Runway Look Book at the annual fest of NLU, Assam",
    location: "Guwahati, Assam",
    date: "2023",
    description: "Crowning of Miss Congeniality at the Beauty Pageant: The Runway Look Book at the annual fest of NLU, Assam.",
    image: "/miss-congeniality-sash.png",
    aspect: "tall",
    collection: "miss_congeniality_collection"
  },
  {
    id: "mc_2",
    category: "Fashion",
    title: "ADUJ-ABHIVEERA, 2023",
    subtitle: "Cultural and Sports Fest of NLU, Assam",
    location: "Guwahati, Assam",
    date: "2023",
    description: "Stage performance during the ADUJ-ABHIVEERA, 2023 Cultural and Sports Fest of NLU, Assam.",
    image: "/abhiveera-group-stage.png",
    aspect: "landscape",
    collection: "miss_congeniality_collection"
  },
  {
    id: "mc_3",
    category: "Fashion",
    title: "Top 10 Finalist",
    subtitle: "Beauty Pageant: Runway LookBook of NLU, Assam",
    location: "Guwahati, Assam",
    date: "2023",
    description: "Top 10 finalist of the Beauty Pageant: Runway LookBook of NLU, Assam.",
    image: "/top-10-finalist-walk.png",
    aspect: "tall",
    collection: "miss_congeniality_collection"
  },
  {
    id: "mc_4",
    category: "Fashion",
    title: "Best Dancer Title",
    subtitle: "National Law University and Judicial Academy, Assam",
    location: "Guwahati, Assam",
    date: "2024",
    description: "Received the title 'Best Dancer' at the farewell event (National Law University and Judicial Academy, Assam).",
    image: "/best-dancer-sash-black-dress.png",
    aspect: "tall",
    collection: "miss_congeniality_collection"
  },
  {
    id: "mc_5",
    category: "Academics",
    title: "Early Careers Advice Team",
    subtitle: "High Pavement College Outreach",
    location: "Nottingham, UK",
    date: "2024",
    description: "Working with the Early Careers Advice Team.",
    image: "/early-careers-advice-team.png",
    aspect: "tall",
    collection: "miss_congeniality_collection"
  },
  {
    id: "li_1",
    category: "Law",
    title: "The Honourable Society of Lincoln’s Inn",
    subtitle: "The Great Hall",
    location: "London, UK",
    date: "2024",
    description: "Portrait at the historic Great Hall of The Honourable Society of Lincoln’s Inn, London.",
    image: "/lincolns-inn-red-sofa-portrait.png",
    aspect: "tall",
    collection: "lincolns_inn_collection"
  },
  {
    id: "li_2",
    category: "Law",
    title: "The Honourable Society of Gray’s Inn",
    subtitle: "London",
    location: "London, UK",
    date: "2024",
    description: "The Honourable Society of Gray’s Inn.",
    image: "/grays-inn-group.png",
    aspect: "tall",
    collection: "lincolns_inn_collection"
  },
  {
    id: "li_3",
    category: "Law",
    title: "Annual Mentorship Event",
    subtitle: "University of Nottingham Bar Society",
    location: "Nottingham, UK",
    date: "2024",
    description: "Participating in the Annual Mentorship Program at the East Midlands Centre, Nottingham, engaging with esteemed barristers. It was an invaluable experience.",
    image: "/mentorship-event-bar-society.png",
    aspect: "landscape",
    collection: "lincolns_inn_collection"
  },
  {
    id: "li_4",
    category: "Law",
    title: "The Great Hall",
    subtitle: "The Honourable Society of Lincoln’s Inn",
    location: "London, UK",
    date: "2024",
    description: "The Great Hall at The Honourable Society of Lincoln’s Inn.",
    image: "/great-hall-lincolns-inn.png",
    aspect: "tall",
    collection: "lincolns_inn_collection"
  },
  {
    id: "li_5",
    category: "Academics",
    title: "Campus Tours (Welcome Week)",
    subtitle: "International Student Ambassador",
    location: "University of Nottingham",
    date: "2024",
    description: "Leading campus tours as an International Student Ambassador during Welcome Week.",
    image: "/campus-tours-welcome-week.png",
    aspect: "landscape",
    collection: "lincolns_inn_collection"
  },
  {
    id: "na_1",
    category: "Academics",
    title: "School of Law, University of Nottingham",
    subtitle: "45th World ranking for Law and 6th in the UK for Law",
    location: "Nottingham, UK",
    date: "2024",
    description: "The historic Trent Building and School of Law at the University of Nottingham, consistently ranked among the top global institutions for legal studies.",
    image: "/nottingham-trent-building.png",
    aspect: "tall",
    collection: "nottingham_award"
  },
  {
    id: "na_2",
    category: "Awards",
    title: "South Asia Postgraduate Excellence Award",
    subtitle: "University of Nottingham",
    location: "Nottingham, UK",
    date: "November 2024",
    description: "Official certificate for the South Asia Postgraduate Excellence Award presented to Gauri Goswami by the University of Nottingham.",
    image: "/nottingham-south-asia-excellence-certificate.png",
    aspect: "tall",
    collection: "nottingham_award"
  },
  {
    id: "na_3",
    category: "Academics",
    title: "Last Day of Energy Law Class",
    subtitle: "Dr. Marianthi Pappa",
    location: "University of Nottingham, UK",
    date: "2024",
    description: "Last day of Energy Law class with Dr. Marianthi Pappa, an Associate Professor in Law specializing in International Law of the Sea and Energy Law at the University of Nottingham.",
    image: "/nottingham-energy-law-class.png",
    aspect: "landscape",
    collection: "nottingham_award"
  },
  {
    id: "na_4",
    category: "Culture",
    title: "Felicitation for Folk Dance Performance",
    subtitle: "Scholarship Event",
    location: "Great Hall, Trent Building",
    date: "2024",
    description: "Felicitation for an excellent folk dance performance at the Scholarship Event at Great Hall, Trent Building, University of Nottingham.",
    image: "/nottingham-folk-dance-felicitation.png",
    aspect: "tall",
    collection: "nottingham_award"
  },
  {
    id: "na_5",
    category: "Culture",
    title: "Folk Dance Performance",
    subtitle: "Great Hall, Trent Building",
    location: "University of Nottingham",
    date: "2024",
    description: "Folk Dance Performance at Great Hall, Trent Building, University of Nottingham.",
    image: "/nottingham-folk-dance-performance.png",
    aspect: "tall",
    collection: "nottingham_award"
  },
  {
    id: "na_6",
    category: "Awards",
    title: "South Asia Postgraduate Excellence Award",
    subtitle: "Scholars Group Photograph",
    location: "University of Nottingham",
    date: "2024",
    description: "South Asia Postgraduate Excellence Award group photograph on stage.",
    image: "/nottingham-south-asia-excellence-group-vertical.png",
    aspect: "tall",
    collection: "nottingham_award"
  },
  {
    id: "na_7",
    category: "Awards",
    title: "International Scholarship Celebration Event",
    subtitle: "2024-25",
    location: "University of Nottingham",
    date: "2024",
    description: "International Scholarship Celebration Event, 2024-25 at the University of Nottingham.",
    image: "/nottingham-international-scholarship-celebration-group.png",
    aspect: "landscape",
    collection: "nottingham_award"
  },
  {
    id: "na_8",
    category: "Academics",
    title: "Human Rights Law Centre Annual Lecture",
    subtitle: "Intersectionality and Climate Change",
    location: "University of Nottingham, UK",
    date: "2024",
    description: "Attending the Human Rights Law Centre Annual Lecture on the intersectionality and human rights implications of climate change.",
    image: "/nottingham-human-rights-lecture.png",
    aspect: "portrait",
    collection: "nottingham_award"
  },
  {
    id: "na_9",
    category: "Academics",
    title: "University of Nottingham Bar Society",
    subtitle: "Annual Mentorship Dinner Setup",
    location: "Nottingham, UK",
    date: "2024",
    description: "Table setting for Gauri Goswami at the University of Nottingham Bar Society Annual Mentorship Dinner.",
    image: "/nottingham-bar-society-name-card.png",
    aspect: "portrait",
    collection: "nottingham_award"
  },
  {
    id: "na_10",
    category: "Academics",
    title: "Annual Mentorship Dinner",
    subtitle: "University of Nottingham Bar Society",
    location: "Nottingham, UK",
    date: "2024",
    description: "Gauri Goswami at the Annual Mentorship Dinner hosted by the University of Nottingham Bar Society.",
    image: "/nottingham-mentorship-dinner.png",
    aspect: "portrait",
    collection: "nottingham_award"
  },
  {
    id: "f_dior_sunglasses",
    category: "Fashion",
    title: "Editorial Sunglasses Portrait",
    subtitle: "Street Style & High Fashion",
    location: "London, UK",
    date: "2025",
    description: "Outdoor editorial portrait featuring Dior sunglasses and winter styling in London.",
    image: "/fashion-dior-sunglasses.jpg",
    aspect: "portrait"
  },
  {
    id: "f_grey_shirt",
    category: "Fashion",
    title: "Studio Editorial Portrait",
    subtitle: "Contemporary Minimalist Fashion",
    location: "Nottingham, United Kingdom",
    date: "2025",
    description: "Close-up portrait showcasing minimalist contemporary styling.",
    image: "/fashion-grey-shirt-portrait.jpg",
    aspect: "portrait"
  },
  {
    id: "f_blue_apron",
    category: "Community",
    title: "Nottingham UK Volunteer Event",
    subtitle: "Community Volunteering & Cultural Engagement",
    location: "Nottingham, United Kingdom",
    date: "2025",
    description: "Gauri Goswami participating as a volunteer in a community event in Nottingham, United Kingdom, supporting community engagement and cultural initiatives.",
    image: "/fashion-blue-apron-outdoor.jpg",
    aspect: "portrait"
  },
  {
    id: "f1",
    category: "Fashion",
    title: "Traditional Mekhela Chador Photoshoot",
    subtitle: "Traditional Assamese Editorial",
    location: "Assam, India",
    date: "2023",
    description: "Traditional Assamese silk Mekhela Chador fashion photoshoot featuring Gauri Goswami.",
    image: "/ps_1.jpg",
    aspect: "portrait"
  },
  {
    id: "f2",
    category: "Fashion",
    title: "NISA'S Fashion Studio Photoshoot",
    subtitle: "Fashion Studio Portfolio",
    location: "Assam, India",
    date: "2023",
    description: "Professional studio fashion photoshoot assignment for NISA'S Fashion Studio.",
    image: "/ps_2.jpg",
    aspect: "portrait"
  },
  {
    id: "f3",
    category: "Fashion",
    title: "Group Editorial Photoshoot",
    subtitle: "Fashion & Style Editorial",
    location: "Assam, India",
    date: "2023",
    description: "Group editorial fashion photoshoot featuring Gauri Goswami and Nisa Sarma.",
    image: "/ps_3.jpg",
    aspect: "portrait"
  },
  {
    id: "p16",
    category: "Law",
    title: "Law Scholars Waterfront Excursion",
    subtitle: "LL.M. Academic Cohort Gathering",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Legal practice scholars and LL.M. international academic cohort gathering along the UK waterfront during an academic retreat.",
    image: "/legal-practice-riverside-cohort.jpg",
    aspect: "landscape"
  },
  {
    id: "p1",
    category: "Law",
    title: "Legal Practice & Academic Cohort",
    subtitle: "National Law University & Judicial Academy",
    location: "Guwahati / Delhi, India",
    date: "2023–Present",
    description: "National Law University & Judicial Academy legal scholar cohort group photograph and academic honour presentation.",
    image: "/legal-practice-cohort-group.jpg",
    aspect: "landscape"
  },
  {
    id: "p1_2",
    category: "Law",
    title: "Legal Scholar & Counsel",
    subtitle: "Commercial Legal Research & Practice",
    location: "New Delhi / London",
    date: "2024–Present",
    description: "Counsel portrait representing commercial legal research, litigation, and scholarly work in law libraries.",
    image: "/legal-scholar-law-library.jpg",
    aspect: "portrait"
  },
  {
    id: "p7",
    category: "Networking",
    title: "Networking Dinner at Lincoln’s Inn",
    subtitle: "Professional Networking & Engagement",
    location: "The Honourable Society of Lincoln’s Inn, London",
    date: "Lincoln’s Inn",
    modalDate: "Event",
    description: "A distinguished networking dinner at Lincoln’s Inn, bringing together legal professionals and distinguished guests for meaningful conversations, professional engagement, and relationship-building.",
    modalDescription: "A distinguished professional gathering at one of London’s historic legal institutions, centred on meaningful connections, conversation, and professional engagement.",
    image: "/delhi-high-court-red-blazer.png",
    aspect: "tall"
  },
  {
    id: "p14",
    category: "Law",
    title: "School of Law Arched Hallway",
    subtitle: "Faculty of Law & Academic Chambers",
    location: "University of Nottingham, UK",
    date: "2024–2025",
    description: "Historic School of Law corridor at the University of Nottingham connecting law lecture halls, moot courts, and commercial law research suites.",
    image: "/legal-practice-school-of-law-corridor.jpg",
    aspect: "tall"
  },
  {
    id: "p15",
    category: "Law",
    title: "International Commercial Law Seminar",
    subtitle: "LL.M. Legal Practice & Seminar Cohort",
    location: "University of Nottingham, UK",
    date: "2024–2025",
    description: "LL.M. International Commercial Law scholars and legal researchers gathered in the law faculty interactive seminar room.",
    image: "/legal-practice-nottingham-seminar.jpg",
    aspect: "landscape"
  },
  {
    id: "p17",
    category: "Law",
    title: "Legal Cohort Cultural Exchange",
    subtitle: "Campus Life & Student Advisory",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Legal cohort members and international postgraduate law scholars participating in campus engagement and cultural exchange events.",
    image: "/legal-practice-cohort-outdoor-event.jpg",
    aspect: "landscape"
  },
  {
    id: "r4",
    category: "Law",
    title: "Gothic Vaulted Law Hall",
    subtitle: "Historic Faculty Chambers & Library",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Historic gothic vaulted hall and arched ceilings connecting academic law chambers and research archives.",
    image: "/research-gothic-vaulted-library-hall.jpg",
    aspect: "tall"
  },
  {
    id: "a2",
    category: "Academics",
    title: "University Scholars Recognition",
    subtitle: "University of Nottingham Presentation",
    location: "Nottingham, United Kingdom",
    date: "2024–2025",
    description: "Official presentation of the University of Nottingham insignia tote bag to Gauri Goswami for academic engagement.",
    image: "/academics-nottingham-gift-presentation.jpg",
    aspect: "tall"
  },
  {
    id: "a5",
    category: "Academics",
    title: "Faculty Grand Library Reception",
    subtitle: "Academic & Legal Research Forum",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Academic scholars and legal researchers gathering at the historic university library fireplace room during a faculty reception.",
    image: "/academics-library-fireplace-reception.jpg",
    aspect: "tall"
  },
  {
    id: "a6",
    category: "Academics",
    title: "School of Law Trent Building",
    subtitle: "University of Nottingham Widescreen Campus",
    location: "Nottingham, United Kingdom",
    date: "2024–2025",
    description: "The grand Trent Building at the University of Nottingham campus housing the Faculty of Social Sciences and School of Law.",
    image: "/nottingham-school-of-law-trent-building.jpg",
    aspect: "landscape"
  },
  {
    id: "a7",
    category: "Academics",
    title: "LL.M. Masters Reflections & Experience",
    subtitle: "University of Nottingham Postgraduate Studies",
    location: "Nottingham, United Kingdom",
    date: "2024–2025",
    description: "Academic research reflections by Gauri Goswami on LL.M. International Commercial Law studies at Nottingham.",
    image: "/nottingham-masters-experience-reflections.jpg",
    aspect: "landscape"
  },
  {
    id: "a8",
    category: "Academics",
    title: "NLUJA Assam Gate & Campus Entrance",
    subtitle: "National Law University & Judicial Academy",
    location: "Guwahati, Assam, India",
    date: "2018–2023",
    description: "Main entrance gate and green campus courtyard of National Law University and Judicial Academy, Assam.",
    image: "/nlu-assam-gate-entrance.jpg",
    aspect: "landscape"
  },
  {
    id: "a9",
    category: "Academics",
    title: "B.A., LL.B. (Hons.) Degree Certificate",
    subtitle: "National Law University Graduation",
    location: "Guwahati, Assam, India",
    date: "2023",
    description: "Official Degree Certificate for B.A., LL.B. (Hons.) awarded by National Law University & Judicial Academy, Assam.",
    image: "/nlu-assam-ballb-honours-degree-certificate.jpg",
    aspect: "tall"
  },
  {
    id: "a10",
    category: "Academics",
    title: "B.A., LL.B. Consolidated Marksheet",
    subtitle: "NLUJA Academic Distinction",
    location: "Guwahati, Assam, India",
    date: "2023",
    description: "Official 5-Year Consolidated Marksheet reflecting Academic First Class Honours at NLUJA Assam.",
    image: "/nlu-assam-ballb-consolidated-marksheet.jpg",
    aspect: "tall"
  },
  {
    id: "a11",
    category: "Academics",
    title: "Legal Awareness Campaign Stage",
    subtitle: "Saraighat College Outreach",
    location: "Changsari, Kamrup, Assam",
    date: "2022",
    description: "Gauri Goswami presenting on legal rights and women empowerment at Saraighat College Legal Awareness Drive.",
    image: "/nlu-assam-saraighat-college-legal-awareness-stage.jpg",
    aspect: "landscape"
  },
  {
    id: "a12",
    category: "Academics",
    title: "Legal Aid & Lok Adalat Delegation",
    subtitle: "NLUJA Legal Aid Committee",
    location: "Rangia, Assam, India",
    date: "2022",
    description: "NLUJA Assam student legal aid delegation arriving for field survey and conciliation assistance.",
    image: "/nlu-assam-lok-adalat-rangia-bus-group.jpg",
    aspect: "landscape"
  },
  {
    id: "a17",
    category: "Academics",
    title: "NLUJA Provisional Degree Certificate",
    subtitle: "National Law University & Judicial Academy",
    location: "Guwahati, Assam, India",
    date: "2023",
    description: "Official Provisional Degree Certificate for B.A., LL.B. (Hons.) graduation from NLUJA Assam.",
    image: "/nlu-assam-provisional-certificate.png",
    aspect: "tall"
  },
  {
    id: "a18",
    category: "Academics",
    title: "University Trent Campus Widescreen View",
    subtitle: "University of Nottingham Library & Lake",
    location: "Nottingham, United Kingdom",
    date: "2024–2025",
    description: "Widescreen view of the historic Trent Building lake and grounds at the University of Nottingham.",
    image: "/academics-trent-wide-bg.jpg",
    aspect: "landscape"
  },
  {
    id: "a19",
    category: "Academics",
    title: "School of Law Lecture Theatre",
    subtitle: "International Commercial Law Forum",
    location: "University of Nottingham, UK",
    date: "2024–2025",
    description: "Interactive lecture theatre and academic discussion suite at the University of Nottingham School of Law.",
    image: "/academics-law-hall.jpg",
    aspect: "landscape"
  },
  {
    id: "r0",
    category: "Academics",
    title: "University Law Library Archives",
    subtitle: "Multi-Level Legal Research Complex",
    location: "University of Nottingham, UK",
    date: "2024–2025",
    description: "The grand multi-level Law Library and research archives at the University of Nottingham housing international commercial law collections.",
    image: "/research-multilevel-law-library.jpg",
    aspect: "tall"
  },
  {
    id: "r2",
    category: "Academics",
    title: "Oxford Bodleian Library Research",
    subtitle: "Radcliffe Camera Legal Studies",
    location: "University of Oxford, UK",
    date: "2024–2025",
    description: "Gauri Goswami at Radcliffe Camera, University of Oxford Bodleian Library during commercial law academic research.",
    image: "/research-oxford-radcliffe-camera.png",
    aspect: "tall"
  },
  {
    id: "r3",
    category: "Academics",
    title: "Academic & Legal Research Dialogue",
    subtitle: "Scholarly Collaboration & Exchange",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Gauri Goswami collaborating with fellow postgraduate legal researchers during academic symposium proceedings.",
    image: "/research-academic-scholars-dialogue.jpg",
    aspect: "portrait"
  },
  {
    id: "r5",
    category: "Academics",
    title: "Cathedral Spire Academic Forum",
    subtitle: "International Legal Research",
    location: "United Kingdom",
    date: "2024–2025",
    description: "Gauri Goswami participating in international legal research symposium events in historic UK academic settings.",
    image: "/research-cathedral-spire-portrait.jpg",
    aspect: "tall"
  },
  {
    id: "k_pure2",
    category: "Kathak",
    title: "Kathak Classical Mudra Studio Portrait",
    subtitle: "More Than Dance — Introduction",
    location: "Section 2 — Introduction",
    date: "Kathak Sadhana",
    description: "Classical Kathak mudra studio photograph depicting poise, discipline, and artistic devotion.",
    image: "/kathak-intro-cream-pose.jpg",
    aspect: "tall"
  },
  {
    id: "k_pure3",
    category: "Kathak",
    title: "Kathak Red Spin Motion Pose",
    subtitle: "Classical Artwork & Motion",
    location: "Section 2 — Introduction",
    date: "Kathak Art",
    description: "Dynamic classical spin artwork capturing the rhythm and fluidity of Kathak movement.",
    image: "/kathak-spin-watermark-processed.png",
    aspect: "tall"
  },
  {
    id: "k_pure4",
    category: "Kathak",
    title: "Artistic Journey Solo Recital",
    subtitle: "A Journey in Rhythm & Grace",
    location: "Section 3 — Artistic Journey",
    date: "Kathak Recital",
    description: "Solo stage performance of Gauri Goswami in traditional red and gold silk attire capturing graceful mudra poses.",
    image: "/artistic-journey-stage-left.jpg",
    aspect: "tall"
  },
  {
    id: "k_pure5",
    category: "Kathak",
    title: "Childhood First Ghungroos",
    subtitle: "Age 5 Beginning of Kathak Sadhana",
    location: "Section 3 — The Artist's Journey",
    date: "2004",
    description: "Memories of beginning Kathak training at age 5 with first Ghungroos and learning initial bols — 'Ta Thei Thei Tat'.",
    image: "/card-childhood.jpg",
    aspect: "square"
  },
  {
    id: "k_pure7",
    category: "Kathak",
    title: "Pure Classical Kathak Recitals Repertoire",
    subtitle: "TeenTaal, Tukdas, Parans & Abhinaya",
    location: "Section 3 — The Artist's Journey",
    date: "2015–2018",
    description: "Repertoire of pure classical Kathak recitals showcasing TeenTaal, Tukdas, Parans and expressive Abhinaya.",
    image: "/card-recitals.jpg",
    aspect: "landscape"
  },
  {
    id: "k_pure8_black_gold",
    category: "Kathak",
    title: "Performance Journey — Black & Gold Silk Kathak Recital",
    subtitle: "Performing Tradition Across Borders",
    location: "Section 7 — Performance Journey",
    date: "Stage Recital",
    description: "Stage recital capturing footwork speed, grace, and classical chakkars in traditional black & gold silk attire.",
    image: "/kathak-black-gold-hero.png",
    aspect: "tall"
  },
  {
    id: "k_pure9",
    category: "Kathak",
    title: "Performance Journey — Cream & Red Pose",
    subtitle: "Abhinaya & Expressive Storytelling",
    location: "Section 7 — Performance Journey",
    date: "Stage Recital",
    description: "Stage portrait showcasing classical hand mudras and expressive facial bhav.",
    image: "/pj-2.jpg",
    aspect: "tall"
  },
  {
    id: "k_pure10",
    category: "Kathak",
    title: "Performance Journey — Teal Recital Pose",
    subtitle: "Grace & Precision in Motion",
    location: "Section 7 — Performance Journey",
    date: "Stage Recital",
    description: "Full stage presentation demonstrating rhythmic poise in vibrant teal attire.",
    image: "/pj-3.jpg",
    aspect: "tall"
  },
  {
    id: "k_pure_seated_saree",
    category: "Kathak",
    title: "Seated Classical Kathak Portrait",
    subtitle: "Traditional Silk Saree & Heritage Jewelry",
    location: "Kathak Attire & Cultural Heritage",
    date: "Classical Cultural Showcase",
    description: "Graceful portrait of Gauri in traditional silk saree, embellished with traditional neckpieces, maang tikka, gajra, and bronze cuffs.",
    image: "/kathak-seated-saree-portrait.jpg",
    aspect: "tall"
  },
  {
    id: "k_guidance_mentorship_portrait",
    category: "Kathak",
    title: "Performance & Artistic Guidance — Classical Mentorship",
    subtitle: "Kathak Sadhana with Live Tabla & Harmonium Exponents",
    location: "Classical Kathak Mentorship & Training",
    date: "Childhood & Onwards",
    description: "Gauri in classical Kathak Anarkali attire depicting Kathak Sadhana and guidance under Shri Bipul Das, Smt. Moromi Medhi & Megharanjani Medhi.",
    image: "/kathak-red-classical-pose.jpg",
    aspect: "tall"
  },
  {
    id: "k_pure11",
    category: "Kathak",
    title: "Authentic Kathak Ghungroo Close-Up",
    subtitle: "The Sound of Kathak — Ankle Bells & Alta",
    location: "Section 10 — Ghungroo Feature",
    date: "The Sound of Kathak",
    description: "Close-up of traditional brass ghungroos tied around dancer's ankles with red Alta marks.",
    image: "/ghungroo-close-up.jpg",
    aspect: "square"
  },
  {
    id: "c1",
    category: "Culture",
    title: "Asam Sahitya Sabha Stage Recital",
    subtitle: "Traditional Folk & Classical Dance",
    location: "London, United Kingdom",
    date: "2024",
    description: "Classical Assamese folk and classical dance performance on stage in front of the Asam Sahitya Sabha UK banner in London.",
    image: "/culture-asam-sahitya-sabha-stage-recital.jpg",
    aspect: "landscape"
  },
  {
    id: "c2",
    category: "Culture",
    title: "NLU Assam Foundation Day Recital",
    subtitle: "National Law University & Judicial Academy",
    location: "Guwahati, Assam, India",
    date: "Sept 2022",
    description: "Traditional dance performance on stage celebrating Foundation Day at National Law University & Judicial Academy, Assam.",
    image: "/culture-nlu-assam-foundation-day-dance.jpg",
    aspect: "landscape"
  },
  {
    id: "c3",
    category: "Culture",
    title: "London Rongali Bihu Hall Showcase",
    subtitle: "Assamese Silk & Heritage Dress",
    location: "London, United Kingdom",
    date: "2026",
    description: "Gauri Goswami standing gracefully in traditional Assamese Mekhela Chador at the London Rongali Bihu 2026 hall venue.",
    image: "/culture-london-rongali-bihu-hall.jpg",
    aspect: "portrait"
  },
  {
    id: "c4",
    category: "Culture",
    title: "Backstage Dance Troupe Group",
    subtitle: "Traditional Costumes & Ornaments",
    location: "London, United Kingdom",
    date: "2024",
    description: "Backstage group photograph of Gauri Goswami with fellow classical performers wearing traditional head ornaments and costumes.",
    image: "/culture-backstage-dance-troupe-group.jpg",
    aspect: "landscape"
  },
  {
    id: "c5",
    category: "Culture",
    title: "London Rongali Bihu Delegates",
    subtitle: "Cultural Ambassadors & Elders",
    location: "London, United Kingdom",
    date: "2026",
    description: "Gauri Goswami with senior cultural delegates and community leaders at the London Rongali Bihu celebration.",
    image: "/culture-london-rongali-bihu-delegates.jpg",
    aspect: "portrait"
  },
  {
    id: "c6",
    category: "Culture",
    title: "North East Festival London Poster",
    subtitle: "Official Cultural Ambassador Graphic",
    location: "London, United Kingdom",
    date: "2024",
    description: "Official poster graphic for North East Festival London featuring Gauri Goswami in traditional Assamese silk Mekhela Chador.",
    image: "/culture-northeast-festival-official-poster.jpg",
    aspect: "landscape"
  },
  {
    id: "c7",
    category: "Culture",
    title: "North-East India Cultural Circuit",
    subtitle: "Heritage & Dance Artistry Banner",
    location: "London / Assam",
    date: "2024",
    description: "Official North-East India Cultural Circuit presentation banner celebrating regional dance, music, and heritage.",
    image: "/culture-northeast-circuit-banner.jpg",
    aspect: "landscape"
  },
  {
    id: "c8",
    category: "Culture",
    title: "United Colours of North East India",
    subtitle: "Indian Gymkhana Club Stage Showcase",
    location: "Indian Gymkhana Club, London",
    date: "2024",
    description: "Live stage recital and cultural presentation in traditional silk attire at United Colours of North East India, Indian Gymkhana Club, London.",
    image: "/culture-high-commission-loktak-presentation.jpg",
    aspect: "portrait"
  },
  {
    id: "c9",
    category: "Culture",
    title: "London Rongali Bihu 2026 Poster",
    subtitle: "Featured Performer Artwork",
    location: "London, United Kingdom",
    date: "2026",
    description: "Official London Rongali Bihu 2026 poster banner artwork highlighting Gauri Goswami's feature performance.",
    image: "/culture-london-rongali-bihu-poster-banner.jpg",
    aspect: "landscape"
  },
  {
    id: "c10",
    category: "Culture",
    title: "Indian Cultural Heritage Mandala",
    subtitle: "Sacred Art & Classical Dance Emblem",
    location: "India / UK",
    date: "2024",
    description: "Intricate Indian cultural heritage mandala wheel illustrating classical dance forms, temple architecture, and traditional arts.",
    image: "/culture-indian-heritage-mandala-emblem.jpg",
    aspect: "square"
  },
  {
    id: "p5",
    category: "Culture",
    title: "United Colours of North East India",
    subtitle: "Indian Gymkhana Club, London",
    location: "Indian Gymkhana Club, London",
    date: "2024",
    description: "Cultural presentation and stage recital at United Colours of North East India, Indian Gymkhana Club, London.",
    image: "/high-commission-loktak.jpg",
    aspect: "tall"
  },
  {
    id: "aw5",
    category: "Awards",
    title: "Bhatkhande Kathak Visharad Degree",
    subtitle: "6-Year Classical Dance Graduation",
    location: "Bhatkhande Sangit Vidyapith, Lucknow",
    date: "2020",
    description: "Official Visharad Degree Certificate in Classical Kathak Dance from Bhatkhande Sangit Vidyapith with Distinction.",
    image: "/bhatkhande-visharad-kathak-certificate.png",
    aspect: "landscape"
  },
  {
    id: "aw7",
    category: "Awards",
    title: "Pandit Birju Maharaj Masterclass Certificate",
    subtitle: "Legendary Kathak Guru Workshop",
    location: "India",
    date: "2018",
    description: "Masterclass Kathak Workshop certificate under Legendary Guru Padma Vibhushan Pandit Birju Maharaj and Vidushi Saswati Sen.",
    image: "/birju-maharaj-saswati-sen-kathak-workshop-certificate.png",
    aspect: "landscape"
  },
  {
    id: "aw8",
    category: "Awards",
    title: "UK Assamese Cultural Felicitation Honor",
    subtitle: "Asam Sahitya Sabha UK Recognition",
    location: "London, United Kingdom",
    date: "2024",
    description: "Felicitation honor awarded to Gauri Goswami for promoting Assamese cultural heritage and classical Kathak in the UK.",
    image: "/nottingham-felicitation-folk-dance-performance.jpg",
    aspect: "landscape"
  },
  {
    id: "aw9",
    category: "Awards",
    title: "Lok Adalat Certificate of Merit",
    subtitle: "State Legal Services Authority",
    location: "Kamrup Metro, Assam",
    date: "2022",
    description: "Certificate of Appreciation for conciliation work and public legal assistance at National Lok Adalat.",
    image: "/nlu-assam-lok-adalat-declaration-certificate.png",
    aspect: "landscape"
  }
];

const timelineNodes = [
  { year: "2019", title: "Consulta Juris", desc: "Commercial & Corporate Legal Internship", id: "p11" },
  { year: "2020", title: "Gauhati High Court", desc: "Writ Litigation & High Court Practice", id: "p7" },
  { year: "2022", title: "N. Unni Krishnan Chambers", desc: "Commercial Disputes & Advisory", id: "p1" },
  { year: "2023", title: "Delhi High Court", desc: "Litigation Practice & Court Appearances", id: "p7" },
  { year: "2023", title: "Supreme Court", desc: "Special Leave Petitions & Appellate Research", id: "p11" },
  { year: "2023", title: "DLSA Kamrup Metro", desc: "Pro Bono & Access to Justice Advocacy", id: "p1" },
  { year: "2023–Present", title: "Singhania & Associates", desc: "Corporate Legal Associate & Dispute Advisory", id: "p7" },
  { year: "2025", title: "South Asia Excellence Award", desc: "University of Nottingham Postgraduate Scholarship", id: "p3" },
  { year: "2026", title: "University of Nottingham", desc: "LL.M. International Commercial Law", id: "p2" },
  { year: "2026", title: "International Performances", desc: "London Cultural Diplomacy & Stage Recitals", id: "p4" }
];

const verifiedEventsRow1 = [
  {
    role: "FEATURED PERFORMER",
    title: "London Rongali Bihu 2026",
    location: "📍 London, United Kingdom",
    summary: "Featured performer at London's premier Rongali Bihu celebration, representing Assamese culture before an international audience.",
    image: "/london-rongali-bihu-2026-cover.jpg",
    cat: "Kathak"
  },
  {
    role: "CULTURAL AMBASSADOR",
    title: "North East Festival London",
    location: "📍 London, United Kingdom",
    summary: "Represented Northeast India's rich cultural heritage through traditional Assamese dance performances.",
    image: "/northeast-festival-london-official-banner.jpg",
    cat: "Culture"
  },
  {
    role: "CULTURAL PERFORMANCE",
    title: "United Colours of North East India",
    location: "📍 Indian Gymkhana Club, London",
    summary: "Participated in cultural programmes celebrating Indian heritage at United Colours of North East India, Indian Gymkhana Club, London.",
    image: "/high-commission-loktak-stage-full.jpg",
    cat: "Culture"
  }
];

const verifiedEventsRow2 = [
  {
    role: "CULTURAL REPRESENTATION",
    title: "University of Nottingham",
    location: "📍 Nottingham, United Kingdom",
    summary: "Participated in university cultural initiatives promoting Indian traditions within an international academic environment.",
    image: "/nottingham-scholarship-stage-group.jpg",
    cat: "Academics"
  },
  {
    role: "CULTURAL PERFORMANCE",
    title: "Assam Sahitya Sabha (Shankar Jayanti)",
    location: "📍 Kings Langley, Hertfordshire, United Kingdom",
    summary: "Performed at the Assam Sahitya Sabha UK celebration of Shankar Jayanti, showcasing traditional Assamese dance and promoting cultural heritage.",
    image: "/assam-sahitya-sabha-shankar-jayanti-poster.png",
    posterImage: "/assam-sahitya-sabha-shankar-jayanti-poster.png",
    cat: "Culture"
  }
];

const allVerifiedEvents = [
  ...verifiedEventsRow1,
  ...verifiedEventsRow2
];

const videoCards = [
  { 
    id: "v1",
    title: "National Law University & Judicial Academy\nADUJ x ABHIVEERA 2023 || NLU Assam", 
    label: "ADUJ x ABHIVEERA 2023", 
    duration: "YouTube", 
    image: "https://img.youtube.com/vi/hXfBr71eY7o/maxresdefault.jpg",
    youtubeId: "hXfBr71eY7o",
    youtubeUrl: "https://youtu.be/hXfBr71eY7o",
    videoUrl: "",
    external: true,
    alt: "ADUJ x ABHIVEERA 2023 at National Law University & Judicial Academy, Assam",
    ariaLabel: "Watch ADUJ x ABHIVEERA 2023 on YouTube"
  },
  {
    id: "v3",
    title: "United Colours of North East India Stage Recital",
    label: "Live Stage Performance • London Showcase",
    duration: "Live Recital",
    image: "/united-colours-northeast-stage-cover.jpg",
    youtubeId: "",
    youtubeUrl: "",
    videoUrl: "/videos/united-colours-northeast-stage-recital.mp4",
    external: false,
    alt: "United Colours of North East India Stage Recital — Live Stage Performance London Showcase",
    ariaLabel: "Play United Colours of North East India Stage Recital video"
  },
  {
    id: "v4",
    title: "ABHIVEERA 2023 || NLU Assam Fashion Recital",
    label: "Live Stage Performance",
    duration: "Live Recital",
    image: "/abhiveera-fashion-video-cover.jpg",
    youtubeId: "",
    youtubeUrl: "",
    videoUrl: "/last-walk-video.mp4",
    external: false,
    alt: "",
    ariaLabel: ""
  }
];

export default function EditorialGalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);
  const [showAllCategories, setShowAllCategories] = useState<boolean>(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof videoCards[0] | null>(null);
  const [isFullVideoLightbox, setIsFullVideoLightbox] = useState<boolean>(false);
  const eventsSwiperRef = useRef<any>(null);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullVideoLightbox) {
          setIsFullVideoLightbox(false);
        } else if (selectedVideo) {
          setSelectedVideo(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullVideoLightbox, selectedVideo]);

  const heroSlideImages = [
    "/hero-slide-1-kathak.jpg",
    "/hero-slide-2-culture.jpg",
    "/hero-slide-3-campus.jpg"
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState<number>(0);

  // Automatic Left-to-Right background slide transition every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlideImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlideImages.length]);

  const filteredPhotos = activeFilter === "All" 
    ? allGalleryPhotos 
    : allGalleryPhotos.filter(p => p.category === activeFilter);

  const visiblePhotos = showAllPhotos ? filteredPhotos : filteredPhotos.slice(0, 8);

  const modalPhotos = activeCollection 
    ? allGalleryPhotos.filter(p => p.collection === activeCollection)
    : filteredPhotos;

  const currentPhoto = selectedPhotoIndex !== null ? modalPhotos[selectedPhotoIndex] : null;

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
        setActiveCollection(null);
      }
      if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % modalPhotos.length : null));
      }
      if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + modalPhotos.length) % modalPhotos.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, modalPhotos.length]);

  return (
    <div className="editorial-gallery-page">
      <Navbar currentPath="/gallery" />

      {/* SECTION 1 — PREMIUM CINEMATIC GALLERY HERO */}
      <section className="ed-gallery-hero-widescreen" id="top">
        {/* Widescreen Background Banner Image */}
        <div className="ed-hero-widescreen-bg">
          <Image
            src="/gallery-hero-banner.jpg"
            alt="Gauri Goswami Kathak Performance Widescreen Banner"
            fill
            priority
            quality={100}
            className="ed-widescreen-bg-img"
            unoptimized
          />
          <div className="ed-hero-red-dark-overlay" />
        </div>

        <div className="ed-container ed-hero-layout-container">
          <div className="ed-hero-text-area">
            <span className="ed-hero-small-label">VISUAL PORTFOLIO</span>
            <h1 className="ed-hero-main-title">Gallery</h1>
            <div className="ed-hero-divider-ornament">
              <span className="ed-divider-line" />
              <span className="ed-divider-symbol">❦</span>
              <span className="ed-divider-line" />
            </div>
            <p className="ed-hero-description-text">
              A visual journey through law, scholarship,<br />
              Kathak, international performances,<br />
              cultural diplomacy, and professional milestones.
            </p>
            <div className="ed-hero-cta-wrap">
              <a href="#featured" className="ed-btn-gold">
                Explore Collections <span className="ed-btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — GALLERY INTRODUCTION (STEP 2: TEXT | STATIC CAMERA | AUTO SLIDER) */}
      <section className="ed-gallery-intro-step2" id="featured">
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 900px) {
            .ed-intro-step2-grid {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              gap: 2.2rem !important;
              width: 100% !important;
              overflow: hidden !important;
            }
            .ed-intro-step2-left {
              width: 100% !important;
              max-width: 100% !important;
              text-align: center !important;
              flex: none !important;
            }
            .ed-camera-illustration-wrapper {
              display: none !important;
            }
            .ed-auto-slider-container {
              width: 100% !important;
              max-width: 320px !important;
              flex: none !important;
              margin: 0 auto !important;
            }
            .ed-auto-slide-frame {
              height: 220px !important;
            }
          }
        `}} />
        <div id="moments" />
        <div className="ed-container">
          <div className="ed-intro-step2-grid">
            <div className="ed-intro-step2-left">
              <span className="ed-section-tag-gold">GALLERY</span>
              <h2 className="ed-intro-step2-title">Moments That Define My Journey</h2>
              <div className="ed-intro-small-divider" />
              <p className="ed-intro-step2-text">
                Every photograph reflects a chapter of my journey—from courtrooms and legal scholarship to international stages, cultural diplomacy and academic excellence.
              </p>
            </div>

            {/* Static Camera Illustration (Unchanged) */}
            <div className="ed-camera-illustration-wrapper">
              <Image
                src="/gallery-camera-illustration.png"
                alt="Vintage Camera Illustration"
                width={360}
                height={260}
                className="ed-camera-img"
                priority
                unoptimized
              />
            </div>

            {/* New Automatic Image Slider (Immediately on Camera's Right Side) */}
            <div className="ed-auto-slider-container">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                speed={800}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                pagination={{ clickable: true, el: ".ed-auto-slider-pagination" }}
                className="ed-auto-swiper"
              >
                {[
                  { src: "/supreme-court-advocate-internship-certificate-2023.png", alt: "Supreme Court Advocate Internship Certificate 2023" },
                  { src: "/nlu-assam-lachit-diwas-certificate-2019.png", alt: "Lachit Diwas Certificate of Merit NLUJA Assam" },
                  { src: "/birju-maharaj-saswati-sen-kathak-workshop-certificate.png", alt: "Kathak Dance Workshop Pt. Birju Maharaj Certificate" },
                  { src: "/north-bengal-moot-court-certificate-2020.png", alt: "National Moot Court Competition Certificate" },
                  { src: "/nlu-assam-mediation-tournament-certificate-2018.png", alt: "1st Luitor Paror Intra-University Mediation Tournament Certificate NLUJA Assam" },
                  { src: "/nlu-assam-asian-parliamentary-debate-probatio-2019.png", alt: "PROBATIO Asian Parliamentary Debate Certificate NLUJA Assam" },
                  { src: "/gauhati-music-college-kathak-certificate.png", alt: "Gauhati Music College Kathak Dance Certificate" },
                  { src: "/bhatkhande-kathak-prathama-marksheet-2011.png", alt: "Bhatkhande Sangit Vidyapith Kathak Prathama Certificate" },
                  { src: "/bhatkhande-kathak-visharad-degree-marksheet-2016.png", alt: "Bhatkhande Sangit Vidyapith Kathak Visharad II Certificate" }
                ].map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div 
                      className="ed-auto-slide-frame"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (swiperInstance && swiperInstance.autoplay) {
                          swiperInstance.autoplay.stop();
                        }
                        setSelectedCertImage(item.src);
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="ed-auto-slide-img contain-fit"
                        unoptimized
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="ed-auto-slider-pagination" />
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN CERTIFICATE POPUP PREVIEW LIGHTBOX */}
      {selectedCertImage && (
        <div
          className="ed-lightbox-backdrop"
          onClick={() => {
            setSelectedCertImage(null);
            if (swiperInstance && swiperInstance.autoplay) {
              swiperInstance.autoplay.start();
            }
          }}
          role="dialog"
          aria-modal="true"
          style={{ zIndex: 99999 }}
        >
          <div 
            className="ed-lightbox-content" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "92vw", width: "950px", background: "#0d0b09", padding: "1.5rem", borderRadius: "16px", border: "1px solid #D4AD62" }}
          >
            <button
              type="button"
              className="ed-lightbox-close"
              onClick={() => {
                setSelectedCertImage(null);
                if (swiperInstance && swiperInstance.autoplay) {
                  swiperInstance.autoplay.start();
                }
              }}
            >
              ✕
            </button>

            <div style={{ position: "relative", width: "100%", height: "82vh", minHeight: "450px" }}>
              <Image
                src={selectedCertImage}
                alt="Full Size Certificate Preview"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3 — FEATURED COLLECTION (STEP 3) */}
      <section className="ed-featured-collection-step3">
        <div className="ed-container">
          <div className="ed-section-header">
            <span className="ed-section-tag-gold">FEATURED COLLECTION</span>
            <h2>Curated Highlights</h2>
          </div>

          <div className="ed-showcase-grid-step3">
            {/* Left Large Featured Card */}
            <div className="ed-showcase-large-card" onClick={() => setSelectedPhotoIndex(3)}>
              <Image
                src="/cultural-heritage-london-stage.jpg"
                alt="Cultural Heritage Stage Presentation London"
                fill
                quality={100}
                className="ed-showcase-large-img"
                unoptimized
              />
              <div className="ed-showcase-card-overlay">
                <span className="ed-showcase-tag">FEATURED</span>
                <h3>Cultural Representation</h3>
                <p>United Colours of North East India • Cultural Performance</p>
                <button type="button" className="ed-showcase-sm-btn">VIEW COLLECTION →</button>
              </div>
            </div>

            {/* Right Side Square Cards Grid */}
            <div className="ed-showcase-square-stack">
              <div 
                className="ed-showcase-sq-card" 
                onClick={() => {
                  setActiveCollection("nottingham_award");
                  setSelectedPhotoIndex(0); // Opens modal with just this collection
                }}
              >
                <Image
                  src="/academics-postgraduate-excellence-ceremony.jpg"
                  alt="University of Nottingham Postgraduate Excellence"
                  fill
                  quality={100}
                  className="ed-showcase-sq-img"
                  unoptimized
                />
                <div className="ed-showcase-sm-overlay">
                  <h4>University of Nottingham</h4>
                  <p>Nottingham Advantage Award</p>
                </div>
              </div>

              <div 
                className="ed-showcase-sq-card" 
                onClick={() => {
                  setActiveCollection("lincolns_inn_collection");
                  setSelectedPhotoIndex(0);
                }}
              >
                <Image
                  src="/the-honourable-society-of-lincolns-inn-london.jpg"
                  alt="The Honourable Society of Lincoln's Inn"
                  fill
                  quality={100}
                  className="ed-showcase-sq-img portrait-pos"
                  unoptimized
                />
                <div className="ed-showcase-sm-overlay">
                  <h4>Lincoln&apos;s Inn</h4>
                  <p>The Great Hall • London</p>
                </div>
              </div>

              <div 
                className="ed-showcase-sq-card wide-sq" 
                onClick={() => {
                  setActiveCollection("miss_congeniality_collection");
                  setSelectedPhotoIndex(0);
                }}
              >
                <Image
                  src="/miss-congeniality-sash.png"
                  alt="Miss Congeniality"
                  fill
                  quality={100}
                  className="ed-showcase-sq-img award-pos"
                  unoptimized
                />
                <div className="ed-showcase-sm-overlay">
                  <h4>Miss Congeniality</h4>
                  <p>Beauty Pageant: The Runway Look Book at the annual fest of NLU, Assam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — FASHION & MODELLING IMAGES */}
      <section
        id="fashion-modelling"
        style={{
          background: "linear-gradient(180deg, #0A0A0A 0%, #0F0E0D 50%, #0A0A0A 100%)",
          color: "#FCFBF8",
          padding: "45px 24px",
          borderTop: "1px solid rgba(212, 173, 98, 0.25)",
          borderBottom: "1px solid rgba(212, 173, 98, 0.25)",
          fontFamily: "var(--font-sans), sans-serif",
        }}
      >
        <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span style={{ color: "#D4AD62", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
              STYLE &bull; CONFIDENCE &bull; EXPRESSION
            </span>
            <h2 style={{ fontFamily: "var(--font-serif), Playfair Display, Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 600, color: "#E2C382", letterSpacing: "0.08em", margin: "0 0 8px 0", textTransform: "uppercase" }}>
              FASHION &amp; MODELLING IMAGES
            </h2>
            <p style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.05rem", fontStyle: "italic", color: "#D4D0C8", margin: 0 }}>
              &ldquo;Every frame tells a story; make yours unforgettable.&rdquo;
            </p>
          </div>

          <div className="ed-fashion-grid">
            {[
              {
                src: "/ps_1.jpg",
                title: "Traditional Mekhela Chador Photoshoot — Gauri Goswami",
                tag: "Traditional Editorial",
                pos: "top center",
              },
              {
                src: "/ps_2.jpg",
                title: "NISA'S Fashion Studio Photoshoot — Gauri Goswami",
                tag: "Fashion Studio",
                pos: "center",
              },
              {
                src: "/ps_3.jpg",
                title: "Group Editorial Photoshoot — Gauri Goswami & Nisa Sarma",
                tag: "Group Editorial",
                pos: "top center",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.025)",
                  border: "1px solid rgba(212, 173, 98, 0.35)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setActiveFilter("Fashion");
                  setShowAllPhotos(true);
                  const foundIdx = filteredPhotos.findIndex(p => p.image === card.src);
                  if (foundIdx !== -1) setSelectedPhotoIndex(foundIdx);
                  else setSelectedPhotoIndex(idx);
                }}
              >
                <div style={{ position: "relative", height: "320px", width: "100%", background: "#080808" }}>
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: card.pos }}
                    unoptimized
                  />
                </div>
                <div style={{ padding: "16px", borderTop: "1px solid rgba(212, 173, 98, 0.2)" }}>
                  <span style={{ color: "#D4AD62", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                    {card.tag}
                  </span>
                  <h4 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "0.98rem", color: "#FCFBF8", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                    {card.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — EXPLORE COLLECTIONS (CATEGORY CARDS) */}
      <section className="ed-categories-section">
        <div className="ed-container">
          <div className="ed-section-header center">
            <span className="ed-section-tag">CURATED ARCHIVES</span>
            <h2>Explore Collections</h2>
          </div>

          <div className="ed-category-grid">
            {(() => {
              const allCategories = [
                { title: "Legal Practice", count: "8 Photos", img: "/legal-practice-riverside-cohort.jpg", cat: "Law" },
                { title: "Academic Excellence", count: "20 Photos", img: "/academics-scholarship-celebration-stage.jpg", cat: "Academics" },
                { title: "Fashion & Modelling", count: "8 Photos", img: "/fashion-modelling-collection-cover.jpg", cat: "Fashion" },
                { title: "Kathak Performances", count: "11 Photos", img: "/kathak-lawn-classical-pose.jpg", cat: "Kathak" },
                { title: "Cultural Diplomacy", count: "10 Photos", img: "/cultural-heritage-london-stage.jpg", cat: "Culture" }
              ];
              const visibleCategories = showAllCategories ? allCategories : allCategories.slice(0, 4);
              return visibleCategories.map((c, i) => (
                <div 
                  key={i} 
                  className={`ed-cat-card cat-${c.cat.toLowerCase()}`}
                  onClick={() => {
                    setActiveFilter(c.cat);
                    setSelectedPhotoIndex(0);
                  }}
                >
                  <div className="ed-cat-img-frame">
                    <Image src={c.img} alt={c.title} fill quality={90} unoptimized />
                  </div>
                  <div className="ed-cat-info">
                    <h3>{c.title}</h3>
                    <span>{c.count}</span>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* View All Collections Toggle Button */}
          {!showAllCategories && (
            <div className="ed-view-all-wrap">
              <button
                type="button"
                className="ed-btn-gold ed-view-all-btn"
                onClick={() => setShowAllCategories(true)}
              >
                View All <span className="ed-btn-arrow">↓</span>
              </button>
            </div>
          )}
          {showAllCategories && (
            <div className="ed-view-all-wrap">
              <button
                type="button"
                className="ed-btn-outline ed-view-all-btn"
                onClick={() => setShowAllCategories(false)}
              >
                Show Less <span className="ed-btn-arrow">↑</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5 — CAREER TIMELINE */}
      <section className="ed-timeline-section">
        <div className="ed-container">
          <div className="ed-section-header">
            <span className="ed-section-tag">CHRONOLOGICAL MILESTONES</span>
            <h2>Career &amp; Academic Timeline</h2>
          </div>

          <div className="ed-timeline-track">
            {timelineNodes.map((node, index) => (
              <div 
                key={index} 
                className="ed-timeline-node"
                onClick={() => {
                  const foundIdx = filteredPhotos.findIndex(p => p.id === node.id);
                  if (foundIdx !== -1) setSelectedPhotoIndex(foundIdx);
                  else setSelectedPhotoIndex(0);
                }}
              >
                <div className="ed-node-dot" />
                <span className="ed-node-year">{node.year}</span>
                <h4>{node.title}</h4>
                <p>{node.desc}</p>
                <span className="ed-node-link">View Photos →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — GLOBAL EVENTS & CULTURAL ENGAGEMENT */}
      <section className="ed-events-section" id="global-events">
        <div className="ed-container">
          <div className="ed-section-header">
            <span className="ed-section-tag">GLOBAL EVENTS &amp; CULTURAL ENGAGEMENT</span>
            <h2>Representing Indian Culture Across International Platforms</h2>
            <p className="ed-section-subdesc">
              From prestigious cultural festivals and diplomatic events to academic institutions and international forums, Gauri Goswami has proudly represented the rich cultural heritage of Assam and India through classical and folk dance performances, cultural exchange, and community engagement.
            </p>
          </div>

          {/* Side Nav Carousel Wrapper with Left & Right Arrow Buttons */}
          <div className="ed-events-carousel-relative-wrap">
            <button
              type="button"
              className="ed-slider-arrow-btn side-arrow prev-arrow"
              onClick={() => eventsSwiperRef.current?.slidePrev()}
              aria-label="Previous event"
            >
              ‹
            </button>

            <div className="ed-events-carousel-viewport" style={{ overflow: "hidden" }}>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                  eventsSwiperRef.current = swiper;
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  }
                }}
                className="events-slider-swiper"
              >
                {allVerifiedEvents.map((ev, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className="ed-event-card"
                      style={{ margin: "0 auto", width: "100%", minHeight: "380px", display: "flex", flexDirection: "column" }}
                      onClick={() => {
                        setActiveFilter(ev.cat);
                        setSelectedPhotoIndex(0);
                      }}
                    >
                      <div className="ed-event-img-wrap" style={{ position: "relative", width: "100%", height: "200px" }}>
                        <Image src={ev.image} alt={ev.title} fill quality={90} unoptimized />
                      </div>
                      <div className="ed-event-body" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                          <span className="ed-event-role">{ev.role}</span>
                          <h3 style={{ fontSize: "1.1rem", lineHeight: "1.3", margin: "4px 0 6px" }}>{ev.title}</h3>
                          <p className="ed-event-loc">{ev.location}</p>
                          <p className="ed-event-summary">{ev.summary}</p>
                        </div>
                        <span className="ed-event-link" style={{ marginTop: "auto" }}>View Event →</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button
              type="button"
              className="ed-slider-arrow-btn side-arrow next-arrow"
              onClick={() => eventsSwiperRef.current?.slideNext()}
              aria-label="Next event"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — YOUTUBE VIDEO GALLERY */}
      <section className="ed-video-section" id="videos">
        <div className="ed-container">
          <div className="ed-section-header center">
            <span className="ed-section-tag">YOUTUBE &amp; LIVE PERFORMANCES</span>
            <h2>Video Gallery Highlights</h2>
          </div>

          <div className="ed-video-grid">
            {videoCards.map((v) => {
              const altText = v.alt || v.title.replace(/\n/g, " — ");
              const ariaLabel = v.ariaLabel || `Watch ${v.title.replace(/\n/g, " — ")}`;
              const isExternal = Boolean(v.external || (v.youtubeUrl && !v.videoUrl));

              if (isExternal) {
                return (
                  <a 
                    key={v.id} 
                    href={v.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ed-video-card"
                    aria-label={ariaLabel}
                  >
                    <div className="ed-video-thumb">
                      <Image 
                        src={v.image} 
                        alt={altText} 
                        fill 
                        quality={90} 
                        unoptimized 
                        style={{ objectFit: "cover" }}
                      />
                      <div className="ed-play-overlay">
                        <div className="ed-play-btn" aria-hidden="true">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0D0B09">
                            <polygon points="6,3 20,12 6,21" />
                          </svg>
                        </div>
                      </div>
                      <span className="ed-video-badge">
                        <svg width="14" height="10" viewBox="0 0 24 17" fill="#FF0000" style={{ marginRight: '5px' }}>
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                          <polygon points="9.545,15.568 15.818,12 9.545,8.432" fill="#FFFFFF" />
                        </svg>
                        YouTube ↗
                      </span>
                    </div>
                    <div className="ed-video-info">
                      <span className="ed-video-label">{v.label}</span>
                      <h3 style={{ whiteSpace: "pre-line" }}>{v.title}</h3>
                      <div className="ed-video-watch-link">Watch Video ▶</div>
                    </div>
                  </a>
                );
              }

              return (
                <div 
                  key={v.id} 
                  className="ed-video-card"
                  tabIndex={0}
                  role="button"
                  aria-label={`Play ${v.title.replace(/\n/g, " — ")}`}
                  onClick={() => setSelectedVideo(v)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedVideo(v);
                    }
                  }}
                >
                  <div className="ed-video-thumb">
                    <Image 
                      src={v.image} 
                      alt={altText} 
                      fill 
                      quality={90} 
                      unoptimized 
                      style={{ objectFit: "cover" }}
                    />
                    <div className="ed-play-overlay">
                      <div className="ed-play-btn" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0D0B09">
                          <polygon points="6,3 20,12 6,21" />
                        </svg>
                      </div>
                    </div>
                    <span className="ed-video-badge">
                      {v.videoUrl ? (
                        <>🎥 Live Recital • {v.duration}</>
                      ) : (
                        <>
                          <svg width="14" height="10" viewBox="0 0 24 17" fill="#FF0000" style={{ marginRight: '5px' }}>
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                            <polygon points="9.545,15.568 15.818,12 9.545,8.432" fill="#FFFFFF" />
                          </svg>
                          YouTube • {v.duration}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="ed-video-info">
                    <span className="ed-video-label">{v.label}</span>
                    <h3 style={{ whiteSpace: "pre-line" }}>{v.title}</h3>
                    <div className="ed-video-watch-link">Watch Video ▶</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* YOUTUBE / LIVE VIDEO PLAYER MODAL OVERLAY */}
      {selectedVideo && (
        <div className="ed-video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="ed-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="ed-video-modal-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close Video Modal"
            >
              ✕
            </button>

            <div className="ed-video-modal-player-wrap">
              {selectedVideo.videoUrl ? (
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "12px", objectFit: "contain", background: "#000000" }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="ed-youtube-iframe"
                />
              )}
            </div>

            <div className="ed-video-modal-details">
              <div>
                <span className="ed-video-label">{selectedVideo.label}</span>
                <h3>{selectedVideo.title}</h3>
              </div>
              {selectedVideo.youtubeUrl ? (
                <a 
                  href={selectedVideo.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ed-btn-gold ed-youtube-external-btn"
                >
                  Watch on YouTube ↗
                </a>
              ) : (
                <button 
                  type="button"
                  className="ed-btn-gold ed-youtube-external-btn"
                  onClick={() => setIsFullVideoLightbox(true)}
                  aria-label="Open Fullscreen Video"
                >
                  Open Full Video ↗
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX VIDEO MODAL */}
      {isFullVideoLightbox && selectedVideo && (
        <div 
          className="ed-video-fullscreen-overlay" 
          onClick={() => setIsFullVideoLightbox(false)}
        >
          <button 
            type="button" 
            className="ed-video-fullscreen-close"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullVideoLightbox(false);
            }}
            aria-label="Close Fullscreen Video"
          >
            ✕
          </button>

          <div 
            className="ed-video-fullscreen-wrap" 
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo.videoUrl}
              controls
              autoPlay
              playsInline
              preload="metadata"
              style={{ maxHeight: "85vh", maxWidth: "92vw", width: "auto", height: "auto", objectFit: "contain", borderRadius: "16px" }}
            >
              Your browser does not support the video element.
            </video>
          </div>
        </div>
      )}

      {/* SECTION 8 — MASONRY PHOTO WALL */}
      <section className="ed-masonry-section">
        <div className="ed-container">
          <div className="ed-section-header center">
            <span className="ed-section-tag">FULL VISUAL ARCHIVE</span>
            <h2>Moments That Define My Journey</h2>
          </div>

          {/* Filter Tabs */}
          <div className="ed-filter-tabs">
            {["All", "Fashion", "Law", "Networking", "Academics", "Kathak", "Culture", "Awards"].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`ed-tab-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => {
                  setActiveFilter(cat);
                  setShowAllPhotos(false);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="ed-masonry-grid">
            {visiblePhotos.map((photo, index) => {
              const realIndex = filteredPhotos.findIndex((p) => p.id === photo.id);
              return (
                <div
                  key={photo.id}
                  className={`ed-masonry-item ${photo.aspect}`}
                  onClick={() => setSelectedPhotoIndex(realIndex !== -1 ? realIndex : index)}
                >
                  <div className="ed-masonry-img-frame">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      quality={90}
                      className="ed-masonry-img"
                      unoptimized
                    />
                    <div className="ed-masonry-overlay">
                      <div className="ed-zoom-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                      <span className="ed-masonry-tag">{photo.category}</span>
                      <h4>{photo.title}</h4>
                      <p>{photo.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Images Toggle Button */}
          {!showAllPhotos && filteredPhotos.length > 8 && (
            <div className="ed-view-all-wrap">
              <button
                type="button"
                className="ed-btn-gold ed-view-all-btn"
                onClick={() => setShowAllPhotos(true)}
              >
                View All Images ({filteredPhotos.length}) <span className="ed-btn-arrow">↓</span>
              </button>
            </div>
          )}
          {showAllPhotos && filteredPhotos.length > 8 && (
            <div className="ed-view-all-wrap">
              <button
                type="button"
                className="ed-btn-outline ed-view-all-btn"
                onClick={() => setShowAllPhotos(false)}
              >
                Show Less <span className="ed-btn-arrow">↑</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 9 — FULLSCREEN LIGHTBOX POPUP */}
      {currentPhoto && selectedPhotoIndex !== null && (
        <div
          className="ed-lightbox-backdrop"
          onClick={() => { setSelectedPhotoIndex(null); setActiveCollection(null); }}
          role="dialog"
          aria-modal="true"
        >
          <div className="ed-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ed-lightbox-close"
              onClick={() => { setSelectedPhotoIndex(null); setActiveCollection(null); }}
            >
              ✕
            </button>

            <div className="ed-lightbox-main">
              <div className="ed-lightbox-img-box">
                {/* Prev / Next Controls inside image box for perfect centering */}
                <button
                  type="button"
                  className="ed-lightbox-nav prev"
                  onClick={() => setSelectedPhotoIndex((selectedPhotoIndex - 1 + modalPhotos.length) % modalPhotos.length)}
                >
                  ‹
                </button>

                <button
                  type="button"
                  className="ed-lightbox-nav next"
                  onClick={() => setSelectedPhotoIndex((selectedPhotoIndex + 1) % modalPhotos.length)}
                >
                  ›
                </button>

                <Image
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  fill
                  quality={95}
                  className="ed-lightbox-img"
                  unoptimized
                />
              </div>

              <div className="ed-lightbox-details">
                <span className="ed-lb-cat">{currentPhoto.category} • {currentPhoto.modalDate || currentPhoto.date}</span>
                <h2 className="ed-lb-title">{currentPhoto.title}</h2>
                <h3 className="ed-lb-sub">{currentPhoto.subtitle}</h3>
                <p className="ed-lb-loc">📍 {currentPhoto.location}</p>
                <p className="ed-lb-desc">{currentPhoto.modalDescription || currentPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 10 — COLLABORATION CTA & CONTACT */}
      <section className="contact-cta" id="contact">
        <div>
          <p className="section-kicker">Let&apos;s Connect</p>
          <h2>Let&apos;s Build Meaningful Connections</h2>
          <p>Whether you&apos;re seeking legal collaboration, academic engagement, research partnerships, Kathak performances, cultural events, workshops, or speaking sessions, I welcome opportunities to connect, collaborate, and create meaningful experiences.</p>
          <a 
            className="gold-button" 
            href="mailto:info@gaurigoswami.in?subject=Inquiry%20%26%20Collaboration%20—%20Gauri%20Goswami&body=Hello%20Gauri%20Goswami%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20regarding%20a%20collaboration%20%2F%20inquiry.%0A%0AName%3A%0AOrganization%20%2F%20Institution%3A%0AMessage%20%2F%20Inquiry%20Details%3A%0APhone%20%2F%20Contact%3A%0A%0ABest%20regards%2C"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
