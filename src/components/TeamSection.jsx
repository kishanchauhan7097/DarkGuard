import React from 'react';
import { Award, Users, GraduationCap, Code, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

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
      accentColor: 'from-[#00ff87]/30 to-cyan-500/30 border-[#00ff87]/50 text-[#00ff87]',
      glowColor: 'hover:border-[#00ff87]/50 hover:shadow-[#00ff87]/15'
    },
    {
      name: 'Piyush Raj',
      role: 'Full-Stack Engineer & Heuristics Lead',
      specialty: 'FastAPI Microservices, WASM DOM Parsers, Security API',
      bio: 'Focused on high-performance backend pipelines, sub-15ms DOM mutation parsing engine, and API security architecture.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      avatarInitial: 'PR',
      accentColor: 'from-cyan-500/30 to-blue-500/30 border-cyan-500/50 text-cyan-400',
      glowColor: 'hover:border-cyan-400/50 hover:shadow-cyan-400/15'
    },
    {
      name: 'Kishan Chauhan',
      role: 'UI/UX Designer & Frontend Specialist',
      specialty: 'Shadow DOM Styling, Design System, Responsive UX',
      bio: 'Crafting non-intrusive extension overlays, dark-mode cybersecurity aesthetic systems, and glassmorphic user interaction flows.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      avatarInitial: 'KC',
      accentColor: 'from-purple-500/30 to-pink-500/30 border-purple-500/50 text-purple-400',
      glowColor: 'hover:border-purple-400/50 hover:shadow-purple-400/15'
    }
  ];

  return (
    <section id="team" className="py-28 relative border-t border-white/5 bg-[#030712]/60">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-glow blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] shadow-lg shadow-[#00ff87]/10 backdrop-blur-md">
            <Users className="w-3.5 h-3.5" />
            <span>Team Resist</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] text-white tracking-tight">
            Meet the Minds Behind <span className="bg-gradient-to-r from-[#00ff87] via-cyan-400 to-[#3b82f6] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,135,0.4)]">DarkGuard</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            An ambitious group of student innovators and developers dedicated to engineering ethical, privacy-preserving web technologies.
          </p>

          {/* Institutional Pride Badge */}
          <div className="pt-3">
            <div className="inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-xl hover:border-[#00ff87]/40 transition-all duration-300">
              <div className="p-2 rounded-full bg-[#00ff87]/20 border border-[#00ff87]/50 text-[#00ff87] shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">Proudly Representing</span>
                <span className="text-sm font-black text-white font-['Space_Grotesk'] tracking-wide">
                  Buddha Institute of Technology
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Team 3D Cyber Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 perspective-1000">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className={`glass-card-3d p-8 rounded-3xl border border-white/10 transition-all duration-500 ${member.glowColor} hover:-translate-y-2.5 shadow-2xl flex flex-col justify-between space-y-6 group`}
            >
              <div className="space-y-6">
                
                {/* Avatar Badge Header */}
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.accentColor} border flex items-center justify-center font-['Space_Grotesk'] text-2xl font-black shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                    {member.avatarInitial}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-950 border border-white/10 text-[11px] font-mono text-slate-300 shadow-inner">
                    Core Engineer
                  </span>
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white group-hover:text-[#00ff87] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-1 font-semibold">
                    {member.role}
                  </div>
                </div>

                {/* Specialty Pill */}
                <div className="p-3 bg-slate-950/70 rounded-xl border border-white/5 text-xs font-mono text-slate-300">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider mb-1">Focus Area:</span>
                  {member.specialty}
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.bio}
                </p>

              </div>

              {/* Social Links Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
