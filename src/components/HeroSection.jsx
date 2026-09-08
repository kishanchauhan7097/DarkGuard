import React, { useState, useEffect, useRef } from 'react';
import { Shield, ShieldCheck, Download, Play, Zap, Eye, Lock, Terminal, ArrowRight, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenInstallModal, onOpenDemoModal }) {
  const [blockedCount, setBlockedCount] = useState(148520);
  const [shieldActive, setShieldActive] = useState(true);
  const canvasRef = useRef(null);

  // Live counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBlockedCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Futuristic Canvas Particle & Cyber Grid Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particles array
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.5 ? '#00ff87' : '#3b82f6',
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#00ff87';
            ctx.globalAlpha = (1 - dist / 90) * 0.15;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid">
      
      {/* Background Canvas & Radial Glow */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60 z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-glow pointer-events-none blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] shadow-lg shadow-[#00ff87]/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#00ff87] animate-pulse"></span>
              <span>Manifest V3 Next-Gen Security</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-sans">Powered by HuggingFace NLP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white leading-[1.1]">
              Shielding Your Intent, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#00ff87] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
                Not Just Your Network.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Real-time defense against digital coercion, manipulative checkout traps, forced subscriptions, and social engineering dark patterns in your browser.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenInstallModal}
                className="w-full sm:w-auto relative group overflow-hidden px-7 py-4 rounded-xl bg-[#00ff87] hover:bg-[#00e57a] text-slate-950 font-bold text-base flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#00ff87]/25 hover:shadow-[#00ff87]/40 active:scale-95"
              >
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                <span>Add to Browser (It's Free)</span>
                <ArrowRight className="w-4 h-4 opacity-75 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-semibold text-base flex items-center justify-center gap-3 transition-all backdrop-blur-md hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-blue-400 ml-0.5" fill="#60a5fa" />
                </div>
                <span>Watch Live Demo</span>
              </button>
            </div>

            {/* Live Stats Counter */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl font-bold font-mono text-white flex items-center justify-center lg:justify-start gap-1">
                  <span>{blockedCount.toLocaleString()}</span>
                  <span className="text-xs text-[#00ff87] font-semibold">+</span>
                </div>
                <div className="text-xs text-slate-400">Dark Patterns Blocked</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white flex items-center justify-center lg:justify-start">
                  &lt; 15ms
                </div>
                <div className="text-xs text-slate-400">DOM Analysis Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#00ff87] flex items-center justify-center lg:justify-start gap-1">
                  99.4%
                </div>
                <div className="text-xs text-slate-400">NLP Accuracy Rate</div>
              </div>
            </div>

          </div>

          {/* Right Column: Futuristic Interactive 3D Cyber Shield Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Shield Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#00ff87]/15 blur-3xl animate-pulse"></div>
            <div className="absolute w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000"></div>

            {/* Futuristic Shield Card */}
            <div className="relative w-full max-w-md p-6 glass-panel rounded-2xl border border-slate-700/80 shadow-2xl shadow-black/80 space-y-6">
              
              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 font-mono text-xs text-slate-400">DarkGuard.ext v1.2</span>
                </div>
                <button 
                  onClick={() => setShieldActive(!shieldActive)}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                    shieldActive 
                      ? 'bg-[#00ff87]/20 text-[#00ff87] border border-[#00ff87]/40' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/40'
                  }`}
                >
                  {shieldActive ? 'SHIELD: ACTIVE' : 'SHIELD: PAUSED'}
                </button>
              </div>

              {/* Central Glowing 3D Shield Sphere Visualizer */}
              <div className="relative h-64 flex items-center justify-center">
                
                {/* Orbit Rings */}
                <div className={`absolute w-56 h-56 rounded-full border border-dashed ${shieldActive ? 'border-[#00ff87]/40 animate-rotate-orbit' : 'border-slate-700'}`}></div>
                <div className={`absolute w-44 h-44 rounded-full border ${shieldActive ? 'border-blue-500/40 animate-pulse' : 'border-slate-800'}`}></div>
                
                {/* Core Shield Emblem */}
                <div className={`relative z-10 w-28 h-28 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  shieldActive 
                    ? 'bg-gradient-to-br from-slate-900 to-[#07131e] border-2 border-[#00ff87] shadow-[0_0_50px_rgba(0,255,135,0.35)]' 
                    : 'bg-slate-900 border-2 border-red-500/50 shadow-none'
                }`}>
                  <Shield className={`w-14 h-14 transition-all duration-500 ${shieldActive ? 'text-[#00ff87] animate-pulse-glow' : 'text-slate-600'}`} />
                  
                  {/* Glowing inner checkmark */}
                  {shieldActive && (
                    <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-[#00ff87] flex items-center justify-center text-slate-950 shadow-md">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Floating Status Badges around Shield */}
                <div className="absolute top-2 left-0 glass-panel px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 shadow-lg animate-float">
                  <Lock className="w-3.5 h-3.5 text-[#00ff87]" />
                  <span>Sneak-Basket Blocked</span>
                </div>

                <div className="absolute bottom-2 right-0 glass-panel px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Fake Scarcity Defused</span>
                </div>

              </div>

              {/* Live Protection Status Bar */}
              <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/90 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Heuristic Engine:</span>
                  <span className="text-[#00ff87] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-ping"></span>
                    Scanning Active DOM
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className={`h-full transition-all duration-500 ${shieldActive ? 'w-full bg-gradient-to-r from-[#00ff87] to-blue-500 animate-pulse' : 'w-0 bg-red-500'}`}></div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
