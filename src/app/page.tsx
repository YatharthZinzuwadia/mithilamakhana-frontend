import S0_Preloader from "@/components/sections/S0_Preloader";
import S1_Hero from "@/components/sections/S1_Hero";
import S2_WhatIsMakhana from "@/components/sections/S2_WhatIsMakhana";
import S3_WhyDiscoverIt from "@/components/sections/S3_WhyDiscoverIt";
import S4_CraftedInMithila from "@/components/sections/S4_CraftedInMithila";
import S15_FarmParallaxCarousel from "@/components/sections/S15_FarmParallaxCarousel";
import S5_MithilaStory from "@/components/sections/S5_MithilaStory";
import S6_TheMoment from "@/components/sections/S6_TheMoment";
import S7_FlavorUniverse from "@/components/sections/S7_FlavorUniverse";
import S8_MakhanaConstellation from "@/components/sections/S8_MakhanaConstellation";
import S9_WhoEatsMithilaMantra from "@/components/sections/S9_WhoEatsMithilaMantra";
import S10_NaturalPuffLineup from "@/components/sections/S10_NaturalPuffLineup";
import S11_WhyMakhanaWins from "@/components/sections/S11_WhyMakhanaWins";

export default function Home() {
  return (
    <main className="relative bg-brand-black w-full overflow-hidden">
      <S0_Preloader />
      <S1_Hero />
      <S2_WhatIsMakhana />
      <S3_WhyDiscoverIt />
      <S4_CraftedInMithila />
      <S15_FarmParallaxCarousel />
      <S5_MithilaStory />
      <S6_TheMoment />
      <S7_FlavorUniverse />
      <S8_MakhanaConstellation />
      <S9_WhoEatsMithilaMantra />
      <S10_NaturalPuffLineup />
      <S11_WhyMakhanaWins />
    </main>
  );
}
