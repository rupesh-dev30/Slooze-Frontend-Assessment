"use client";

import { useState, useEffect } from "react";
import { Loader2, User, Mail, Shield, Save } from "lucide-react";
import { getUserProfile, updateUserProfile } from "@/lib/actions/user.action";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserProfile();
      if (res.success && res.data) {
        setForm({
          name: res.data.name,
          email: res.data.email,
          role: res.data.role,
        });
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    const res = await updateUserProfile(form);
    setSaving(false);

    if (res.success) {
      alert("Profile updated successfully!");
    } else {
      alert("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="p-8 flex justify-center items-center">
        <Loader2
          className="animate-spin text-gray-600 dark:text-gray-300"
          size={28}
        />
      </div>
    );
  }

  return (
    <div className="w-full pt-8 bg-[#E9EEF4] dark:bg-black min-h-screen text-gray-900 dark:text-white rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Full Name
            </label>
            <div className="flex items-center gap-3 mt-1">
              <User size={20} className="text-gray-500" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="flex-1 bg-gray-50 dark:bg-gray-800 p-2 rounded-md border border-gray-300 dark:border-gray-700"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Email Address
            </label>
            <div className="flex items-center gap-3 mt-1">
              <Mail size={20} className="text-gray-500" />
              <input
                disabled
                name="email"
                value={form.email}
                className="flex-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-md border border-gray-300 dark:border-gray-700 opacity-70 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Role
            </label>
            <div className="flex items-center gap-3 mt-1">
              <Shield size={20} className="text-gray-500" />
              <input
                disabled
                name="role"
                value={form.role}
                className="flex-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-md border border-gray-300 dark:border-gray-700 opacity-70 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Profile Settings</h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Update your personal information and preferences.
            </p>

            <button
              onClick={handleSave}
              disabled={saving}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition disabled:opacity-50 flex items-center gap-2"
            >
              <Save size={18} />
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
