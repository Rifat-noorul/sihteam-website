import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenPrototype }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Team', href: '#team' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Market', href: '#market' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f7]/80 backdrop-blur-xl border-b border-slate-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Image */}
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src="/images/codehydra-logo.png"
              alt="CodeHydra"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* View Prototype CTA (Opens live link in new tab) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://ocean-3-d-self.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-pill-btn inline-flex items-center space-x-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs uppercase tracking-wider shadow-sm"
            >
              <span>View Prototype</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-700 hover:bg-slate-200/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-800 hover:text-sky-600 hover:bg-slate-100"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://ocean-3-d-self.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-slate-900 text-white font-medium text-sm shadow-sm"
            >
              <span>View Prototype</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
