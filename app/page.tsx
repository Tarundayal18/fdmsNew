import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import PricingSection from "@/components/pricing-section"
import FooterSection from "@/components/footer-section"
import PortfolioSection from "@/components/portfolio-section"
import ComparisonSection from "@/components/comparison-section"
import StepsSection from "@/components/steps-section"
import AboutSection from "@/components/about-section"
import WhyBestSection from "@/components/why-best-section"
import ServicesSection from "@/components/services-section"
import AnimatedIconsSection from "@/components/animated-icons-section"
import Tesiminiols from "@/components/testiminiols"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ProjectsGridSection from "@/components/projects-grid-section"
import FounderNoteSection from "@/components/founder-note-section"

export default function Home() {
  return (
    <main className="w-full">
       <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AnimatedIconsSection />
      <ServicesSection />
      <WhyBestSection />
      <ProjectsGridSection />
      {/* <PortfolioSection /> */}
      <StepsSection />
      <ComparisonSection />
      <Tesiminiols />
      {/* <PricingSection /> */}
      {/* <AboutSection /> */}
      <FounderNoteSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
