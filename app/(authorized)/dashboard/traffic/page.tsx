"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", visits: 1200 },
  { name: "Tue", visits: 900 },
  { name: "Wed", visits: 1600 },
  { name: "Thu", visits: 1400 },
  { name: "Fri", visits: 1800 },
  { name: "Sat", visits: 1200 },
  { name: "Sun", visits: 1000 },
];

export default function TrafficPage() {
  return (
    <div className="w-full p-8 min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-semibold tracking-tight mb-8">Traffic</h1>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-medium mb-4">Weekly Traffic Overview</h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visits" stroke="#8b5cf6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
