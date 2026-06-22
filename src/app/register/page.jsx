'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // রিডাইরেক্ট করার জন্য নতুন ইমপোর্ট
import { authClient } from '@/lib/auth-client'; // আপনার Better-Auth ক্লায়েন্ট পাথ অনুযায়ী মিলিয়েনিবেন
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
  FaMapMarkerAlt,
  FaTint,
  FaEye,
  FaEyeSlash,
  FaUserTag, // রোল আইকনের জন্য নতুন ইমপোর্ট
} from 'react-icons/fa';

// JSON Data Import (Path-ti apnar project setup onujayi milliye niben)
import districtsData from '../../data/districts.json';
import upazilasData from '../../data/upazilas.json';
import toast from 'react-hot-toast';

export default function Register() {
  const router = useRouter();
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  // পাসওয়ার্ডের টাইপ (text নাকি password) ট্র্যাক করার স্টেট
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // সাবমিটের সময় লোডিং স্টেট হ্যান্ডেল করার জন্য
  const [isLoading, setIsLoading] = useState(false);

  // React Hook Form Configuration
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      bloodGroup: '',
      district: '',
      upazila: '',
      role: 'donor', // ডিফল্ট রোল donor সেট করা হলো
      password: '',
      confirmPassword: '',
      avatar: null,
    },
  });

  // Watch district field change to update upazilas dynamically
  const selectedDistrict = watch('district');

  useEffect(() => {
    if (selectedDistrict) {
      // Filter upazilas matching the selected district id
      const matched = upazilasData.filter(
        up => up.district_id === selectedDistrict,
      );
      setFilteredUpazilas(matched);
    } else {
      setFilteredUpazilas([]);
    }
    // Reset upazila selection whenever district changes
    setValue('upazila', '');
  }, [selectedDistrict, setValue]);

  // Handle Form Submission
  const onSubmit = async data => {
    // Password Confirmation Manual Check
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setIsLoading(true);

    try {
      let uploadedImageUrl = null;

      // ১. ImgBB-তে ইমেজ ফাইল আপলোড করার আসল মেকানিজম
      if (data.avatar && data.avatar[0]) {
        const formData = new FormData();
        formData.append('image', data.avatar[0]);

        // আপনার .env ফাইল থেকে ডাইনামিকালি API Key রিড করা হচ্ছে
        const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          {
            method: 'POST',
            body: formData,
          },
        );

        const imgData = await response.json();

        if (imgData.success) {
          uploadedImageUrl = imgData.data.url; // আসল ইমেজের 'https://i.ibb.co/...' লিংকটি ভ্যারিয়েবলে স্টোর হবে
        } else {
          alert('Image upload failed! Please try another image.');
          setIsLoading(false);
          return;
        }
      }

      // ২. Better-Auth এর মাধ্যমে সাইন-আপ কল (এটি ইন্টারনালভাবে পাসওয়ার্ড হ্যাশ করে ডাটা MongoDB-তে সেভ করবে)
      const { data: sessionRes, error } = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        image: uploadedImageUrl, // ImgBB থেকে পাওয়া একদম আসল লাইভ URL

        // কাস্টম অতিরিক্ত ডাটা যা MongoDB-তে ইউজারের কালেকশনে সেভ হবে
        bloodGroup: data.bloodGroup,
        district: districtsData.find(d => d.id === data.district)?.name || '',
        upazila: data.upazila, // সিলেক্টেড উপজেলার নাম টেক্সট স্ট্রিং
        role: data.role, // ড্রপডাউন থেকে সিলেক্ট করা রোলটি (donor অথবা volunteer) এখানে ডাইনামিকালি যাবে
        status: 'active', // রিকোয়ারমেন্ট অনুযায়ী ফিক্সড স্ট্যাটাস
      });

      if (error) {
        toast.error('Registration failed!');
        setIsLoading(false);
        return;
      }

      if (sessionRes) {
        toast.success('Registration Successful!');
        router.push('/dashboard/volunteer');
      }
    } catch (err) {
      console.error('Error during registration workflow:', err);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-gray-900 text-white font-sans flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-gray-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-md shadow-2xl">
        {/* Branding Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Join as a <span className="text-[#D91A3D]">Donor</span>
          </h2>
          <p className="text-sm text-gray-400">
            Create your account to bridge the gap between life and hope.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 1. Full Name */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaUser className="text-[#D91A3D]" /> Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                disabled={isLoading}
                {...register('name', { required: 'Name is required' })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-white disabled:opacity-50"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* 2. Email */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaEnvelope className="text-[#D91A3D]" /> Email Address
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                disabled={isLoading}
                {...register('email', { required: 'Email is required' })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] disabled:opacity-50"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* 3. Avatar Input */}
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaImage className="text-[#D91A3D]" /> Profile Avatar (Image)
              </label>
              <input
                type="file"
                accept="image/*"
                disabled={isLoading}
                {...register('avatar', {
                  required: 'Avatar image is required',
                })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-red-500/10 file:text-[#D91A3D] hover:file:bg-red-500/20 disabled:opacity-50"
              />
              {errors.avatar && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.avatar.message}
                </p>
              )}
            </div>

            {/* 4. Blood Group Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaTint className="text-[#D91A3D]" /> Blood Group
              </label>
              <select
                disabled={isLoading}
                {...register('bloodGroup', {
                  required: 'Select a blood group',
                })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-gray-300 disabled:opacity-50"
              >
                <option value="">Select Group</option>
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(
                  group => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ),
                )}
              </select>
              {errors.bloodGroup && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.bloodGroup.message}
                </p>
              )}
            </div>

            {/* [NEW] 5. Account Role Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaUserTag className="text-[#D91A3D]" /> Select Role
              </label>
              <select
                disabled={isLoading}
                {...register('role', {
                  required: 'Select a role',
                })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-gray-300 disabled:opacity-50"
              >
                <option value="donor">Donor (রক্ত দাতা)</option>
                <option value="volunteer">Volunteer (স্বেচ্ছাসেবক)</option>
              </select>
              {errors.role && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* 6. District Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D91A3D]" /> District
              </label>
              <select
                disabled={isLoading}
                {...register('district', { required: 'Select a district' })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-gray-300 disabled:opacity-50"
              >
                <option value="">Select District</option>
                {districtsData.map(dist => (
                  <option key={dist.id} value={dist.id}>
                    {dist.name} ({dist.bn_name})
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.district.message}
                </p>
              )}
            </div>

            {/* 7. Upazila Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D91A3D]" /> Upazila
              </label>
              <select
                {...register('upazila', { required: 'Select an upazila' })}
                disabled={!selectedDistrict || isLoading}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <option value="">Select Upazila</option>
                {filteredUpazilas.map(up => (
                  <option key={up.id} value={up.name}>
                    {up.name} ({up.bn_name})
                  </option>
                ))}
              </select>
              {errors.upazila && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.upazila.message}
                </p>
              )}
            </div>

            {/* 8. Password */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaLock className="text-[#D91A3D]" /> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  disabled={isLoading}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Minimum 6 characters' },
                  })}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-4 pr-11 py-3 text-sm focus:outline-none focus:border-[#D91A3D] disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none disabled:opacity-30"
                >
                  {showPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* 9. Confirm Password */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaLock className="text-[#D91A3D]" /> Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  disabled={isLoading}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                  })}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-4 pr-11 py-3 text-sm focus:outline-none focus:border-[#D91A3D] disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none disabled:opacity-30"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#D91A3D] hover:bg-[#b81432] text-white font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-sm mt-4 shadow-lg shadow-red-900/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Account...' : 'Register Account'}
          </button>
        </form>

        <div className="text-center text-xs text-gray-500">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-[#D91A3D] hover:underline font-semibold"
          >
            Login here
          </a>
          .
        </div>
      </div>
    </div>
  );
}
