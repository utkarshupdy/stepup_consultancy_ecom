// "use client"
// import React, { useState, useEffect } from 'react';

// const PageLoader = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 2000); // Adjust duration as needed

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-500 transition-all duration-500">
//       <div className="relative w-32 h-32">
//         <div className="absolute inset-0 book-loader">
//           <div className="book">
//             <div className="inner">
//               <div className="left"></div>
//               <div className="middle"></div>
//               <div className="right"></div>
//             </div>
//             <ul>
//               {[...Array(6)].map((_, i) => (
//                 <li key={i}></li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .book-loader {
//           perspective: 500px;
//         }
        
//         .book {
//           width: 100px;
//           height: 100px;
//           position: relative;
//           transform-style: preserve-3d;
//           transform: rotateY(-10deg);
//           animation: rotate 3s infinite linear;
//         }
        
//         .book .inner {
//           width: 100%;
//           height: 100%;
//           position: absolute;
//           top: 0;
//           left: 0;
//           transform-style: preserve-3d;
//         }
        
//         .book .inner > div {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           top: 0;
//           left: 0;
//           transform-origin: center left;
//           border-radius: 4px;
//         }
        
//         .book .inner .left {
//           background: linear-gradient(to right, #f6f6f6 0%, #fff 100%);
//           transform: rotateY(0deg);
//         }
        
//         .book .inner .middle {
//           background: linear-gradient(to right, #f6f6f6 0%, #fff 100%);
//           transform: rotateY(30deg);
//         }
        
//         .book .inner .right {
//           background: linear-gradient(to right, #f6f6f6 0%, #fff 100%);
//           transform: rotateY(60deg);
//         }
        
//         .book ul {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           transform-style: preserve-3d;
//         }
        
//         .book ul li {
//           width: 10px;
//           height: 100%;
//           background: linear-gradient(to right, #f6f6f6 0%, #fff 100%);
//           transform-origin: center left;
//           list-style: none;
//           position: absolute;
//         }
        
//         @keyframes rotate {
//           0% { transform: rotateY(-10deg); }
//           50% { transform: rotateY(10deg); }
//           100% { transform: rotateY(-10deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PageLoader;


// "use client"
// import React from 'react';
// import { motion } from 'framer-motion';

// const PageLoader = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700"
//     >
//       <motion.div 
//         initial={{ scale: 0.5, rotate: -15 }}
//         animate={{ 
//           scale: [0.5, 1.1, 1],
//           rotate: [0, 10, -10, 0],
//           opacity: [0.5, 1]
//         }}
//         transition={{
//           duration: 1.5,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "reverse"
//         }}
//         className="w-48 h-48 relative"
//       >
//         <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
//         <motion.div 
//           className="absolute inset-0 bg-white/30 rounded-full"
//           animate={{
//             scale: [1, 1.05, 1],
//             rotate: [0, 5, -5, 0]
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//           }}
//         />
//         <div className="relative z-10 w-full h-full flex items-center justify-center">
//           <motion.svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 100 100"
//             className="w-full h-full text-white"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, ease: "easeInOut" }}
//           >
//             <motion.path 
//               d="M50 10 
//                  Q70 30, 50 50 
//                  Q30 70, 50 90 
//                  Q70 70, 50 50 
//                  Q30 30, 50 10"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="4"
//               strokeLinecap="round"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//             />
//             <motion.circle 
//               cx="50" 
//               cy="50" 
//               r="5" 
//               fill="currentColor"
//               initial={{ scale: 0 }}
//               animate={{ scale: [0, 1.5, 1] }}
//               transition={{ 
//                 duration: 1.5, 
//                 times: [0, 0.5, 1],
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut"
//               }}
//             />
//           </motion.svg>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default PageLoader;




"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ConsultingPageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700"
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Network Connection Lines */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 300 300">
            <motion.line 
              x1="50%" 
              y1="50%" 
              x2="20%" 
              y2="20%" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.line 
              x1="50%" 
              y1="50%" 
              x2="80%" 
              y2="20%" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.line 
              x1="50%" 
              y1="50%" 
              x2="20%" 
              y2="80%" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.line 
              x1="50%" 
              y1="50%" 
              x2="80%" 
              y2="80%" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </svg>
        </motion.div>

        {/* Central Growth Icon */}
        <motion.div
          className="relative z-10 w-32 h-32 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: [0, 1.2, 1],
            rotate: [0, 20, -20, 0],
            transition: {
              duration: 1,
              ease: "easeInOut"
            }
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            {/* Arrow pointing upward */}
            <motion.path 
              d="M50 10 L30 40 L40 40 L40 90 L60 90 L60 40 L70 40 Z"
              fill="white"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.5
                }
              }}
            />
            {/* Growth graph */}
            <motion.polyline 
              points="20,80 35,60 50,70 65,50 80,40"
              fill="none"
              stroke="white"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.7
                }
              }}
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConsultingPageLoader;