// components/Navbar.js
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
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
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <svg width="40" height="40" viewBox="0 0 50 50" className="fill-current text-blue-600">
                <rect width="50" height="50" rx="10" className="fill-blue-600" />
                <path d="M10 12H40V18H17V21H35V27H17V30H40V36H10V12Z" className="fill-white" />
              </svg>
              <span className={`ml-2 font-bold text-xl ${scrolled ? 'text-blue-600' : 'text-white'}`}>EduPortal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`px-2 py-1 rounded-md ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-800'} transition duration-300`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className={`px-2 py-1 rounded-md ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-800'} transition duration-300`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('scholarships')} 
              className={`px-2 py-1 rounded-md ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-800'} transition duration-300`}
            >
              Scholarships
            </button>
            <button 
              onClick={() => scrollToSection('programs')} 
              className={`px-2 py-1 rounded-md ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-800'} transition duration-300`}
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`px-3 py-2 rounded-md font-medium ${scrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white text-blue-600 hover:bg-blue-50'} transition duration-300`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('scholarships')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
            >
              Scholarships
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;