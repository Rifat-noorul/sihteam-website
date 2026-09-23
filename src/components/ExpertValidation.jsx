import React from 'react';
import { Quote, Anchor, Calendar, CheckCircle2, UserCheck } from 'lucide-react';

export default function ExpertValidation() {
  return (
    <section id="validation" className="py-24 bg-[#f5f5f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white text-slate-800 text-xs font-mono uppercase tracking-wider shadow-xs border border-slate-200/60">
            <UserCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Maritime Domain Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Expert Validation Case Study
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Direct field consultation with active commercial maritime fleet leadership confirming offshore bandwidth constraints.
          </p>
        </div>

        {/* Layout: Quote Block Left + 2 Stacked Images Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quote Block (7 Cols -> Left Column -> Left & Bottom Shadow) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.55)] hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-800">
                  <Anchor className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    Captain Sudheesh
                  </h3>
                  <p className="text-xs text-sky-600 font-mono">
                    Maritime Domain Expert | Synergy Marine Group
                  </p>
                </div>
                <div className="ml-auto hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] border border-slate-200/60 text-xs font-mono text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>3 September 2026</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative pl-6 border-l-2 border-sky-500 space-y-4 my-6">
                <Quote className="absolute -top-3 -left-3 w-6 h-6 text-sky-200 fill-sky-100" />
                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-normal">
                  "On 3 September 2026, a technical consultation with maritime domain expert Captain Sudheesh (Synergy Marine Group) confirmed that current ocean visualization platforms are too heavy for offshore deployment. He validated the critical need for our zero-install, low-bandwidth WebGL rendering architecture for vessels operating on constrained 128 kbps satellite links."
                </blockquote>
              </div>
            </div>

            {/* Validation Highlights Footer */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="flex items-center space-x-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Confirmed 128 kbps Sat-Link Limit</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Approved Zero-Install WebGL</span>
              </div>
            </div>
          </div>

          {/* Two Stacked Images (5 Cols -> Right Column -> Right & Bottom Shadow) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <img
              src="/images/captain-zoom.png"
              alt="Consultation Call with Captain Sudheesh"
              className="w-full object-cover rounded-3xl shadow-sm hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)] hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-200/60"
            />
            <img
              src="/images/offshore-screen.png"
              alt="Offshore Deployment Architecture Review"
              className="w-full object-cover rounded-3xl shadow-sm hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)] hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-200/60"
            />
          </div>

        </div>

      </div>
    </section>
  );
}