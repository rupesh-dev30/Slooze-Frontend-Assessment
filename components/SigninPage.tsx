"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/actions/user.action";

const SignInPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    if (!email || !password) {
      setErrorMsg("Email and password are required.");
      setLoading(false);
      return;
    }

    const res = await loginUser({ email, password });

    if (!res.success) {
      setErrorMsg(res.message || "Login failed");
      setLoading(false);
      return;
    }

    setSuccessMsg("Login successful!");

    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);

    setLoading(false);
  };

  return (
    <div className="w-full text-black dark:text-white">
      <h1 className="text-3xl font-semibold text-center dark:text-white">
        Welcome Back
      </h1>

      <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
        Login to continue
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="text-sm text-gray-600 dark:text-gray-300 block mb-1"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            className="w-full rounded-lg px-4 py-2 
              border border-gray-300 dark:border-gray-600 
              bg-gray-50 dark:bg-gray-800 
              text-black dark:text-white 
              focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm text-gray-600 dark:text-gray-300 block mb-1"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            className="w-full rounded-lg px-4 py-2 
              border border-gray-300 dark:border-gray-600 
              bg-gray-50 dark:bg-gray-800 
              text-black dark:text-white
              focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 dark:border-gray-600 dark:bg-gray-700"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            I agree to all Terms, Privacy Policy and fees
          </p>
        </div>

        {errorMsg && (
          <p className="text-red-600 dark:text-red-400 text-sm text-center">
            {errorMsg}
          </p>
        )}

        {successMsg && (
          <p className="text-green-600 dark:text-green-400 text-sm text-center">
            {successMsg}
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full text-sm bg-purple-600 dark:bg-purple-700 
            text-white py-2 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Get Started"}
        </button>

        <div className="text-center text-gray-500 dark:text-gray-400">OR</div>

        <button className="w-full text-sm border border-gray-300 dark:border-gray-600 
          py-2 rounded-lg flex items-center justify-center gap-2 
          bg-white dark:bg-gray-800">
          <Image
            src="/Google.png"
            alt="Google logo"
            width={16}
            height={16}
            priority
          />
          <span className="text-black dark:text-white">Sign in with Google</span>
        </button>

        <button className="w-full text-sm border border-gray-300 dark:border-gray-600 
          py-2 rounded-lg flex items-center justify-center gap-2 
          bg-white dark:bg-gray-800">
          <Image
            src="/Facebook.svg"
            alt="Facebook logo"
            width={16}
            height={16}
            priority
          />
          <span className="text-black dark:text-white">Sign in with Facebook</span>
        </button>

        <p className="text-center text-gray-800 dark:text-gray-200 text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-600 dark:text-blue-400">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
