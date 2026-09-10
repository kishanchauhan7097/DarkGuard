import React, { useState } from 'react';
import { AlertCircle, AlertTriangle, ShieldAlert, DollarSign, Clock, HelpCircle, EyeOff, UserX, ShoppingBag, ArrowRight, Code, Flame, Sparkles } from 'lucide-react';

export default function ThreatsSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const threats = [
    {
      id: 'financial-drain',
      category: 'financial',
      title: 'Financial Drain',
      subtitle: 'Sneak-into-Basket & Hidden Charges',
      icon: DollarSign,
      iconBg: 'bg-red-500/15 text-red-400 border-red-500/40',
      warningLevel: 'CRITICAL SEVERITY',
      description: 'E-commerce sites covertly pre-check optional protection plans, VIP memberships, or express handling fees during checkout.',
      impact: 'Average $42 hidden loss per consumer checkout.',
      patternType: 'Sneak-into-Basket',
      exampleCode: '<input type="checkbox" name="vip_insurance" checked hidden />'
    },
    {
      id: 'forced-continuity',
      category: 'subscription',
      title: 'Forced Continuity',
      subtitle: 'The Notorious "Roach Motel"',
      icon: UserX,
      iconBg: 'bg-rose-500/15 text-rose-400 border-rose-500/40',
      warningLevel: 'HIGH SEVERITY',
      description: 'Signing up takes 1 click, but cancellation requires 40 minutes, working-hour phone calls, or labyrinthine ticket forms.',
      impact: '78% of users give up and pay unwanted recurring fees.',
      patternType: 'Roach Motel',
      exampleCode: 'href="tel:1-800-CANCEL-HOURS-MON-FRI-ONLY"'
    },
    {
      id: 'artificial-urgency',
      category: 'urgency',
      title: 'Artificial Urgency',
      subtitle: 'Fabricated Timers & Fake Scarcity',
      icon: Clock,
      iconBg: 'bg-amber-500/15 text-amber-400 border-amber-500/40',
      warningLevel: 'MODERATE SEVERITY',
      description: 'JavaScript countdowns that reset upon page refresh and fake stock tickers ("Only 2 items left in stock!") triggering panic buying.',
      impact: 'Induces cortisol spike & forces impulsive decisions.',
      patternType: 'Fake Scarcity',
      exampleCode: 'setInterval(() => timer.reset(), 900000)'
    },
    {
      id: 'confirmshaming',
      category: 'manipulation',
      title: 'Confirmshaming',
      subtitle: 'Emotional Manipulation & Guilt',
      icon: HelpCircle,
      iconBg: 'bg-orange-500/15 text-orange-400 border-orange-500/40',
      warningLevel: 'HIGH SEVERITY',
      description: 'Declining a newsletter or discount uses guilt-tripping copy: "No thanks, I prefer paying full price" or "No, I don\'t like saving money".',
      impact: 'Psychological manipulation undermining user autonomy.',
      patternType: 'Guilt Coercion',
      exampleCode: '<button>No thanks, I hate saving money</button>'
    },
    {
      id: 'disguised-ads',
      category: 'manipulation',
      title: 'Disguised Ads & Tricky CTAs',
      subtitle: 'Misleading Download Banners',
      icon: EyeOff,
      iconBg: 'bg-red-600/15 text-red-500 border-red-600/40',
      warningLevel: 'CRITICAL SEVERITY',
      description: 'Software download pages placing gigantic fake "DOWNLOAD NOW" ad banners right above the real download link to trick users.',
      impact: 'Risks malware installation & illicit tracking.',
      patternType: 'Misdirection',
      exampleCode: '<a href="ad_network_redirect.php">DOWNLOAD NOW</a>'
    },
    {
      id: 'hard-to-cancel',
      category: 'financial',
      title: 'Visual Interference',
      subtitle: 'Camouflaged Opt-Out Elements',
      icon: ShoppingBag,
      iconBg: 'bg-pink-500/15 text-pink-400 border-pink-500/40',
      warningLevel: 'HIGH SEVERITY',
      description: 'Using low-contrast light grey text on white backgrounds or burying opt-out checkboxes under 10-page terms accordions.',
      impact: 'Forces unwitting consent to intrusive data harvesting.',
      patternType: 'Visual Obfuscation',
      exampleCode: 'color: #f4f4f4; background: #ffffff;'
    }
  ];

  const filteredThreats = selectedFilter === 'all' 
    ? threats 
    : threats.filter(t => t.category === selectedFilter);

  return (
    <section id="threats" className="py-28 relative border-t border-white/5 bg-[#030712]/50">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-radial-glow-red blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 shadow-lg shadow-red-500/10 backdrop-blur-md">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Threat Landscape</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] text-white tracking-tight">
            Digital Coercion is Costing You <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-red-400 via-rose-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(239,68,68,0.35)]">
              Money, Privacy, & Autonomy.
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Dark Patterns are deceptive UI/UX mechanisms crafted by growth-hackers to manipulate cognitive biases. DarkGuard isolates and sanitizes them instantly.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Threat Vectors' },
              { id: 'financial', label: 'Financial Drain' },
              { id: 'subscription', label: 'Roach Motel' },
              { id: 'urgency', label: 'Artificial Urgency' },
              { id: 'manipulation', label: 'Guilt & Confirmshaming' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                  selectedFilter === tab.id
                    ? 'bg-red-500/20 text-red-300 border border-red-500/50 shadow-lg shadow-red-500/20'
                    : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Threat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 perspective-1000">
          {filteredThreats.map((threat) => {
            const IconComponent = threat.icon;
            return (
              <div 
                key={threat.id}
                className="group relative p-7 glass-card-3d rounded-3xl border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 flex flex-col justify-between space-y-5"
              >
                <div>
                  {/* Warning Badge Top Right */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3.5 rounded-2xl border ${threat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-red-950/70 border border-red-800/60 text-[10px] font-mono text-red-400 font-bold tracking-wider flex items-center gap-1.5 shadow-sm">
                      <ShieldAlert className="w-3 h-3 text-red-400" />
                      {threat.warningLevel}
                    </span>
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white group-hover:text-red-300 transition-colors">
                    {threat.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mb-3 mt-0.5">
                    Pattern Class: <span className="text-slate-200">{threat.patternType}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {threat.description}
                  </p>
                </div>

                <div>
                  {/* Example Malicious Code Snippet */}
                  <div className="bg-[#030712]/90 p-3 rounded-xl border border-red-500/20 font-mono text-[11px] text-red-300 overflow-x-auto mb-4 relative">
                    <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                      <Code className="w-2.5 h-2.5" /> Deceptive DOM Pattern
                    </div>
                    <code className="text-red-400 font-semibold">{threat.exampleCode}</code>
                  </div>

                  {/* Real Consumer Impact Footer */}
                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Consumer Harm:</span>
                    <span className="text-red-400 font-bold">{threat.impact}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
