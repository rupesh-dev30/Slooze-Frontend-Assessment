"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/actions/user.action";

const SignUpPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    if (!name || !email || !password) {
      setErrorMsg("All fields are required.");
      setLoading(false);
      return;
    }

    const res = await registerUser({
      name,
      email,
      password,
    });

    if (!res.success) {
      setErrorMsg(res.message || "Registration failed");
      setLoading(false);
      return;
    }

    setSuccessMsg("Account created successfully!");
    setLoading(false);

    setTimeout(() => {
      router.push("/sign-in");
    }, 1500);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold text-center">Create Account</h1>
      <p className="text-center text-gray-500 mb-6">Sign Up For Free</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm text-gray-600 block mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-lg px-4 py-2 border border-gray-300 bg-gray-50 focus:outline-none"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-gray-600 block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg px-4 py-2 border border-gray-300 bg-gray-50 focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm text-gray-600 block mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-lg px-4 py-2 border border-gray-300 bg-gray-50 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4" />
          <p className="text-sm text-gray-500">
            I agree to all Terms, Privacy Policy and fees
          </p>
        </div>

        {errorMsg && (
          <p className="text-red-600 text-sm text-center">{errorMsg}</p>
        )}

        {successMsg && (
          <p className="text-green-600 text-sm text-center">{successMsg}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full text-sm bg-purple-600 text-white py-2 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <div className="text-center text-gray-500">OR</div>

        <button className="w-full text-sm border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2">
          <Image
            src="/Google.png"
            alt="Google logo"
            width={16}
            height={16}
            priority
          />
          <span>Sign up with Google</span>
        </button>

        <button className="w-full text-sm border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2">
          <Image
            src="/Facebook.svg"
            alt="Facebook logo"
            width={16}
            height={16}
            priority
          />
          <span>Sign up with Facebook</span>
        </button>

        <p className="text-center text-gray-800 text-sm mt-4">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
