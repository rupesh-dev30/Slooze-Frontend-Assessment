"use client";

import { useState } from "react";
import { updatePassword } from "@/lib/actions/security.action";
import { Lock, Loader2, ShieldCheck } from "lucide-react";

export default function SecurityPage() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage(null);

    if (form.newPassword !== form.confirmPassword) {
      setMessage({ type: "error", text: "New passwords do not match." });
      setLoading(false);
      return;
    }

    const res = await updatePassword(form);
    setLoading(false);

    if (res.success) {
      setMessage({ type: "success", text: "Password updated successfully!" });
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } else {
      setMessage({
        type: "error",
        text: res.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="w-full p-8 bg-[#E9EEF4] dark:bg-black min-h-screen text-gray-900 dark:text-white rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Security Settings</h1>

      <div className="max-w-xl bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Current Password
          </label>
          <div className="flex items-center gap-3 mt-1">
            <Lock size={20} className="text-gray-500" />
            <input
              type="password"
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              className="flex-1 bg-gray-50 dark:bg-gray-800 p-2 rounded-md border border-gray-300 dark:border-gray-700"
              placeholder="Enter current password"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            New Password
          </label>
          <div className="flex items-center gap-3 mt-1">
            <Lock size={20} className="text-gray-500" />
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              className="flex-1 bg-gray-50 dark:bg-gray-800 p-2 rounded-md border border-gray-300 dark:border-gray-700"
              placeholder="Enter new password"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Confirm New Password
          </label>
          <div className="flex items-center gap-3 mt-1">
            <Lock size={20} className="text-gray-500" />
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="flex-1 bg-gray-50 dark:bg-gray-800 p-2 rounded-md border border-gray-300 dark:border-gray-700"
              placeholder="Confirm new password"
            />
          </div>
        </div>

        {message && (
          <div
            className={`p-3 rounded-md text-sm ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition disabled:opacity-50 flex items-center gap-2"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <ShieldCheck size={18} />
          )}
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
}
