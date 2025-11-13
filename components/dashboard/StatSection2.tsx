"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown, CheckCircle2, Plus, Settings } from "lucide-react";

const tinyData = [
  { day: "Nov 20th", a: 30, b: 20 },
  { day: "Nov 25th", a: 40, b: 28 },
  { day: "Dec 1st", a: 35, b: 30 },
  { day: "Dec 5th", a: 45, b: 38 },
  { day: "Dec 10th", a: 60, b: 42 },
  { day: "Dec 15th", a: 55, b: 40 },
  { day: "Dec 20th", a: 70, b: 50 },
];

const subsBars = [
  { name: "Mo", uv: 300 },
  { name: "Tu", uv: 230 },
  { name: "We", uv: 260 },
  { name: "Th", uv: 200 },
  { name: "Fr", uv: 240 },
  { name: "Sa", uv: 260 },
  { name: "Su", uv: 350 },
];

const products = [
  {
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
    avatar: "/avatar.png",
  },
  {
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
    avatar: "/avatar.png",
  },
  {
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
    avatar: "/avatar.png",
  },
  {
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
    avatar: "/avatar.png",
  },
  {
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
    avatar: "/avatar.png",
  },
];

const payments = [
  {
    status: "Success",
    email: "Youremail@email.com",
    amount: "$100",
  },
  {
    status: "Success",
    email: "Youremail@email.com",
    amount: "$100",
  },
  {
    status: "Success",
    email: "Youremail@email.com",
    amount: "$100",
  },
  {
    status: "Success",
    email: "Youremail@email.com",
    amount: "$100",
  },
  {
    status: "Success",
    email: "Youremail@email.com",
    amount: "$100",
  },
];

const FilterButton = ({ label }: { label: string }) => (
  <button className="flex items-center gap-1 text-sm px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 dark:text-gray-200">
    {label}
    <ChevronDown size={14} />
  </button>
);

const StatsSection2 = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold dark:text-white">Stats</h1>
          <FilterButton label="Years" />
          <FilterButton label="Aug 20th - Dec 4th" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            compared to
          </p>
          <FilterButton label="Previous" />
          <FilterButton label="2024" />
        </div>

        <div className="flex items-center gap-2">
          <button className="px-4 py-2 flex items-center gap-2 rounded-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 dark:text-gray-200">
            <Plus size={16} /> Add
          </button>
          <button className="px-4 py-2 flex items-center gap-2 rounded-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 dark:text-gray-200">
            <Settings size={16} /> Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Total Earning", color: "#10b981" },
          { title: "Total Sales", color: "#a855f7" },
          { title: "Total Views", color: "#facc15" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <h2 className="text-lg font-semibold dark:text-white">
              {item.title}
            </h2>
            <p className="text-2xl font-semibold mt-1 dark:text-gray-100">
              +112,893
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              trend title{" "}
              <span className="text-green-500 font-semibold">▲ 70.5%</span>
            </p>

            <div style={{ height: 140 }} className="mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tinyData}>
                  <XAxis dataKey="day" hide />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ background: "#1f2937", border: "none" }}
                    labelStyle={{ color: "white" }}
                    itemStyle={{ color: "white" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="a"
                    stroke={item.color}
                    strokeWidth={2.5}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="b"
                    stroke="#9ca3af"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-lg font-semibold dark:text-white">
            Subscriptions Performers
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Follower This Years
          </p>

          <p className="text-5xl font-bold mt-4 dark:text-white">+500</p>

          <div style={{ height: 150 }} className="mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subsBars}>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="uv" fill="#fbbf24" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-md">
            Get Started
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-lg font-semibold dark:text-white">
            Top Sales Product
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your payments.
          </p>

          <div className="mt-4 space-y-4">
            {products.map((p, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-300 dark:bg-gray-700" />
                  <div>
                    <p className="font-medium dark:text-white">{p.email}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {p.date}
                    </p>
                  </div>
                </div>

                <p className="font-semibold dark:text-white">{p.amount}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button className="px-4 py-1 bg-green-500 text-white rounded-md">
              Previous
            </button>
            <button className="px-4 py-1 bg-green-500 text-white rounded-md">
              Next
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-lg font-semibold dark:text-white">
            Payment History
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your payments.
          </p>

          <div className="mt-4 space-y-4">
            {payments.map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-3 items-center text-sm py-1"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} />
                  <span className="dark:text-white">Success</span>
                </div>

                <p className="dark:text-gray-200">{p.email}</p>
                <p className="font-semibold dark:text-white">{p.amount}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button className="px-4 py-1 bg-green-500 text-white rounded-md">
              Previous
            </button>
            <button className="px-4 py-1 bg-green-500 text-white rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection2;
