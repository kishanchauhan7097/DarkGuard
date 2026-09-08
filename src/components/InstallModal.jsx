import React, { useState } from 'react';
import { X, Download, ShieldCheck, Check, Terminal, ExternalLink, Sparkles } from 'lucide-react';
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
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel rounded-2xl border border-slate-700/80 p-6 md:p-8 space-y-6 shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#00ff87]/20 border border-[#00ff87]/50 flex items-center justify-center mx-auto text-[#00ff87]">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
            Install DarkGuard Extension
          </h3>
          <p className="text-xs text-slate-300">
            Free open-source protection against manipulative browser dark patterns.
          </p>
        </div>

        {/* Browser Selector */}
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-slate-900 border border-[#00ff87]/40 text-[#00ff87] font-mono text-xs space-y-1">
            <ChromeIcon className="w-5 h-5 mx-auto" />
            <span>Chrome</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs space-y-1">
            <span className="font-bold text-blue-400 block">E</span>
            <span>Edge</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs space-y-1">
            <span className="font-bold text-orange-400 block">F</span>
            <span>Firefox</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs space-y-1">
            <span className="font-bold text-[#00ff87] block">B</span>
            <span>Brave</span>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2 text-[#00ff87]">
            <Terminal className="w-4 h-4" />
            <span>Developer Mode Quick-Load:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-slate-400">
            <li>Download the pre-compiled `DarkGuard-v1.2.zip` bundle.</li>
            <li>Open Chrome extension settings (`chrome://extensions`).</li>
            <li>Enable Developer Mode toggle top right.</li>
            <li>Click 'Load unpacked' and select the unzipped directory.</li>
          </ol>
        </div>

        {/* Download Button */}
        {downloaded ? (
          <div className="p-4 rounded-xl bg-[#00ff87]/20 border border-[#00ff87]/50 text-[#00ff87] font-bold text-sm text-center flex items-center justify-center gap-2">
            <Check className="w-5 h-5 text-[#00ff87]" />
            <span>DarkGuard Build Bundle Downloaded!</span>
          </div>
        ) : (
          <button
            onClick={handleDownload}
            className="w-full py-3.5 rounded-xl bg-[#00ff87] hover:bg-[#00e57a] text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#00ff87]/20"
          >
            <Download className="w-5 h-5" />
            <span>Download DarkGuard Extension (Zip)</span>
          </button>
        )}

      </div>
    </div>
  );
}
