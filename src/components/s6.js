// app/components/FeatureSection.jsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

const FeatureCard = ({ icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 ${
        isHovered ? 'shadow-xl transform -translate-y-2 border-b-4 border-blue-600' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Number indicator */}
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
        {index + 1}
      </div>
      
      {/* Icon wrapper */}
      <div className="mb-4 flex items-center">
        <div className={`w-14 h-14 rounded-lg p-3 ${
          isHovered ? 'bg-blue-600' : 'bg-blue-100'
        } transition-colors duration-300 mr-3`}>
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className={`w-8 h-8 transition-all duration-300 ${
              isHovered ? 'filter brightness-0 invert' : ''
            }`}
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <p className="text-gray-600 mt-2">{description}</p>
      
      {/* Hover indicator */}
      {isHovered && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-b-xl"></div>
      )}
    </div>
  );
};

const Home3 = () => {
  const features = [
    {
      icon: 'https://img.icons8.com/color/48/000000/student-male--v1.png',
      title: 'Exclusive Advisor',
      description: 'Get personalized guidance from industry experts who can help you navigate your learning journey effectively.'
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/video.png',
      title: 'Video Tutorial',
      description: 'Access high-quality video content created by professionals to enhance your understanding of complex topics.'
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/bank-card-front-side.png',
      title: 'Affordable Price',
      description: 'Our courses are priced to ensure quality education is accessible to everyone, with flexible payment options.'
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/online-support.png',
      title: 'Life Time Support',
      description: 'Enjoy continuous access to our resources and community even after completing your courses.'
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Features header */}
        <div className="text-center mb-16 relative">
          <h4 className="text-blue-600 font-medium mb-2 tracking-wide">Features</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">One Platform <span className="text-blue-600">Many Courses</span></h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">Discover why thousands of students choose our platform for their educational journey.</p>
          
          {/* Decorative elements */}
          <div className="hidden md:block absolute -left-4 top-0 w-20 h-20 bg-yellow-400 rounded-full opacity-10"></div>
          <div className="hidden md:block absolute -right-4 bottom-0 w-16 h-16 bg-blue-600 rounded-full opacity-10"></div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <a 
            href="#courses" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
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
        </div>
      </div>
      
      {/* Green checkmark accent */}
      <div className="hidden lg:block absolute right-8 bottom-8">
        <div className="relative w-24 h-24 bg-green-500 rounded-full opacity-20 flex items-center justify-center">
          <div className="absolute w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3;