import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, ShieldCheck, ShieldAlert, Sparkles, Check, AlertTriangle, ArrowRight, Eye, RefreshCw } from 'lucide-react';

export default function NeutralizerSandbox() {
  const [darkGuardEnabled, setDarkGuardEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState('checkout'); // 'checkout' | 'subscription' | 'download'

  return (
    <section id="sandbox" className="py-24 relative bg-[#0a0e17] border-t border-slate-800">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00ff87]/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-xs font-mono text-[#00ff87]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Visual Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white">
            See DarkGuard in Action: <br />
            <span className="text-[#00ff87]">Before vs. After Neutralization</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Toggle the DarkGuard shield to witness how manipulative UI tricks (hidden fees, fake scarcity timers, shaming buttons) are stripped and sanitized in real-time.
          </p>
        </div>

        {/* Sandbox Controls Bar */}
        <div className="mt-10 max-w-4xl mx-auto glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          
          {/* Preset Scenario Selector */}
          <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('checkout')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'checkout'
                  ? 'bg-slate-800 text-[#00ff87] border border-[#00ff87]/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              1. Sneak-in-Cart Checkout
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'subscription'
                  ? 'bg-slate-800 text-[#00ff87] border border-[#00ff87]/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              2. Roach Motel Unsubscribe
            </button>
            <button
              onClick={() => setActiveTab('download')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'download'
                  ? 'bg-slate-800 text-[#00ff87] border border-[#00ff87]/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              3. Confirmshaming Modal
            </button>
          </div>

          {/* Master Extension Toggle Switch */}
          <div className="flex items-center gap-3 bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-800">
            <span className={`text-xs font-mono font-bold ${darkGuardEnabled ? 'text-slate-500' : 'text-red-400'}`}>
              DarkGuard OFF
            </span>
            <button
              onClick={() => setDarkGuardEnabled(!darkGuardEnabled)}
              className="relative focus:outline-none"
            >
              {darkGuardEnabled ? (
                <ToggleRight className="w-9 h-9 text-[#00ff87] drop-shadow-[0_0_8px_rgba(0,255,135,0.6)]" />
              ) : (
                <ToggleLeft className="w-9 h-9 text-slate-600" />
              )}
            </button>
            <span className={`text-xs font-mono font-bold ${darkGuardEnabled ? 'text-[#00ff87]' : 'text-slate-500'}`}>
              DarkGuard ON
            </span>
          </div>

        </div>

        {/* Sandbox Mock Browser Window */}
        <div className="mt-8 max-w-4xl mx-auto glass-panel rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden">
          
          {/* Browser Address Bar Header */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-1 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 w-full max-w-md">
              <span className="text-slate-500">https://</span>
              <span>
                {activeTab === 'checkout' && 'scam-flight-deals.com/checkout'}
                {activeTab === 'subscription' && 'gym-membership-app.io/cancel'}
                {activeTab === 'download' && 'free-pdf-converter.net/offer'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold flex items-center gap-1 ${
                darkGuardEnabled 
                  ? 'bg-[#00ff87]/20 text-[#00ff87] border border-[#00ff87]/40' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse'
              }`}>
                {darkGuardEnabled ? <ShieldCheck className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                {darkGuardEnabled ? 'UI Neutralized' : 'Raw Deceptive UI'}
              </div>
            </div>
          </div>

          {/* Scenario Content Body */}
          <div className="p-6 md:p-8 bg-[#0a0f1d] min-h-[380px] flex items-center justify-center">
            
            {/* SCENARIO 1: Sneak-into-Basket Checkout */}
            {activeTab === 'checkout' && (
              <div className="w-full max-w-lg bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-5 relative">
                
                {/* Fake Scarcity Banner */}
                {darkGuardEnabled ? (
                  <div className="bg-[#00ff87]/10 border border-[#00ff87]/30 p-2.5 rounded-lg text-xs font-mono text-[#00ff87] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      DarkGuard neutralized fake stock countdown.
                    </span>
                    <span className="text-[10px] bg-[#00ff87]/20 px-2 py-0.5 rounded text-[#00ff87]">Sanitized</span>
                  </div>
                ) : (
                  <div className="bg-red-500/10 border border-red-500/30 p-2.5 rounded-lg text-xs font-mono text-red-400 flex items-center justify-between animate-pulse">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      ONLY 1 SEAT LEFT! OFFER EXPIRES IN 04:59!
                    </span>
                    <span className="text-[10px] bg-red-500/20 px-2 py-0.5 rounded text-red-300">Fake Timer</span>
                  </div>
                )}

                {/* Cart Order Summary */}
                <h4 className="text-lg font-bold text-white flex items-center justify-between border-b border-slate-800 pb-3">
                  <span>Flight Ticket (NYC → LON)</span>
                  <span className="font-mono text-white">$450.00</span>
                </h4>

                {/* Sneaky Protection Fee Row */}
                {darkGuardEnabled ? (
                  <div className="p-3 bg-slate-950/80 rounded-lg border border-[#00ff87]/40 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="insurance" checked={false} readOnly className="accent-[#00ff87]" />
                      <label htmlFor="insurance" className="text-slate-300 font-medium">
                        Travel Protection Insurance (Optional)
                      </label>
                    </div>
                    <span className="font-mono text-[#00ff87] bg-[#00ff87]/10 px-2 py-0.5 rounded">Unchecked by DarkGuard</span>
                  </div>
                ) : (
                  <div className="p-3 bg-red-950/40 rounded-lg border border-red-500/50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="insurance" checked={true} readOnly className="accent-red-500" />
                      <label htmlFor="insurance" className="text-red-300 font-medium flex items-center gap-1">
                        Travel Protection + VIP Luggage Insurance (Pre-selected)
                      </label>
                    </div>
                    <span className="font-mono text-red-400">+$49.99</span>
                  </div>
                )}

                {/* Total Calculation */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <span className="text-slate-400 font-medium">Total due:</span>
                  <span className="text-xl font-bold font-mono text-white">
                    {darkGuardEnabled ? '$450.00' : '$499.99'}
                  </span>
                </div>

                <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                  darkGuardEnabled ? 'bg-[#00ff87] text-slate-950 hover:bg-[#00e57a]' : 'bg-red-500 text-white hover:bg-red-600'
                }`}>
                  {darkGuardEnabled ? 'Proceed to Honest Checkout ($450.00)' : 'Pay Now ($499.99)'}
                </button>

              </div>
            )}

            {/* SCENARIO 2: Roach Motel Unsubscribe */}
            {activeTab === 'subscription' && (
              <div className="w-full max-w-lg bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-5">
                
                <h4 className="text-lg font-bold text-white">Manage Membership Subscription</h4>
                <p className="text-xs text-slate-400">Current Plan: Pro Membership ($29.99/mo)</p>

                {darkGuardEnabled ? (
                  <div className="space-y-4">
                    <div className="bg-[#00ff87]/10 border border-[#00ff87]/30 p-3 rounded-lg text-xs font-mono text-[#00ff87] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                      <span>DarkGuard injected direct 1-click Cancellation API endpoint.</span>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-red-500/20 border border-red-500/60 text-red-400 hover:bg-red-500/30 font-bold text-sm flex items-center justify-center gap-2">
                      <span>Cancel Subscription Instantly</span>
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-red-500/10 border border-red-500/40 p-3 rounded-lg text-xs font-mono text-red-400 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      <span>Roach Motel Pattern: Cancellation button hidden behind call center queue.</span>
                    </div>

                    <div className="p-4 bg-slate-950 rounded-lg text-xs text-slate-400 space-y-2">
                      <p>To request cancellation, please call our hotline during EST working hours: <strong>1-800-555-0199</strong> (Avg hold time: 35 mins).</p>
                      <p className="text-[10px] text-slate-500 italic">Online cancellation is disabled for your security.</p>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-slate-800 text-slate-500 cursor-not-allowed font-medium text-sm">
                      Cancel Online (Disabled)
                    </button>
                  </div>
                )}

              </div>
            )}

            {/* SCENARIO 3: Confirmshaming Modal */}
            {activeTab === 'download' && (
              <div className="w-full max-w-lg bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-5 text-center">
                
                <h4 className="text-xl font-bold text-white">Unlock 50% Off Lifetime Access</h4>
                <p className="text-xs text-slate-300">Claim your special member discount before leaving the page!</p>

                {darkGuardEnabled ? (
                  <div className="space-y-3 pt-2">
                    <div className="bg-[#00ff87]/10 border border-[#00ff87]/30 p-2.5 rounded-lg text-xs font-mono text-[#00ff87]">
                      DarkGuard rewritten guilt-tripping text to clear neutral option.
                    </div>

                    <button className="w-full py-2.5 rounded-xl bg-[#00ff87] text-slate-950 font-bold text-sm">
                      Claim 50% Discount
                    </button>
                    
                    <button className="w-full py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-medium">
                      No thanks, close window
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3 pt-2">
                    <button className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm">
                      Claim 50% Discount
                    </button>

                    <button className="w-full py-2 rounded-xl bg-transparent text-slate-500 hover:text-slate-400 text-xs font-medium underline">
                      No thanks, I prefer paying full price and wasting money
                    </button>
                  </div>
                )}

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
