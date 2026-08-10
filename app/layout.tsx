import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gauri Goswami — Law, Scholarship & Kathak",
  description: "A life at the intersection of law, academia, Kathak, research and travel.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Gauri Goswami — Law, Scholarship & Kathak",
    description: "Barrister, academic, Kathak artist, researcher, and cultural storyteller.",
    images: [{ url: "/og.png", width: 1680, height: 944, alt: "Gauri Goswami professional portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gauri Goswami — Law, Scholarship & Kathak",
    description: "Barrister, academic, Kathak artist, researcher, and cultural storyteller.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
