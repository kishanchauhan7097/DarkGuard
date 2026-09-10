import React, { useState, useEffect } from 'react';
import { Shield, Download, Play, Menu, X, Sparkles, Terminal, Activity, ChevronRight } from 'lucide-react';

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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030712]/80 backdrop-blur-2xl border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with 3D Holographic Glow */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-xl bg-slate-900/90 border border-[#00ff87]/40 flex items-center justify-center shadow-lg shadow-[#00ff87]/15 group-hover:border-[#00ff87] group-hover:shadow-[#00ff87]/30 transition-all duration-300">
              <Shield className="w-6 h-6 text-[#00ff87] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(0,255,135,0.7)]" />
              <div className="absolute inset-0 rounded-xl bg-[#00ff87]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-2xl font-black tracking-tight text-white flex items-center gap-2">
                Dark<span className="text-[#00ff87] drop-shadow-[0_0_12px_rgba(0,255,135,0.6)]">Guard</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#00ff87]/15 text-[#00ff87] border border-[#00ff87]/30">
                  AI 3D
                </span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse"></span>
                DOM Defense Sentinel
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-inner shadow-black/40">
            <a
              href="#overview"
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-[#00ff87] transition-all rounded-full hover:bg-slate-800/80"
            >
              Overview
            </a>
            <a
              href="#threats"
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-[#00ff87] transition-all rounded-full hover:bg-slate-800/80"
            >
              Threat Matrix
            </a>
            <a
              href="#sandbox"
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-[#00ff87] transition-all rounded-full hover:bg-slate-800/80 flex items-center gap-1.5"
            >
              <span>Neutralizer</span>
              <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono">3D</span>
            </a>
            <a
              href="#live-demo"
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-[#00ff87] transition-all rounded-full hover:bg-slate-800/80 flex items-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff87]"></span>
              </span>
              Radar Scanner
            </a>
            <a
              href="#capabilities"
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-[#00ff87] transition-all rounded-full hover:bg-slate-800/80"
            >
              Capabilities
            </a>
            <a
              href="#architecture"
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-[#00ff87] transition-all rounded-full hover:bg-slate-800/80"
            >
              Architecture
            </a>
            <a
              href="#team"
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-[#00ff87] transition-all rounded-full hover:bg-slate-800/80"
            >
              Team
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all shadow-md backdrop-blur-md"
            >
              <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 text-cyan-400 ml-0.5" fill="#38bdf8" />
              </div>
              Watch Demo
            </button>
            <button
              onClick={onOpenInstallModal}
              className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold text-slate-950 bg-[#00ff87] hover:bg-[#00ffa3] rounded-xl transition-all shadow-xl shadow-[#00ff87]/25 hover:shadow-[#00ff87]/45 hover:-translate-y-0.5 active:scale-95"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Get Extension</span>
              <span className="bg-slate-950/15 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-900">v1.2</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00ff87]" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070d1a]/95 backdrop-blur-2xl border-b border-slate-800 p-5 mt-3 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00ff87] hover:bg-slate-900/80"
            >
              Overview
            </a>
            <a
              href="#threats"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00ff87] hover:bg-slate-900/80"
            >
              Threat Matrix
            </a>
            <a
              href="#sandbox"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-cyan-400 hover:bg-slate-900/80 flex items-center justify-between"
            >
              <span>Neutralizer Sandbox</span>
              <span className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-0.5 rounded font-mono">Interactive</span>
            </a>
            <a
              href="#live-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#00ff87] hover:bg-slate-900/80 flex items-center justify-between"
            >
              <span>Live Threat Radar</span>
              <span className="bg-[#00ff87]/20 text-[#00ff87] text-xs px-2 py-0.5 rounded font-mono">Real-Time</span>
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00ff87] hover:bg-slate-900/80"
            >
              Core Capabilities
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00ff87] hover:bg-slate-900/80"
            >
              Architecture & Tech
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00ff87] hover:bg-slate-900/80"
            >
              Team Resist
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm font-bold text-slate-200"
            >
              <Play className="w-4 h-4 text-cyan-400" fill="#38bdf8" />
              Watch Video Demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInstallModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00ff87] text-slate-950 font-extrabold text-sm shadow-xl shadow-[#00ff87]/30"
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
