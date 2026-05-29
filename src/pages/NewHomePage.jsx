import { lazy, Suspense } from 'react'
import NewHeroSection from '../components/sections/NewHeroSection'

const ResearchSection      = lazy(() => import('../components/sections/ResearchSection'))
const AccessSection        = lazy(() => import('../components/sections/AccessSection'))
const RelationshipsSection = lazy(() => import('../components/sections/RelationshipsSection'))

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

export default function NewHomePage() {
  return (
    <>
      <NewHeroSection />

      <Suspense fallback={<SectionFallback />}>
        <ResearchSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <AccessSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <RelationshipsSection />
      </Suspense>
    </>
  )
}
