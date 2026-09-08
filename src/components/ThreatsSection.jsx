import React from 'react';
import { AlertCircle, AlertTriangle, ShieldAlert, DollarSign, Clock, HelpCircle, EyeOff, UserX, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ThreatsSection() {
  const threats = [
    {
      id: 'financial-drain',
      title: 'Financial Drain',
      subtitle: 'Sneak-into-Basket & Hidden Charges',
      icon: DollarSign,
      iconBg: 'bg-red-500/10 text-red-400 border-red-500/30',
      warningLevel: 'CRITICAL SEVERITY',
      description: 'E-commerce sites covertly pre-check optional protection plans, VIP membership add-ons, or express processing fees during cart checkout.',
      impact: 'Average $42 hidden loss per consumer online purchase.',
      patternType: 'Sneak-into-Basket',
      exampleCode: '<input type="checkbox" name="vip_insurance" checked hidden />'
    },
    {
      id: 'forced-continuity',
      title: 'Forced Continuity',
      subtitle: 'The Notorious "Roach Motel"',
      icon: UserX,
      iconBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      warningLevel: 'HIGH SEVERITY',
      description: 'Signing up takes 1 click, but cancellation requires 40 minutes, phone call verification during working hours, or hidden support tickets.',
      impact: '78% of users give up and pay unwanted recurring subscriptions.',
      patternType: 'Roach Motel',
      exampleCode: 'href="tel:1-800-CANCEL-HOURS-MON-FRI-ONLY"'
    },
    {
      id: 'artificial-urgency',
      title: 'Artificial Urgency',
      subtitle: 'Fake Timers & Fabricated Scarcity',
      icon: Clock,
      iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      warningLevel: 'MODERATE SEVERITY',
      description: 'Dynamic JavaScript timers that reset upon page refresh and fake live stock indicators ("Only 2 items left in stock!") driving panic buying.',
      impact: 'Triggers cortisol spike & bypasses rational decision-making.',
      patternType: 'Fake Scarcity',
      exampleCode: 'setInterval(() => timer.reset(), 900000)'
    },
    {
      id: 'confirmshaming',
      title: 'Confirmshaming',
      subtitle: 'Emotional Manipulation & Guilt',
      icon: HelpCircle,
      iconBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      warningLevel: 'HIGH SEVERITY',
      description: 'Declining a newsletter or opt-in uses shaming text: "No thanks, I prefer paying full price" or "No, I don\'t like saving money".',
      impact: 'Psychological leverage targeting user self-esteem.',
      patternType: 'Guilt Coercion',
      exampleCode: '<button>No thanks, I hate saving money</button>'
    },
    {
      id: 'disguised-ads',
      title: 'Disguised Ads & Tricky Buttons',
      subtitle: 'Misleading Download CTAs',
      icon: EyeOff,
      iconBg: 'bg-red-600/10 text-red-500 border-red-600/30',
      warningLevel: 'CRITICAL SEVERITY',
      description: 'Software download mirrors placing massive fake "DOWNLOAD NOW" advertisement banners directly above the actual download link.',
      impact: 'Risks malware installation & unauthorized tracker execution.',
      patternType: 'Misdirection',
      exampleCode: '<a href="ad_network_redirect.php">DOWNLOAD NOW</a>'
    },
    {
      id: 'hard-to-cancel',
      title: 'Obstruction & Hidden Opt-Outs',
      subtitle: 'Camouflaged Checkboxes',
      icon: ShoppingBag,
      iconBg: 'bg-red-400/10 text-red-300 border-red-400/30',
      warningLevel: 'HIGH SEVERITY',
      description: 'Using low-contrast light grey text on white backgrounds or burying opt-out checkboxes under expandable 10-page terms accordions.',
      impact: 'Tricks users into consenting to data harvesting.',
      patternType: 'Visual Interference',
      exampleCode: 'color: #f4f4f4; background: #ffffff;'
    }
  ];

  return (
    <section id="threats" className="py-24 relative bg-[#070a11] border-t border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Threat Landscape</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white">
            Digital Coercion is Costing You <br className="hidden sm:inline" />
            <span className="text-red-400">Money, Privacy, & Autonomy.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dark Patterns are deceptive UI/UX designs crafted by growth-hackers to manipulate human psychological vulnerabilities. DarkGuard neutralizes them instantly.
          </p>
        </div>

        {/* Threat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {threats.map((threat) => {
            const IconComponent = threat.icon;
            return (
              <div 
                key={threat.id}
                className="group relative p-6 glass-panel rounded-2xl border border-slate-800/90 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/5"
              >
                {/* Warning Badge Top Right */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl border ${threat.iconBg} flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-red-950/60 border border-red-800/50 text-[10px] font-mono text-red-400 font-bold tracking-wider flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3 text-red-400" />
                    {threat.warningLevel}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                  {threat.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-3">
                  Pattern: <span className="text-slate-200">{threat.patternType}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {threat.description}
                </p>

                {/* Example Malicious Code Snippet */}
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-mono text-[11px] text-red-300 overflow-x-auto mb-4">
                  <code>{threat.exampleCode}</code>
                </div>

                {/* Real Impact Footer */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Consumer Harm:</span>
                  <span className="text-red-400 font-medium">{threat.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
