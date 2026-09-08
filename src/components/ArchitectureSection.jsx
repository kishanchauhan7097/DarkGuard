import React from 'react';
import { Terminal, Cpu, Cloud, Code2, ArrowRight, Layers, Database, ShieldCheck, Zap } from 'lucide-react';

export default function ArchitectureSection() {
  const steps = [
    {
      step: '01',
      title: 'DOM Extraction',
      subtitle: 'Browser Content Script',
      icon: Code2,
      tech: 'Manifest V3 JS Engine',
      description: 'As the web page loads, DarkGuard content script injects lightweight DOM MutationObservers to capture dynamic form fields, button texts, and modal overlays.'
    },
    {
      step: '02',
      title: 'Heuristic Scan',
      subtitle: 'Rule-Based Regex Filtering',
      icon: Terminal,
      tech: 'Local WASM Heuristics',
      description: 'Executes sub-5ms pattern rules to check for pre-selected checkboxes, hidden CSS elements (`display:none` or `opacity:0`), and reset timers.'
    },
    {
      step: '03',
      title: 'Cloud NLP Analysis',
      subtitle: 'Deep Intent Classification',
      icon: Cloud,
      tech: 'Python FastAPI + HuggingFace',
      description: 'Ambiguous copy or complex confirmshaming is evaluated via lightweight ONNX Quantized DeBERTa-v3 model for intent scoring.'
    },
    {
      step: '04',
      title: 'UI Injection',
      subtitle: 'Real-Time Visual Neutralization',
      icon: ShieldCheck,
      tech: 'Shadow DOM Sanitizer',
      description: 'DarkGuard modifies element styles in an isolated Shadow DOM, unchecks deceptive boxes, freezes fake countdowns, and displays clear trust tags.'
    }
  ];

  const techStack = [
    { name: 'Manifest V3', category: 'Browser Extension Standard', desc: 'Secure declarativeNetRequest & background service workers.', badge: 'Client Side' },
    { name: 'Python FastAPI', category: 'High-Speed API', desc: 'Async Python microservice delivering sub-30ms inference response.', badge: 'Backend' },
    { name: 'HuggingFace NLP', category: 'DeBERTa Transformer', desc: 'Fine-tuned on 10,000+ labeled dark pattern DOM datasets.', badge: 'AI / ML' },
    { name: 'PyTorch / ONNX', category: 'Model Optimization', desc: 'Quantized INT8 weights optimized for low RAM footprint.', badge: 'Inference' }
  ];

  return (
    <section id="architecture" className="py-24 relative bg-[#070a11] border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white">
            How DarkGuard Operates: <br />
            <span className="text-[#00ff87]">From DOM Extraction to Visual Neutralization</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A privacy-first pipeline engineered for zero latency, local caching, and robust security.
          </p>
        </div>

        {/* Process Flowchart Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative">
          
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="relative glass-panel p-6 rounded-2xl border border-slate-800 hover:border-[#00ff87]/40 transition-all duration-300 space-y-4 group"
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-[#00ff87]/40 group-hover:text-[#00ff87] transition-colors">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[#00ff87]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Titles */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00ff87] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">{item.subtitle}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Tech Badge */}
                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-[#00ff87] flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  <span>{item.tech}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Grid Cards */}
        <div className="mt-16 bg-slate-900/60 p-8 rounded-3xl border border-slate-800/80">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Powered by Modern Open Tech Stack</h3>
            <p className="text-xs text-slate-400 font-mono mt-1">Built to standards meeting Chrome Web Store & Edge Add-ons guidelines</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{tech.name}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {tech.badge}
                  </span>
                </div>
                <div className="text-xs text-[#00ff87] font-mono">{tech.category}</div>
                <p className="text-xs text-slate-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
