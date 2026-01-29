import { getHomepageData, getFAQs } from "@/lib/content/reader"
import { HeroSection } from "@/components/sections/hero"
import { PartnersSection } from "@/components/sections/partners"
import { FeaturesSection } from "@/components/sections/features"
import { StatsSection } from "@/components/sections/stats"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default async function Home() {
  const [data, faqs] = await Promise.all([
    getHomepageData(),
    getFAQs()
  ])



  if (!data) {
    return <div>No content found. Please update the CMS.</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection data={data.hero} />
        
        {data.partners.show && (
          <PartnersSection data={data.partners} />
        )}
        
        <FeaturesSection data={data.features} />
        
        {data.stats.show && (
          <StatsSection data={data.stats} />
        )}
        
        <TestimonialsSection data={data.testimonials} />
        
        <FAQSection items={faqs} />
        
        <CTASection data={data.cta} />
      </main>
      <Footer />
    </div>
  )
}
