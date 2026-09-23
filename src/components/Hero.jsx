import React from 'react';
import { Play, Compass, Award, ShieldAlert, Cpu, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#f5f5f7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-sm">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>SIH 2026</span>
          </span>

          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white text-slate-800 border border-slate-200 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-slate-600" />
            <span>Problem ID: SIH26067</span>
          </span>

          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-900 border border-sky-200 shadow-sm">
            <ShieldAlert className="w-3.5 h-3.5 text-sky-700" />
            <span>Theme: Disaster Management</span>
          </span>
        </div>

        {/* Headline & Subheadline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
            CodeHydra:{' '}
            <span className="text-sky-700">
              3D Ocean Spatial Rendering.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light text-slate-600 max-w-2xl mx-auto leading-relaxed italic">
            "The ocean is connected. Our data should be too."
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            An advanced browser-based rendering engine streaming high-resolution 3D volumetric forecasts & in-situ ocean telemetry for low-bandwidth offshore satellite links.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm sm:text-base shadow-sm hover:bg-slate-800 transition-all duration-200 cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
            </div>
            <span>Watch Pitch Video</span>
          </button>

          <a
            href="https://ocean-3-d-self.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 rounded-full bg-white text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 shadow-sm hover:bg-slate-50 transition-all duration-200 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-sky-700" />
            <span>Explore Prototype</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </a>

        </div>

      </div>
    </section>
  );
}