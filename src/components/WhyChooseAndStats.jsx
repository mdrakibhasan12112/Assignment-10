import React from 'react';
import { FaHeartbeat, FaUsers, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function WhyChooseAndStats() {
  // Stats Data
  const stats = [
    {
      id: 1,
      count: '15,400+',
      title: 'Registered Donors',
      icon: <FaUsers className="text-3xl" />,
    },
    {
      id: 2,
      count: '2,500+',
      title: 'Funding Contributions',
      icon: <FaShieldAlt className="text-3xl" />,
    },
    {
      id: 3,
      count: '8,900+',
      title: 'Successful Donations',
      icon: <FaHeartbeat className="text-3xl" />,
    },
  ];

  // Features Data
  const features = [
    {
      id: 1,
      icon: <FaHeartbeat className="text-white text-xl" />,
      title: 'Real-time Requests',
      description:
        'Create and view urgent blood donation requests instantly based on specific location parameters like districts and upazilas.',
    },
    {
      id: 2,
      icon: <FaClock className="text-white text-xl" />,
      title: '24/7 Quick Response',
      description:
        'Our efficient notification and role-based access control system ensures immediate communication between donors and seekers.',
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-white text-xl" />,
      title: 'Secure & Verified Profiles',
      description:
        'All users undergo secure authentication and profiles are strictly maintained to protect credentials and private information.',
    },
  ];

  return (
    // Banner section-er sathe mil rekhe bg-gradient use kora hoyeche
    <section className="bg-gradient-to-b from-gray-950 via-slate-950 to-gray-900 text-white font-sans py-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= STATS SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map(stat => (
            <div
              key={stat.id}
              className="flex items-center gap-5 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 shadow-xl hover:border-red-500/20 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-4 bg-red-500/10 rounded-xl text-[#D91A3D] shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  {stat.count}
                </div>
                <div className="text-sm font-medium text-gray-400 mt-0.5 tracking-wide">
                  {stat.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= WHY CHOOSE US SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <div className="inline-block bg-red-500/10 text-[#D91A3D] px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-red-500/20">
              Features Matrix
            </div>
            {/* Main Heading Style - White on Dark Theme */}
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Why Choose <br className="hidden lg:inline" />
              <span className="text-[#D91A3D]">BloodBridge</span> Platform?
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              We provide a decentralized network connecting life-savers and
              healthcare facilities with unmatched reliability, transparency,
              and top-tier alignment.
            </p>
          </div>

          {/* Right Column: Feature Cards Layout */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {features.map(feature => (
              <div
                key={feature.id}
                className="group flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-gray-900 bg-gray-900/20 hover:bg-gray-900/50 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="p-3 bg-gray-800 group-hover:bg-[#D91A3D] rounded-xl transition-colors duration-300 shrink-0 shadow-md border border-gray-700/50">
                  {feature.icon}
                </div>

                {/* Text Context */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
