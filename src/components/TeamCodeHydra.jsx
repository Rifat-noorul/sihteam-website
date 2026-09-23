import React from 'react';
import { Users, Cpu, Award, ShieldCheck, BadgeCheck } from 'lucide-react';

export default function TeamCodeHydra() {
  const teamMembers = [
    {
      name: 'SHAILA NEELOFAR K',
      role: 'Team Leader',
      type: 'LEAD',
      badgeColor: 'bg-slate-900 text-white font-bold',
      image: '/images/shaila.jpg',
      description: 'Architected core system workflows, managed cross-functional development sprints, and ensured strict technical alignment with the MoES/INCOIS problem statement.'
    },
    {
      name: 'RIFAT N',
      role: 'Pitch Deck & Presentation',
      type: 'VISUALS',
      passId: 'Member 1',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      image: '/images/rifat.jpg',
      description: 'Structured the core project narrative, translated complex oceanographic telemetry into clear presentation deliverables, and designed the premium UI/UX landing page assets.'
    },
    {
      name: 'MOHAMMED FAZIL S',
      role: 'Prototype Development',
      type: 'CODE',
      passId: 'Member 2',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      image: '/images/fazil.jpg',
      description: 'Engineered the client-side WebGL viewport, integrated CesiumJS for zero-install rendering, and optimized the GPU-based Level-of-Detail (LOD) for massive ocean grids.'
    },
    {
      name: 'ROHITH S',
      role: 'Case Study & Video Docs',
      type: 'DOCS',
      passId: 'Member 3',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      image: '/images/rohith.jpg',
      description: 'Conducted active maritime expert consultations, validated 128 kbps offshore satellite constraints, and directed the comprehensive technical video documentation.'
    },
    {
      name: 'NISHOK KUMAR R',
      role: 'Prototype Development',
      type: 'CODE',
      passId: 'Member 4',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      image: '/images/nishok.jpg',
      description: 'Developed the backend spatial slicing pipeline, executed server-side NetCDF compression, and logged test runs for result comparison against simulated bandwidth constraints.'
    },
    {
      name: 'PRAVIN LENIN NAIDU',
      role: 'Pitch Deck & Presentation',
      type: 'PITCH',
      passId: 'Member 5',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      image: '/images/pravin.jpg',
      description: 'Formulated disaster management use-cases, synthesized blue economy market impact metrics (TAM/SAM/SOM), and refined the final jury pitch collateral.'
    },
  ];

  const mentors = [
    {
      name: 'MUTHUSAMY K',
      role: 'Project Mentor',
      type: 'MENTOR',
      badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      image: '/images/mentor1.jpg'
    },
    {
      name: 'SIVAPRAKASH P',
      role: 'Technical Mentor',
      type: 'MENTOR',
      badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      image: '/images/mentor2.jpg'
    },
  ];

  return (
    <section id="team" className="py-24 bg-[#f5f5f7] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-800 text-xs font-mono uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-slate-700" />
            <span>Smart India Hackathon 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Team CodeHydra & Mentors
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Digital Identity Credentials for <strong className="text-slate-900 font-mono">Team ID: 138408</strong>
          </p>
        </div>

        {/* 1. Team CodeHydra Roster */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8 pb-3 border-b border-slate-200">
            <Cpu className="w-5 h-5 text-slate-800" />
            <h3 className="text-xl font-bold text-slate-900 font-sans tracking-wide">
              Team CodeHydra (Team ID 138408)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => {
              // Position-aware directional shadow rule:
              // Left cards (col 0): shadow left & bottom
              // Center cards (col 1): shadow bottom only
              // Right cards (col 2): shadow right & bottom
              const colPos = idx % 3;
              let hoverShadowClass = "hover:shadow-[0_20px_35px_rgba(0,216,255,0.55)]";
              if (colPos === 0) {
                hoverShadowClass = "hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.55)]";
              } else if (colPos === 2) {
                hoverShadowClass = "hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)]";
              }

              return (
                <div
                  key={member.name}
                  className={`bg-white rounded-3xl overflow-hidden flex flex-col h-full shadow-sm ${hoverShadowClass} hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100`}
                >
                  {/* Top Section (Pure White) */}
                  <div className="p-6 bg-white">
                    {/* Header Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <ShieldCheck className="w-4 h-4 text-sky-600" />
                        <span className="text-xs font-mono text-slate-500">SIH 2026067 CodeHydra</span>
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border ${member.badgeColor}`}>
                        {member.type}
                      </span>
                    </div>

                    {/* Avatar Image (Increased size to w-20 h-20) & Details */}
                    <div className="flex items-start space-x-4 my-2">
                      <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shrink-0 shadow-xs">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.parentElement) {
                              e.target.parentElement.innerHTML = '<span class="text-xs text-slate-400 flex h-full items-center justify-center text-center p-1 font-mono">No Image</span>';
                            }
                          }}
                        />
                      </div>
                      <div className="pt-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          <span className="text-slate-400 text-xs font-mono font-normal mr-1.5">NAME:</span>
                          {member.name}
                        </h4>
                        <p className="text-[11px] font-mono text-sky-700 mt-1 mb-0.5 font-semibold">
                          <span className="text-slate-400 text-[10px] font-mono font-normal mr-1.5">ROLE:</span>
                          {member.role}
                        </p>
                        <p className="text-[10px] font-mono text-slate-400">{member.passId}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Description Section (Soft Grey) */}
                  <div className="p-6 bg-slate-50 border-t border-slate-100 flex-1">
                    <p className="text-[12px] text-slate-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Mentors (Centered layout) */}
        <div>
          <div className="flex items-center space-x-3 mb-8 pb-3 border-b border-slate-200">
            <Award className="w-5 h-5 text-emerald-700" />
            <h3 className="text-xl font-bold text-slate-900 font-sans tracking-wide">
              Project & Technical Mentors
            </h3>
          </div>

          {/* Centered grid wrapper for mentor cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
            {mentors.map((mentor, idx) => {
              const hoverShadowClass = idx === 0
                ? "hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.55)]"
                : "hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)]";

              return (
                <div
                  key={mentor.name}
                  className={`bg-white rounded-3xl overflow-hidden flex flex-col h-full shadow-sm ${hoverShadowClass} hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100`}
                >
                  <div className="p-6 bg-white flex-1">
                    {/* Header Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <BadgeCheck className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-mono text-slate-500">SIH 2026067 CodeHydra</span>
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border ${mentor.badgeColor}`}>
                        {mentor.type}
                      </span>
                    </div>

                    {/* Avatar Image (Increased size to w-20 h-20) & Details */}
                    <div className="flex items-start space-x-4 my-2">
                      <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shrink-0 shadow-xs">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.parentElement) {
                              e.target.parentElement.innerHTML = '<span class="text-xs text-slate-400 flex h-full items-center justify-center text-center p-1 font-mono">No Image</span>';
                            }
                          }}
                        />
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold text-slate-900">
                          <span className="text-slate-400 text-xs font-mono font-normal mr-1.5">NAME:</span>
                          {mentor.name}
                        </h4>
                        <p className="text-[11px] font-mono text-emerald-700 font-semibold mt-1 mb-0.5">
                          <span className="text-slate-400 text-[10px] font-mono font-normal mr-1.5">ROLE:</span>
                          {mentor.role}
                        </p>
                        <p className="text-[10px] font-mono text-slate-400">{mentor.passId}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}