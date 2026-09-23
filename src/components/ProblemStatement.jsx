import React from 'react';
import { AlertTriangle, Server, WifiOff, FileCode2, Radio, HardDrive, ShieldAlert } from 'lucide-react';

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-24 bg-[#f5f5f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white text-slate-800 text-xs font-mono uppercase tracking-wider shadow-xs border border-slate-200/60">
            <AlertTriangle className="w-3.5 h-3.5 text-slate-700" />
            <span>Ministry of Earth Sciences (MoES) / INCOIS Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            The Offshore Data Paradox
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            High-precision 3D oceanography exists, but maritime operators on active research vessels cannot access or visualize it efficiently.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Context (Left Column -> Left & Bottom Shadow) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.55)] hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 shadow-xs border border-slate-200/60">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Problem Context</span>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">Fragmented 3D Ocean Datasets</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Oceanographic agencies like INCOIS & MoES generate massive 3D volumetric datasets in NetCDF formats alongside continuous stream feeds from deployed in-situ observation hardware.
              </p>

              <ul className="space-y-3 font-mono text-xs text-slate-700">
                <li className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#f5f5f7] border border-slate-200/60">
                  <FileCode2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">NetCDF Forecast Grids:</strong> Multi-gigabyte 4D ocean current, salinity, and temperature grid slices.</span>
                </li>
                <li className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#f5f5f7] border border-slate-200/60">
                  <Radio className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">In-situ Sensor Telemetry:</strong> Autonomous Argo floats, OMNI buoys, and deep-sea Gliders emitting isolated profiles.</span>
                </li>
                <li className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#f5f5f7] border border-slate-200/60">
                  <HardDrive className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Data Silos:</strong> Lack of unified spatio-temporal rendering engine for 3D visualization.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Constraint (Right Column -> Right & Bottom Shadow) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)] hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-800 shadow-xs border border-amber-200/60">
                  <WifiOff className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">Critical Constraint</span>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">128 kbps Satellite Bottleneck</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Offshore vessels and research ships operate under severe bandwidth limitations using expensive, high-latency 128 kbps satellite links where downloading multi-gigabyte raw files is completely impossible.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-slate-200/60">
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-800 font-semibold">Offshore Vessel Satellite Bandwidth</span>
                    <span className="text-amber-700 font-bold">128 kbps (CRITICAL LIMIT)</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-amber-600 h-full w-[4%]"></div>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                    <span>Legacy GIS Desktop Requirement: &gt; 15 GB</span>
                    <span className="text-red-600 font-semibold">Time to download: ~310 Hours</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 font-mono flex items-center space-x-3">
                  <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>Heavy desktop GIS software fails at sea. Zero-install web architecture is non-negotiable for real-time disaster management.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
