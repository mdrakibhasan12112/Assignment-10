import React from 'react';
import { BiSolidDroplet } from 'react-icons/bi';
import { FaHands } from 'react-icons/fa6';

export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none font-sans">
      {/* Icon Group */}
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-100 shadow-sm bg-white">
        {/* Hands Icon */}
        <FaHands className="text-red-600 text-2xl absolute bottom-2" />

        {/* Blood Drop Icon */}
        <BiSolidDroplet className="text-red-600 text-base absolute top-[10px]" />
      </div>

      {/* Text Group */}
      <div className="text-3xl font-extrabold tracking-tight">
        <span className="text-[#D91A3D]">Blood</span>
        <span className="text-[#111827]">Bridge</span>
      </div>
    </div>
  );
}
