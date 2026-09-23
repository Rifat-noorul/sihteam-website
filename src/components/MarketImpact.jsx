import React from 'react';
import { TrendingUp, Target, PieChart, Ship, ShieldCheck } from 'lucide-react';

export default function MarketImpact() {
  const metrics = [
    {
      title: 'Total Addressable Market (TAM)',
      value: '₹84 Lakh Crore',
      subtitle: 'Indian Maritime Economy',
      icon: Ship,
      description: 'Total valuation of India’s blue economy, shipping fleets, port infrastructure, offshore defense, and coastal maritime operations.',
      badgeColor: 'bg-slate-100 text-slate-700 border border-slate-200/60',
    },
    {
      title: 'Serviceable Addressable Market (SAM)',
      value: '~₹300 Crore',
      subtitle: 'Ocean Data & Analytics',
      icon: TrendingUp,
      description: 'Dedicated national spend on oceanographic data modeling, satellite telemetry, disaster forecasting, and research software tools.',
      badgeColor: 'bg-sky-50 text-sky-800 border border-sky-200/60',
    },
    {
      title: 'Serviceable Obtainable Market (SOM)',
      value: '₹80 Lakh',
      subtitle: 'INCOIS + MoES Research',
      icon: Target,
      description: 'Targeted initial phase deployment across MoES research vessels, INCOIS operational centers, and coastal disaster management nodes.',
      badgeColor: 'bg-emerald-50 text-emerald-800 border border-emerald-200/60',
    },
  ];

  return (
    <section id="market" className="py-24 bg-[#f5f5f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white text-slate-800 text-xs font-mono uppercase tracking-wider shadow-xs border border-slate-200/60">
            <PieChart className="w-3.5 h-3.5 text-sky-600" />
            <span>Economic Significance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Market Impact & Validation
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Quantifying the economic reach and strategic value of zero-install 3D ocean rendering for India's Blue Economy.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => {
            const IconComp = metric.icon;
            let hoverShadowClass = "hover:shadow-[0_20px_35px_rgba(0,216,255,0.55)]";
            if (idx === 0) {
              hoverShadowClass = "hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.55)]";
            } else if (idx === 2) {
              hoverShadowClass = "hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)]";
            }

            return (
              <div
                key={metric.title}
                className={`bg-white rounded-3xl p-8 shadow-sm ${hoverShadowClass} hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full ${metric.badgeColor}`}>
                      {metric.title.split(' ')[0]}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 border border-slate-200/60">
                      <IconComp className="w-5 h-5 text-sky-600" />
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                    {metric.title}
                  </div>

                  <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 my-2">
                    {metric.value}
                  </div>

                  <div className="text-sm font-semibold text-sky-600 mb-4 font-mono">
                    {metric.subtitle}
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5 text-emerald-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Validated Need</span>
                  </span>
                  <span>SIH 2026 Target</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
