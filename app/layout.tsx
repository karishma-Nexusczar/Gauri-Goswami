import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaurigoswami.com"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  keywords: [
    "Gauri Goswami", "Gauri Goswami Advocate", "Gauri Goswami Lawyer", 
    "Gauri Goswami Law", "Gauri Goswami Kathak", "Gauri Goswami Dance", 
    "Gauri Goswami Scholarship", "Gauri Goswami University of Nottingham", 
    "Advocate Gauri Goswami", "Kathak Artist Gauri Goswami"
  ],
  title: "Gauri Goswami — Law, Scholarship & Dance",
  description: "Gauri Goswami is an Advocate, legal researcher, scholarship recipient and Kathak artist. Explore her legal career, academic achievements, research, Kathak performances and cultural work.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Gauri Goswami — Law, Scholarship & Dance",
    description: "Gauri Goswami is an Advocate, legal researcher, scholarship recipient and Kathak artist. Explore her legal career, academic achievements, research, Kathak performances and cultural work.",
    url: "https://gaurigoswami.com/",
    siteName: "Gauri Goswami",
    type: "website",
    images: [{ url: "/og.png", width: 1680, height: 944, alt: "Gauri Goswami professional portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gauri Goswami — Law, Scholarship & Dance",
    description: "Gauri Goswami is an Advocate, legal researcher, scholarship recipient and Kathak artist. Explore her legal career, academic achievements, research, Kathak performances and cultural work.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: "Gauri Goswami", url: "https://gaurigoswami.com/" },
      { 
        "@type": "Person", 
        name: "Gauri Goswami", 
        url: "https://gaurigoswami.com/", 
        jobTitle: "Advocate, Legal Researcher & Kathak Artist", 
        knowsAbout: ["Law", "Legal Research", "Kathak", "Dance", "University of Nottingham", "Scholarship"] 
      },
    ],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
