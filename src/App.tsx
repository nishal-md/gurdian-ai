/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ProcessFlow from './components/ProcessFlow';
import Modules from './components/Modules';
import LiveStatus from './components/LiveStatus';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import PrivacySummary from './components/PrivacySummary';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import TermsPage from './pages/TermsPage';
import GlobalBackground from './components/GlobalBackground';

import SettingsPage from './pages/SettingsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <WhySection />
        <ProcessFlow />
        <Modules />
        <LiveStatus />
        <PrivacySummary />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />

      {/* Global Background Grid Overlay (Very Subtle Light) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/settings" element={
          <PageTransition>
            <SettingsPage />
          </PageTransition>
        } />
        <Route path="/privacy" element={
          <PageTransition>
            <PrivacyPolicyPage />
          </PageTransition>
        } />
        <Route path="/terms" element={
          <PageTransition>
            <TermsPage />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}
