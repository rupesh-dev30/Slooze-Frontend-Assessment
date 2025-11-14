"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 24000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 30000 },
  { month: "Apr", revenue: 27000 },
  { month: "May", revenue: 35000 },
];

export default function EarningPage() {
  return (
    <div className="w-full p-8 min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-semibold tracking-tight mb-8">Earning</h1>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-medium mb-4">Monthly Earnings</h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
