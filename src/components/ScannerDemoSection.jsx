import React, { useState, useEffect } from 'react';
import { Search, ShieldAlert, ShieldCheck, Cpu, Terminal, Sparkles, RefreshCw, AlertTriangle, Check, ArrowRight, Code, Zap } from 'lucide-react';
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

  // Database of mock analysis responses based on URL patterns
  const mockDatabase = {
    'shop-scam-deals': {
      score: 38,
      status: 'DANGER',
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
      threatsCount: 3,
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

    // Step 1: DOM Parsing (800ms)
    setTimeout(() => {
      setScanStep(2);
      // Step 2: NLP Model Inference (900ms)
      setTimeout(() => {
        setScanStep(3);
        setIsScanning(false);

        // Determine result based on input match or fallback default
        let matched = mockDatabase['shop-scam-deals'];
        if (targetUrl.includes('booking')) matched = mockDatabase['booking-trap'];
        if (targetUrl.includes('stream')) matched = mockDatabase['streaming-media'];

        setScanResults(matched);
      }, 900);
    }, 800);
  };

  // Run initial scan on load
  useEffect(() => {
    handleStartScan('https://shop-scam-deals.com/checkout');
  }, []);

  const handleNeutralizeAll = () => {
    setNeutralized(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="live-demo" className="py-24 relative bg-[#070a11] border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Live Web Scanner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white">
            Test Any Website for <br />
            <span className="bg-gradient-to-r from-blue-400 via-[#00ff87] to-[#00ff87] bg-clip-text text-transparent">
              Dark Patterns in Real-Time
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experience how DarkGuard's sub-15ms heuristic parser and HuggingFace DeBERTa model analyze web page DOM structures live.
          </p>
        </div>

        {/* URL Input Bar & Presets */}
        <div className="mt-10 max-w-4xl mx-auto space-y-3">
          
          {/* Main Input Box */}
          <div className="glass-panel p-2 rounded-2xl border border-slate-700/80 flex items-center gap-3 shadow-2xl">
            <div className="pl-3 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            
            <input 
              type="text" 
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Paste website URL (e.g. https://store-deals.com/checkout)..."
              className="w-full bg-transparent text-white font-mono text-sm sm:text-base focus:outline-none placeholder:text-slate-600"
            />

            <button
              onClick={() => handleStartScan(inputUrl)}
              disabled={isScanning}
              className="px-6 py-3 rounded-xl bg-[#00ff87] hover:bg-[#00e57a] text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-[#00ff87]/20 disabled:opacity-50 whitespace-nowrap"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Scanning DOM...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Scan Website</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2 justify-center pt-1 text-xs">
            <span className="text-slate-500 font-mono">Try Preset Scams:</span>
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputUrl(preset.url);
                  handleStartScan(preset.url);
                }}
                className="px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors"
              >
                {preset.name}
              </button>
            ))}
          </div>

        </div>

        {/* Dynamic Scanning Status State */}
        {isScanning && (
          <div className="mt-8 max-w-4xl mx-auto glass-panel p-8 rounded-2xl border border-slate-800 text-center space-y-6 animate-in fade-in duration-300">
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin"></div>
              <Cpu className="w-8 h-8 text-[#00ff87] animate-pulse" />
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white font-mono">
                {scanStep === 1 && 'Phase 1: Traversing DOM Node Hierarchy...'}
                {scanStep === 2 && 'Phase 2: HuggingFace NLP Intent Inference...'}
              </h4>
              <p className="text-xs text-slate-400 font-mono">
                {scanStep === 1 && 'Extracting text nodes, hidden input attributes, and inline CSS styles.'}
                {scanStep === 2 && 'Classifying coercion intent against DeBERTa-v3 multi-label model.'}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md mx-auto bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
              <div className={`h-full bg-gradient-to-r from-blue-500 to-[#00ff87] transition-all duration-700 ${scanStep === 1 ? 'w-1/2' : 'w-full'}`}></div>
            </div>
          </div>
        )}

        {/* Scanning Results Dashboard */}
        {!isScanning && scanResults && (
          <div className="mt-8 max-w-4xl mx-auto glass-panel rounded-2xl border border-slate-800 p-6 md:p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500 shadow-2xl">
            
            {/* Top Score Banner */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-slate-800">
              
              {/* Score Gauge Left */}
              <div className="md:col-span-5 flex items-center gap-5">
                <div className="relative w-24 h-24 rounded-full border-4 border-slate-800 flex items-center justify-center bg-slate-950 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-800"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className={neutralized ? 'text-[#00ff87]' : 'text-red-500'}
                      strokeDasharray={`${neutralized ? 95 : scanResults.score}, 100`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-bold font-mono text-white">
                      {neutralized ? '95' : scanResults.score}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Trust Score</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                      neutralized 
                        ? 'text-[#00ff87] border-[#00ff87]/40 bg-[#00ff87]/10' 
                        : scanResults.statusColor
                    }`}>
                      {neutralized ? 'SAFE & SANITIZED' : scanResults.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1.5">{scanResults.domain}</h3>
                  <p className="text-xs text-slate-400">
                    {neutralized 
                      ? 'All dark pattern vectors successfully suppressed.' 
                      : `${scanResults.threatsCount} manipulative threat vectors detected.`}
                  </p>
                </div>
              </div>

              {/* Action Neutralize Button Right */}
              <div className="md:col-span-7 flex flex-col sm:flex-row items-center justify-end gap-3">
                {neutralized ? (
                  <div className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#00ff87]/20 border border-[#00ff87]/50 text-[#00ff87] font-bold text-sm flex items-center justify-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#00ff87]" />
                    <span>Neutralization Active</span>
                  </div>
                ) : (
                  <button
                    onClick={handleNeutralizeAll}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#00ff87] hover:bg-[#00e57a] text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#00ff87]/20"
                  >
                    <Sparkles className="w-4 h-4 fill-slate-950" />
                    <span>Neutralize All Threats</span>
                  </button>
                )}
              </div>

            </div>

            {/* Threat Detail Cards */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00ff87]" />
                Detected Threat Vectors ({scanResults.threats.length})
              </h4>

              {scanResults.threats.map((threat) => (
                <div 
                  key={threat.id}
                  className={`p-4 rounded-xl border transition-all ${
                    neutralized 
                      ? 'bg-slate-900/40 border-slate-800 opacity-60' 
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                        neutralized ? 'bg-slate-800 text-slate-400' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {threat.severity}
                      </span>
                      <h5 className="text-base font-bold text-white">{threat.type}</h5>
                    </div>

                    <span className="text-xs font-mono text-slate-400">
                      NLP Confidence: <span className="text-[#00ff87]">{threat.confidence}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mt-2">
                    {threat.explanation}
                  </p>

                  <div className="mt-3 bg-slate-900 p-2.5 rounded-lg border border-slate-800/80 font-mono text-[11px] text-slate-300 flex items-center justify-between overflow-x-auto">
                    <code className="text-blue-300">{threat.snippet}</code>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ml-2 flex-shrink-0 ${
                      neutralized ? 'bg-[#00ff87]/20 text-[#00ff87]' : 'bg-red-950 text-red-400'
                    }`}>
                      {neutralized ? 'DISABLED' : 'ACTIVE DOM'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
