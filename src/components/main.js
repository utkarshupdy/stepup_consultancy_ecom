// components/Navbar.js
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section based on scroll position
      const sections = ['home', 'education', 'scholarships', 'programs', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              {/* Modern "E" Logo SVG */}
              <div className={`relative transition-transform duration-500 transform group-hover:scale-110 ${
                scrolled ? '' : 'hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
              }`}>
                <svg width="45" height="45" viewBox="0 0 100 100" className="fill-current">
                  {/* Base shape - gradient background */}
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Main rounded square with gradient */}
                  <rect width="100" height="100" rx="20" fill="url(#logoGradient)" />
                  
                  {/* Stylized "E" with cutouts */}
                  <path d="M20 20H80V35H35V42.5H70V57.5H35V65H80V80H20V20Z" fill="white" />
                  
                  {/* Accent circle */}
                  <circle cx="75" cy="25" r="8" fill="#FFD700" />
                </svg>
              </div>
              
              {/* <span className={`ml-3 font-bold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}>
                EduPortal
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {['home', 'education', 'scholarships', 'programs'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className={`px-4 py-2 mx-1 rounded-full font-medium transition-all duration-300 relative ${
                  activeSection === section
                    ? (scrolled ? 'text-blue-600' : 'text-white font-semibold')
                    : (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white')
                }`}
              >
                <span className="relative z-10 capitalize">
                  {section}
                </span>
                {activeSection === section && (
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    scrolled ? 'bg-blue-100/80' : 'bg-white/20'
                  }`}></span>
                )}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`ml-2 px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                scrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:shadow-lg' 
                  : 'bg-white text-blue-600 shadow-md hover:shadow-xl'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <div className="md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-full ${
                scrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20'
              } transition-all duration-300`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced with animations */}
      <div 
        className={`md:hidden fixed inset-0 bg-gradient-to-b from-blue-600 to-blue-900 z-40 transition-all duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ top: '60px' }}
      >
        <div className="px-4 pt-8 pb-6 h-full flex flex-col">
          <div className="space-y-2">
            {['home', 'education', 'scholarships', 'programs', 'contact'].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`w-full text-left px-5 py-4 text-white text-xl font-medium hover:bg-white/10 rounded-xl transition-all duration-300 transform ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  animationDelay: `${index * 50}ms`
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="mt-auto p-4 border-t border-white/20">
            <div className="flex items-center space-x-4">
              {/* Social Media Icons */}
              {[
                { icon: 'M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z'}, 
                { icon: 'M21.5 6.5H4.5C3.4 6.5 2.5 7.4 2.5 8.5V15.5C2.5 16.6 3.4 17.5 4.5 17.5H21.5C22.6 17.5 23.5 16.6 23.5 15.5V8.5C23.5 7.4 22.6 6.5 21.5 6.5ZM21.5 15.5H4.5V8.5H21.5V15.5ZM13 11.5C13 12.6 12.1 13.5 11 13.5H8.5V9.5H11C12.1 9.5 13 10.4 13 11.5ZM11 11.5H10V12.5H11V11.5ZM11 9.5H10V10.5H11V9.5ZM17 11.5C17 12.6 16.1 13.5 15 13.5H14C12.9 13.5 12 12.6 12 11.5C12 10.4 12.9 9.5 14 9.5H15C16.1 9.5 17 10.4 17 11.5ZM15 11.5H14V12.5H15V11.5ZM15 9.5H14V10.5H15V9.5Z'} ,
                { icon: 'M16.5 12.5H13.5V15.5C13.5 16.1 13 16.5 12.5 16.5H11.5C10.9 16.5 10.5 16.1 10.5 15.5V12.5H7.5C6.9 12.5 6.5 12 6.5 11.5V10.5C6.5 9.9 6.9 9.5 7.5 9.5H10.5V6.5C10.5 5.9 10.9 5.5 11.5 5.5H12.5C13 5.5 13.5 5.9 13.5 6.5V9.5H16.5C17.1 9.5 17.5 9.9 17.5 10.5V11.5C17.5 12 17.1 12.5 16.5 12.5Z' } // Facebook
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                  >
                    <path d={social.icon} fill="currentColor" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;