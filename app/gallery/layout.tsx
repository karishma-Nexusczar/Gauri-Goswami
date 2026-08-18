import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Event Gallery | Gauri Goswami",
  description: "Browse Gauri Goswami's professional gallery featuring legal events, Kathak performances, academic highlights, and cultural networking.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
