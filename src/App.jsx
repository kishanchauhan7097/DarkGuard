import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ThreatsSection from './components/ThreatsSection';
import NeutralizerSandbox from './components/NeutralizerSandbox';
import ScannerDemoSection from './components/ScannerDemoSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ArchitectureSection from './components/ArchitectureSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import InstallModal from './components/InstallModal';
import DemoVideoModal from './components/DemoVideoModal';
import FigmaModal from './components/FigmaModal';

export default function App() {
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [figmaModalOpen, setFigmaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a11] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#00ff87]/30 selection:text-[#00ff87]">
      
      {/* Navigation Bar */}
      <Navbar 
        onOpenInstallModal={() => setInstallModalOpen(true)}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection 
          onOpenInstallModal={() => setInstallModalOpen(true)}
          onOpenDemoModal={() => setDemoModalOpen(true)}
        />

        {/* Section 2: The Threat */}
        <ThreatsSection />

        {/* Interactive Before & After Neutralizer Sandbox */}
        <NeutralizerSandbox />

        {/* Section 3: Interactive Real-Time Scanner Demo */}
        <ScannerDemoSection />

        {/* Section 4: Core Capabilities */}
        <CapabilitiesSection />

        {/* Section 5: How It Works & Architecture */}
        <ArchitectureSection />

        {/* Section 6: Team & Institutional Pride */}
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenDemoModal={() => setDemoModalOpen(true)}
        onOpenInstallModal={() => setInstallModalOpen(true)}
        onOpenFigmaModal={() => setFigmaModalOpen(true)}
      />

      {/* Interactive Modals */}
      <InstallModal 
        isOpen={installModalOpen} 
        onClose={() => setInstallModalOpen(false)} 
      />

      <DemoVideoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />

      <FigmaModal 
        isOpen={figmaModalOpen} 
        onClose={() => setFigmaModalOpen(false)} 
      />

    </div>
  );
}
