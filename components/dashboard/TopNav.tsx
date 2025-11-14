"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Bell, ChevronDown, LayoutDashboard } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { logoutUser } from "@/lib/actions/user.action";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    window.location.href = "/sign-in";
  };

  return (
    <header className="flex items-center justify-between py-3 border-gray-200 dark:border-gray-800 bg-[#E9EEF4] dark:bg-black">
      {/* LEFT SIDE */}
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

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {/* ADMIN DROPDOWN */}
        <div
          ref={dropdownRef}
          className="relative"
        >
          <div
            className="flex items-center gap-1 px-2 py-1 border rounded-md text-sm border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 cursor-pointer select-none"
            onClick={() => setOpen(!open)}
          >
            Admin <ChevronDown size={16} />
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 text-sm animate-fadeIn z-20">
              <button
                onClick={() => (window.location.href = "/dashboard/profile")}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                My Profile
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                Logout
              </button>
            </div>
          )}
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

        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </header>
  );
};

export default TopNav;
