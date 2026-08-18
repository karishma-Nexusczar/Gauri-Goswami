import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Excellence | Gauri Goswami",
  description: "Discover Gauri Goswami's academic journey, including her LL.M. in International Commercial Law from the University of Nottingham and other scholarly achievements.",
};

export default function AcademicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
