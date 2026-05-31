import { Metadata } from "next";
import OurStoryPageContent from "@/components/pages/OurStoryPageContent";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From the lotus ponds of Bihar to your pantry. Discover the 2500-year journey of Makhana and how Mithila Mantra is bringing this ancient superfood to the world.",
  keywords: [
    "mithila mantra story",
    "makhana origin",
    "bihar makhana",
    "lotus seeds",
    "sustainable snacking",
    "indian superfoods",
  ],
  openGraph: {
    title: "Our Story | Mithila Mantra",
    description:
      "A snack 2,500 years in the making. Discover the roots of Mithila Mantra Makhanas.",
    url: "https://mithilamantra.com/our-story",
  },
  alternates: {
    canonical: "/our-story",
  },
};

export default function OurStoryPage() {
  return <OurStoryPageContent />;
}
