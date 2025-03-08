'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function EducationLanding() {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="w-full py-12 px-4 md:px-12 lg:px-24 bg-white">
  <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
    {/* Left Side - Images */}
    <div className="w-full md:w-1/2 relative">
      <div className="relative flex items-center justify-center">
        <div className="absolute top-0 left-10 w-32 h-32 bg-blue-600 rounded-tl-full z-0"></div>
        
        <div className="relative z-10 mx-4 my-4">
          <div className="overflow-hidden h-30 w-50 rounded-3xl shadow-lg mb-4">
            <Image 
              src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Student studying" 
              width={400} 
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="overflow-hidden h-30 w-50 rounded-3xl shadow-lg mt-4">
            <Image 
              src="https://images.pexels.com/photos/5212697/pexels-photo-5212697.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Group of students collaborating" 
              width={400} 
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="absolute bottom-0 right-10 w-32 h-32 bg-blue-600 rounded-br-full z-0"></div>
      </div>
    </div>
    
    {/* Right Side - Text Content */}
    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
      <p className="text-blue-600 font-semibold text-lg mb-2">Who We Are</p>
      <h1 className="text-4xl font-extrabold text-black leading-tight mb-4">
        Take Your Skills to the <span className="text-blue-600">Next Level</span>
      </h1>
      
      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        Unlock limitless learning opportunities with our expertly crafted courses. We empower 
        learners with hands-on knowledge, mentorship, and resources to excel in their careers.
      </p>
      
      <div className="space-y-5">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg mr-4">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
</svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Empowering Growth</h3>
            <p className="text-gray-700">Gain real-world skills that make a difference.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg mr-4">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
</svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Unlock Your Potential</h3>
            <p className="text-gray-700">Expand your knowledge and advance your career.</p>
          </div>
        </div>
      </div>
      
      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition duration-300 shadow-md">
        Discover More
      </button>
    </div>
  </div>
</section>
      
      {/* How It Works Section */}
      <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8">
      <p className="text-blue-400 mb-1">Working Process</p>
      <h2 className="text-2xl md:text-3xl font-bold">How Does It Work</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-blue-500 rotate-45"></div>
          <div className="relative bg-blue-600 text-white p-5 transform rotate-45 w-14 h-14 flex items-center justify-center hover:bg-gray-600">
            <svg className="w-7 h-7 transform -rotate-45" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-1">Choose A Course</h3>
        <p className="text-center text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      {/* Dotted line */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-16 border-t-2 border-dashed border-gray-600"></div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-blue-500 rotate-45"></div>
          <div className="relative bg-blue-600 text-white p-5 transform rotate-45 w-14 h-14 flex items-center justify-center hover:bg-gray-600">
            <svg className="w-7 h-7 transform -rotate-45" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-1">Purchase A Course</h3>
        <p className="text-center text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      {/* Dotted line */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-16 border-t-2 border-dashed border-gray-600"></div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-blue-500 rotate-45"></div>
          <div className="relative bg-blue-600 text-white p-5 transform rotate-45 w-14 h-14 flex items-center justify-center hover:bg-gray-600">
            <svg className="w-7 h-7 transform -rotate-45" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-1">Start Now</h3>
        <p className="text-center text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}