import React from 'react';
import { Shield, Eye, Brain, Wand2, CheckCircle2, Lock, Zap, FileCode2 } from 'lucide-react';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      id: 'active-defense',
      title: 'Active Defense Mechanism',
      icon: Shield,
      color: 'text-[#00ff87]',
      borderColor: 'hover:border-[#00ff87]/50 hover:shadow-[#00ff87]/10',
      badge: 'DOM Mutator',
      description: 'Monitors DOM MutationObserver events in real-time. Intercepts hidden cart insertions, auto-renew opt-ins, and sneak-into-basket charges before checkout submission.',
      features: ['DOM Tree Observer', 'Zero Latency Hook', 'Form Submission Interceptor']
    },
    {
      id: 'checkbox-detection',
      title: 'Hidden Checkbox Detection',
      icon: Eye,
      color: 'text-blue-400',
      borderColor: 'hover:border-blue-400/50 hover:shadow-blue-400/10',
      badge: 'Visual Heuristics',
      description: 'Scans element geometry, contrast ratios, and visibility attributes. Automatically un-checks default marketing opt-ins and unmasks hidden recurring fees.',
      features: ['Opacity & Contrast Analysis', 'CSS Obfuscation Unmasker', 'Auto Un-check Engine']
    },
    {
      id: 'nlp-analysis',
      title: 'NLP Context Analysis',
      icon: Brain,
      color: 'text-purple-400',
      borderColor: 'hover:border-purple-400/50 hover:shadow-purple-400/10',
      badge: 'HuggingFace DeBERTa',
      description: 'Leverages lightweight quantized transformer models to classify sentiment, confirmshaming, and misleading opt-out phrasing with 99.4% accuracy.',
      features: ['Quantized DeBERTa-v3', 'Confirmshaming Classifier', 'Sub-15ms Local/Cloud Cache']
    },
    {
      id: 'visual-neutralization',
      title: 'Real-Time Visual Neutralization',
      icon: Wand2,
      color: 'text-cyan-400',
      borderColor: 'hover:border-cyan-400/50 hover:shadow-cyan-400/10',
      badge: 'CSS Injector',
      description: 'Injects dynamic CSS overrides to neutralize deceptive popups, strip fake countdown timers, and re-style shaming declination buttons into transparent links.',
      features: ['Countdown Freezer', 'Neutral Text Rewriter', 'Roach Motel Unmasker']
    }
  ];

  return (
    <section id="capabilities" className="py-24 relative bg-[#0a0e17] border-t border-slate-800">
      
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00ff87]/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-xs font-mono text-[#00ff87]">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white">
            Engineered for <span className="text-[#00ff87]">Total Digital Autonomy</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            DarkGuard combines browser-level heuristic DOM inspection with state-of-the-art NLP model inference to neutralize manipulative interfaces seamlessly.
          </p>
        </div>

        {/* 4 Core Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div 
                key={cap.id}
                className={`group glass-panel p-8 rounded-2xl border border-slate-800 transition-all duration-300 ${cap.borderColor} hover:-translate-y-1 shadow-xl space-y-6`}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-xl bg-slate-900 border border-slate-800 ${cap.color} group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    {cap.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff87] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-3">
                    {cap.description}
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {cap.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff87]" />
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
