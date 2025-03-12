// app/faq/page.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(3); // Set the 4th item open by default
  
  const faqItems = [
    { 
      id: 0, 
      title: 'Development & Design', 
      content: 'Our platform offers comprehensive courses in development and design, covering everything from web development to UX/UI design principles. Learn from industry experts who provide practical insights alongside theoretical knowledge.'
    },
    { 
      id: 1, 
      title: 'Start With Mentors', 
      content: 'Every student gets paired with an experienced mentor who provides personalized guidance throughout your learning journey. Our mentors are professionals with years of industry experience ready to help you succeed.'
    },
    { 
      id: 2, 
      title: 'The Best Way to Boost Your Skills', 
      content: 'Through project-based learning and hands-on exercises, you will develop practical skills that employers are looking for. Our curriculum is designed to help you build a portfolio while you learn.'
    },
    { 
      id: 3, 
      title: 'What Can I Do to Help?', 
      content: 'You can contribute to our community by sharing your knowledge, participating in forums, or even becoming a mentor yourself once you have mastered your skills. We believe in the power of collaborative learning.'
    }
  ];
  
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Head>
        <title>FAQ - Education Platform</title>
        <meta name="description" content="Frequently asked questions about our education platform" />
      </Head>
      
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Graduate Image */}
          <div className="relative group">
            <div className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity z-10 rounded-xl"></div>
              <Image 
                src="https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg" 
                alt="Graduate in green gown" 
                width={600} 
                height={700} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Online Support Floating Box */}
            <div className="absolute left-4 bottom-6 bg-blue-600 text-white rounded-lg px-6 py-4 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-700">
              <h3 className="font-medium text-lg mb-1">Online Support</h3>
              <p className="text-sm text-blue-100">+858 75 45 64 24</p>
              <div className="absolute -right-2 -top-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                <span className="text-xs font-bold text-blue-800">24/7</span>
              </div>
            </div>

            {/* Decorative element */}
            <div className="hidden md:block absolute -right-4 -bottom-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 z-0"></div>
          </div>
          
          {/* Right Column - FAQ Section */}
          <div className="mt-8 md:mt-0 relative">
            <div className="mb-8 relative">
              <span className="absolute -left-4 top-0 w-1 h-12 bg-blue-600"></span>
              <h4 className="text-blue-600 font-medium mb-1 tracking-wide">FAQ</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Frequently Asked <span className="text-blue-600">Questions</span></h2>
              <p className="text-gray-600 mt-3">Find answers to common questions about our platform and courses.</p>
            </div>
            
            {/* FAQ Accordion */}
            <div className="divide-y divide-gray-200 rounded-xl overflow-hidden shadow-lg bg-white">
              {faqItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                  <div 
                    className="py-5 px-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(item.id)}
                  >
                    <h3 className="text-base md:text-lg font-medium text-gray-800">{item.title}</h3>
                    <div className={`bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white transition-transform duration-300 ${openFaq === item.id ? 'bg-blue-700 rotate-180' : 'hover:bg-blue-700'}`}>
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {openFaq === item.id && (
                    <div className="py-4 px-6 text-gray-600 bg-blue-50 border-l-4 border-blue-600 animate-fadeIn">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact button */}
            <div className="mt-8 text-center md:text-left">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Contact Support Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}