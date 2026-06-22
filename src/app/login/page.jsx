'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // রিডাইরেক্ট করার জন্য ইমপোর্ট করা হলো
import { authClient } from '@/lib/auth-client'; // আপনার Better-Auth ক্লায়েন্ট পাথ অনুযায়ী মিলিয়েনিবেন
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Login() {
  const router = useRouter(); // Router ইনিশিয়েট করা হলো
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // লোডিং স্টেট

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
  const onSubmit = async data => {
    setIsLoading(true);

    try {
      // Better-Auth এর মাধ্যমে সাইন-ইন কল
      const { data: sessionRes, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error) {
        toast.error(error.message || 'Invalid email or password!');
        setIsLoading(false);
        return;
      }

      if (sessionRes) {
        toast.success('Login Successful!');

        // সফলভাবে লগইন হলে হোম পেজে (/) রিডাইরেক্ট করবে
        router.push('/');
        router.refresh(); // সেশন ডাটা আপডেট করার জন্য পেজটি রিফ্রেশ করা ভালো
      }
    } catch (err) {
      console.error('Error during login workflow:', err);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
              disabled={isLoading}
              {...register('email', { required: 'Email is required' })}
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-white disabled:opacity-50"
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
                disabled={isLoading}
                {...register('password', {
                  required: 'Password is required',
                })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-4 pr-11 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-white disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none disabled:opacity-30"
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
              disabled={isLoading}
              className="h-4 w-4 rounded bg-gray-950 border-gray-800 text-[#D91A3D] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#D91A3D] disabled:opacity-50"
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
            disabled={isLoading}
            className="w-full bg-[#D91A3D] hover:bg-[#b81432] text-white font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-sm shadow-lg shadow-red-900/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center text-xs text-gray-500">
          Don't have an account?{' '}
          <Link
            href="/register"
            className="text-[#D91A3D] hover:underline font-semibold"
          >
            Register here
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
