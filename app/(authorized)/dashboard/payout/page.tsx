"use client";

export default function PayoutPage() {
  return (
    <div className="w-full p-8 min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-semibold tracking-tight mb-8">Payouts</h1>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow space-y-6">
        <h2 className="text-xl font-medium">Pending Payouts</h2>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between border-b pb-2 border-gray-200 dark:border-gray-700">
            <span>User A</span>
            <span className="font-medium">₹12,000</span>
          </div>

          <div className="flex justify-between border-b pb-2 border-gray-200 dark:border-gray-700">
            <span>User B</span>
            <span className="font-medium">₹8,500</span>
          </div>

          <div className="flex justify-between border-b pb-2 border-gray-200 dark:border-gray-700">
            <span>User C</span>
            <span className="font-medium">₹6,200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
