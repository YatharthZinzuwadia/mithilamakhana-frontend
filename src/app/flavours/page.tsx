import { Metadata } from "next";
import FlavoursPageContent from "@/components/pages/FlavoursPageContent";

export const metadata: Metadata = {
  title: "Shop Flavours",
  description:
    "Explore 6 irresistible Mithila Mantra Makhana flavors: Raw, Peri Peri, Cheese, Cream & Onion, Pudina, and Black Pepper & Salt. Guilt-free, protein-rich snacking.",
  keywords: [
    "makhana flavours",
    "peri peri makhana",
    "cheese makhana",
    "roasted fox nuts",
    "flavored makhana",
    "healthy chips alternative",
  ],
  openGraph: {
    title: "Shop Flavours | Mithila Mantra",
    description:
      "6 incredible Makhana flavors. Guilt-free, high-protein, totally delicious.",
    url: "https://mithilamantra.com/flavours",
  },
  alternates: {
    canonical: "/flavours",
  },
};

export default function FlavoursPage() {
  return <FlavoursPageContent />;
}
