// import Image from 'next/image';
// import { 
//   GraduationCap, 
//   Globe, 
//   BookOpen, 
//   CheckCircle 
// } from 'lucide-react';

// export default function StudyAbroadPage() {
//   const destinations = [
//     {
//       name: 'United States',
//       benefits: [
//         { icon: GraduationCap, text: 'Top-tier Universities' },
//         { icon: Globe, text: 'Diverse Cultural Experience' },
//         { icon: BookOpen, text: 'Cutting-Edge Research' }
//       ],
//       image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     },
//     {
//       name: 'Canada',
//       benefits: [
//         { icon: GraduationCap, text: 'Internationally Recognized Programs' },
//         { icon: Globe, text: 'Multicultural Environment' },
//         { icon: BookOpen, text: 'Innovation-Driven Education' }
//       ],
//       image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     },
//     {
//       name: 'Australia',
//       benefits: [
//         { icon: GraduationCap, text: 'World-Class Education' },
//         { icon: Globe, text: 'Unique Learning Environment' },
//         { icon: BookOpen, text: 'Research-Intensive Programs' }
//       ],
//       image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     }
//   ];

//   const applicationSteps = [
//     {
//       number: 1,
//       title: 'Initial Consultation',
//       description: 'Personalized guidance and university selection'
//     },
//     {
//       number: 2,
//       title: 'Document Preparation',
//       description: 'Expert help with application documents'
//     },
//     {
//       number: 3,
//       title: 'Test Preparation',
//       description: 'Comprehensive test readiness support'
//     },
//     {
//       number: 4,
//       title: 'Visa & Travel',
//       description: 'Seamless arrangements and support'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       <div className="container mx-auto px-4 py-12">
//         {/* Header */}
//         <header className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-blue-900 mb-4 tracking-tight">
//             Global Horizons
//           </h1>
//           <p className="text-xl text-blue-700 max-w-2xl mx-auto">
//             Your gateway to transformative international education experiences
//           </p>
//         </header>

//         {/* Destinations Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {destinations.map((destination, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
//             >
//               <div className="relative">
//                 <Image 
//                   src={destination.image} 
//                   alt={destination.name} 
//                   width={400} 
//                   height={250} 
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//                   <h2 className="text-2xl font-semibold">{destination.name}</h2>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <ul className="space-y-2">
//                   {destination.benefits.map((benefit, idx) => (
//                     <li key={idx} className="flex items-center">
//                       <benefit.icon className="mr-3 text-blue-600" size={20} />
//                       {benefit.text}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Explore Button */}
//         <div className="text-center mt-12">
//           <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
//             Explore More Destinations
//           </button>
//         </div>

//         {/* Application Process */}
//         <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
//           <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
//             Our Application Process
//           </h2>
//           <div className="grid md:grid-cols-4 gap-6">
//             {applicationSteps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl font-bold text-blue-800">
//                     {step.number}
//                   </span>
//                 </div>
//                 <h3 className="font-semibold mb-2">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client"
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { 
   GraduationCap, 
  Globe, 
  BookOpen, 
  MapPin,
  CheckCircle,
  Plane,
  FileText,
  Target,
  Calendar,
  ChevronDown,
  ChevronUp 
} from 'lucide-react';

export default function StudyAbroadPage() {
  const [isProcessExpanded, setIsProcessExpanded] = useState(false);
  const destinations = [
    {
      name: 'United States',
      benefits: [
        { icon: GraduationCap, text: 'Top-tier Universities' },
        { icon: Globe, text: 'Diverse Cultural Experience' },
        { icon: BookOpen, text: 'Cutting-Edge Research' }
      ],
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Use local image
      processContent: `At Stepup Consultancy, we believe that applying to study in the United States should be a straightforward and empowering experience. Our team of seasoned education consultants is here to guide you through every stage of the process.`
    },
    {
      name: 'Canada',
      benefits: [
        { icon: GraduationCap, text: 'Internationally Recognized Programs' },
        { icon: Globe, text: 'Multicultural Environment' },
        { icon: BookOpen, text: 'Innovation-Driven Education' }
      ],
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Use local image
      processContent: `Canada offers a world-class education experience. Our dedicated consultants will help you navigate the application process, from selecting the right university to preparing comprehensive application documents.`
    },
    {
      name: 'Ireland',
      benefits: [
        { icon: GraduationCap, text: 'World-Class Education' },
        { icon: Globe, text: 'Unique Learning Environment' },
        { icon: BookOpen, text: 'Research-Intensive Programs' }
      ],
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Use local image
      processContent: `Discover the rich educational landscape of Ireland. Our consultants provide end-to-end support, ensuring a smooth and successful application journey to Irish universities.`
    }
  ];

  const applicationSteps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'Personalized guidance and university selection',
      icon: Target
    },
    {
      number: 2,
      title: 'Document Preparation',
      description: 'Expert help with application documents',
      icon: FileText
    },
    {
      number: 3,
      title: 'Test Preparation',
      description: 'Comprehensive test readiness support',
      icon: Calendar
    },
    {
      number: 4,
      title: 'Visa & Travel',
      description: 'Seamless arrangements and support',
      icon: Plane
    }
  ];

  const studyAbroadProcess = [
    {
      title: 'Initial Consultation',
      description: 'We start with a friendly conversation to understand your strengths and aspirations. Our consultants will help you with university selection and guide you in choosing the right course and university based on your goals.',
      icon: Target
    },
    {
      title: 'Document Preparation',
      description: 'For university applications, you\'ll need key documents, including Statement of Purpose (SOP), Letters of Recommendation, and Proof of English proficiency (IELTS, TOEFL, etc.). Our expert consultants will guide you in creating these documents carefully, ensuring they\'re well-written and impactful.',
      icon: FileText
    },
    {
      title: 'Test Preparation',
      description: 'Some universities require GMAT, GRE, IELTS, TOEFL, SAT, or PTE tests. Our professional abroad education consultants will help you prepare for these tests using updated resources and training to help you perform at your best.',
      icon: Calendar
    },
    {
      title: 'University Application',
      description: 'Once you\'ve prepared all the required documents and passed any necessary tests, we\'ll help you submit your applications to your chosen universities. We ensure that all applications meet the universities\' criteria, reducing the chances of rejection.',
      icon: GraduationCap
    },
    {
      title: 'Visa and Travel Arrangements',
      description: 'Congratulations on your acceptance! Our overseas education consultants will guide you through the visa process and help you with all travel arrangements, ensuring a smooth transition to your new destination.',
      icon: Plane
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[90vh] w-full">
        <Image 
          src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Study Abroad Hero Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Stepup Consultancy
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-delay mb-8">
            Your Global Education Journey Starts Here, We Will Guide You Right Away
          </p>
          <button className="bg-white text-indigo-800 px-6 py-3 rounded-full hover:bg-indigo-100 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Gateway to Global Education */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-900 mb-6">
            Your Gateway to Global Education
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Stepup Consultancy is your trusted partner in turning study abroad aspirations into reality. Our dedicated team provides personalized guidance from understanding your academic background to selecting the perfect university and country. We streamline the entire journey with tailored test preparation, expert admission assistance, comprehensive visa consultancy, and smart budget planning. Let us empower you to explore new cultures, access world-class education, and build a future full of global opportunities.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={destination.image} 
                  alt={`${destination.name} Study Destination`} 
                  layout="fill" 
                  objectFit="cover"
                  className="absolute inset-0 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 z-10"></div>
                <div className="absolute bottom-0 left-0 right-0  text-white p-4 z-20">
                  <h2 className="text-2xl font-semibold">{destination.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-4">
                  {destination.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <benefit.icon className="mr-3 text-indigo-600" size={20} />
                      <span className="mr-3 text-black">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700">{destination.processContent}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Application Process */}
        {/* <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-900">
            Our Application Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all hover:scale-110">
                  <span className="text-2xl font-bold text-indigo-800">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 text-indigo-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section> */}
        <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsProcessExpanded(!isProcessExpanded)}
          >
            <h2 className="text-4xl font-bold text-indigo-900">
              Our Application Process
            </h2>
            <div className="text-indigo-600">
              {isProcessExpanded ? (
                <ChevronUp size={36} />
              ) : (
                <ChevronDown size={36} />
              )}
            </div>
          </div>

          {isProcessExpanded && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {applicationSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-50 group-hover:shadow-xl">
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                      <span className="text-2xl font-bold text-indigo-800 group-hover:text-indigo-900 transition-colors">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 text-indigo-900 text-center group-hover:text-indigo-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center group-hover:text-indigo-800 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      </div>

      {/* Detailed Study Abroad Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">
          The Process for Applying to Study Abroad
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studyAbroadProcess.map((step, index) => (
            <div 
              key={index} 
              className="group flex"
            >
              <div 
                className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 
                hover:scale-105 hover:shadow-xl hover:bg-blue-50 
                group-hover:brightness-105 flex flex-col h-full w-full"
              >
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 
                  group-hover:bg-blue-100 transition-colors">
                  <step.icon className="text-indigo-600 group-hover:text-blue-600 transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-900 
                  group-hover:text-blue-900 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-800 transition-colors flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}