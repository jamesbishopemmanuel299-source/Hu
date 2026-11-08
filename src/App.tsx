import React from 'react';
import { BrandProvider } from './context/BrandContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Differentiators } from './components/Differentiators';
import { Portfolio } from './components/Portfolio';
import { Estimator } from './components/Estimator';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { BrandCustomizerModal } from './components/BrandCustomizerModal';

export default function App() {
  return (
    <BrandProvider>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-400/20 selection:text-amber-200">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Differentiators />
          <Portfolio />
          <Estimator />
          <About />
          <Testimonials />
          <Faq />
          <ContactSection />
        </main>
        <Footer />

        {/* Global Modals & Drawers */}
        <ConsultationModal />
        <ServiceDetailModal />
        <ProjectDetailModal />
        <BrandCustomizerModal />
      </div>
    </BrandProvider>
  );
}
