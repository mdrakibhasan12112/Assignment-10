// 'use client'
// import React, { useState } from 'react';
// import {
//   FaUser,
//   FaEnvelope,
//   FaLock,
//   FaImage,
//   FaMapMarkerAlt,
//   FaTint,
// } from 'react-icons/fa';

// // Bangladesh Geocode Dynamic Data Example (Mock Structure)
// const locationData = {
//   Dhaka: ['Dhamrai', 'Dohar', 'Keraniganj', 'Nawabganj', 'Savar'],
//   Chattogram: ['Anwara', 'Banshkhali', 'Boalkhali', 'Chandanaish', 'Hathazari'],
//   Sylhet: ['Balaganj', 'Beanibazar', 'Bishwanath', 'Fenchuganj', 'Golapganj'],
//   Rangpur: ['Badarganj', 'Gangachara', 'Kaunia', 'Rangpur Sadar', 'Mithapukur'],
// };

// export default function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     bloodGroup: '',
//     district: '',
//     upazila: '',
//     password: '',
//     confirmPassword: '',
//     avatar: null,
//   });

//   const [availableUpazilas, setAvailableUpazilas] = useState([]);

//   // Handle Input Changes
//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));

//     // Dynamic Cascade Logic for District -> Upazila
//     if (name === 'district') {
//       const upazilas = locationData[value] || [];
//       setAvailableUpazilas(upazilas);
//       setFormData(prev => ({ ...prev, district: value, upazila: '' })); // Reset Upazila on District change
//     }
//   };

//   // Handle File Input for Avatar
//   const handleFileChange = e => {
//     setFormData(prev => ({ ...prev, avatar: e.target.files[0] }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // Ekhane ImageBB API dynamic integration and Validation logic hobe
//     console.log('Form Data Submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-gray-900 text-white font-sans flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl w-full space-y-8 bg-gray-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-md shadow-2xl">
//         {/* Title Heading */}
//         <div className="text-center space-y-2">
//           <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
//             Join as a <span className="text-[#D91A3D]">Donor</span>
//           </h2>
//           <p className="text-sm text-gray-400">
//             Create your account to bridge the gap between life and hope.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {/* Name */}
//             <div className="space-y-2">
//               <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
//                 <FaUser className="text-[#D91A3D]" /> Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="John Doe"
//                 className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] transition-colors"
//               />
//             </div>

//             {/* Email */}
//             <div className="space-y-2">
//               <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
//                 <FaEnvelope className="text-[#D91A3D]" /> Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="example@mail.com"
//                 className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] transition-colors"
//               />
//             </div>

//             {/* Avatar Input (imgbb usage placeholder) */}
//             <div className="space-y-2 sm:col-span-2">
//               <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
//                 <FaImage className="text-[#D91A3D]" /> Profile Avatar (Image)
//               </label>
//               <input
//                 type="file"
//                 name="avatar"
//                 accept="image/*"
//                 required
//                 onChange={handleFileChange}
//                 className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-2.5 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-red-500/10 file:text-[#D91A3D] hover:file:bg-red-500/20 text-gray-400"
//               />
//             </div>

//             {/* Blood Group Selector */}
//             <div className="space-y-2">
//               <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
//                 <FaTint className="text-[#D91A3D]" /> Blood Group
//               </label>
//               <select
//                 name="bloodGroup"
//                 required
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] transition-colors text-gray-300"
//               >
//                 <option value="">Select Group</option>
//                 {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(
//                   group => (
//                     <option key={group} value={group}>
//                       {group}
//                     </option>
//                   ),
//                 )}
//               </select>
//             </div>

//             {/* District Selector */}
//             <div className="space-y-2">
//               <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
//                 <FaMapMarkerAlt className="text-[#D91A3D]" /> District
//               </label>
//               <select
//                 name="district"
//                 required
//                 value={formData.district}
//                 onChange={handleChange}
//                 className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] transition-colors text-gray-300"
//               >
//                 <option value="">Select District</option>
//                 {Object.keys(locationData).map(dist => (
//                   <option key={dist} value={dist}>
//                     {dist}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Upazila Selector (Conditionally Dynamic) */}
//             <div className="space-y-2">
//               <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
//                 <FaMapMarkerAlt className="text-[#D91A3D]" /> Upazila
//               </label>
//               <select
//                 name="upazila"
//                 required
//                 value={formData.upazila}
//                 onChange={handleChange}
//                 disabled={!formData.district}
//                 className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] transition-colors text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <option value="">Select Upazila</option>
//                 {availableUpazilas.map(upazila => (
//                   <option key={upazila} value={upazila}>
//                     {upazila}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Space Filler for alignment */}
//             <div className="hidden sm:block"></div>

//             {/* Password */}
//             <div className="space-y-2">
//               <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
//                 <FaLock className="text-[#D91A3D]" /> Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] transition-colors"
//               />
//             </div>

//             {/* Confirm Password */}
//             <div className="space-y-2">
//               <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
//                 <FaLock className="text-[#D91A3D]" /> Confirm Password
//               </label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 required
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] transition-colors"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#D91A3D] hover:bg-[#b81432] text-white font-bold py-3.5 rounded-xl transition-colors tracking-wider text-sm uppercase mt-4 shadow-lg shadow-red-900/20 active:scale-[0.99] transform"
//           >
//             Register Account
//           </button>
//         </form>

//         {/* Login Navigation Info */}
//         <div className="text-center text-xs text-gray-500 mt-4">
//           Already have an account?{' '}
//           <a
//             href="/login"
//             className="text-[#D91A3D] hover:underline font-semibold"
//           >
//             Login here
//           </a>
//           .
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
  FaMapMarkerAlt,
  FaTint,
  FaEye, // নতুন ইমপোর্ট
  FaEyeSlash, // নতুন ইমপোর্ট
} from 'react-icons/fa';

// JSON Data Import (Path-ti apnar project setup onujayi milliye niben)
import districtsData from '../../data/districts.json';
import upazilasData from '../../data/upazilas.json';

export default function Register() {
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  // পাসওয়ার্ডের টাইপ (text নাকি password) ট্র্যাক করার স্টেট
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
  const onSubmit = data => {
    // Password Confirmation Manual Check
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Requirements Checklist on Submit
    const finalPayload = {
      name: data.name,
      email: data.email,
      bloodGroup: data.bloodGroup,
      district: districtsData.find(d => d.id === data.district)?.name || '',
      upazila: data.upazila, // Stores selected upazila name string
      avatar: data.avatar[0], // Selected file object for imgbb upload handling
      role: 'donor', // Requirement Rule 3.1
      status: 'active', // Requirement Rule 3.1
    };

    console.log('Structured Payload to Server/ImgBB:', finalPayload);
    // Ekhane apnar axiosPublic logic + ImgBB post mechanism process hobe
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
                {...register('name', { required: 'Name is required' })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-white"
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
                {...register('email', { required: 'Email is required' })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D]"
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
                {...register('avatar', {
                  required: 'Avatar image is required',
                })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-red-500/10 file:text-[#D91A3D] hover:file:bg-red-500/20"
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
                {...register('bloodGroup', {
                  required: 'Select a blood group',
                })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-gray-300"
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

            {/* 5. District Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D91A3D]" /> District
              </label>
              <select
                {...register('district', { required: 'Select a district' })}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D91A3D] text-gray-300"
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

            {/* 6. Upazila Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D91A3D]" /> Upazila
              </label>
              <select
                {...register('upazila', { required: 'Select an upazila' })}
                disabled={!selectedDistrict}
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

            {/* Structural Filler Box */}
            <div className="hidden sm:block"></div>

            {/* 7. Password (আপডেটেড আইকনসহ) */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaLock className="text-[#D91A3D]" /> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Minimum 6 characters' },
                  })}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-4 pr-11 py-3 text-sm focus:outline-none focus:border-[#D91A3D]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
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

            {/* 8. Confirm Password (আপডেটেড আইকনসহ) */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-400 flex items-center gap-2">
                <FaLock className="text-[#D91A3D]" /> Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                  })}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-4 pr-11 py-3 text-sm focus:outline-none focus:border-[#D91A3D]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
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
            className="w-full bg-[#D91A3D] hover:bg-[#b81432] text-white font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-sm mt-4 shadow-lg shadow-red-900/20 active:scale-[0.99]"
          >
            Register Account
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