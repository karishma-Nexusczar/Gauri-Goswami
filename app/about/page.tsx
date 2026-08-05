import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Gauri Goswami — Advocate, LL.M., Kathak Visharad-II & Researcher",
  description: "Explore Gauri Goswami's multidisciplinary profile across International Commercial Law, academic research, Kathak classical arts, and cultural diplomacy.",
};

export default function AboutPage() {
  return <AboutClient />;
}
