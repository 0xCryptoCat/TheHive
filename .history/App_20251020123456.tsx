import { LoadingAnimation } from "./components/LoadingAnimation";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import { HeroSection } from "./components/HeroSection";
import { VisionSection } from "./components/VisionSection";
import { SolutionSection } from "./components/SolutionSection";
import { HoneyIncSection } from "./components/HoneyIncSection";
import { EmulationSection } from "./components/EmulationSection";
import { MiningSection } from "./components/MiningSection";
import { MarketOpportunitySection } from "./components/MarketOpportunitySection";
import { TokenomicsSection } from "./components/TokenomicsSection";
import { RevenueModelSection } from "./components/RevenueModelSection";
import { CompetitiveEdgeSection } from "./components/CompetitiveEdgeSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { TeamSection } from "./components/TeamSection";
import { InvestorCTASection } from "./components/InvestorCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="size-full">
      {/* SVG Filter for rounded hexagon effect */}
      <svg className="hexagon-svg-filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>
      
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
