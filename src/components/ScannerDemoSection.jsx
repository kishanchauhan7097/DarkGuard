import React, { useState } from 'react';
import { Search, ShieldAlert, ShieldCheck, Cpu, Terminal, Sparkles, RefreshCw, AlertTriangle, Check, ArrowRight, Code, Zap, Radar, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScannerDemoSection() {
  const presets = [
    { url: 'https://shop-scam-deals.com/checkout', name: 'Scam E-Commerce Checkout' },
    { url: 'https://booking-trap-hotel.net/reserve', name: 'Fake Urgency Hotel Booking' },
    { url: 'https://streaming-media.io/unsubscribe', name: 'Roach Motel Subscription' }
  ];

  const [inputUrl, setInputUrl] = useState('https://shop-scam-deals.com/checkout');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0); // 0: Idle, 1: DOM Parsing, 2: NLP Model Inference, 3: Completed
  const [scanResults, setScanResults] = useState(null);
  const [neutralized, setNeutralized] = useState(false);

  const mockDatabase = {
    'shop-scam-deals': {
      score: 38,
      status: 'CRITICAL DANGER',
      statusColor: 'text-red-400 border-red-500/40 bg-red-500/10',
      threatsCount: 3,
      domain: 'shop-scam-deals.com',
      threats: [
        {
          id: 1,
          type: 'Sneak-into-Basket',
          severity: 'CRITICAL',
          confidence: '99.2%',
          snippet: '<input type="checkbox" name="express_warranty" checked hidden />',
          explanation: 'Hidden checkbox pre-checks $14.99 warranty fee without explicit consent.'
        },
        {
          id: 2,
          type: 'Fake Scarcity Timer',
          severity: 'HIGH',
          confidence: '97.8%',
          snippet: '<div id="timer">Cart held for 04:59</div>',
          explanation: 'JavaScript timer resets dynamically upon cookie deletion or page reload.'
        },
        {
          id: 3,
          type: 'Confirmshaming',
          severity: 'MEDIUM',
          confidence: '94.5%',
          snippet: '<button>No thanks, I prefer paying full price</button>',
          explanation: 'Manipulative wording designed to induce guilt when declining offer.'
        }
      ]
    },
    'booking-trap': {
      score: 45,
      status: 'HIGH RISK',
      statusColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
      threatsCount: 2,
      domain: 'booking-trap-hotel.net',
      threats: [
        {
          id: 1,
          type: 'Fake High Demand Alert',
          severity: 'HIGH',
          confidence: '98.5%',
          snippet: '<span class="alert">24 people viewing this room right now!</span>',
          explanation: 'Hardcoded random integer generator producing artificial urgency alerts.'
        },
        {
          id: 2,
          type: 'Hidden Service Charge',
          severity: 'HIGH',
          confidence: '96.1%',
          snippet: '<span style="font-size:4px; opacity:0 font-color:#fff">+$35 Resort Fee</span>',
          explanation: 'Micro-text visual obfuscation hiding compulsory resort fees.'
        }
      ]
    },
    'streaming-media': {
      score: 28,
      status: 'CRITICAL DANGER',
      statusColor: 'text-red-500 border-red-600/50 bg-red-600/10',
      threatsCount: 2,
      domain: 'streaming-media.io',
      threats: [
        {
          id: 1,
          type: 'Roach Motel Unsubscribe',
          severity: 'CRITICAL',
          confidence: '99.6%',
          snippet: '<a href="mailto:support@stream.io?subject=CancelReq">Contact Support</a>',
          explanation: 'Online cancellation link leads to manual support inbox without immediate action.'
        },
        {
          id: 2,
          type: 'Forced Continuity',
          severity: 'HIGH',
          confidence: '98.2%',
          snippet: '<input type="hidden" name="auto_renew" value="true" />',
          explanation: 'Mandatory auto-renewal enabled without opt-out selection box.'
        }
      ]
    }
  };

  const handleStartScan = (targetUrl = inputUrl) => {
    setIsScanning(true);
    setScanStep(1);
    setNeutralized(false);
    setScanResults(null);

    // Step 1: DOM Parsing
    setTimeout(() => {
      setScanStep(2);
      // Step 2: NLP Model Inference
      setTimeout(() => {
        setScanStep(3);
        setIsScanning(false);

        let matched = mockDatabase['shop-scam-deals'];
        if (targetUrl.includes('booking')) matched = mockDatabase['booking-trap'];
        else if (targetUrl.includes('streaming')) matched = mockDatabase['streaming-media'];
        
        setScanResults(matched);
      }, 900);
    }, 800);
  };

  const handleNeutralizeAll = () => {
    setNeutralized(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00ff87', '#00f2fe', '#3b82f6']
    });
  };

  return (
    <section id="live-demo" className="py-28 relative border-t border-white/5 bg-[#030712]/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-radial-glow-blue blur-3xl pointer-events-none opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <Radar className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Real-Time Security Scanner</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] text-white tracking-tight">
            Tactical Threat Radar: <br />
            <span className="bg-gradient-to-r from-cyan-400 via-[#00ff87] to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,242,254,0.35)]">
              Simulate Live DOM Infiltration
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Test any target URL against DarkGuard's dual-engine AST parser and HuggingFace DeBERTa NLP classifier to unmask coercive patterns.
          </p>
        </div>

        {/* Tactical Scanner Console */}
        <div className="mt-12 max-w-4xl mx-auto glass-panel rounded-3xl border border-white/15 p-6 md:p-8 shadow-2xl space-y-6">
          
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Test Vectors:
            </span>
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputUrl(preset.url);
                  handleStartScan(preset.url);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                  inputUrl === preset.url
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md'
                    : 'bg-slate-900 text-slate-400 border border-white/5 hover:text-white'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* Search Input & Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Enter URL to inspect (e.g. https://target-site.com/checkout)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#050b18] border border-white/10 text-slate-100 placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 shadow-inner transition-all"
              />
            </div>
            
            <button
              onClick={() => handleStartScan(inputUrl)}
              disabled={isScanning}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-[#00ff87] text-slate-950 font-black font-['Space_Grotesk'] text-sm tracking-wide shrink-0 flex items-center justify-center gap-2.5 hover:opacity-90 shadow-xl shadow-cyan-500/20 transition-all active:scale-95 disabled:opacity-50"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Scanning DOM...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-slate-950" />
                  <span>Run Live Scan</span>
                </>
              )}
            </button>
          </div>

          {/* Scanning Progress Pipeline */}
          {isScanning && (
            <div className="bg-[#050b18] p-5 rounded-2xl border border-cyan-500/30 space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  {scanStep === 1 && 'Step 1/2: Extracting Dynamic DOM Mutation AST...'}
                  {scanStep === 2 && 'Step 2/2: DeBERTa Quantized Model Inference...'}
                </span>
                <span className="text-slate-400">{scanStep === 1 ? '50%' : '90%'}</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-[#00ff87] h-full transition-all duration-500"
                  style={{ width: scanStep === 1 ? '50%' : '90%' }}
                />
              </div>
            </div>
          )}

          {/* Scan Results Panel */}
          {scanResults && !isScanning && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
              
              {/* Radar Score & Risk Banner */}
              <div className="p-6 rounded-2xl bg-[#050b18] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex items-center gap-5">
                  
                  {/* Trust Score Gauge */}
                  <div className="relative w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center shadow-inner">
                    <span className="text-xs font-mono text-slate-400">Trust Score</span>
                    <span className={`text-2xl font-black font-mono ${neutralized ? 'text-[#00ff87]' : 'text-red-400'}`}>
                      {neutralized ? '98' : scanResults.score}
                    </span>
                    <span className="text-[10px] text-slate-500">/ 100</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${neutralized ? 'text-[#00ff87] border-[#00ff87]/40 bg-[#00ff87]/10' : scanResults.statusColor}`}>
                        {neutralized ? 'TRUST CERTIFIED' : scanResults.status}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {neutralized ? 'All threats neutralized' : `${scanResults.threatsCount} Active Dark Patterns Flagged`}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white mt-1.5 font-mono">
                      Target Domain: <span className="text-cyan-400">{scanResults.domain}</span>
                    </div>
                  </div>
                </div>

                {/* Neutralize Action */}
                {!neutralized ? (
                  <button
                    onClick={handleNeutralizeAll}
                    className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#00ff87] hover:bg-[#00ffa3] text-slate-950 font-black font-['Space_Grotesk'] text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#00ff87]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Neutralize All Threats</span>
                  </button>
                ) : (
                  <div className="px-5 py-3 rounded-xl bg-[#00ff87]/15 border border-[#00ff87]/40 text-[#00ff87] text-xs font-mono font-bold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00ff87]" />
                    <span>DOM Tree Sanitized (0 Coercive Patterns)</span>
                  </div>
                )}
              </div>

              {/* Detected Threat Cards */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  Telemetry Breakdown ({scanResults.threats.length} Vectors)
                </div>

                {scanResults.threats.map((threat) => (
                  <div 
                    key={threat.id}
                    className={`p-5 rounded-2xl border transition-all duration-300 ${
                      neutralized 
                        ? 'bg-[#050b18]/60 border-[#00ff87]/30' 
                        : 'bg-[#050b18] border-red-500/30'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        {neutralized ? (
                          <span className="p-1 rounded-md bg-[#00ff87]/20 text-[#00ff87]">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="p-1 rounded-md bg-red-500/20 text-red-400">
                            <AlertTriangle className="w-3.5 h-3.5" />
                          </span>
                        )}
                        <span className="text-sm font-bold text-white font-['Space_Grotesk']">
                          {threat.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                          AI Confidence: {threat.confidence}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${neutralized ? 'bg-[#00ff87]/20 text-[#00ff87]' : 'bg-red-500/20 text-red-400'}`}>
                          {neutralized ? 'MUTATED & SAFE' : threat.severity}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {threat.explanation}
                    </p>

                    <div className="bg-slate-950 p-2.5 rounded-lg border border-white/5 font-mono text-[11px] text-slate-400 overflow-x-auto">
                      <code>{threat.snippet}</code>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
