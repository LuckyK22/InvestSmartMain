/* eslint-disable no-unused-vars */
import { lazy, Suspense } from 'react'

const HeroSection            = lazy(() => import('../components/sections/HeroSection'))
const AboutSection           = lazy(() => import('../components/sections/AboutSection'))
const ServicesSection        = lazy(() => import('../components/sections/ServicesSection'))
const PortfolioReviewSection = lazy(() => import('../components/sections/PortfolioReviewSection'))
const LegacySection          = lazy(() => import('../components/sections/LegacySection'))
const ResearchSection        = lazy(() => import('../components/sections/ResearchSection'))
const RelationshipsSection   = lazy(() => import('../components/sections/RelationshipsSection'))
const AccessSection          = lazy(() => import('../components/sections/AccessSection'))
// const TestimonialsSection    = lazy(() => import('../components/sections/TestimonialsSection'))

function SectionFallback() {
  return (
    <div style={{
      minHeight: 200, display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--beige)',
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: '50%',
        border: '2px solid var(--gold)',
        borderTopColor: 'transparent',
        animation: 'spin 0.75s linear infinite',
      }} />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PortfolioReviewSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LegacySection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ResearchSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <AccessSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <RelationshipsSection />
      </Suspense>

      {/* <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense> */}
    </>
  )
}
