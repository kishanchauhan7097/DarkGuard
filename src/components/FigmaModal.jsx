import React from 'react';
import { X, ExternalLink, Layout, Layers, Palette } from 'lucide-react';

export default function FigmaModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel rounded-2xl border border-slate-700/80 p-6 md:p-8 space-y-6 shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/50 flex items-center justify-center mx-auto text-purple-400 font-bold font-mono">
            F
          </div>
          <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
            DarkGuard Figma Design System
          </h3>
          <p className="text-xs text-slate-300">
            UI/UX Component Library, Shadow DOM Overlays & Extension Mockups
          </p>
        </div>

        {/* Design System Details */}
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#00ff87]" />
              Color Palette:
            </span>
            <span className="text-slate-200">Slate (#070a11), Neon Green (#00ff87), Electric Blue</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-2">
              <Layout className="w-4 h-4 text-purple-400" />
              Wireframes:
            </span>
            <span className="text-slate-200">Extension Popup, Settings Dashboard, Alert Badges</span>
          </div>
        </div>

        <a 
          href="https://figma.com" 
          target="_blank" 
          rel="noreferrer"
          className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-600/20"
        >
          <span>Open Figma Interactive Prototype</span>
          <ExternalLink className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
}
