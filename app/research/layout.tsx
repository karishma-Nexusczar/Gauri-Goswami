import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Research & Publications | Gauri Goswami",
  description: "Read Gauri Goswami's publications and research in International Commercial Law, covering topics like Greenwashing and ESG regulations.",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
