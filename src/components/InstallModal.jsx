import React, { useState } from 'react';
import { X, Download, ShieldCheck, Check, Terminal, ExternalLink, Sparkles, Chrome } from 'lucide-react';
import confetti from 'canvas-confetti';

const ChromeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="21.17" y1="8" x2="12" y2="8"></line>
    <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
    <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
  </svg>
);

export default function InstallModal({ isOpen, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00ff87', '#00f2fe', '#3b82f6']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-white/15 p-6 md:p-8 space-y-6 shadow-2xl shadow-black/90">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#00ff87]/20 border border-[#00ff87]/50 flex items-center justify-center mx-auto text-[#00ff87] shadow-lg shadow-[#00ff87]/20">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black font-['Space_Grotesk'] text-white">
            Install DarkGuard Extension
          </h3>
          <p className="text-xs text-slate-300 max-w-xs mx-auto">
            Free open-source real-time protection against manipulative browser dark patterns.
          </p>
        </div>

        {/* Browser Selector */}
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="p-3.5 rounded-2xl bg-[#050b18] border border-[#00ff87]/50 text-[#00ff87] font-mono text-xs space-y-1.5 shadow-lg shadow-[#00ff87]/10">
            <ChromeIcon className="w-5 h-5 mx-auto" />
            <span className="font-bold block">Chrome</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#050b18] border border-white/5 text-slate-400 font-mono text-xs space-y-1.5 hover:border-white/20 transition-colors">
            <span className="font-black text-cyan-400 block text-base">B</span>
            <span>Brave</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#050b18] border border-white/5 text-slate-400 font-mono text-xs space-y-1.5 hover:border-white/20 transition-colors">
            <span className="font-black text-blue-400 block text-base">E</span>
            <span>Edge</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#050b18] border border-white/5 text-slate-400 font-mono text-xs space-y-1.5 hover:border-white/20 transition-colors">
            <span className="font-black text-orange-400 block text-base">F</span>
            <span>Firefox</span>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="bg-[#050b18] p-5 rounded-2xl border border-white/10 space-y-2.5 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2 text-[#00ff87] font-bold">
            <Terminal className="w-4 h-4" />
            <span>Developer Mode Quick-Load:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1.5 text-slate-400">
            <li>Download the pre-compiled <code className="text-[#00ff87]">DarkGuard-v1.2.zip</code> bundle.</li>
            <li>Open Chrome extension settings (<code className="text-cyan-400">chrome://extensions</code>).</li>
            <li>Enable Developer Mode toggle in the top right corner.</li>
            <li>Click 'Load unpacked' and select the unzipped directory.</li>
          </ol>
        </div>

        {/* Download Button */}
        {downloaded ? (
          <div className="p-4 rounded-2xl bg-[#00ff87]/20 border border-[#00ff87]/50 text-[#00ff87] font-bold text-sm text-center flex items-center justify-center gap-2 shadow-xl shadow-[#00ff87]/20 animate-in fade-in">
            <Check className="w-5 h-5 text-[#00ff87]" />
            <span>DarkGuard Build Bundle Downloaded!</span>
          </div>
        ) : (
          <button
            onClick={handleDownload}
            className="w-full py-4 rounded-2xl bg-[#00ff87] hover:bg-[#00ffa3] text-slate-950 font-black font-['Space_Grotesk'] text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-[#00ff87]/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>Download DarkGuard Extension (Zip)</span>
          </button>
        )}

      </div>
    </div>
  );
}
