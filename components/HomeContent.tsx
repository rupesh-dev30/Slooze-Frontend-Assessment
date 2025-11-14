"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, LogIn, User } from "lucide-react";
import { logoutUser } from "@/lib/actions/user.action";
import ThemeToggle from "./ThemeToggle";

export type CurrentUser = {
  id: string;
  role: string;
  name: string;
};

export default function HomeContent({ user }: { user: CurrentUser | null }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-2xl font-bold">Bitstore</h1>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {!user ? (
            <Link
              href="/sign-in"
              className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition flex items-center gap-2"
            >
              <LogIn size={18} /> Login
            </Link>
          ) : (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <User size={18} />
                {user.name}
                <ChevronDown size={16} />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 text-sm">
                  <Link
                    href="/profile"
                    className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center pt-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Bitstore</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-6">
          A modern inventory management platform with Role-Based Access,
          Products, Dashboard analytics and smooth UI.
        </p>

        {/* Not logged in */}
        {!user ? (
          <Link
            href="/sign-in"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
        ) : user.role === "manager" ? (
          /* Manager */
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Go to Dashboard
          </Link>
        ) : (
          /* Store Keeper */
          <Link
            href="/product"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View Products
          </Link>
        )}
      </div>
    </div>
  );
}
