import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const externalLinks = [
    { name: 'INCOIS', url: 'https://incois.gov.in', desc: 'Indian National Centre for Ocean Information Services' },
    { name: 'Ministry of Earth Sciences', url: 'https://moes.gov.in', desc: 'Government of India' },
    { name: 'Smart India Hackathon', url: 'https://sih.gov.in', desc: 'SIH 2026 Grand Finale' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Logo & Info */}
          <div className="md:col-span-5 space-y-4">
            <img
              src="/images/codehydra-logo.png"
              alt="CodeHydra Logo"
              className="h-10 w-auto object-contain"
            />

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              3D Ocean Spatial Rendering System engineered for low-bandwidth satellite environments (128 kbps) on offshore vessels.
            </p>

            <div className="inline-flex items-center space-x-2 text-xs font-mono text-sky-400 bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>SIH 2026 | Problem ID: SIH26067</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-slate-200 uppercase tracking-widest font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#team" className="hover:text-sky-400 transition-colors">Team CodeHydra & Mentors</a>
              </li>
              <li>
                <a href="#problem" className="hover:text-sky-400 transition-colors">Problem Statement</a>
              </li>
              <li>
                <a href="#solution" className="hover:text-sky-400 transition-colors">Solution & Features</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-sky-400 transition-colors">Technical Architecture</a>
              </li>
              <li>
                <a href="#market" className="hover:text-sky-400 transition-colors">Market Validation</a>
              </li>
              <li>
                <a href="#validation" className="hover:text-sky-400 transition-colors">Expert Case Study</a>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-slate-200 uppercase tracking-widest font-bold">
              Official Portals & References
            </h4>
            <div className="space-y-2.5">
              {externalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 hover:bg-slate-800 transition-all"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {link.desc}
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 transition-colors ml-2 shrink-0" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 CodeHydra. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <span>Smart India Hackathon 2026</span>
            <span>•</span>
            <span className="text-sky-400 font-semibold">Team ID 138408</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
