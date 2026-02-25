import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SocialProofBar } from "@/components/social-proof-bar"
import { ProblemSolution } from "@/components/problem-solution"
import { HowItWorks } from "@/components/how-it-works"
import { KeyBenefits } from "@/components/key-benefits"
import { Testimonials } from "@/components/testimonials"
import { FreeAnalysisCTA } from "@/components/free-analysis-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSolution />
      <HowItWorks />
      <KeyBenefits />
      <Testimonials />
      <FreeAnalysisCTA />
      <Footer />
    </main>
  )
}
