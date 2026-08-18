import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Enquiries | Gauri Goswami",
  description: "Get in touch with Gauri Goswami for legal consultations, academic collaborations, research projects, or Kathak performance bookings.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
