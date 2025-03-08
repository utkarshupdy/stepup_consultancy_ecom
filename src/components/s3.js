// pages/index.js
"use client"
import { useState } from 'react';
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

  // University logos
  const universityLogos = [
    <svg key="uni1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" />
      <path d="M30 65l40-30M30 35l40 30" stroke="#20374c" strokeWidth="3" />
      <path d="M50 25v50" stroke="#20374c" strokeWidth="3" />
      <path d="M25 50h50" stroke="#20374c" strokeWidth="3" />
      <path d="M38 35l12-10 12 10" fill="#c12e34" />
      <path d="M38 65l12 10 12-10" fill="#c12e34" />
    </svg>,
    <svg key="uni2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" />
      <path d="M30 30h40v40H30z" fill="none" stroke="#20374c" strokeWidth="3" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="#20374c" strokeWidth="2" />
      <path d="M50 25v10M50 65v10M25 50h10M65 50h10" stroke="#20374c" strokeWidth="3" />
      <path d="M35 35l30 30" stroke="#c12e34" strokeWidth="3" />
    </svg>,
    <svg key="uni3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" />
      <path d="M35 40l15-15 15 15v30H35V40z" fill="none" stroke="#20374c" strokeWidth="3" />
      <path d="M44 50a6 6 0 0112 0v20" stroke="#c12e34" strokeWidth="3" fill="none" />
    </svg>,
    <svg key="uni4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" />
      <path d="M30 30h40v40H30z" fill="none" stroke="#20374c" strokeWidth="3" />
      <path d="M30 50h40M50 30v40" stroke="#20374c" strokeWidth="2" />
      <path d="M35 35l30 30M35 65l30-30" stroke="#c12e34" strokeWidth="3" />
    </svg>,
    <svg key="uni5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="#20374c" strokeWidth="3" />
      <path d="M50 25v50" stroke="#20374c" strokeWidth="3" />
      <path d="M50 25l-15 25h30L50 25z" fill="#c12e34" />
    </svg>,
    <svg key="uni6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#20374c" strokeWidth="2" />
      <path d="M35 35h30v30H35z" fill="none" stroke="#20374c" strokeWidth="3" />
      <circle cx="50" cy="50" r="10" fill="#c12e34" />
      <path d="M30 30l40 40M30 70l40-40" stroke="#20374c" strokeWidth="2" />
    </svg>
  ];

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
            You don't have to struggle alone, you've got our assistance and help.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {cardData.map((card, index) => (
            <FeatureCard key={index} data={card} />
          ))}
        </div>

        {/* Partners Section */}
        <div className="bg-gray-200 rounded-xl p-8 md:p-12 shadow-md">
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
              <div key={index} className="flex items-center justify-center">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}