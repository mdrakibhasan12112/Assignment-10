'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form Configuration
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Handle Login Submission
  const onSubmit = data => {
    const loginPayload = {
      email: data.email,
      password: data.password,
    };

    console.log('Login Payload to Server:', loginPayload);
    // এখানে আপনার লগইন অথেনটিকেশন বা JWT টোকেন ম্যানেজমেন্ট লজিক বসবে
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-gray-900 text-white font-sans flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-md shadow-2xl">
        {/* Branding Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Welcome <span className="text-[#D91A3D]">Back</span>
          </h2>
          <p className="text-sm text-gray-400">
            Login to access your donor dashboard and save lives.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* 1. Email Address */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
              <FaEnvelope className="text-[#D91A3D]" /> Email Address
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              {...register('email', { required: 'Email is required' })}
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-white"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* 2. Password Field (চোখের আইকনসহ) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaLock className="text-[#D91A3D]" /> Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-[#D91A3D] transition-colors"
              >
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('password', {
                  required: 'Password is required',
                })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-4 pr-11 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded bg-gray-950 border-gray-800 text-[#D91A3D] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#D91A3D]"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-xs text-gray-400 cursor-pointer select-none"
            >
              Remember me on this device
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#D91A3D] hover:bg-[#b81432] text-white font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-sm shadow-lg shadow-red-900/20 active:scale-[0.99]"
          >
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center text-xs text-gray-500">
          Don't have an account?{' '}
          <a
            href="/register"
            className="text-[#D91A3D] hover:underline font-semibold"
          >
            Register here
          </a>
          .
        </div>
      </div>
    </div>
  );
}
