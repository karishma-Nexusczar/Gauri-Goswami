import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Gauri Goswami | Advocate & Kathak Artist",
  description: "Learn about Gauri Goswami's journey bridging law and culture. Explore her professional milestones, personal values, and unique multidisciplinary background.",
};

export default function AboutPage() {
  return <AboutClient />;
}
