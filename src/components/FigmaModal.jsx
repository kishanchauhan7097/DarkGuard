import React from 'react';
import { X, ExternalLink, Layout, Layers, Palette, Sparkles } from 'lucide-react';

export default function FigmaModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-white/15 p-6 md:p-8 space-y-6 shadow-2xl shadow-black/90">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/50 flex items-center justify-center mx-auto text-purple-400 font-bold font-mono text-2xl shadow-lg shadow-purple-500/20">
            F
          </div>
          <h3 className="text-2xl font-black font-['Space_Grotesk'] text-white">
            DarkGuard Figma Design System
          </h3>
          <p className="text-xs text-slate-300 max-w-xs mx-auto">
            Component library, StitchMCP 3D screens, and Shadow DOM extension mocks.
          </p>
        </div>

        {/* Design System Details */}
        <div className="space-y-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-[#050b18] border border-white/10 flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#00ff87]" />
              Color Tokens:
            </span>
            <span className="text-slate-200">#030712, #00ff87, #00f2fe</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#050b18] border border-white/10 flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-2">
              <Layout className="w-4 h-4 text-purple-400" />
              Screens & Views:
            </span>
            <span className="text-slate-200">Sentinel Dashboard, Extension Popup</span>
          </div>
        </div>

        <a 
          href="https://figma.com" 
          target="_blank" 
          rel="noreferrer"
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black font-['Space_Grotesk'] text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-purple-600/30 hover:scale-[1.02] active:scale-95"
        >
          <span>Open Figma Interactive Prototype</span>
          <ExternalLink className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
}
