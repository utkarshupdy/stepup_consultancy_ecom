// pages/index.js
"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Edu() {
  // SVG icon components
  const icons = {
    uiux: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
        <circle cx="32" cy="22" r="18" fill="#FFD580" />
        <g fill="#3b82f6">
          <circle cx="32" cy="22" r="3" />
          <circle cx="24" cy="32" r="2" />
          <circle cx="32" cy="38" r="2" />
          <circle cx="40" cy="32" r="2" />
          <path d="M32 25L24 32L32 38L40 32z" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M32 25L32 38" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M24 32L40 32" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        </g>
        <circle cx="32" cy="45" r="3" fill="#3b82f6" />
      </svg>
    ),
    finance: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
        <rect x="15" y="28" width="34" height="16" rx="2" fill="#3b82f6" />
        <circle cx="32" cy="36" r="5" fill="white" />
        <path d="M22 28v-8a10 10 0 0120 0v8" stroke="#3b82f6" fill="none" strokeWidth="2.5" />
        <path d="M32 31v10M29 34h6" stroke="#3b82f6" fill="none" strokeWidth="1.5" />
      </svg>
    ),
    seo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
        <path d="M46 18L34 30M26 38L14 50" stroke="#3b82f6" strokeWidth="3" fill="none" />
        <path d="M14 18L26 30M34 38L46 50" stroke="#3b82f6" strokeWidth="3" fill="none" />
        <circle cx="30" cy="34" r="16" stroke="#3b82f6" strokeWidth="3" fill="none" />
        <path d="M30 26v16M22 34h16" stroke="#3b82f6" strokeWidth="2" />
      </svg>
    ),
    health: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
        <path d="M14 32a7 7 0 1114 0 7 7 0 01-14 0z" fill="#3b82f6" />
        <path d="M28 26c4 0 8 2 10 6 2-4 6-6 10-6" stroke="#3b82f6" fill="none" strokeWidth="2" />
        <path d="M42 42a12 12 0 00-10-6 12 12 0 00-10 6" stroke="#3b82f6" fill="none" strokeWidth="2" />
        <path d="M24 32h4M21 29v6" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    computer: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
        <rect x="12" y="14" width="40" height="26" rx="2" fill="#3b82f6" />
        <rect x="16" y="18" width="32" height="18" rx="1" fill="white" />
        <path d="M24 46h16M28 46v4M36 46v4" stroke="#3b82f6" fill="none" strokeWidth="2" />
        <path d="M20 24h8M20 28h4M30 28h8" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="36" cy="24" r="2" fill="#3b82f6" />
      </svg>
    ),
    insurance: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
        <path d="M32 14a18 18 0 100 36 18 18 0 000-36z" stroke="#3b82f6" fill="none" strokeWidth="2" />
        <path d="M32 20v18M23 32h18" stroke="#3b82f6" strokeWidth="2" />
        <path d="M32 44a12 12 0 100-24 12 12 0 000 24z" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M20 20l24 24M20 44l24-24" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    ),
    video: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
        <rect x="12" y="20" width="30" height="24" rx="2" fill="#3b82f6" />
        <path d="M42 28l10-6v20l-10-6z" fill="#3b82f6" />
        <path d="M25 32l-4-3v6l4-3z" fill="white" />
      </svg>
    ),
    development: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
        <rect x="12" y="18" width="40" height="28" rx="2" fill="#3b82f6" />
        <rect x="16" y="22" width="32" height="20" rx="1" fill="white" />
        <path d="M22 28l-4 4 4 4M34 28l4 4-4 4M26 36l4-8" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="42" cy="40" r="3" fill="#3b82f6" />
      </svg>
    ),
    art: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12">
        <circle cx="32" cy="32" r="20" stroke="#3b82f6" fill="none" strokeWidth="2" />
        <path d="M32 14a6 6 0 010 12 6 6 0 010 12 6 6 0 010 12" stroke="#3b82f6" fill="none" strokeWidth="2" />
        <path d="M14 32h36M22 18l20 28M22 46l20-28" stroke="#3b82f6" fill="none" strokeWidth="2" />
      </svg>
    ),
  };

  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Hero text animation
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Category card component with animations inspired by FeatureCard
  function CategoryCard({ title, icon, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div 
        variants={item}
        className={`bg-slate-50 p-8 rounded-lg text-center transition-all duration-300 cursor-pointer relative overflow-hidden 
          ${isHovered ? 'shadow-lg bg-slate-100 transform -translate-y-2' : 'shadow-md'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Number indicator similar to FeatureCard */}
        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
          
        </div>
        
        <motion.div 
          className="flex justify-center items-center mb-4"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        
        {/* Bottom blue line animation like in FeatureCard */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  }

  return (
    <div className="bg-white font-sans">
      <Head>
        <title>Education And Teaching Courses</title>
        <meta name="description" content="Education courses for the next generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Content with animations */}
          <motion.div 
            className="w-full md:w-5/12 text-left md:pr-12"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <motion.span 
              className="text-blue-500 m-5 font-semibold text-base pb-1 border-b-2 border-blue-500 inline-block"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Top Category
            </motion.span>
            
            <motion.h1 
              className="mt-6 text-5xl font-extrabold m-5 text-slate-900 leading-tight"
              variants={titleVariants}
            >
              Education And<br />
              Teaching Courses<br />
              <motion.span
                className="text-blue-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Next Generation
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-slate-600 m-5 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Education is a vital process that fosters personal <br /> growth,
              societal development, and intellectual advancement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a 
                href="#explore" 
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg m-5"
              >
                Explore Courses
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Grid with staggered animation */}
          <motion.div 
            className="w-full md:w-7/12 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {Object.entries(icons).map(([key, icon], index) => (
              <CategoryCard 
                key={key}
                title={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                icon={icon}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
