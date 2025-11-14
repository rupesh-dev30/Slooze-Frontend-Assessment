"use client";

import { BarChart3, Package, Users, TrendingUp } from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Week 1", value: 120 },
  { name: "Week 2", value: 340 },
  { name: "Week 3", value: 280 },
  { name: "Week 4", value: 450 },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here’s an overview of your store performance.
          </p>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Products"
          value="248"
          icon={
            <Package
              size={28}
              className="text-purple-600 dark:text-purple-400"
            />
          }
        />
        <StatsCard
          title="Monthly Revenue"
          value="₹84,920"
          icon={
            <BarChart3
              size={28}
              className="text-green-600 dark:text-green-400"
            />
          }
        />
        <StatsCard
          title="Active Users"
          value="1,248"
          icon={
            <Users size={28} className="text-blue-600 dark:text-blue-400" />
          }
        />
        <StatsCard
          title="Growth Rate"
          value="+14.2%"
          icon={
            <TrendingUp
              size={28}
              className="text-orange-500 dark:text-orange-400"
            />
          }
        />
      </div>

      {/* CHART SECTION */}
      <div className="mt-10 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Store Overview</h2>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                className="dark:stroke-gray-700"
              />
              <XAxis
                dataKey="name"
                stroke="#888"
                className="dark:fill-gray-300"
              />
              <YAxis stroke="#888" className="dark:fill-gray-300" />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #ddd",
                  color: "#111",
                }}
                labelStyle={{ color: "#111" }}
                itemStyle={{ color: "#111" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center gap-4 hover:shadow-md transition">
      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
