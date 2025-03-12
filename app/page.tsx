import AgriTechHero from "@/components/agri-tech-hero"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AgriTechHero />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

