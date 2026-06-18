import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-gray-950 via-red-950/20 to-gray-950 text-white py-16 border-b border-gray-800 text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
          Ready to Make a Direct Impact on{' '}
          <span className="text-[#D91A3D]">Humanity</span>?
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Whether you want to donate blood, manage critical emergency blood
          requests, or fund our network—your registration creates an immediate
          bridge to survival.
        </p>
        <div className="pt-2">
          <a
            href="/register"
            className="inline-flex items-center gap-2 bg-[#D91A3D] hover:bg-[#b81432] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider"
          >
            Become a Registered Donor <FaArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}
