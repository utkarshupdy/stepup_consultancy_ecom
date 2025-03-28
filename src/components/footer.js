// FooterComponent.js
"use client"
import React from 'react';

const FooterComponent = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      {/* App Download Banner */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-blue-600 rounded-lg shadow-lg p-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-1">Lets setup your </h2>
            <h2 className="text-3xl font-bold">Carrier to Next Level.</h2>
          </div>
          <div className="flex gap-3">
            <a href="#" className="bg-white text-gray-800 hover:bg-gray-200 transition-colors duration-300 rounded-md py-2 px-4 flex items-center">
              {/* <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5275 12.5133C17.5005 9.67332 19.9825 8.40332 20.0705 8.35332C18.6795 6.27332 16.5235 6.00332 15.7615 5.98332C13.9355 5.79332 12.1705 7.09332 11.2425 7.09332C10.2955 7.09332 8.86849 5.99832 7.33349 6.02332C5.35349 6.04832 3.52549 7.17332 2.52649 8.89832C0.477487 12.4133 2.03349 17.6133 3.99849 20.4133C4.97849 21.7823 6.13149 23.3323 7.63649 23.2813C9.10649 23.2263 9.66749 22.3423 11.4315 22.3423C13.1795 22.3423 13.7075 23.2813 15.2435 23.2483C16.8235 23.2263 17.8225 21.8623 18.7695 20.4803C19.9135 18.8923 20.3695 17.3293 20.3895 17.2483C20.3485 17.2373 17.5585 16.1103 17.5275 12.5133Z" />
                <path d="M14.9385 3.76001C15.7145 2.79001 16.2265 1.47701 16.0725 0.150009C14.9415 0.194009 13.5335 0.910009 12.7225 1.85301C11.9985 2.68601 11.3805 4.03001 11.5535 5.31701C12.8275 5.40401 14.1305 4.71701 14.9385 3.76001Z" />
              </svg> */}
              Browse Courses
            </a>
            <a href="#" className="bg-white text-gray-800 hover:bg-gray-200 transition-colors duration-300 rounded-md py-2 px-4 flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Links and Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="mb-4">
              <a href="#" className="flex items-center">
                <svg className="h-6 w-6 text-blue-600 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 21h22L12 2zm0 5.5l7.53 13H4.47L12 7.5zm0 4.5a1 1 0 100 2 1 1 0 000-2zm0 3a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
                <span className="text-blue-600 font-semibold text-lg">StepUp Consultancy</span>
              </a>
            </div>
            <h2 className="text-gray-600 text-sm font-bold mb-4">We Listen to Your Dreams, Like a Friend</h2>
            <p className="text-gray-600 text-sm mb-4">
            At Stepup Consultancy, we're your dedicated guides for all things education. If you're considering further studies, whether in India or internationally, we provide you with all the essential information.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="bg-blue-800 text-white p-2 rounded hover:bg-gray-600 transition-colors duration-300">
                <svg className="h-4 w-4" viewBox="0 0 320 512" fill="currentColor">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded hover:bg-gray-600 transition-colors duration-300">
                <svg className="h-4 w-4" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a href="#" className="bg-red-600 text-white p-2 rounded hover:bg-gray-600 transition-colors duration-300">
                <svg className="h-4 w-4" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Top Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">MBA, MSc, M. Tech</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">BBA, B.Com, BSC, BCA</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Computer Science</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Management</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Law & Architecture</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Science and Humanities</a></li>
              {/* <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300"></a></li> */}
            </ul>
          </div>
          
          {/* Platform Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Top Medical Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Dental</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Pharmacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Nursing MBBS</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">B.Sc (Cardiac/optimetry)</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">B.Sc (renal dialysis / anesthesia)</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Physiotherapy (BPT)</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Allied Health and Science</a></li>
            </ul>
          </div>
          {/* Platform Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Other Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact Page</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Study Abroad</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Our Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Tutorials</a></li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div className="col-span-1 align-middle align-item-center">
            <h3 className="font-semibold text-gray-800 mb-4">Subscribe</h3>
            <div className="flex mb-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border text-black border-gray-300 p-2 text-sm rounded-l-md flex-grow focus:outline-none"
              />
              <button className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              Get the latest news and updates right at your inbox.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
          © 2023 Educal, All Rights Reserved. Design By 
          <a href="#" className="text-blue-600 hover:underline ml-1">StepUp Consultancy</a>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <a href="#" className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </a>
    </div>
  );
};

export default FooterComponent;