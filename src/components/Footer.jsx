import React from 'react';
import { Shield, Play, ExternalLink, GraduationCap, Heart, Lock, CheckCircle2 } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Footer({ onOpenDemoModal, onOpenInstallModal, onOpenFigmaModal }) {
  return (
    <footer className="bg-[#05070d] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-[#00ff87]/40 flex items-center justify-center shadow-md">
                <Shield className="w-5 h-5 text-[#00ff87]" />
              </div>
              <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white">
                Dark<span className="text-[#00ff87]">Guard</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Real-time browser extension that neutralizes deceptive dark patterns using heuristic DOM parsing and HuggingFace NLP models. Shielding human intent across the web.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-[#00ff87]">
                <Lock className="w-3 h-3 text-[#00ff87]" />
                Manifest V3 Verified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-blue-400">
                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                Open Source
              </span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-200 font-bold tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#overview" className="hover:text-[#00ff87] transition-colors">Overview</a></li>
              <li><a href="#threats" className="hover:text-[#00ff87] transition-colors">Threat Matrix</a></li>
              <li><a href="#live-demo" className="hover:text-[#00ff87] transition-colors">Live Web Scanner</a></li>
              <li><a href="#sandbox" className="hover:text-[#00ff87] transition-colors">Neutralizer Sandbox</a></li>
              <li><a href="#architecture" className="hover:text-[#00ff87] transition-colors">Architecture & Tech</a></li>
              <li><a href="#team" className="hover:text-[#00ff87] transition-colors">Team Resist</a></li>
            </ul>
          </div>

          {/* Project & Media Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-200 font-bold tracking-wider">Project Assets</h4>
            <div className="space-y-2 text-xs">
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-[#00ff87] transition-all group"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-[#00ff87]" />
                  <span>GitHub Repository</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>

              <button
                onClick={onOpenFigmaModal}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-purple-400 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 font-mono font-bold text-purple-400 flex items-center justify-center text-[10px]">F</span>
                  <span>Figma Prototype</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-blue-400 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-blue-400" fill="#60a5fa" />
                  <span>Interactive Demo Video</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom Attribution Line */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-2 text-slate-400">
            <GraduationCap className="w-4 h-4 text-[#00ff87]" />
            <span>Developed with passion by <strong>Team Resist</strong> at <strong>Buddha Institute of Technology</strong>.</span>
          </div>

          <div className="text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} DarkGuard Security. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
