import React, { useEffect } from 'react';
import { X, Play, ShieldAlert } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl glass-panel rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-cyan-900/40">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-700/50 flex items-center justify-center text-cyan-400">
              <Play className="w-4 h-4 fill-cyan-400" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-100 font-sans">
                CodeHydra SIH 2026 Pitch Video
              </h3>
              <p className="text-xs text-cyan-400/80 font-mono">
                Problem ID: SIH26067 | Disaster Management
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/60 text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-slate-950">
          <iframe
            src="https://www.youtube.com/embed/RwHe7tLFfkA?autoplay=1"
            title="CodeHydra Pitch Video"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap justify-between items-center gap-2 font-mono">
          <span>Smart India Hackathon 2026 Project Presentation</span>
          <span className="text-cyan-400">3D Ocean Spatial Rendering System</span>
        </div>

      </div>
    </div>
  );
}
