import { ArrowDown } from "lucide-react"
import Link from "next/link"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import ReportsSection from "@/components/reports-section"
import SkillsSection from "@/components/skills-section"
import TechWatchSection from "@/components/tech-watch-section"

export default function Home() {
  return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <TechWatchSection />
          <ReportsSection />
          <ContactSection />
          <div className="container mx-auto my-12 flex justify-center">
            <Link
                href="#top"
                className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
            >
              Retour en haut
              <ArrowDown className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
  )
}