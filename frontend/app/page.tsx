import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PopularRoutes } from "@/components/popular-routes"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { AppDownload } from "@/components/app-download"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PopularRoutes />
      <WhyChooseUs />
      <Testimonials />
      <AppDownload />
      <Footer />
    </main>
  )
}
