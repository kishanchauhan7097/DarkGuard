import React from 'react';
import { Terminal, Cpu, Cloud, Code2, ArrowRight, Layers, Database, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ArchitectureSection() {
  const steps = [
    {
      step: '01',
      title: 'DOM Extraction',
      subtitle: 'Browser Content Script',
      icon: Code2,
      tech: 'Manifest V3 JS Engine',
      description: 'As web pages load, DarkGuard content script injects lightweight MutationObservers to extract live form fields, button copy, and dynamic overlays.'
    },
    {
      step: '02',
      title: 'Heuristic Scan',
      subtitle: 'Rule-Based Regex Filtering',
      icon: Terminal,
      tech: 'Sub-5ms Local WASM',
      description: 'Executes pattern matching rules to flag pre-selected checkboxes, hidden CSS elements (`display:none` or `opacity:0`), and reset countdown timers.'
    },
    {
      step: '03',
      title: 'Cloud NLP Analysis',
      subtitle: 'Deep Intent Classification',
      icon: Cloud,
      tech: 'Python FastAPI + ONNX',
      description: 'Ambiguous copy or complex confirmshaming is evaluated via lightweight ONNX Quantized DeBERTa-v3 model for intent scoring.'
    },
    {
      step: '04',
      title: 'UI Injection',
      subtitle: 'Real-Time Sanitization',
      icon: ShieldCheck,
      tech: 'Shadow DOM Sanitizer',
      description: 'DarkGuard modifies element styles inside an isolated Shadow DOM, unchecking deceptive inputs, freezing timers, and displaying clear trust tags.'
    }
  ];

  const techStack = [
    { name: 'Manifest V3', category: 'Browser Extension Core', desc: 'DeclarativeNetRequest & background service workers for zero browser lag.', badge: 'Client Engine' },
    { name: 'Python FastAPI', category: 'High-Speed API', desc: 'Async Python microservice delivering sub-25ms inference response.', badge: 'Backend' },
    { name: 'HuggingFace NLP', category: 'DeBERTa Transformer', desc: 'Fine-tuned on 10,000+ labeled dark pattern DOM datasets.', badge: 'AI / ML' },
    { name: 'PyTorch / ONNX', category: 'Model Optimization', desc: 'Quantized INT8 weights optimized for minimal memory footprint.', badge: 'Inference' }
  ];

  return (
    <section id="architecture" className="py-28 relative border-t border-white/5 bg-[#030712]/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-radial-glow-blue blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Flow</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] text-white tracking-tight">
            How DarkGuard Operates: <br />
            <span className="bg-gradient-to-r from-cyan-400 via-[#00ff87] to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]">
              From DOM Extraction to Visual Sanitization
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A privacy-first pipeline engineered for zero latency, local caching, and robust security.
          </p>
        </div>

        {/* Process Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="relative glass-card-3d p-7 rounded-3xl border border-white/10 hover:border-[#00ff87]/50 transition-all duration-500 hover:-translate-y-2 space-y-4 group shadow-xl"
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-[#00ff87]/30 group-hover:text-[#00ff87] transition-colors">
                    {item.step}
                  </span>
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 text-[#00ff87] group-hover:scale-110 transition-transform shadow-md">
                    <IconComponent className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,135,0.6)]" />
                  </div>
                </div>

                {/* Titles */}
                <div>
                  <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white group-hover:text-[#00ff87] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">{item.subtitle}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Tech Badge */}
                <div className="pt-3.5 border-t border-white/10 text-[11px] font-mono text-[#00ff87] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#00ff87]" />
                  <span>{item.tech}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Matrix */}
        <div className="mt-16 p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              Core Technology Stack
            </h3>
            <span className="text-xs font-mono text-slate-400">Open-Source & Privacy-First</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#050b18]/80 border border-white/5 space-y-2 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-base">{tech.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {tech.badge}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400">{tech.category}</div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
