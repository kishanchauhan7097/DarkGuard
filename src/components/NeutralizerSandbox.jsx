import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, ShieldCheck, ShieldAlert, Sparkles, Check, AlertTriangle, ArrowRight, Eye, RefreshCw, Terminal, CheckCircle2, XCircle, Zap } from 'lucide-react';

export default function NeutralizerSandbox() {
  const [darkGuardEnabled, setDarkGuardEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState('checkout'); // 'checkout' | 'subscription' | 'download'
  const [isScanningTransition, setIsScanningTransition] = useState(false);

  const handleToggle = () => {
    setIsScanningTransition(true);
    setDarkGuardEnabled(prev => !prev);
    setTimeout(() => setIsScanningTransition(false), 600);
  };

  return (
    <section id="sandbox" className="py-28 relative border-t border-white/5 bg-[#030712]/70">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-radial-glow blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] shadow-lg shadow-[#00ff87]/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Neutralizer Sandbox</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] text-white tracking-tight">
            See DarkGuard in Action: <br />
            <span className="bg-gradient-to-r from-[#00ff87] via-[#00f2fe] to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,135,0.4)]">
              Before vs. After Neutralization
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Toggle the DarkGuard shield to watch deceptive UI tricks (hidden fees, fake scarcity countdowns, confirmshaming modals) stripped and sanitized in real-time.
          </p>
        </div>

        {/* Sandbox Controls Dock */}
        <div className="mt-12 max-w-4xl mx-auto glass-panel p-4 sm:p-5 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl shadow-black/80">
          
          {/* Preset Scenario Selector */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-white/5 w-full sm:w-auto justify-center">
            {[
              { id: 'checkout', label: '1. Sneak-in-Cart Checkout' },
              { id: 'subscription', label: '2. Roach Motel Unsubscribe' },
              { id: 'download', label: '3. Confirmshaming Modal' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-slate-800 text-[#00ff87] border border-[#00ff87]/40 shadow-lg shadow-[#00ff87]/15'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Master Extension Toggle Switch */}
          <div className="flex items-center gap-3 bg-slate-950/90 px-5 py-2.5 rounded-2xl border border-white/10 shadow-md">
            <span className={`text-xs font-mono font-bold transition-colors ${darkGuardEnabled ? 'text-slate-500' : 'text-red-400 font-extrabold drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]'}`}>
              DarkGuard OFF
            </span>
            <button
              onClick={handleToggle}
              className="relative focus:outline-none cursor-pointer transition-transform active:scale-95"
              aria-label="Toggle DarkGuard Shield"
            >
              {darkGuardEnabled ? (
                <ToggleRight className="w-10 h-10 text-[#00ff87] drop-shadow-[0_0_12px_rgba(0,255,135,0.8)]" />
              ) : (
                <ToggleLeft className="w-10 h-10 text-slate-500 hover:text-slate-400" />
              )}
            </button>
            <span className={`text-xs font-mono font-bold transition-colors ${darkGuardEnabled ? 'text-[#00ff87] font-extrabold drop-shadow-[0_0_8px_rgba(0,255,135,0.6)]' : 'text-slate-500'}`}>
              DarkGuard ON
            </span>
          </div>

        </div>

        {/* Sandbox Mock Browser Window */}
        <div className="mt-8 max-w-4xl mx-auto glass-panel rounded-3xl border border-white/15 shadow-2xl overflow-hidden relative">
          
          {/* Laser Scanline Beam on Toggle Transition */}
          {isScanningTransition && (
            <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-b from-transparent via-[#00ff87]/30 to-transparent animate-scanline" />
          )}

          {/* Browser Address Bar Header */}
          <div className="bg-[#050b18] px-5 py-3.5 border-b border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></span>
              <span className="w-3 h-3 rounded-full bg-[#00ff87]/90 shadow-[0_0_8px_rgba(0,255,135,0.6)]"></span>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-1.5 rounded-xl border border-white/10 text-xs font-mono text-slate-300 w-full max-w-md overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-slate-500">https://</span>
              <span className="text-cyan-400">
                {activeTab === 'checkout' && 'scam-flight-deals.com/checkout'}
                {activeTab === 'subscription' && 'gym-membership-app.io/cancel'}
                {activeTab === 'download' && 'free-pdf-converter.net/offer'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-300 ${
                darkGuardEnabled 
                  ? 'bg-[#00ff87]/15 text-[#00ff87] border border-[#00ff87]/40 shadow-[0_0_12px_rgba(0,255,135,0.2)]' 
                  : 'bg-red-500/15 text-red-400 border border-red-500/40 animate-pulse'
              }`}>
                {darkGuardEnabled ? <ShieldCheck className="w-4 h-4 text-[#00ff87]" /> : <ShieldAlert className="w-4 h-4 text-red-400" />}
                <span>{darkGuardEnabled ? 'UI Sanitized & Safe' : 'Raw Malicious DOM'}</span>
              </div>
            </div>
          </div>

          {/* Scenario Content Body */}
          <div className="p-6 md:p-10 bg-[#060b17] min-h-[420px] flex items-center justify-center">
            
            {/* SCENARIO 1: Sneak-into-Basket Checkout */}
            {activeTab === 'checkout' && (
              <div className="w-full max-w-lg bg-slate-900/90 rounded-2xl border border-white/10 p-6 md:p-8 space-y-6 shadow-xl relative">
                
                {/* Fake Scarcity Banner */}
                {darkGuardEnabled ? (
                  <div className="bg-[#00ff87]/10 border border-[#00ff87]/30 p-3 rounded-xl text-xs font-mono text-[#00ff87] flex items-center justify-between shadow-sm">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#00ff87]" />
                      DarkGuard neutralized fake countdown timer.
                    </span>
                    <span className="text-[10px] bg-[#00ff87]/20 px-2 py-0.5 rounded-full font-bold text-[#00ff87]">Sanitized</span>
                  </div>
                ) : (
                  <div className="bg-red-500/15 border border-red-500/40 p-3 rounded-xl text-xs font-mono text-red-400 flex items-center justify-between animate-pulse">
                    <span className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      ONLY 1 SEAT LEFT! OFFER EXPIRES IN 04:59!
                    </span>
                    <span className="text-[10px] bg-red-500/30 px-2 py-0.5 rounded-full font-bold text-red-300">Fake Urgency</span>
                  </div>
                )}

                {/* Cart Order Summary */}
                <div className="border-b border-white/10 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold font-['Space_Grotesk'] text-white">Flight Ticket (NYC → LON)</span>
                    <span className="text-lg font-bold font-mono text-white">$189.00</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Non-stop economy flight (Seat 14B)</div>
                </div>

                {/* Sneak-into-Basket Pre-Checked Add-on */}
                <div className={`p-4 rounded-xl border transition-all duration-300 ${
                  darkGuardEnabled 
                    ? 'bg-slate-950/60 border-[#00ff87]/30' 
                    : 'bg-red-950/30 border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked={!darkGuardEnabled} 
                        readOnly 
                        className={`w-5 h-5 rounded ${darkGuardEnabled ? 'accent-[#00ff87]' : 'accent-red-500'}`}
                      />
                      <div>
                        <div className="text-sm font-bold text-slate-100 flex items-center gap-2">
                          VIP Baggage Protection & Express Handling
                          {darkGuardEnabled ? (
                            <span className="text-[10px] bg-[#00ff87]/20 text-[#00ff87] px-2 py-0.5 rounded font-mono font-bold">Unchecked by DarkGuard</span>
                          ) : (
                            <span className="text-[10px] bg-red-500/30 text-red-300 px-2 py-0.5 rounded font-mono font-bold">Pre-Checked Default</span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">Automated baggage re-routing & priority claim tags</div>
                      </div>
                    </div>
                    <span className={`text-sm font-mono font-bold ${darkGuardEnabled ? 'text-slate-400 line-through' : 'text-red-400'}`}>
                      +$24.99
                    </span>
                  </div>
                </div>

                {/* Order Total & CTA */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between text-base">
                    <span className="font-bold text-slate-300">Final Total:</span>
                    <span className={`text-2xl font-mono font-black ${darkGuardEnabled ? 'text-[#00ff87]' : 'text-red-400'}`}>
                      {darkGuardEnabled ? '$189.00' : '$213.99'}
                    </span>
                  </div>

                  <button className={`w-full py-4 rounded-xl font-bold font-['Space_Grotesk'] text-base flex items-center justify-center gap-2 transition-all shadow-lg ${
                    darkGuardEnabled 
                      ? 'bg-[#00ff87] hover:bg-[#00ffa3] text-slate-950 shadow-[#00ff87]/25' 
                      : 'bg-red-500 text-white shadow-red-500/25'
                  }`}>
                    <span>Complete Secure Purchase</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {/* SCENARIO 2: Roach Motel Unsubscribe */}
            {activeTab === 'subscription' && (
              <div className="w-full max-w-lg bg-slate-900/90 rounded-2xl border border-white/10 p-6 md:p-8 space-y-6 shadow-xl relative">
                
                <div className="border-b border-white/10 pb-4">
                  <h4 className="text-lg font-bold font-['Space_Grotesk'] text-white">Membership Cancellation</h4>
                  <p className="text-xs text-slate-400 mt-1">GymPass Pro Membership ($49.99/month)</p>
                </div>

                {darkGuardEnabled ? (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="bg-[#00ff87]/10 border border-[#00ff87]/30 p-3.5 rounded-xl text-xs font-mono text-[#00ff87] flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-[#00ff87] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Roach Motel Obstruction Bypassed</div>
                        <div className="text-slate-300 text-[11px] mt-0.5">DarkGuard extracted direct API cancellation token, removing 5-step phone call requirements.</div>
                      </div>
                    </div>

                    <button className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-red-500/20 text-red-400 border border-red-500/40 font-bold text-sm flex items-center justify-center gap-2 transition-all">
                      <CheckCircle2 className="w-4 h-4 text-red-400" />
                      Confirm 1-Click Instant Cancellation
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="bg-red-500/10 border border-red-500/30 p-3.5 rounded-xl text-xs font-mono text-red-400 space-y-2">
                      <div className="flex items-center gap-2 font-bold">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        Online Cancellation Disabled
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        To cancel your subscription, please call our support line at <strong>1-800-GYM-PASS</strong> during business hours (Mon-Fri 9:00 AM - 11:30 AM EST) or mail a signed certified letter.
                      </p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-white/5 text-center">
                      <a href="#" className="text-xs text-slate-500 hover:underline">Keep My Membership Active (No Action Needed)</a>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* SCENARIO 3: Confirmshaming Modal */}
            {activeTab === 'download' && (
              <div className="w-full max-w-lg bg-slate-900/90 rounded-2xl border border-white/10 p-6 md:p-8 space-y-6 shadow-xl relative">
                
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400 shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black font-['Space_Grotesk'] text-white">Claim Your 50% Cloud Discount!</h4>
                  <p className="text-xs text-slate-300">Sign up for our newsletter to unlock unlimited PDF conversions.</p>
                </div>

                <div className="space-y-3 pt-2">
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00ff87] to-cyan-400 text-slate-950 font-black font-['Space_Grotesk'] text-sm shadow-xl shadow-[#00ff87]/20 hover:opacity-95 transition-all">
                    GET 50% OFF NOW
                  </button>

                  {darkGuardEnabled ? (
                    <div className="text-center pt-2">
                      <button className="text-xs font-mono text-slate-400 hover:text-white px-4 py-2 rounded-lg bg-slate-800/80 border border-white/10 transition-colors">
                        Decline Discount & Continue
                      </button>
                      <div className="text-[10px] font-mono text-[#00ff87] mt-1.5 flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Confirmshaming copy replaced with neutral button
                      </div>
                    </div>
                  ) : (
                    <div className="text-center pt-1">
                      <button className="text-xs text-slate-400 hover:text-red-400 italic underline py-1">
                        "No thanks, I prefer wasting money and paying full price."
                      </button>
                      <div className="text-[10px] font-mono text-red-400 mt-1 flex items-center justify-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Manipulative Guilt Trap Active
                      </div>
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
