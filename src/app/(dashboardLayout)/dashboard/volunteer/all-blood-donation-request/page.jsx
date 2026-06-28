// import React from 'react';
// import { getDonationRequests } from "@/lib/api/donationRequests";

// const AllBloodDonationRequest = async() => {
//   const requesterEmail="mdrakibhasan11@gmail.com"
//   const donations = await getDonationRequests(requesterEmail)
//   console.log('lksjal',donations);
//   return (
//     <div>
//       afa
//     </div>
//   );
// };

// export default AllBloodDonationRequest;

import React from 'react';
import DonationRequestsTable from '@/components/DonationRequestsTable';
import { getDonationRequests } from '@/lib/api/donationRequests';
// সঠিক পাথে কম্পোনেন্টটি ইমপোর্ট করুন

const AllBloodDonationRequest = async () => {
  const requesterEmail = 'mdrakibhasan11@gmail.com';

  // ব্যাকএন্ড থেকে ডাটা ফেচ করা হচ্ছে
  const donations = await getDonationRequests(requesterEmail);

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto text-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          All Blood Donation <span className="text-[#D91A3D]">Requests</span> 🩸
        </h2>
        <p className="text-xs text-gray-400 mt-0.5">
          List of all donation requests created by you.
        </p>
      </div>

      {/* কম্পোনেন্টটি এখানে কল করা হলো এবং donations প্রপ্স পাঠানো হলো */}
      <DonationRequestsTable donations={donations} />
    </div>
  );
};

export default AllBloodDonationRequest;