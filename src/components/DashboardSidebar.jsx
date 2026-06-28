'use client';
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBuilding,
  FaCalendarAlt,
  FaHistory,
  FaHome,
  FaPlus,
  FaSignOutAlt,
  FaTicketAlt,
  FaUserCircle,
  FaUsers,
  FaUserShield,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const DashboardSideBar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু কন্ট্রোল করার স্টেট

  const handleLogout = () => {};

  const volunteerMenu = [
    {
      key: 'Dashboard',
      label: 'Dashboard',
      icon: FaUsers,
      href: '/dashboard/volunteer',
    },
    {
      key: 'All Blood Donation Requests',
      label: 'All Blood Donation Requests',
      icon: FaBuilding,
      href: '/dashboard/volunteer/all-blood-donation-request',
    },
    {
      key: 'Create Requests',
      label: 'Create Requests',
      icon: FaBuilding,
      href: '/dashboard/volunteer/all-blood-donation-request/new',
    },
    {
      key: 'Profile',
      label: 'Profile',
      icon: FaPlus,
      href: '/dashboard/volunteer/profile',
    },
  ];

  const donorMenu = [
    {
      key: 'Dashboard',
      label: 'Dashboard',
      icon: FaUserCircle,
      href: '/dashboard',
    },
    {
      key: 'My Donation Requests',
      label: 'My Donation Requests',
      icon: FaTicketAlt,
      href: '/dashboard/my-donation-requests',
    },
    {
      key: 'Create Donation Request',
      label: 'Create Donation Request',
      icon: FaHistory,
      href: '/dashboard/create-donation-request',
    },
    {
      key: 'Profile',
      label: 'Profile',
      icon: FaHistory,
      href: '/dashboard/profile',
    },
  ];

  const adminMenu = [
    {
      key: 'Dashboard',
      label: 'Dashboard',
      icon: FaUserShield,
      href: '/dashboard',
    },
    {
      key: 'All Users',
      label: 'All Users',
      icon: FaUserShield,
      href: '/dashboard/all-users',
    },
    {
      key: 'All Blood Donation Requests',
      label: 'All Blood Donation Requests',
      icon: FaCalendarAlt,
      href: '/dashboard/all-blood-donation-request',
    },
    {
      key: 'Profile',
      label: 'Profile',
      icon: FaHistory,
      href: '/dashboard/profile',
    },
  ];

  const role = session?.user?.role;

  const manuItems =
    role === 'volunteer'
      ? volunteerMenu
      : role === 'donor'
        ? donorMenu
        : role === 'admin'
          ? adminMenu
          : null;

  return (
    <>
      {/* 📱 ১. মোবাইল টগল বাটন (বড় স্ক্রিনে লুকানো থাকবে `md:hidden`) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-slate-900/90 text-white rounded-xl border border-white/10 shadow-lg backdrop-blur-md focus:outline-none"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* 🌌 ২. মোবাইল ব্যাকড্রপ ব্লার ওভারলে (মেনু খোলা থাকলে ব্যাকগ্রাউন্ডে ক্লিক করলে মেনু বন্ধ হবে) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        />
      )}

      {/* 🗂️ ৩. মেইন সাইডবার কন্টেইনার (রেসপন্সিভ ক্লাস যুক্ত করা হয়েছে) */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 border-r border-white/5 z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="h-full flex flex-col bg-slate-950/95 md:bg-slate-950/80 backdrop-blur-xl">
          {/* Brand / Logo */}
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <Logo />
            {/* মোবাইল মোডে লোগোর পাশে ক্লোজ বাটন */}
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden text-slate-400 hover:text-white"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* User Profile */}
          <div className="px-6 py-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-500/60 shrink-0">
                <Image
                  width={40}
                  height={40}
                  src={
                    session?.user?.image 
                  }
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden">
                <p className="text-white text-sm font-bold truncate leading-tight">
                  {session?.user?.name}
                </p>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    role === 'admin'
                      ? 'text-yellow-400'
                      : role === 'organizer'
                        ? 'text-indigo-400'
                        : 'text-pink-400'
                  }`}
                >
                  {role}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-grow overflow-y-auto px-3 py-4 space-y-1">
            {manuItems?.map(({ key, label, icon: Icon, href }) => {
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setIsOpen(false)} // লিংকে ক্লিক করলে মোবাইল মেনু স্বয়ংক্রিয়ভাবে বন্ধ হবে
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 text-left cursor-pointer text-slate-400 hover:text-white hover:bg-white/5"
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-white/5 text-slate-400">
                    <Icon size={20} />
                  </span>
                  <span className="truncate">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Links */}
          <div className="px-3 py-4 border-t border-white/5 space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-150"
            >
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <FaHome size={13} />
              </span>
              Back to Site
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all duration-150 cursor-pointer"
            >
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <FaSignOutAlt size={13} />
              </span>
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSideBar;
