// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ScholarshipPage() {
  // Card data
  const cardData = [
    {
      title: "4,000\nOnline courses",
      description: "Arse over tit morish wind up gormless butty!",
      color: "bg-blue-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" stroke="white" fill="none" strokeWidth="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          <path d="M19 6c0-1.7-3.3-3-7-3s-7 1.3-7 3v7h14V6z" />
        </svg>
      )
    },
    {
      title: "Job placement\nSupport",
      description: "Arse over tit morish wind up gormless butty!",
      color: "bg-pink-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" stroke="white" fill="none" strokeWidth="1.5">
          <path d="M18 8h1a4 4 0 010 8h-1" />
          <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <path d="M6 1v3M10 1v3M14 1v3" />
          <path d="M6 16h.01M12 16h.01" />
        </svg>
      )
    },
    {
      title: "Lifetime\nSlack chat support",
      description: "Arse over tit morish wind up gormless butty!",
      color: "bg-purple-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" stroke="white" fill="none" strokeWidth="1.5">
          <path d="M17 8h1a3 3 0 110 6h-1" />
          <path d="M7 8H6a3 3 0 000 6h1" />
          <path d="M7 11h10" />
          <path d="M12 2a4 4 0 004 4M12 2a4 4 0 01-4 4" />
          <circle cx="9" cy="10" r="3" />
          <circle cx="15" cy="10" r="3" />
        </svg>
      )
    },
    {
      title: "Research\nand Innovation",
      description: "Arse over tit morish wind up gormless butty!",
      color: "bg-emerald-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" stroke="white" fill="none" strokeWidth="1.5">
          <path d="M4 4l5 3.5V17l-5-3.5V4z" />
          <path d="M20 4l-5 3.5V17l5-3.5V4z" />
          <path d="M12 4v9" />
          <path d="M12 13l-5-3.5" />
          <path d="M12 13l5-3.5" />
        </svg>
      )
    }
  ];

  // University logos with animation attributes
  const universityLogos = [
    <svg key="uni1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 logo-animation">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" className="animate-stroke" />
      <path d="M30 65l40-30M30 35l40 30" stroke="#20374c" strokeWidth="3" className="animate-path-draw" />
      <path d="M50 25v50" stroke="#20374c" strokeWidth="3" className="animate-path-draw" />
      <path d="M25 50h50" stroke="#20374c" strokeWidth="3" className="animate-path-draw" />
      <path d="M38 35l12-10 12 10" fill="#c12e34" className="animate-fill" />
      <path d="M38 65l12 10 12-10" fill="#c12e34" className="animate-fill" />
    </svg>,
    <svg key="uni2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 logo-animation">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" className="animate-stroke" />
      <path d="M30 30h40v40H30z" fill="none" stroke="#20374c" strokeWidth="3" className="animate-path-draw" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="#20374c" strokeWidth="2" className="animate-stroke" />
      <path d="M50 25v10M50 65v10M25 50h10M65 50h10" stroke="#20374c" strokeWidth="3" className="animate-path-draw" />
      <path d="M35 35l30 30" stroke="#c12e34" strokeWidth="3" className="animate-path-draw-accent" />
    </svg>,
    <svg key="uni3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 logo-animation">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" className="animate-stroke" />
      <path d="M35 40l15-15 15 15v30H35V40z" fill="none" stroke="#20374c" strokeWidth="3" className="animate-path-draw" />
      <path d="M44 50a6 6 0 0112 0v20" stroke="#c12e34" strokeWidth="3" fill="none" className="animate-path-draw-accent" />
    </svg>,
    <svg key="uni4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 logo-animation">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" className="animate-stroke" />
      <path d="M30 30h40v40H30z" fill="none" stroke="#20374c" strokeWidth="3" className="animate-path-draw" />
      <path d="M30 50h40M50 30v40" stroke="#20374c" strokeWidth="2" className="animate-path-draw" />
      <path d="M35 35l30 30M35 65l30-30" stroke="#c12e34" strokeWidth="3" className="animate-path-draw-accent" />
    </svg>,
    <svg key="uni5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 logo-animation">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" className="animate-stroke" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="#20374c" strokeWidth="3" className="animate-stroke" />
      <path d="M50 25v50" stroke="#20374c" strokeWidth="3" className="animate-path-draw" />
      <path d="M50 25l-15 25h30L50 25z" fill="#c12e34" className="animate-fill" />
    </svg>,
    <svg key="uni6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 logo-animation">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" className="animate-stroke" />
      <path d="M35 35h30v30H35z" fill="none" stroke="#20374c" strokeWidth="3" className="animate-path-draw" />
      <circle cx="50" cy="50" r="10" fill="#c12e34" className="animate-fill" />
      <path d="M30 30l40 40M30 70l40-40" stroke="#20374c" strokeWidth="2" className="animate-path-draw" />
    </svg>
  ];

  // Animation visibility control
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const partnersSection = document.getElementById('partners-section');
      if (partnersSection) {
        const rect = partnersSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Feature card component with hover effect
  function FeatureCard({ data }) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className={`rounded-lg shadow-lg p-8 ${data.color} transition-all duration-300 transform hover:scale-105 ${isHovered ? 'opacity-90' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="mb-4">
          {data.icon}
        </div>
        <h3 className="text-white text-xl font-bold mb-2 whitespace-pre-line">{data.title}</h3>
        <p className="text-white text-sm">{data.description}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Scholarship Program</title>
        <meta name="description" content="Scholarship program details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx global>{`
        /* Animation keyframes */
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes strokeDraw {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes fillIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Apply animations to elements */
        .logo-animation {
          animation: float 6s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        
        .logo-animation:hover {
          transform: scale(1.1);
        }
        
        .animate-stroke {
          stroke-dasharray: 250;
          stroke-dashoffset: 250;
          animation: strokeDraw 2s forwards;
          animation-delay: calc(var(--index, 0) * 0.2s);
        }
        
        .animate-path-draw {
          stroke-dasharray: 150;
          stroke-dashoffset: 150;
          animation: strokeDraw 1.5s forwards;
          animation-delay: calc(var(--index, 0) * 0.2s + 0.5s);
        }
        
        .animate-path-draw-accent {
          stroke-dasharray: 150;
          stroke-dashoffset: 150;
          animation: strokeDraw 1.5s forwards;
          animation-delay: calc(var(--index, 0) * 0.2s + 1s);
        }
        
        .animate-fill {
          opacity: 0;
          animation: fillIn 1s forwards;
          animation-delay: calc(var(--index, 0) * 0.2s + 1.5s);
        }
        
        .partners-visible .logo-animation:nth-child(1) {
          animation-delay: 0.1s;
          --index: 1;
        }
        
        .partners-visible .logo-animation:nth-child(2) {
          animation-delay: 0.2s;
          --index: 2;
        }
        
        .partners-visible .logo-animation:nth-child(3) {
          animation-delay: 0.3s;
          --index: 3;
        }
        
        .partners-visible .logo-animation:nth-child(4) {
          animation-delay: 0.4s;
          --index: 4;
        }
        
        .partners-visible .logo-animation:nth-child(5) {
          animation-delay: 0.5s;
          --index: 5;
        }
        
        .partners-visible .logo-animation:nth-child(6) {
          animation-delay: 0.6s;
          --index: 6;
        }
      `}</style>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section with orange underline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            <span className="relative inline-block mb-2">
              Why An
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-orange-500"></span>
            </span> <span className="relative">
              Scholercity
              <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-500 -z-10"></span>
            </span> <span className="relative inline-block">
              Out
              <span className="absolute -bottom-1 right-0 w-1/2 h-1 bg-orange-500"></span>
            </span><br />
            <span className="relative inline-block mt-1">
              Of The Ordinary
              <span className="absolute -bottom-1 left-1/4 w-1/2 h-1 bg-orange-500"></span>
            </span>
          </h1>
          <p className="text-lg text-slate-700">
            You don&apos;t have to struggle alone, you&apos;ve got our assistance and help.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {cardData.map((card, index) => (
            <FeatureCard key={index} data={card} />
          ))}
        </div>

        {/* Partners Section */}
        <div 
          id="partners-section" 
          className={`bg-gray-200 rounded-xl p-8 md:p-12 shadow-md transition-all duration-1000 ${isVisible ? 'partners-visible' : 'opacity-90'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 tracking-tight">
            <span className="relative inline-block">
              25m+ Trusted Partners
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500"></span>
            </span>
          </h2>
          <p className="text-center text-slate-700 mb-12 max-w-3xl mx-auto font-medium">
            Education is the foundation of personal societal growth, empowering 
            individuals with knowledge, skills critical thinking.
          </p>

          {/* University Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
            {universityLogos.map((logo, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}