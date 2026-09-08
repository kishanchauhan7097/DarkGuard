import React, { useState } from 'react';
import { X, Play, Pause, ShieldCheck, Cpu, Volume2, VolumeX, Fullscreen, Sparkles } from 'lucide-react';

export default function DemoVideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-slate-700/80 p-6 space-y-5 shadow-2xl">
        
        {/* Close Button */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white font-['Space_Grotesk']">
            <Play className="w-4 h-4 text-[#3b82f6]" fill="#3b82f6" />
            <span>DarkGuard Product Walkthrough Demo</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Player Simulation */}
        <div className="relative aspect-video rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between p-6">
          
          {/* Top Overlay Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono text-[#00ff87] flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              REC: Live Extension Demo
            </span>
            <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2 py-1 rounded">
              01:42 / 02:15
            </span>
          </div>

          {/* Interactive Simulated Video Content */}
          <div className="my-auto text-center space-y-4">
            {activeStep === 1 && (
              <div className="space-y-3 animate-in fade-in">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/50 flex items-center justify-center mx-auto text-blue-400">
                  <Cpu className="w-8 h-8 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">1. Real-time DOM Mutation Interception</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  DarkGuard scans e-commerce DOM nodes as they render, identifying pre-checked checkboxes and hidden insurance charges.
                </p>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-3 animate-in fade-in">
                <div className="w-14 h-14 rounded-2xl bg-[#00ff87]/20 border border-[#00ff87]/50 flex items-center justify-center mx-auto text-[#00ff87]">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">2. HuggingFace NLP Intent Inference</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  DeBERTa model classifies guilt-tripping confirmshaming buttons ("No, I like paying full price") into neutral declination links.
                </p>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-3 animate-in fade-in">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/50 flex items-center justify-center mx-auto text-purple-400">
                  <ShieldCheck className="w-8 h-8 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">3. UI Sanitization & Roach Motel Unmasking</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Direct 1-click cancellation endpoints are injected into subscriptions, bypassing call-center phone hold queues.
                </p>
              </div>
            )}
          </div>

          {/* Bottom Player Controls */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 z-10">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 border border-slate-700"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" fill="white" />}
              </button>
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Timestamps Chapter Selectors */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveStep(1)} 
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${activeStep === 1 ? 'bg-[#00ff87] text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'}`}
              >
                00:15 DOM Scan
              </button>
              <button 
                onClick={() => setActiveStep(2)} 
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${activeStep === 2 ? 'bg-[#00ff87] text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'}`}
              >
                00:45 NLP Inference
              </button>
              <button 
                onClick={() => setActiveStep(3)} 
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${activeStep === 3 ? 'bg-[#00ff87] text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'}`}
              >
                01:30 UI Sanitize
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
