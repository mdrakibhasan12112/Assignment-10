import Link from 'next/link';
import React from 'react';
import { FaUserPlus, FaSearch } from 'react-icons/fa';

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white min-h-[550px] flex items-center overflow-hidden font-sans border-b border-gray-800">
      {/* Dynamic Background Abstract Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-20 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none -ml-30 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left transition-all duration-700 ease-out transform translate-y-0 opacity-100">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-[#D91A3D] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-red-500/20 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#D91A3D] animate-ping" />
              Every Drop Counts, Every Hero Matters
            </div>

            {/* Main Heading Style - Unified Brand Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Bridge the Gap Between <br className="hidden sm:inline" />
              <span className="text-[#D91A3D] relative inline-block">
                Life
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#D91A3D]/30 rounded" />
              </span>{' '}
              and <span className="text-red-500">Hope</span>
            </h1>

            {/* Balanced Paragraph Text */}
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              BloodBridge connects passionate life-saving blood donors with
              patients in urgent need. Join our advanced, real-time platform to
              build a reliable bridge of humanity today.
            </p>

            {/* CTA Button Group - Directly Matching Requirements */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Join as a donor Button */}
              <Link
                href="/register"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#D91A3D] hover:bg-[#b81432] active:scale-[0.98] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-900/20 transition-all duration-200 tracking-wide text-sm uppercase"
              >
                <FaUserPlus className="text-lg" />
                Join as a donor
              </Link>

              {/* Search Donors Button */}
              <Link
                href="/search"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-200 active:scale-[0.98] font-bold px-8 py-4 rounded-xl border border-gray-700 transition-all duration-200 tracking-wide text-sm uppercase"
              >
                <FaSearch className="text-base" />
                Search Donors
              </Link>
            </div>
          </div>

          {/* Right Visual / Graphic Column */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative">
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Spinning Pulse Rings */}
              <div className="absolute w-full h-full border border-red-500/20 rounded-full animate-spin [animation-duration:12s]" />
              <div className="absolute w-[85%] h-[85%] border border-dashed border-gray-700 rounded-full animate-spin [animation-duration:8s] reverse" />

              {/* Core Hero Element */}
              <div className="w-56 h-56 bg-gradient-to-tr from-gray-950 to-gray-900 border-2 border-gray-800 rounded-2xl flex flex-col items-center justify-center p-6 shadow-2xl shadow-red-900/10 group hover:border-[#D91A3D]/40 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#D91A3D]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1">
                  Emergency Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
