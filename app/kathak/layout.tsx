import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kathak Artist & Cultural Heritage | Gauri Goswami",
  description: "Explore Gauri Goswami's artistic journey as a Classical Kathak Dancer (Kathak Visharad-II), featuring global performances and cultural diplomacy.",
};

export default function KathakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
