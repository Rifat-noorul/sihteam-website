import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoModal from './components/VideoModal';
import ProblemStatement from './components/ProblemStatement';
import SolutionFeatures from './components/SolutionFeatures';
import Architecture from './components/Architecture';
import MarketImpact from './components/MarketImpact';
import ExpertValidation from './components/ExpertValidation';
import TeamCodeHydra from './components/TeamCodeHydra';
import Footer from './components/Footer';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-slate-900 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* Main Single-Page Scrolling Content */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero 
          onOpenModal={() => setIsVideoModalOpen(true)} 
        />

        {/* 3. Team CodeHydra & Mentors (Team ID 138408) */}
        <TeamCodeHydra />

        {/* 4. Problem Statement (MoES / INCOIS) */}
        <ProblemStatement />

        {/* 5. The Solution & Key Features */}
        <SolutionFeatures />

        {/* 6. Technical Architecture */}
        <Architecture />

        {/* 7. Market Impact & Validation (TAM, SAM, SOM) */}
        <MarketImpact />

        {/* 8. Expert Validation Case Study */}
        <ExpertValidation />

      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Pitch Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />

    </div>
  );
}