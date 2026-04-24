/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ProcessFlow from './components/ProcessFlow';
import Modules from './components/Modules';
import LiveStatus from './components/LiveStatus';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      <AnimatePresence>
        <Navbar />
        <main>
          <Hero />
          <WhySection />
          <ProcessFlow />
          <Modules />
          <LiveStatus />
          <CTASection />
        </main>
        <Footer />
      </AnimatePresence>

      {/* Global Background Grid Overlay (Very Subtle Light) */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />
    </div>
  );
}


