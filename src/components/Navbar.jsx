import React, { useState, useEffect } from 'react';
import { Shield, Download, Play, Menu, X, Terminal, Cpu, ChevronRight, ShieldAlert, Zap } from 'lucide-react';

export default function Navbar({ onOpenInstallModal, onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#070a11]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-black/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-[#00ff87]/40 flex items-center justify-center shadow-lg shadow-[#00ff87]/10 group-hover:border-[#00ff87] transition-all">
              <Shield className="w-5 h-5 text-[#00ff87] transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 rounded-xl bg-[#00ff87]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Dark<span className="text-[#00ff87]">Guard</span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#00ff87] animate-ping"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                NLP Anti-Coercion
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            <a href="#overview" className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-[#00ff87] transition-colors rounded-full hover:bg-slate-800/50">
              Overview
            </a>
            <a href="#threats" className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-[#00ff87] transition-colors rounded-full hover:bg-slate-800/50">
              Threat Matrix
            </a>
            <a href="#live-demo" className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-[#00ff87] transition-colors rounded-full hover:bg-slate-800/50 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff87]"></span>
              </span>
              Live Scanner
            </a>
            <a href="#sandbox" className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-[#00ff87] transition-colors rounded-full hover:bg-slate-800/50">
              Neutralizer
            </a>
            <a href="#architecture" className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-[#00ff87] transition-colors rounded-full hover:bg-slate-800/50">
              Architecture
            </a>
            <a href="#team" className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-[#00ff87] transition-colors rounded-full hover:bg-slate-800/50">
              Team Resist
            </a>
          </nav>

          {/* CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={onOpenDemoModal}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all"
            >
              <Play className="w-3.5 h-3.5 text-[#3b82f6]" fill="#3b82f6" />
              Watch Demo
            </button>
            <button 
              onClick={onOpenInstallModal}
              className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-[#00ff87] hover:bg-[#00e57a] rounded-lg transition-all shadow-lg shadow-[#00ff87]/20 hover:shadow-[#00ff87]/40 active:scale-95"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              Add to Browser
              <span className="bg-slate-950/15 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-900">v1.2</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00ff87]" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17]/95 backdrop-blur-xl border-b border-slate-800 p-5 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#overview" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-[#00ff87] hover:bg-slate-900"
            >
              Overview
            </a>
            <a 
              href="#threats" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-[#00ff87] hover:bg-slate-900"
            >
              Threat Matrix
            </a>
            <a 
              href="#live-demo" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-[#00ff87] hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Live Scanner</span>
              <span className="bg-[#00ff87]/20 text-[#00ff87] text-xs px-2 py-0.5 rounded-full font-mono">Interactive</span>
            </a>
            <a 
              href="#sandbox" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-[#00ff87] hover:bg-slate-900"
            >
              Neutralizer Sandbox
            </a>
            <a 
              href="#architecture" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-[#00ff87] hover:bg-slate-900"
            >
              Architecture & Tech
            </a>
            <a 
              href="#team" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-[#00ff87] hover:bg-slate-900"
            >
              Team Resist
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium text-slate-200"
            >
              <Play className="w-4 h-4 text-[#3b82f6]" fill="#3b82f6" />
              Watch Video Demo
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenInstallModal(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#00ff87] text-slate-950 font-semibold text-sm shadow-lg shadow-[#00ff87]/20"
            >
              <Download className="w-4 h-4" />
              Add to Browser (It's Free)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
