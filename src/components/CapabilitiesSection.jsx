import React from 'react';
import { Shield, Eye, Brain, Wand2, CheckCircle2, Lock, Zap, FileCode2, Sparkles, Cpu, Layers } from 'lucide-react';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      id: 'active-defense',
      title: 'Active DOM Mutation Sentinel',
      icon: Shield,
      color: 'text-[#00ff87]',
      borderColor: 'hover:border-[#00ff87]/50 hover:shadow-[#00ff87]/15',
      badge: 'DOM Mutator Engine',
      description: 'Monitors DOM MutationObserver events in sub-millisecond cycles. Intercepts hidden cart insertions, auto-renew opt-ins, and sneak-into-basket charges before checkout submission.',
      features: ['DOM Tree Observer Hooks', 'Zero Latency Form Interceptor', 'Pre-Checked Input Unmasker']
    },
    {
      id: 'checkbox-detection',
      title: 'Visual Heuristic & Contrast Scanner',
      icon: Eye,
      color: 'text-cyan-400',
      borderColor: 'hover:border-cyan-400/50 hover:shadow-cyan-400/15',
      badge: 'Geometry & Contrast AI',
      description: 'Scans element geometry, luminance contrast ratios, and visibility styling. Automatically detects micro-text disclosures and neutralizes camouflaged opt-outs.',
      features: ['Luminance Contrast Analysis', 'CSS Obfuscation Unmasker', 'Auto Un-Check Automation']
    },
    {
      id: 'nlp-analysis',
      title: 'DeBERTa NLP Intent Classification',
      icon: Brain,
      color: 'text-purple-400',
      borderColor: 'hover:border-purple-400/50 hover:shadow-purple-400/15',
      badge: 'HuggingFace Transformer',
      description: 'Leverages lightweight quantized transformer models to classify sentiment, confirmshaming, and misleading opt-out phrasing with 99.4% accuracy.',
      features: ['Quantized DeBERTa-v3 Model', 'Confirmshaming Classifier', 'Local / Edge Cached Inference']
    },
    {
      id: 'visual-neutralization',
      title: 'Shadow DOM Visual Neutralizer',
      icon: Wand2,
      color: 'text-blue-400',
      borderColor: 'hover:border-blue-400/50 hover:shadow-blue-400/15',
      badge: 'CSS Shadow Injector',
      description: 'Injects dynamic non-destructive styles in an isolated Shadow DOM to freeze fake countdowns, unmask roach motel paths, and format guilt buttons into neutral links.',
      features: ['JavaScript Timer Freezer', 'Guilt-Text Neutralizer', 'Non-Destructive Shadow DOM']
    }
  ];

  return (
    <section id="capabilities" className="py-28 relative border-t border-white/5 bg-[#030712]/60">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[500px] bg-radial-glow blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] shadow-lg shadow-[#00ff87]/10 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5" />
            <span>Tactical Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] text-white tracking-tight">
            Engineered for <br />
            <span className="bg-gradient-to-r from-[#00ff87] via-cyan-400 to-[#3b82f6] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,135,0.4)]">
              Total Digital Autonomy
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            DarkGuard fuses browser-level heuristic DOM inspection with state-of-the-art quantized NLP transformer models to eliminate manipulative web interfaces effortlessly.
          </p>
        </div>

        {/* 4 Core Capabilities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 perspective-1000">
          {capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div 
                key={cap.id}
                className={`group p-8 rounded-3xl glass-card-3d border border-white/10 transition-all duration-500 ${cap.borderColor} hover:-translate-y-2 shadow-2xl flex flex-col justify-between space-y-6`}
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-slate-900 border border-white/10 ${cap.color} group-hover:scale-110 group-hover:border-white/20 transition-all duration-300 shadow-lg`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-white/10 text-xs font-mono text-slate-300 shadow-inner">
                      {cap.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white group-hover:text-[#00ff87] transition-colors">
                    {cap.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mt-3.5">
                    {cap.description}
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="pt-5 border-t border-white/10 space-y-2.5">
                  {cap.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00ff87] shrink-0 drop-shadow-[0_0_6px_rgba(0,255,135,0.6)]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
