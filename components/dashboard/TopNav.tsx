"use client";

import { Search, Bell, ChevronDown, LayoutDashboard } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

const TopNav = () => {
  return (
    <header className="flex items-center justify-between py-3 border-gray-200 dark:border-gray-800 bg-[#E9EEF4] dark:bg-black">
      <div className="flex items-center gap-4">
        <div className="relative w-72">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            placeholder="Search"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-900 text-sm outline-none focus:border-purple-500"
          />
        </div>

        <button className="px-4 py-2 rounded-md bg-blue-500 dark:bg-purple-600 text-white text-sm hover:bg-purple-700 transition">
          Search
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 px-2 py-1 border rounded-md text-sm border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 cursor-pointer">
          Admin <ChevronDown size={16} />
        </div>

        <LayoutDashboard
          size={20}
          className="text-gray-700 dark:text-gray-300 cursor-pointer"
        />

        <Bell
          size={20}
          className="text-gray-700 dark:text-gray-300 cursor-pointer"
        />

        <ThemeToggle />

        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700">
          
        </div>
      </div>
    </header>
  );
};

export default TopNav;
