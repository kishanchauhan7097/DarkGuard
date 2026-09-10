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
import CursorTrail from './components/CursorTrail';
import CyberShaderBackground from './components/CyberShaderBackground';

export default function App() {
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [figmaModalOpen, setFigmaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#00ff87]/30 selection:text-[#00ff87] relative overflow-x-hidden">
      
      {/* Interactive Cyber Cursor Trail */}
      <CursorTrail />

      {/* Full-bleed WebGL Moving Background Shader */}
      <CyberShaderBackground />

      {/* Navigation Bar */}
      <Navbar 
        onOpenInstallModal={() => setInstallModalOpen(true)}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero with Three.js 3D Holographic Shield */}
        <HeroSection 
          onOpenInstallModal={() => setInstallModalOpen(true)}
          onOpenDemoModal={() => setDemoModalOpen(true)}
        />

        {/* Section 2: The Threat Landscape with 3D Cards */}
        <ThreatsSection />

        {/* Section 3: Interactive 3D Neutralizer Sandbox */}
        <NeutralizerSandbox />

        {/* Section 4: Real-Time Tactical Scanner Radar */}
        <ScannerDemoSection />

        {/* Section 5: Bento Grid Core Capabilities */}
        <CapabilitiesSection />

        {/* Section 6: How It Works & Architecture Flow */}
        <ArchitectureSection />

        {/* Section 7: Team Resist & Institutional Pride */}
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
