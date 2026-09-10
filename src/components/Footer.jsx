import React from 'react';
import { Shield, ArrowUp, Github, Heart, GraduationCap, Download, Play, Layout } from 'lucide-react';

export default function Footer({ onOpenDemoModal, onOpenInstallModal, onOpenFigmaModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050c] border-t border-white/10 pt-20 pb-12 overflow-hidden text-slate-400 font-sans">
      
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-radial-glow blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-[#00ff87]/40 flex items-center justify-center shadow-lg shadow-[#00ff87]/10">
                <Shield className="w-5 h-5 text-[#00ff87]" />
              </div>
              <span className="font-['Space_Grotesk'] text-2xl font-black text-white">
                Dark<span className="text-[#00ff87]">Guard</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Real-time proactive browser defense neutralizing dark patterns, hidden charges, and deceptive UI coercions using heuristic DOM analysis & HuggingFace NLP.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenInstallModal}
                className="px-4 py-2 rounded-xl bg-[#00ff87] hover:bg-[#00ffa3] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-[#00ff87]/20 transition-all active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                Add to Browser
              </button>
              <button
                onClick={onOpenDemoModal}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <Play className="w-3.5 h-3.5 text-cyan-400" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Col 3: Navigation Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#overview" className="hover:text-[#00ff87] transition-colors">Overview</a></li>
              <li><a href="#threats" className="hover:text-[#00ff87] transition-colors">Threat Landscape</a></li>
              <li><a href="#sandbox" className="hover:text-[#00ff87] transition-colors">3D Sandbox</a></li>
              <li><a href="#live-demo" className="hover:text-[#00ff87] transition-colors">Threat Radar</a></li>
              <li><a href="#capabilities" className="hover:text-[#00ff87] transition-colors">Core Engine</a></li>
              <li><a href="#architecture" className="hover:text-[#00ff87] transition-colors">Architecture</a></li>
            </ul>
          </div>

          {/* Col 4: Project Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-white">
              Project
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#team" className="hover:text-[#00ff87] transition-colors">Team Resist</a></li>
              <li>
                <button 
                  onClick={onOpenFigmaModal} 
                  className="hover:text-[#00ff87] transition-colors text-left flex items-center gap-1.5"
                >
                  <Layout className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Figma Architecture</span>
                </button>
              </li>
              <li>
                <span className="text-xs font-mono text-[#00ff87] bg-[#00ff87]/10 px-2 py-0.5 rounded border border-[#00ff87]/30">
                  Manifest V3 Ready
                </span>
              </li>
              <li>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                  Sub-15ms Latency
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Institution & Affiliation */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-white">
              Institution
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#00ff87]">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase">Representing</span>
              </div>
              <div className="text-xs font-bold text-white leading-snug">
                Buddha Institute of Technology
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Cybersecurity Hackathon 2026
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© 2026 DarkGuard AI Sentinel. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>by Team Resist.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-[#00ff87]/50 text-slate-300 hover:text-[#00ff87] transition-all flex items-center gap-1.5"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
