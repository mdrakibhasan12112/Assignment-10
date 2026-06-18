import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // New X logo to match latest rebrand
import { BiSolidDroplet } from 'react-icons/bi';
import { FaHands } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 font-sans border-t border-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 select-none">
              {/* Logo Icon */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm">
                <FaHands className="text-[#D91A3D] text-xl absolute bottom-1.5" />
                <BiSolidDroplet className="text-[#D91A3D] text-xs absolute top-[8px]" />
              </div>
              {/* Logo Text */}
              <div className="text-2xl font-extrabold tracking-tight">
                <span className="text-[#D91A3D]">Blood</span>
                <span className="text-white">Bridge</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting life savers with those in need. Join our platform to
              donate blood, manage requests, and contribute to saving lives
              across the country.
            </p>
            {/* Social Links (Using the updated X logo) */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="hover:text-[#D91A3D] transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="hover:text-[#D91A3D] transition-colors duration-200"
                aria-label="X (formerly Twitter)"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="hover:text-[#D91A3D] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="hover:text-[#D91A3D] transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide border-l-4 border-[#D91A3D] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-[#D91A3D] transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/donation-requests"
                  className="hover:text-[#D91A3D] transition-colors duration-200"
                >
                  Donation Requests
                </a>
              </li>
              <li>
                <a
                  href="/search"
                  className="hover:text-[#D91A3D] transition-colors duration-200"
                >
                  Search Donors
                </a>
              </li>
              <li>
                <a
                  href="/funding"
                  className="hover:text-[#D91A3D] transition-colors duration-200"
                >
                  Funding
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide border-l-4 border-[#D91A3D] pl-3">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/login"
                  className="hover:text-[#D91A3D] transition-colors duration-200"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="hover:text-[#D91A3D] transition-colors duration-200"
                >
                  Join as a Donor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#D91A3D] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#D91A3D] transition-colors duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide border-l-4 border-[#D91A3D] pl-3">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#D91A3D] mt-1 shrink-0" />
                <span>Zahir Raihan Rd, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#D91A3D] shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#D91A3D] shrink-0" />
                <span>support@bloodbridge.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section (Copyright) */}
      <div className="border-t border-gray-800 bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} BloodBridge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Emergency Support
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
