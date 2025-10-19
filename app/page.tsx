import HeroSection from "@/components/hero-section"
import StorySection from "@/components/story-section"
import MissionSection from "@/components/mission-section"
import CapabilitiesSection from "@/components/capabilities-section"
import ArchitectureSection from "@/components/architecture-section"
import ComparisonSection from "@/components/comparison-section"
import StatsSection from "@/components/stats-section"
import PowerSection from "@/components/power-section"
import FlowSection from "@/components/flow-section"
import TimelineSection from "@/components/timeline-section"
import VisionSection from "@/components/vision-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StorySection />
      <MissionSection />
      <CapabilitiesSection />
      <ArchitectureSection />
      <ComparisonSection />
      <StatsSection />
      <PowerSection />
      <FlowSection />
      <TimelineSection />
      <VisionSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
