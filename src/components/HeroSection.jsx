import React, { useState, useEffect } from 'react';
import { Shield, ShieldCheck, Download, Play, Zap, Eye, Lock, Terminal, ArrowRight, AlertTriangle, Sparkles, CheckCircle2, Activity, Cpu } from 'lucide-react';
import HolographicShield3D from './HolographicShield3D';

export default function HeroSection({ onOpenInstallModal, onOpenDemoModal }) {
  const [blockedCount, setBlockedCount] = useState(148520);
  const [shieldActive, setShieldActive] = useState(true);

  // Live counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBlockedCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-glow pointer-events-none blur-3xl opacity-80" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-radial-glow-blue pointer-events-none blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Highlights, and CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] shadow-xl shadow-[#00ff87]/10 backdrop-blur-xl animate-float">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff87]"></span>
              </span>
              <span className="font-bold tracking-wide uppercase">Manifest V3 Sentinel</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-sans font-medium">HuggingFace DeBERTa Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Space_Grotesk'] tracking-tight text-white leading-[1.08]">
              Shielding Your Intent, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#00ff87] via-[#00f2fe] to-[#3b82f6] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,135,0.35)]">
                Not Just Your Network.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Proactive real-time defense against digital coercion, hidden checkout fees, forced subscriptions, and deceptive UI dark patterns right in your browser.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenInstallModal}
                className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl bg-[#00ff87] hover:bg-[#00ffa3] text-slate-950 font-extrabold text-base flex items-center justify-center gap-3 transition-all shadow-2xl shadow-[#00ff87]/30 hover:shadow-[#00ff87]/50 hover:-translate-y-1 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                <span>Add to Chrome / Brave</span>
                <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-white font-bold text-base flex items-center justify-center gap-3 transition-all backdrop-blur-xl hover:shadow-xl hover:shadow-cyan-500/15 hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                  <Play className="w-4 h-4 text-cyan-400 ml-0.5" fill="#38bdf8" />
                </div>
                <span>Watch Live Demo</span>
              </button>
            </div>

            {/* Live Stats Counters */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center justify-center lg:justify-start gap-1">
                  <span>{blockedCount.toLocaleString()}</span>
                  <span className="text-xs text-[#00ff87] font-extrabold">+</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Dark Patterns Defused</div>
              </div>
              
              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 flex items-center justify-center lg:justify-start">
                  &lt; 12ms
                </div>
                <div className="text-xs text-slate-400 mt-1">DOM Scan Latency</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#00ff87] flex items-center justify-center lg:justify-start gap-1">
                  99.4%
                </div>
                <div className="text-xs text-slate-400 mt-1">DeBERTa Accuracy</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Holographic Cyber Shield */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Radial Glow around 3D Shield */}
            <div className={`absolute w-80 h-80 rounded-full blur-3xl transition-colors duration-700 ${
              shieldActive ? 'bg-[#00ff87]/20 animate-pulse' : 'bg-red-500/20'
            }`} />
            <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            {/* 3D Glassmorphic Sentinel HUD Container */}
            <div className="relative w-full max-w-lg p-6 glass-panel rounded-3xl border border-white/10 shadow-2xl shadow-black/90 space-y-5">
              
              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#00ff87]/80 shadow-[0_0_8px_rgba(0,255,135,0.5)]"></span>
                  <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">DarkGuard 3D Sentinel</span>
                </div>
                
                <button 
                  onClick={() => setShieldActive(!shieldActive)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-300 shadow-md ${
                    shieldActive 
                      ? 'bg-[#00ff87]/20 text-[#00ff87] border border-[#00ff87]/50 shadow-[#00ff87]/20' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/50 shadow-red-500/20'
                  }`}
                >
                  {shieldActive ? 'SHIELD: ACTIVE' : 'SHIELD: PAUSED'}
                </button>
              </div>

              {/* Central 3D Three.js Holographic Shield Canvas */}
              <div className="relative h-[320px] sm:h-[360px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#030712]/60 border border-white/5">
                <HolographicShield3D isActive={shieldActive} />

                {/* Floating Orbit HUD Badges */}
                <div className="absolute top-3 left-3 glass-panel px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-slate-200 flex items-center gap-2 shadow-xl animate-float">
                  <Lock className="w-3.5 h-3.5 text-[#00ff87]" />
                  <span>Hidden Fees Intercepted</span>
                </div>

                <div className="absolute bottom-3 right-3 glass-panel px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-slate-200 flex items-center gap-2 shadow-xl animate-float-reverse">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Fake Timers Neutralized</span>
                </div>
              </div>

              {/* Live Protection Telemetry Status Bar */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    Heuristic Mutation Engine:
                  </span>
                  <span className={`flex items-center gap-1.5 font-bold ${shieldActive ? 'text-[#00ff87]' : 'text-red-400'}`}>
                    <span className={`w-2 h-2 rounded-full ${shieldActive ? 'bg-[#00ff87] animate-ping' : 'bg-red-500'}`}></span>
                    {shieldActive ? 'MONITORING ACTIVE DOM' : 'STANDBY MODE'}
                  </span>
                </div>
                
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className={`h-full rounded-full transition-all duration-700 ${
                    shieldActive 
                      ? 'w-full bg-gradient-to-r from-[#00ff87] via-cyan-400 to-[#3b82f6] shadow-[0_0_10px_rgba(0,255,135,0.6)]' 
                      : 'w-1/12 bg-red-500'
                  }`}></div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
