// "use client"
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import React from 'react';
// import { useState } from 'react';

// export default function AboutUsPage() {
//   const [hoveredSection, setHoveredSection] = useState(null);

//   const sections = [
//     {
//       title: "The Stepup Story: We Listen to Your Dreams, Like a Friend",
//       content: "We know you have big dreams about what you want to learn and become. There are so many amazing places to study, and it can feel like too much to choose from. It's easy to feel lost.\n\nStepup Consultancy is like a friend who sits right next to you. We really listen to your dreams, what you love to learn, and where you imagine yourself. We look at what learning is like now in the places you're thinking about, and what it might be like in the future. We even talk to people who have studied there and teachers from those schools to get the best ideas for you. We want to make your journey clear and exciting, helping you find the perfect place to learn and grow. We truly believe in your dreams."
//     },
//     {
//       title: "Our Vision: We Want to Help You Shine, Wherever You Learn",
//       content: "Stepup Consultancy wants to see a future where every student can easily find the best place to learn in the whole world. We want to be your go-to friend, someone you can trust to give you clear help and support. We see a world where it's easy for everyone to find the right learning spot, and Stepup Consultancy will be there to hold your hand and help you take that big step towards a bright future. We really care about your happiness and success."
//     },
//     {
//       title: "Our Mission: Your Dream is Special to Us We'll Find What's Just Right",
//       content: "Our mission at Stepup Consultancy is simple: to be the best at understanding your special dreams about learning. We sit with you, listen with our hearts, and then find the best choices just for you. We look at the learning places you're thinking about now and what they are really like. We also try to see what those learning areas will be like later, with new chances for you. We get advice from kind teachers and people who have already studied there. This helps us give you answers that feel just right for you. Every student is important to us, and we promise to help you step up to a world of wonderful learning opportunities, feeling confident and happy."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       {/* Header with Animated Background */}
//       <motion.div 
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 overflow-hidden"
//       >
//         {/* Animated Background Shapes */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 transform -skew-x-12 -translate-x-1/4"></div>
//           <div className="absolute bottom-0 right-0 w-1/2 h-full bg-purple-500 transform skew-x-12 translate-x-1/4"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10 text-center">
//           <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
//             About Us
//           </h1>
//           <p className="text-xl italic text-white/80 max-w-2xl mx-auto">
//             "Guiding you beyond borders, towards limitless possibilities."
//           </p>
//         </div>
//       </motion.div>

//       {/* Team Image with Subtle Animation */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-4 py-12"
//       >
//         <div className="relative group">
//           <Image 
//             src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//             alt="Stepup Consultancy Team" 
//             width={1200} 
//             height={600} 
//             className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:shadow-xl"
//           />
//           <div className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
//       </motion.div>

//       {/* Content Sections with Enhanced Interactivity */}
//       <div className="container mx-auto px-4 pb-16 space-y-8">
//         {sections.map((section, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//             className={`
//               p-8 rounded-2xl transition-all duration-300 ease-in-out 
//               ${hoveredSection === index 
//                 ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl' 
//                 : 'bg-white text-gray-800 shadow-lg'}
//               relative overflow-hidden
//             `}
//             onMouseEnter={() => setHoveredSection(index)}
//             onMouseLeave={() => setHoveredSection(null)}
//           >
//             {/* Subtle Background Effect */}
//             <div className={`
//               absolute inset-0 opacity-10 
//               ${hoveredSection === index 
//                 ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
//                 : 'bg-gray-100'}
//             `}></div>

//             <div className="relative z-10">
//               <h2 className={`text-3xl font-bold mb-4 ${
//                 hoveredSection === index 
//                   ? 'text-white' 
//                   : 'text-blue-600 group-hover:text-blue-800'
//               }`}>
//                 {section.title}
//               </h2>
//               <p className={`leading-relaxed text-lg ${
//                 hoveredSection === index 
//                   ? 'text-white/90' 
//                   : 'text-gray-700'
//               }`}>
//                 {section.content}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client"
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import React from 'react';
// import { useState } from 'react';

// export default function AboutUsPage() {
//   const [hoveredSection, setHoveredSection] = useState(null);

//   const sections = [
//     {
//       title: "The Stepup Story: We Listen to Your Dreams, Like a Friend",
//       content: "We know you have big dreams about what you want to learn and become. There are so many amazing places to study, and it can feel like too much to choose from. It's easy to feel lost.\n\nStepup Consultancy is like a friend who sits right next to you. We really listen to your dreams, what you love to learn, and where you imagine yourself. We look at what learning is like now in the places you're thinking about, and what it might be like in the future. We even talk to people who have studied there and teachers from those schools to get the best ideas for you. We want to make your journey clear and exciting, helping you find the perfect place to learn and grow. We truly believe in your dreams."
//     },
//     {
//       title: "Our Vision: We Want to Help You Shine, Wherever You Learn",
//       content: "Stepup Consultancy wants to see a future where every student can easily find the best place to learn in the whole world. We want to be your go-to friend, someone you can trust to give you clear help and support. We see a world where it's easy for everyone to find the right learning spot, and Stepup Consultancy will be there to hold your hand and help you take that big step towards a bright future. We really care about your happiness and success."
//     },
//     {
//       title: "Our Mission: Your Dream is Special to Us We'll Find What's Just Right",
//       content: "Our mission at Stepup Consultancy is simple: to be the best at understanding your special dreams about learning. We sit with you, listen with our hearts, and then find the best choices just for you. We look at the learning places you're thinking about now and what they are really like. We also try to see what those learning areas will be like later, with new chances for you. We get advice from kind teachers and people who have already studied there. This helps us give you answers that feel just right for you. Every student is important to us, and we promise to help you step up to a world of wonderful learning opportunities, feeling confident and happy."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       {/* Team Image with Text Overlay */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-4 py-12 relative"
//       >
//         <div className="relative group">
//           <Image 
//             src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//             alt="Stepup Consultancy Team" 
//             width={1400} 
//             height={300} 
//             className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:shadow-xl"
//           />
//           {/* SVG Text Overlay */}
//           <svg 
//             className="absolute inset-0 pointer-events-none" 
//             preserveAspectRatio="none" 
//             viewBox="0 0 1000 500"
//           >
//             <rect 
//               x="0" 
//               y="0" 
//               width="1000" 
//               height="500" 
//               fill="rgba(0,0,0,0.5)"
//             />
//             <text 
//               x="50%" 
//               y="50%" 
//               textAnchor="middle" 
//               fill="white" 
//               fontSize="72" 
//               fontWeight="bold"
//               className="drop-shadow-lg"
//             >
//               About Us
//             </text>
//             <text 
//               x="50%" 
//               y="60%" 
//               textAnchor="middle" 
//               fill="white" 
//               fontSize="24" 
//               fontWeight="light"
//               className="drop-shadow-md"
//             >
//               Guiding you beyond borders, towards limitless possibilities
//             </text>
//           </svg>
//           <div className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
//       </motion.div>

//       {/* Rest of the content remains the same as in the previous version */}
//       <div className="container mx-auto px-4 pb-16 space-y-8">
//         {sections.map((section, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//             className={`
//               p-8 rounded-2xl transition-all duration-300 ease-in-out 
//               ${hoveredSection === index 
//                 ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl' 
//                 : 'bg-white text-gray-800 shadow-lg'}
//               relative overflow-hidden
//             `}
//             onMouseEnter={() => setHoveredSection(index)}
//             onMouseLeave={() => setHoveredSection(null)}
//           >
//             {/* Subtle Background Effect */}
//             <div className={`
//               absolute inset-0 opacity-10 
//               ${hoveredSection === index 
//                 ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
//                 : 'bg-gray-100'}
//             `}></div>

//             <div className="relative z-10">
//               <h2 className={`text-3xl font-bold mb-4 ${
//                 hoveredSection === index 
//                   ? 'text-white' 
//                   : 'text-blue-600 group-hover:text-blue-800'
//               }`}>
//                 {section.title}
//               </h2>
//               <p className={`leading-relaxed text-lg ${
//                 hoveredSection === index 
//                   ? 'text-white/90' 
//                   : 'text-gray-700'
//               }`}>
//                 {section.content}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';

export default function AboutUsPage() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      title: "The Stepup Story: We Listen to Your Dreams, Like a Friend",
      content: "We know you have big dreams about what you want to learn and become. There are so many amazing places to study, and it can feel like too much to choose from. It's easy to feel lost.\n\nStepup Consultancy is like a friend who sits right next to you. We really listen to your dreams, what you love to learn, and where you imagine yourself. We look at what learning is like now in the places you're thinking about, and what it might be like in the future. We even talk to people who have studied there and teachers from those schools to get the best ideas for you. We want to make your journey clear and exciting, helping you find the perfect place to learn and grow. We truly believe in your dreams."
    },
    {
      title: "Our Vision: We Want to Help You Shine, Wherever You Learn",
      content: "Stepup Consultancy wants to see a future where every student can easily find the best place to learn in the whole world. We want to be your go-to friend, someone you can trust to give you clear help and support. We see a world where it's easy for everyone to find the right learning spot, and Stepup Consultancy will be there to hold your hand and help you take that big step towards a bright future. We really care about your happiness and success."
    },
    {
      title: "Our Mission: Your Dream is Special to Us We'll Find What's Just Right",
      content: "Our mission at Stepup Consultancy is simple: to be the best at understanding your special dreams about learning. We sit with you, listen with our hearts, and then find the best choices just for you. We look at the learning places you're thinking about now and what they are really like. We also try to see what those learning areas will be like later, with new chances for you. We get advice from kind teachers and people who have already studied there. This helps us give you answers that feel just right for you. Every student is important to us, and we promise to help you step up to a world of wonderful learning opportunities, feeling confident and happy."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Wide Banner Image with About Us Heading */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image 
          src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Stepup Consultancy Team" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white drop-shadow-lg">About Us</h1>
            <p className="text-xl text-white/80 mt-4">
              Guiding you beyond borders, towards limitless possibilities
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`
              p-8 rounded-2xl relative overflow-hidden
              transition-all duration-500 ease-in-out
              ${hoveredSection === index 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl' 
                : 'bg-white text-gray-800 shadow-lg'}
            `}
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Gradient Background Effect with Smooth Transition */}
            <div 
              className={`
                absolute inset-0 opacity-10 transition-all duration-700 ease-in-out
                ${hoveredSection === index 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 opacity-30' 
                  : 'bg-gray-100 opacity-10'}
              `}
            ></div>

            {/* Hover Overlay with Smooth Transition */}
            <div 
              className={`
                absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 
                transition-all duration-700 ease-in-out
                ${hoveredSection === index 
                  ? 'opacity-30' 
                  : 'opacity-0'}
              `}
            ></div>

            <div className="relative z-10">
              <h2 className={`
                text-3xl font-bold mb-4 
                transition-all duration-500 ease-in-out
                ${hoveredSection === index 
                  ? 'text-white' 
                  : 'text-blue-600 group-hover:text-blue-800'}
              `}>
                {section.title}
              </h2>
              <p className={`
                leading-relaxed text-lg 
                transition-all duration-500 ease-in-out
                ${hoveredSection === index 
                  ? 'text-white/90' 
                  : 'text-gray-700'}
              `}>
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}