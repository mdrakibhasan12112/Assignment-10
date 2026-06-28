'use client';
import React, { useState } from 'react';
import { useSession } from '@/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';
import {
  FaHeartbeat,
  FaUser,
  FaHospital,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaSpinner,
} from 'react-icons/fa';

import districtsData from '@/data/districts.json';
import upazilasData from '@/data/upazilas.json';
import { createDonation } from '@/lib/action/donationRequests';

export default function CreateDonationRequest() {
 const { data: session } = useSession();
 const router = useRouter();
 const [loading, setLoading] = useState(false);
 const [selectedDistrictId, setSelectedDistrictId] = useState('');
 const [filteredUpazilas, setFilteredUpazilas] = useState([]);

 const [formData, setFormData] = useState({
  recipientName: '',
  bloodGroup: '',
  hospitalName: '',
  fullAddress: '',
  donationDate: '',
  donationTime: '',
  requestMessage: '',
 });

 if (session?.user?.status === 'blocked') {
  return (
   <div className="bg-[#111827] border border-red-950 rounded-2xl p-6 text-center max-w-xl mx-auto shadow-sm">
    <h3 className="text-red-500 font-bold text-lg">Access Denied</h3>
    <p className="text-gray-400 text-sm mt-1">
     Your account has been blocked by the admin.
    </p>
   </div>
  );
 }

 const handleDistrictChange = e => {
  const districtId = e.target.value;
  setSelectedDistrictId(districtId);
  if (!districtId) {
   setFilteredUpazilas([]);
   return;
  }
  const upazilas = upazilasData.filter(
   upazila =>
    upazila.district_id === districtId ||
    upazila.district_name?.toLowerCase() === districtId.toLowerCase(),
  );
  setFilteredUpazilas(upazilas);
 };

 const handleChange = e => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async e => {
  e.preventDefault();
  const districtName =
   e.target.district.options[e.target.district.selectedIndex].text;
  const upazilaName =
   e.target.upazila.options[e.target.upazila.selectedIndex].text;

  if (!selectedDistrictId || !e.target.upazila.value) {
   alert('Please select both District and Upazila');
   return;
  }

  setLoading(true);
  const requestData = {
   ...formData,
   district: districtName,
   upazila: upazilaName,
   requesterName: session?.user?.name || 'Anonymous',
   requesterEmail: session?.user?.email,
   donationStatus: 'pending',
  };
  const res = await createDonation(requestData)
    if (res.insertedId) {
      // toast.success('Job posted successfully!');
      e.target.reset();
      redirect('/dashboard/volunteer/all-blood-donation-request');
    }


  // try {
  //  const res = await fetch('http://localhost:5000/api/blood-requests', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(requestData),
  //  });
  //  if (res.ok) {
  //   alert('Blood donation request created successfully! 🎉');
  //   router.push('/dashboard/my-donation-requests');
  //  } else {
  //   alert('Something went wrong!');
  //  }
  // } catch (error) {
  //  console.error(error);
  // } finally {
  //  setLoading(false);
  // }
 };



 return (
 
  <div className=" flex flex-col items-center justify-center p-4 sm:p-6 text-gray-100">
    
  
   <div className="w-full max-w-2xl bg-[#0d1527] border border-gray-800/50 rounded-3xl p-6 sm:p-10 shadow-xl">
      
    {/* Title */}
    <div className="text-center mb-8">
     <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
      Create Blood <span className="text-[#D91A3D]">Request</span>
     </h2>
     <p className="text-xs sm:text-sm text-gray-400 mt-1">Create your request to bridge the gap between life and hope.</p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-5">
     {/* Row 1 */}
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
       <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5 tracking-wider">
        <FaUser className="text-[#D91A3D]" size={11} /> Recipient Name
       </label>
       <input required type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} className="w-full p-3.5 border border-gray-800 rounded-xl bg-[#060a13] text-sm text-gray-100 focus:outline-none focus:border-[#D91A3D] transition-all placeholder-gray-600" placeholder="John Doe" />
      </div>
      <div>
       <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5 tracking-wider">
        <FaHeartbeat className="text-[#D91A3D]" size={11} /> Blood Group
       </label>
       <select required name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="w-full p-3.5 border border-gray-800 rounded-xl bg-[#060a13] text-sm text-gray-100 focus:outline-none focus:border-[#D91A3D] transition-all cursor-pointer">
        <option value="">Select Group</option>
        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(g => <option key={g} value={g}>{g}</option>)}
       </select>
      </div>
     </div>

     {/* Row 2 */}
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
       <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5 tracking-wider">
        <FaMapMarkerAlt className="text-[#D91A3D]" size={11} /> District
       </label>
       <select required name="district" value={selectedDistrictId} onChange={handleDistrictChange} className="w-full p-3.5 border border-gray-800 rounded-xl bg-[#060a13] text-sm text-gray-100 focus:outline-none focus:border-[#D91A3D] transition-all cursor-pointer">
        <option value="">Select District</option>
        {districtsData?.map((district) => <option key={district.id} value={district.id || district.name}>{district.name}</option>)}
       </select>
      </div>
      <div>
       <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5 tracking-wider">
        <FaMapMarkerAlt className="text-[#D91A3D]" size={11} /> Upazila
       </label>
       <select required name="upazila" disabled={!selectedDistrictId} className="w-full p-3.5 border border-gray-800 rounded-xl bg-[#060a13] text-sm text-gray-100 focus:outline-none focus:border-[#D91A3D] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
        <option value="">Select Upazila</option>
        {filteredUpazilas.map((upazila) => <option key={upazila.id} value={upazila.id}>{upazila.name}</option>)}
       </select>
      </div>
     </div>

     {/* Row 3 */}
     <div>
      <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5 tracking-wider">
       <FaHospital className="text-[#D91A3D]" size={11} /> Hospital Name
      </label>
      <input required type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} className="w-full p-3.5 border border-gray-800 rounded-xl bg-[#060a13] text-sm text-gray-100 focus:outline-none focus:border-[#D91A3D] transition-all placeholder-gray-600" placeholder="e.g. Dhaka Medical College" />
     </div>

     {/* Row 4 */}
     <div>
      <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5 tracking-wider">
       <FaMapMarkerAlt className="text-[#D91A3D]" size={11} /> Full Address Details
      </label>
      <input required type="text" name="fullAddress" value={formData.fullAddress} onChange={handleChange} className="w-full p-3.5 border border-gray-800 rounded-xl bg-[#060a13] text-sm text-gray-100 focus:outline-none focus:border-[#D91A3D] transition-all placeholder-gray-600" placeholder="e.g. Ward No 4, Sector 12" />
     </div>

     {/* Row 5 */}
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
       <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5 tracking-wider">
        <FaCalendarAlt className="text-[#D91A3D]" size={11} /> Donation Date
       </label>
       <input required type="date" name="donationDate" value={formData.donationDate} onChange={handleChange} className="w-full p-3.5 border border-gray-800 rounded-xl bg-[#060a13] text-sm text-gray-300 focus:outline-none focus:border-[#D91A3D] transition-all cursor-pointer [color-scheme:dark]" />
      </div>
      <div>
       <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5 tracking-wider">
        <FaClock className="text-[#D91A3D]" size={11} /> Donation Time
       </label>
       <input required type="time" name="donationTime" value={formData.donationTime} onChange={handleChange} className="w-full p-3.5 border border-gray-800 rounded-xl bg-[#060a13] text-sm text-gray-300 focus:outline-none focus:border-[#D91A3D] transition-all cursor-pointer [color-scheme:dark]" />
      </div>
     </div>

     {/* Row 6 */}
     <div>
      <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5 tracking-wider">
       <FaEnvelope className="text-[#D91A3D]" size={11} /> Why do you need blood?
      </label>
      <textarea required rows={3} name="requestMessage" value={formData.requestMessage} onChange={handleChange} className="w-full p-3.5 border border-gray-800 rounded-xl bg-[#060a13] text-sm text-gray-100 focus:outline-none focus:border-[#D91A3D] transition-all resize-none placeholder-gray-600" placeholder="Please share details..." />
     </div>

     {/* Button */}
     <div className="pt-4">
      <button type="submit" disabled={loading} className="w-full bg-[#D91A3D] hover:bg-[#b51230] text-white font-bold py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2">
       {loading ? <FaSpinner className="animate-spin" /> : 'Post Blood Request'}
      </button>
     </div>
    </form>
   </div>
  </div>
 )
}