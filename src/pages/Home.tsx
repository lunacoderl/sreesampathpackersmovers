import React, { useState } from 'react'
import { Hero } from '../components/home/Hero'
import { TrustRow } from '../components/home/TrustRow'
import { VehicleFleetSection } from '../components/home/VehicleFleetSection'
import { AboutSection } from '../components/home/AboutSection'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { MovingProcess } from '../components/home/MovingProcess'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { GallerySection } from '../components/home/GallerySection'
import { ServiceAreasSection } from '../components/home/ServiceAreasSection'
import { FAQSection } from '../components/home/FAQSection'
import { QuoteSection } from '../components/home/QuoteSection'

export const Home: React.FC = () => {
  const [selectedVehicleForQuote, setSelectedVehicleForQuote] = useState<string | undefined>(undefined)

  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicleForQuote(vehicleName)
  }

  return (
    <main>
      {/* 1. Hero with uncropped natural visual */}
      <Hero />

      {/* 2. Trust Row */}
      <TrustRow />

      {/* 3. ⭐ Signature Interactive Fleet Selector */}
      <VehicleFleetSection onSelectVehicle={handleSelectVehicle} />

      {/* 4. About with uncropped widescreen operations visual */}
      <AboutSection />

      {/* 5. Why Choose Us (6 Cards) */}
      <WhyChooseUs />

      {/* 6. Comprehensive Services (6 Cards) */}
      <ServicesGrid />

      {/* 7. Moving Process (5 Steps) */}
      <MovingProcess />

      {/* 8. Verified Customer Testimonials */}
      <TestimonialsSection />

      {/* 9. Real Work Gallery & Lightbox */}
      <GallerySection />

      {/* 10. Service Areas Corridors */}
      <ServiceAreasSection />

      {/* 11. FAQ Accordion */}
      <FAQSection />

      {/* 12. Instant Quote & Direct Dispatch */}
      <QuoteSection selectedVehicle={selectedVehicleForQuote} />
    </main>
  )
}
