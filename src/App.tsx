import { Suspense, lazy } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import LeadPopup from './components/LeadPopup'

// Lazy load sections below the fold
const PainPoints = lazy(() => import('./components/PainPoints'))
const WhyDifferent = lazy(() => import('./components/WhyDifferent'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Curriculum = lazy(() => import('./components/Curriculum'))
const RiskReversal = lazy(() => import('./components/RiskReversal'))
const UrgencySection = lazy(() => import('./components/UrgencySection'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))
const Footer = lazy(() => import('./components/Footer'))
const FloatingWidgets = lazy(() => import('./components/FloatingWidgets'))

// Basic Section Loader to prevent layout jumps during lazy loading
const SectionLoader = () => (
  <div className="h-40 bg-slate-50/50 animate-pulse rounded-lg m-8" />
)

function App() {
  return (
   <>
    <LeadPopup />
    <Navbar />
    <FloatingWidgets />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <PainPoints />
          <WhyDifferent />
          <Testimonials />
          <Curriculum />
          <RiskReversal />
          <UrgencySection />
          <FinalCTA />
          <Footer />
        </Suspense>
      </main>
   </>
  )
}

export default App
