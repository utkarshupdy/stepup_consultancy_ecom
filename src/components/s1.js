"use client";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center overflow-hidden">
      <Head>
        <title>Education Platform</title>
        <meta name="description" content="Find the perfect course for you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-8">
        {/* Left Side - Search Section */}
        <div className="flex-1 flex justify-center md:justify-start md:pr-10 z-10">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">Find Your Path</h1>
            <p className="text-gray-700 mb-6">Discover courses that match your passion and goals</p>
            
            <div className="relative">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full p-4 pl-12 rounded-lg border-2 border-blue-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg 
                className="w-6 h-6 text-blue-500 absolute left-3 top-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <p className="text-gray-600 mt-4 text-center md:text-left">
              Join over <span className="font-bold text-blue-600">450,000</span> students finding their perfect match
            </p>
            
            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Section with SVG */}
        <div className="relative flex-1 flex justify-center md:justify-end h-96 md:h-auto">
          {/* Custom SVG instead of external image */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 600 500" 
            className="w-full max-w-lg md:max-w-xl z-0"
          >
            <defs>
              <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f8d9c0" />
                <stop offset="100%" stopColor="#e2b79a" />
              </linearGradient>
              <linearGradient id="hair" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5c4033" />
                <stop offset="100%" stopColor="#3b2819" />
              </linearGradient>
              <linearGradient id="laptop-base" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2a2a2a" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </linearGradient>
              <linearGradient id="screen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e4d8c" />
                <stop offset="100%" stopColor="#3672c4" />
              </linearGradient>
              <linearGradient id="shirt" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f86f7" />
                <stop offset="100%" stopColor="#3066d6" />
              </linearGradient>
              <linearGradient id="pants" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#29486b" />
                <stop offset="100%" stopColor="#1a2f45" />
              </linearGradient>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#4f86f7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4f86f7" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Background glow */}
            <circle cx="300" cy="250" r="240" fill="url(#glow)" />
            
            {/* Laptop base */}
            <path d="M180 280 L420 280 L450 380 L150 380 Z" fill="url(#laptop-base)" />
            {/* Laptop screen */}
            <rect x="200" y="180" width="200" height="120" rx="5" fill="url(#laptop-base)" />
            <rect x="210" y="190" width="180" height="100" rx="2" fill="url(#screen)" />
            
            {/* Code on screen */}
            <rect x="220" y="200" width="80" height="5" rx="1" fill="#fff" opacity="0.7" />
            <rect x="220" y="210" width="120" height="5" rx="1" fill="#fff" opacity="0.5" />
            <rect x="220" y="220" width="100" height="5" rx="1" fill="#fff" opacity="0.6" />
            <rect x="220" y="230" width="140" height="5" rx="1" fill="#fff" opacity="0.4" />
            <rect x="220" y="240" width="90" height="5" rx="1" fill="#fff" opacity="0.7" />
            <rect x="220" y="250" width="110" height="5" rx="1" fill="#fff" opacity="0.5" />
            <rect x="220" y="260" width="70" height="5" rx="1" fill="#fff" opacity="0.6" />
            <rect x="220" y="270" width="130" height="5" rx="1" fill="#fff" opacity="0.7" />
            
            {/* Student's body */}
            {/* Legs */}
            <path d="M270 380 L260 480 L290 480 L290 380 Z" fill="url(#pants)" />
            <path d="M330 380 L340 480 L310 480 L310 380 Z" fill="url(#pants)" />
            
            {/* Torso */}
            <path d="M250 300 C250 260, 350 260, 350 300 L350 380 L250 380 Z" fill="url(#shirt)" />
            
            {/* Arms */}
            <path d="M250 310 C230 310, 200 330, 190 360 L210 370 C215 350, 230 330, 250 330 Z" fill="url(#shirt)" />
            <path d="M350 310 C370 310, 400 330, 410 360 L390 370 C385 350, 370 330, 350 330 Z" fill="url(#shirt)" />
            
            {/* Hands */}
            <circle cx="190" cy="365" r="10" fill="url(#skin)" />
            <circle cx="410" cy="365" r="10" fill="url(#skin)" />
            
            {/* Head */}
            <circle cx="300" cy="240" r="40" fill="url(#skin)" />
            
            {/* Hair */}
            <path d="M300 200 C250 200, 260 260, 275 260 L325 260 C340 260, 350 200, 300 200 Z" fill="url(#hair)" />
            
            {/* Face */}
            <circle cx="285" cy="230" r="5" fill="#2a2a2a" />
            <circle cx="315" cy="230" r="5" fill="#2a2a2a" />
            <path d="M290 250 C295 255, 305 255, 310 250" fill="none" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
            
            {/* Floating elements */}
            <circle cx="160" cy="150" r="20" fill="#fff" filter="drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" />
            <circle cx="160" cy="150" r="12" fill="#FF6B6B" />
            <path d="M155 150 L158 155 L166 145" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            
            <circle cx="440" cy="180" r="25" fill="#fff" filter="drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" />
            <circle cx="440" cy="180" r="15" fill="#4CAF50" />
            <text x="440" y="184" fill="#fff" textAnchor="middle" fontSize="14" fontWeight="bold">JS</text>
            
            <rect x="400" cy="320" width="80" height="40" rx="10" fill="#fff" filter="drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" />
            <text x="440" y="340" fill="#6C63FF" textAnchor="middle" fontSize="12" fontWeight="bold">98% Score</text>
            
            <rect x="160" cy="320" width="80" height="40" rx="10" fill="#fff" filter="drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" />
            <text x="200" y="340" fill="#FF6B6B" textAnchor="middle" fontSize="12" fontWeight="bold">UI Design</text>
          </svg>

          {/* Floating Elements */}
          <div className="absolute top-10 left-0 bg-white p-4 rounded-xl shadow-lg flex items-center animate-bounce-slow z-10">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-2 mr-3 text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">Congratulations!</p>
              <p className="text-xs text-gray-500">Your admission is confirmed</p>
            </div>
          </div>

          <div className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-lg flex items-center animate-float-slow z-10">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-2 mr-3 text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm text-gray-800">450K+</p>
              <p className="text-xs text-gray-500">Happy Students</p>
            </div>
          </div>

          <div className="absolute top-1/4 right-0 bg-white p-4 rounded-xl shadow-lg z-10 animate-pulse-slow">
            <p className="font-bold text-sm text-gray-800">UX Design Masterclass</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500">Starting tomorrow</p>
              <div className="bg-yellow-400 text-xs font-bold text-gray-800 py-1 px-2 rounded-lg">
                NEW
              </div>
            </div>
            <button className="mt-3 w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all transform hover:scale-105">
              Enroll Now
            </button>
          </div>
          
          <div className="absolute bottom-10 right-10 bg-gradient-to-br from-pink-500 to-red-500 p-2 rounded-full text-white h-16 w-16 flex items-center justify-center shadow-lg animate-spin-slow z-10">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}