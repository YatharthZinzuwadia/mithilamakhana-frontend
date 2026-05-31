import { Metadata } from "next";
import NutritionPageContent from "@/components/pages/NutritionPageContent";

export const metadata: Metadata = {
  title: "Nutrition Facts",
  description:
    "Discover why Mithila Mantra Makhana is the ultimate superfood. Compare makhana vs chips vs popcorn. High protein, rich in antioxidants, and guilt-free.",
  keywords: [
    "makhana nutrition",
    "makhana vs popcorn",
    "healthy snacks",
    "high protein snack",
    "gluten free snacks",
    "vegan snacks",
  ],
  openGraph: {
    title: "Nutrition Facts | Mithila Mantra",
    description:
      "The ultimate superfood. See how Makhana stacks up against your everyday snacks.",
    url: "https://mithilamantra.com/nutrition",
  },
  alternates: {
    canonical: "/nutrition",
  },
};

export default function NutritionPage() {
  return <NutritionPageContent />;
}
