import React from 'react';
import { Cpu, Server, Code2, Database, Globe, Layers, Box, Terminal } from 'lucide-react';

export default function Architecture() {
  const stack = [
    {
      name: 'FastAPI',
      category: 'Backend Pipeline',
      icon: Server,
      desc: 'Asynchronous Python web server for high-throughput spatial slicing endpoints.',
    },
    {
      name: 'Python',
      category: 'Backend Core',
      icon: Code2,
      desc: 'Scientific computation engine for oceanographic dataset transformations.',
    },
    {
      name: 'xarray',
      category: 'Data Processing',
      icon: Database,
      desc: 'N-dimensional dataset manipulation for fast depth and spatial coordinate slicing.',
    },
    {
      name: 'NetCDF',
      category: 'Ocean Format',
      icon: Box,
      desc: 'Standard binary format for volumetric ocean forecasts (INCOIS / MoES).',
    },
    {
      name: 'React',
      category: 'Frontend UI',
      icon: Terminal,
      desc: 'Modern single-page scrolling user interface with reactive state controls.',
    },
    {
      name: 'Three.js',
      category: '3D Graphics',
      icon: Layers,
      desc: 'High-performance WebGL mesh rendering for Argo floats and ocean depth profiles.',
    },
    {
      name: 'CesiumJS',
      category: 'Geospatial Globe',
      icon: Globe,
      desc: '3D geospatial globe for terrain, bathymetry, and satellite coordinate alignment.',
    },
    {
      name: 'WebGL',
      category: 'Hardware Render',
      icon: Cpu,
      desc: 'Direct GPU-accelerated shader rendering for zero-latency performance.',
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#f5f5f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white text-slate-800 text-xs font-mono uppercase tracking-wider shadow-xs border border-slate-200/60">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            <span>High-Performance Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Technical Architecture
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Clean visual breakdown of the tech stack powering CodeHydra’s low-bandwidth ocean spatial engine.
          </p>
        </div>

        {/* Tech Stack Grid (4 Cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, idx) => {
            const IconComponent = item.icon;
            const colPos = idx % 4;
            let hoverShadowClass = "hover:shadow-[0_20px_35px_rgba(0,216,255,0.55)]";
            if (colPos === 0) {
              hoverShadowClass = "hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.55)]";
            } else if (colPos === 3) {
              hoverShadowClass = "hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)]";
            }

            return (
              <div
                key={item.name}
                className={`bg-white rounded-3xl p-6 shadow-sm ${hoverShadowClass} hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 border border-slate-200/60">
                      <IconComponent className="w-5 h-5 text-sky-600" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#f5f5f7] text-slate-600 border border-slate-200/60">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2 font-mono">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>COMPONENT 0{idx + 1}</span>
                  <span className="text-emerald-600 font-semibold">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
