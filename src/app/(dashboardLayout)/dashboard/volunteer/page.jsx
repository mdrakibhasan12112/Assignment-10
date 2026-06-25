'use client';

import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';

import {
  FaUsers,
  FaHandHoldingUsd,
  FaHeartbeat,
  FaClock,
  FaCheckCircle,
} from 'react-icons/fa';
import VolunteerCard from '@/components/VolunteerCard';
import VolunteerChart from '@/components/VolunteerChart';

export default function VolunteerDashboard() {
  const router = useRouter();

  const { data: session } = useSession();

  const userName = session?.user?.name || 'Volunteer';

  const stats = [
    {
      id: 1,
      title: 'Total Users',
      count: '1,240',
      icon: FaUsers,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
    },
    {
      id: 2,
      title: 'Total Funding',
      count: '$3,250',
      icon: FaHandHoldingUsd,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-100',
    },
    {
      id: 3,
      title: 'Total Requests',
      count: '85',
      icon: FaHeartbeat,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-100',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
      {/* Welcome Section */}

      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900">
              Welcome Back,
              <span className="text-[#D91A3D] ml-2">{userName}</span>
            </h1>

            <p className="text-gray-500 mt-2">
              Manage donation requests and monitor platform activity.
            </p>
          </div>

          <div className="self-start lg:self-center">
            <span className="bg-red-50 text-[#D91A3D] border border-red-100 px-4 py-2 rounded-full text-xs font-bold uppercase">
              Volunteer Access
            </span>
          </div>
        </div>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map(stat => (
          <VolunteerCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Chart + Actions */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Chart */}

        {/* <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800">
            Donation Analytics
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Weekly blood request overview.
          </p>

          <VolunteerChart />
        </div> */}

        {/* Action Card */}

        {/* <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-lg text-gray-800">Volunteer Actions</h2>

          <div className="space-y-4 mt-6">
            <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100 flex gap-3">
              <FaClock className="text-yellow-500 mt-1" />

              <div>
                <h3 className="font-semibold text-sm">
                  Review Pending Requests
                </h3>

                <p className="text-xs text-gray-500">
                  Check requests waiting for donor response.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" />

              <div>
                <h3 className="font-semibold text-sm">Status Management</h3>

                <p className="text-xs text-gray-500">
                  Volunteers can update request status only.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push('/dashboard/all-blood-donation-request')}
            className="w-full mt-6 bg-[#D91A3D] hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Manage Requests
          </button>
        </div> */}
      </div>

      {/* Recent Requests */}

      {/* <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm overflow-x-auto">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Recent Blood Requests
        </h2>

        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Recipient</th>
              <th className="text-left py-3">Blood Group</th>
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">Rahim Ahmed</td>
              <td>A+</td>
              <td>22 Jun 2026</td>
              <td>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                  Pending
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">Karim Uddin</td>
              <td>O-</td>
              <td>21 Jun 2026</td>
              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  In Progress
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
