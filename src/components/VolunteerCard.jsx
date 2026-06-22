'use client';

export default function VolunteerCard({
  title,
  count,
  icon: Icon,
  color,
  bgColor,
  borderColor,
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase font-semibold text-gray-400">
            {title}
          </p>

          <h3 className="text-3xl font-black mt-2 text-gray-800">{count}</h3>
        </div>

        <div
          className={`h-14 w-14 rounded-xl flex items-center justify-center border ${bgColor} ${borderColor}`}
        >
          <Icon className={color} size={24} />
        </div>
      </div>
    </div>
  );
}
