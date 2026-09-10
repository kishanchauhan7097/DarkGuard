import React, { useState } from 'react';
import { X, Play, Pause, ShieldCheck, Cpu, Volume2, VolumeX, Sparkles, Terminal } from 'lucide-react';

export default function DemoVideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/15 p-6 md:p-8 space-y-6 shadow-2xl shadow-black/90">
        
        {/* Close & Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5 text-base font-bold text-white font-['Space_Grotesk']">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <Play className="w-3.5 h-3.5 ml-0.5" fill="#38bdf8" />
            </div>
            <span>DarkGuard Product Walkthrough Demo</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Player Simulation */}
        <div className="relative aspect-video rounded-2xl bg-[#030712] border border-white/10 overflow-hidden flex flex-col justify-between p-6 shadow-inner">
          
          {/* Top Overlay Badge */}
          <div className="flex items-center justify-between z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs font-mono text-[#00ff87] flex items-center gap-2 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              REC: Live Heuristic Simulation
            </span>
            <span className="text-xs font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-white/5">
              01:42 / 02:15
            </span>
          </div>

          {/* Interactive Simulated Video Content */}
          <div className="my-auto text-center space-y-4">
            {activeStep === 1 && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center mx-auto text-cyan-400 shadow-lg shadow-cyan-500/20">
                  <Cpu className="w-8 h-8 animate-pulse" />
                </div>
                <h4 className="text-xl font-bold text-white font-['Space_Grotesk']">1. Real-time DOM Mutation Interception</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  DarkGuard inspects e-commerce DOM nodes as they render, identifying pre-checked checkboxes and hidden insurance charges before form submission.
                </p>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#00ff87]/20 border border-[#00ff87]/50 flex items-center justify-center mx-auto text-[#00ff87] shadow-lg shadow-[#00ff87]/20">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                <h4 className="text-xl font-bold text-white font-['Space_Grotesk']">2. HuggingFace NLP Intent Inference</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  DeBERTa transformer classifies guilt-tripping confirmshaming buttons ("No, I like paying full price") and formats them into neutral declination links.
                </p>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-400/50 flex items-center justify-center mx-auto text-purple-400 shadow-lg shadow-purple-500/20">
                  <ShieldCheck className="w-8 h-8 animate-pulse" />
                </div>
                <h4 className="text-xl font-bold text-white font-['Space_Grotesk']">3. UI Sanitization & Roach Motel Unmasking</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Direct 1-click cancellation endpoints are injected into subscriptions, bypassing call-center phone hold queues and maze-like menus.
                </p>
              </div>
            )}
          </div>

          {/* Bottom Player Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 z-10">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 border border-white/10 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" fill="white" />}
              </button>
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Timestamps Chapter Selectors */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveStep(1)} 
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${activeStep === 1 ? 'bg-[#00ff87] text-slate-950 font-bold shadow-md shadow-[#00ff87]/30' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              >
                00:15 DOM Scan
              </button>
              <button 
                onClick={() => setActiveStep(2)} 
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${activeStep === 2 ? 'bg-[#00ff87] text-slate-950 font-bold shadow-md shadow-[#00ff87]/30' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              >
                00:45 NLP AI
              </button>
              <button 
                onClick={() => setActiveStep(3)} 
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${activeStep === 3 ? 'bg-[#00ff87] text-slate-950 font-bold shadow-md shadow-[#00ff87]/30' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              >
                01:30 Sanitizer
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
