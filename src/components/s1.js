"use client";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#C8DFE8] flex flex-col items-center justify-center">
      <Head>
        <title>Education Platform</title>
        <meta name="description" content="Find the perfect course for you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4">
        {/* Search Bar */}
        <div className="flex-1 flex justify-center md:justify-start md:pr-10">
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full p-3 rounded-lg border border-gray-600 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <p className="text-gray-600 mt-2 text-center md:text-left">
              You're guaranteed to find something that's right for you.
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative flex-1 flex justify-center md:justify-end">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/male-student-working-on-laptop-illustration-download-in-svg-png-gif-file-formats--man-using-avatar-pack-people-illustrations-4650718.png?f=webp"
            alt="Student with laptop"
            className="max-w-sm md:max-w-md"
          />

          {/* Floating Elements */}
          <div className="absolute top-5 left-5 bg-white p-3 rounded-lg shadow-lg flex items-center animate-float">
            <div className="bg-orange-500 rounded-full p-2 mr-3">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <p className="font-bold text-black text-sm">Congratulations</p>
              <p className="text-xs text-gray-500">Your admission completed</p>
            </div>
          </div>

          <div className="absolute bottom-10 left-5 bg-white p-3 rounded-lg shadow-lg flex items-center animate-float">
            <div className="bg-blue-500 rounded-full p-2 mr-3">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm text-black">450K</p>
              <p className="text-xs text-gray-500">Assisted Students</p>
            </div>
          </div>

          <div className="absolute top-20 right-10 bg-white p-3 rounded-lg shadow-lg animate-float">
            <p className="font-bold text-sm text-black">User Experience Class</p>
            <p className="text-xs mb-2 text-gray-500">Tomorrow is our</p>
            <button className="bg-purple-500 text-white text-xs py-1 px-3 rounded-full">
              Join Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}