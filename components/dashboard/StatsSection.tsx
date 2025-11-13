"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChevronDown, Plus, Settings } from "lucide-react";

const monthData = [
  { month: "Jan", value: 1200, value2: 800 },
  { month: "Feb", value: 2100, value2: 900 },
  { month: "Mar", value: 3500, value2: 1500 },
  { month: "Apr", value: 5000, value2: 3200 },
  { month: "May", value: 4200, value2: 2800 },
  { month: "Jun", value: 4800, value2: 3600 },
  { month: "Jul", value: 3000, value2: 1700 },
  { month: "Aug", value: 4200, value2: 3100 },
  { month: "Sep", value: 2600, value2: 1600 },
  { month: "Oct", value: 3500, value2: 2000 },
  { month: "Nov", value: 2700, value2: 1400 },
  { month: "Dec", value: 3900, value2: 2200 },
];

const weekData = [
  { day: "Mo", value: 220, value2: 300 },
  { day: "Tu", value: 180, value2: 260 },
  { day: "We", value: 350, value2: 500 },
  { day: "Th", value: 270, value2: 450 },
  { day: "Fr", value: 300, value2: 380 },
  { day: "Sa", value: 410, value2: 520 },
  { day: "Su", value: 320, value2: 400 },
];

const subsData = [
  { day: "Mo", value: 100 },
  { day: "Tu", value: 80 },
  { day: "We", value: 60 },
  { day: "Th", value: 50 },
  { day: "Fr", value: 70 },
  { day: "Sa", value: 90 },
  { day: "Su", value: 140 },
];

const FilterButton = ({ label }: { label: string }) => (
  <button className="flex items-center gap-1 text-sm px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900">
    {label}
    <ChevronDown size={14} />
  </button>
);

const StatsSection = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-3xl font-semibold">Stats</h1>

          <FilterButton label="Years" />
          <FilterButton label="Aug 20th - Dec 4th" />

          <p className="text-sm text-gray-500">compared to</p>

          <FilterButton label="Previous" />
          <FilterButton label="2024" />
        </div>

        <div className="flex items-center gap-2">
          <button className="px-4 py-2 flex items-center gap-2 rounded-sm bg-white dark:text-black border border-gray-300">
            <Plus size={16} /> Add
          </button>
          <button className="px-4 py-2 flex items-center gap-2 rounded-sm bg-white dark:text-black border border-gray-300">
            <Settings size={16} /> Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Total Earning</h2>
            <p className="text-3xl font-bold mt-1">$ 112,893.00</p>

            <p className="text-xs text-gray-500 mt-1">
              trend title{" "}
              <span className="text-green-500 font-semibold">▲ 70.5%</span>
            </p>

            <button className="mt-2 px-3 py-1 text-xs border border-gray-300 rounded-md flex items-center gap-1 bg-gray-50">
              This Week <ChevronDown size={12} />
            </button>
          </div>

          <div style={{ height: 240 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="value2"
                  stroke="#6ee7b7"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold">Total Earning</h2>
          <p className="text-3xl font-bold mt-1">$ 112,893.00</p>

          <p className="text-xs text-gray-500 mt-1">
            trend title{" "}
            <span className="text-green-500 font-semibold">▲ 70.5%</span>
          </p>

          <div style={{ height: 240 }} className="mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#22c55e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold">Total Earning</h2>
          <p className="text-3xl font-bold mt-1">$ 112,893.00</p>

          <p className="text-xs text-gray-500 mt-1">
            trend title{" "}
            <span className="text-green-500 font-semibold">▲ 70.5%</span>
          </p>

          <button className="mt-2 px-3 py-1 text-xs border border-gray-300 rounded-md flex items-center gap-1 bg-gray-50">
            This Week <ChevronDown size={12} />
          </button>

          <div style={{ height: 240 }} className="mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4ade80" radius={[4, 4, 0, 0]} />
                <Bar dataKey="value2" fill="#86efac" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold">Subscriptions</h2>
          <p className="text-2xl font-semibold mt-1">+112,893</p>
          <p className="text-xs text-gray-500 mt-1">
            trend title{" "}
            <span className="text-green-500 font-semibold">▲ 70.5%</span>
          </p>

          <div style={{ height: 240 }} className="mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={subsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#fbbf24"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
