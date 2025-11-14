"use client";

import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function NoAccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E9EEF4] dark:bg-black text-center px-6">
      <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 max-w-md">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <ShieldAlert size={48} className="text-red-500" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Access Denied
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          You don’t have permission to access this page. Contact the admin if
          you think this is a mistake.
        </p>

        <Link
          href="/home"
          className="px-5 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
