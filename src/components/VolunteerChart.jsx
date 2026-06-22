'use client';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  { day: 'Mon', requests: 12 },
  { day: 'Tue', requests: 18 },
  { day: 'Wed', requests: 10 },
  { day: 'Thu', requests: 24 },
  { day: 'Fri', requests: 15 },
  { day: 'Sat', requests: 20 },
  { day: 'Sun', requests: 14 },
];

export default function VolunteerChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="requests" fill="#D91A3D" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
