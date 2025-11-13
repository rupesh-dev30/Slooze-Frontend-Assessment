"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

const OverviewChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold">Overview</div>
      </div>

      <div style={{ height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="blue" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverviewChart;
