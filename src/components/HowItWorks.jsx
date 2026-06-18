import React from 'react';
import { FaUserPlus, FaFileMedical, FaHandHoldingHeart } from 'react-icons/fa';

export function HowItWorks() {
  const steps = [
    {
      id: '01',
      title: 'Register Account',
      desc: 'Create your donor account with your blood group, district, and upazila.',
      icon: <FaUserPlus />,
    },
    {
      id: '02',
      title: 'Post / View Requests',
      desc: 'Active users can post requests, and everyone can view pending requests.',
      icon: <FaFileMedical />,
    },
    {
      id: '03',
      title: 'Save a Life',
      desc: 'Donors accept the request, status changes to inprogress, and blood is donated.',
      icon: <FaHandHoldingHeart />,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-[#D91A3D] font-bold text-xs uppercase tracking-wider">
            Process Flow
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            How BloodBridge Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map(step => (
            <div
              key={step.id}
              className="relative bg-gray-950/50 border border-gray-800 p-8 rounded-2xl group hover:border-[#D91A3D]/30 transition-all duration-300"
            >
              <div className="absolute top-4 right-6 text-5xl font-black text-gray-800 group-hover:text-[#D91A3D]/10 transition-colors select-none">
                {step.id}
              </div>
              <div className="p-3 bg-red-500/10 text-[#D91A3D] rounded-xl w-fit text-2xl mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
