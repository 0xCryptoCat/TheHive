import { useEffect, useState } from "react";
import { LoadingAnimation } from "./components/LoadingAnimation";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import { SvgFilters } from "./components/SvgFilters";
import { HeroSection } from "./components/HeroSection";
import { VisionSection } from "./components/VisionSection";
import { SolutionSection } from "./components/SolutionSection";
import { HoneyIncSection } from "./components/HoneyIncSection";
import { EmulationSection } from "./components/EmulationSection";
import { MiningSection } from "./components/MiningSection";
import { MarketOpportunitySection } from "./components/MarketOpportunitySection";
import { TokenomicsSection } from "./components/TokenomicsSection";
import { RevenueModelSection } from "./components/RevenueModelSection";
import { MetricsSection } from "./components/MetricsSection";
import { CompetitiveEdgeSection } from "./components/CompetitiveEdgeSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { TeamSection } from "./components/TeamSection";
import { InvestorCTASection } from "./components/InvestorCTASection";
import { Footer } from "./components/Footer";
import { PreviewImage } from "./components/PreviewImage";

export default function App() {
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    // Check if URL has ?preview=true
    if (typeof window !== 'undefined' && window.location.search.includes('preview=true')) {
      setShowPreview(true);
    }
  }, []);

  // Show preview image if URL has ?preview=true
  if (showPreview) {
    return <PreviewImage />;
  }

  return (
    <div className="size-full">
      <SvgFilters />
      <LoadingAnimation />
      <Navigation />
      <ScrollToTop />
      <HeroSection />
      <div id="vision">
        <VisionSection />
      </div>
      <div id="features">
        <SolutionSection />
        <HoneyIncSection />
        <EmulationSection />
        <MiningSection />
      </div>
      <MarketOpportunitySection />
      <div id="tokenomics">
        <TokenomicsSection />
        <RevenueModelSection />
        <MetricsSection />
      </div>
      <CompetitiveEdgeSection />
      <div id="roadmap">
        <RoadmapSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <InvestorCTASection />
      <Footer />
    </div>
  );
}
