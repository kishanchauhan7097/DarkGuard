import React from 'react';
import { Award, Users, GraduationCap, Code, Sparkles, ExternalLink } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Vinay Kumar Singh',
      role: 'Lead NLP Architect & Extension Core',
      specialty: 'Transformer Quantization, HuggingFace, Manifest V3',
      bio: 'Specializing in machine learning inference optimization and fine-tuning DeBERTa models for real-time web NLP context classification.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      avatarInitial: 'VS',
      accentColor: 'from-[#00ff87]/20 to-blue-500/20 border-[#00ff87]/40 text-[#00ff87]'
    },
    {
      name: 'Piyush Raj',
      role: 'Full-Stack Engineer & Heuristics Lead',
      specialty: 'FastAPI Microservices, WASM DOM Parsers, Security API',
      bio: 'Focused on high-performance backend pipelines, sub-15ms DOM mutation parsing engine, and API security architecture.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      avatarInitial: 'PR',
      accentColor: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-400'
    },
    {
      name: 'Kishan Chauhan',
      role: 'UI/UX Designer & Frontend Specialist',
      specialty: 'Shadow DOM Styling, Design System, Responsive UX',
      bio: 'Crafting non-intrusive extension overlays, dark-mode cybersecurity aesthetic systems, and glassmorphic user interaction flows.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      avatarInitial: 'KC',
      accentColor: 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-400'
    }
  ];

  return (
    <section id="team" className="py-24 relative bg-[#0a0e17] border-t border-slate-800">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-xs font-mono text-[#00ff87]">
            <Users className="w-3.5 h-3.5" />
            <span>Team Resist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white">
            Meet the Minds Behind <span className="text-[#00ff87]">DarkGuard</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            An ambitious group of student innovators and developers dedicated to building ethical web technologies.
          </p>

          {/* Institutional Pride Badge */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg shadow-black/40">
              <div className="p-1.5 rounded-full bg-[#00ff87]/20 border border-[#00ff87]/50 text-[#00ff87]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-mono text-slate-400 block -mb-0.5">Proudly Representing</span>
                <span className="text-sm font-bold text-white font-['Space_Grotesk'] tracking-wide">
                  Buddha Institute of Technology
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-2.5 shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-6">
                
                {/* Avatar Badge Header */}
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.accentColor} border-2 flex items-center justify-center font-mono text-xl font-bold tracking-wider shadow-lg group-hover:scale-105 transition-transform`}>
                    {member.avatarInitial}
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                    Team Resist
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00ff87] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-[#00ff87] mt-1">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-2 bg-slate-950 p-2 rounded-lg border border-slate-900">
                    Key Focus: <span className="text-slate-300">{member.specialty}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.bio}
                </p>

              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Connect:</span>
                <div className="flex items-center gap-2">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
