// import Image from 'next/image';
// import { motion } from 'framer-motion';

// function EducationCounselingPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation Breadcrumb */}
//       <div className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-3 text-sm text-gray-600">
//           Home • Instructor Details
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
//         {/* Image Section with Animation */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative"
//         >
//           <Image 
//             src="/api/placeholder/600/800" 
//             alt="Consultant" 
//             width={600} 
//             height={800} 
//             className="rounded-lg shadow-lg"
//           />
//         </motion.div>

//         {/* Content Section with Animation */}
//         <motion.div 
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <h1 className="text-4xl font-bold mb-6 text-gray-800">
//             Education Counseling - Your Personalized Launchpad
//           </h1>
          
//           <div className="space-y-6 text-gray-600 leading-relaxed">
//             <p>
//               Stepup team will initiate a one-on-one consultation to deeply understand your academic background, 
//               interests, strengths, and career aspirations. We will then provide you with a comprehensive overview 
//               of suitable higher education options, including different degree programs, specializations, and study 
//               destinations that align with your profile.
//             </p>
            
//             <p>
//               Our consultants will patiently answer all your questions, address any concerns you may have, and offer 
//               continuous support and guidance to help you make informed decisions about your future academic path. 
//               We aim to ignite your enthusiasm for learning and empower you to confidently embark on your higher 
//               education journey.
//             </p>
//           </div>

//           {/* Call to Action */}
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
//           >
//             Book Your Consultation
//           </motion.button>

//           {/* Quote Section */}
//           <div className="mt-12 border-l-4 border-blue-500 pl-4 italic text-gray-600">
//             "Guiding you beyond borders, towards limitless possibilities."
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// export default EducationCounselingPage;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function EducationCounselingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Breadcrumb */}
      <div 
        className="relative h-100 bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/6550403/pexels-photo-6550403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Instructor Details</h1>
          <div className="text-sm text-white/80 mt-2">
            Home • Instructor Details
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Image
            src="https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Make sure this image exists in /public
            alt="Consultant"
            width={600}
            height={800}
            className="rounded-lg shadow-lg"
            priority
          />
        </motion.div>

        {/* Content Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Education Counseling - Your Personalized Launchpad
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Stepup team will initiate a one-on-one consultation to deeply
              understand your academic background, interests, strengths, and
              career aspirations. We will then provide you with a comprehensive
              overview of suitable higher education options, including different
              degree programs, specializations, and study destinations that
              align with your profile.
            </p>

            <p>
              Our consultants will patiently answer all your questions, address
              any concerns you may have, and offer continuous support and
              guidance to help you make informed decisions about your future
              academic path. We aim to ignite your enthusiasm for learning and
              empower you to confidently embark on your higher education
              journey.
            </p>
          </div>

          {/* Call to Action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Book Your Consultation
          </motion.button>

          {/* Quote Section */}
          <div className="mt-12 border-l-4 border-blue-500 pl-4 italic text-gray-600">
            "Guiding you beyond borders, towards limitless possibilities."
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default EducationCounselingPage;
