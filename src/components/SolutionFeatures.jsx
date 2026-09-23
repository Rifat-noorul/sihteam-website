import React from 'react';
import { Layers, Globe, Zap, Cpu, MonitorCheck, ArrowUpRight } from 'lucide-react';

export default function SolutionFeatures() {
  const features = [
    {
      icon: Layers,
      title: 'Unified 3D View',
      description: 'Combines ocean forecasts, Argo floats, and OMNI buoy telemetry in one unified browser-based 3D geospatial platform.',
      tag: 'Multi-Source Fusion',
    },
    {
      icon: Globe,
      title: 'Zero-Install Access',
      description: 'Runs directly in standard web browsers without plugins or heavy desktop installs, optimized explicitly for low-bandwidth environments.',
      tag: 'Client-Side WebGL',
    },
    {
      icon: Zap,
      title: 'Smart Data Delivery',
      description: 'Server-side spatial & depth slicing dynamically streams only the requested bounding box parameters over 128 kbps satellite feeds.',
      tag: 'Sub-MB Compression',
    },
    {
      icon: Cpu,
      title: 'GPU-Based LOD',
      description: 'Smooth volumetric rendering of massive ocean grids using WebGL, Three.js, and CesiumJS with Level-of-Detail grid simplification.',
      tag: 'Real-Time Shader Engine',
    },
  ];

  return (
    <section id="solution" className="py-24 bg-[#f5f5f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white text-slate-800 text-xs font-mono uppercase tracking-wider shadow-xs border border-slate-200/60">
            <MonitorCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Architecture & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            The Solution & Key Features
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Re-architecting ocean spatial data delivery from multi-gigabyte static downloads to low-latency, WebGL-rendered progressive stream tiles.
          </p>
        </div>

        {/* Grid Layout with Prototype Image Next To Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Features Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const IconComp = feature.icon;
              const hoverShadowClass = idx % 2 === 0
                ? "hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.55)]"
                : "hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)]";

              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-3xl p-6 shadow-sm ${hoverShadowClass} hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 border border-slate-200/60">
                        <IconComp className="w-5 h-5 text-sky-600" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#f5f5f7] text-slate-600 border border-slate-200/60">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-mono text-slate-400">
                    <span>Feature 0{idx + 1}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prototype Image Next to Text (5 Cols -> Right Column -> Right & Bottom Shadow) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)] hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100 flex-1 flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <span className="text-xs font-mono text-slate-500">CodeHydra_UI_Viewport.render</span>
              </div>

              {/* Exact user requested image tag */}
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src="/images/prototype-ui.png"
                  alt="Ocean3D Prototype"
                  className="w-full object-cover rounded-3xl shadow-sm border border-slate-100"
                />
              </div>

              <div className="mt-3 text-center">
                <span className="text-xs text-slate-400 font-mono">
                  Ocean3D Live Prototype Viewport
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
