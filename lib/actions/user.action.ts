"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { LoginUserParams, RegisterUserParams } from "../shared.types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { DecodedUser } from "@/proxy";

export async function registerUser(params: RegisterUserParams) {
  try {
    connectToDatabase();

    const { name, email, password, role } = params;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        success: false,
        message: "Email already exisits",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserData: RegisterUserParams = {
      name,
      email,
      password: hashedPassword,
    };

    if (role) {
      newUserData.role = role;
    }

    const user = await User.create(newUserData);

    return {
      success: true,
      message: "User registered successfully",
      data: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  } catch (error) {
    console.error("Register Error:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function loginUser(params: LoginUserParams) {
  try {
    connectToDatabase();

    const { email, password } = params;

    const exisitingUser = await User.findOne({ email });
    if (!exisitingUser) {
      return {
        success: false,
        message: "Email not found",
      };
    }

    const isMatch = await bcrypt.compare(password, exisitingUser.password);

    if (!isMatch) {
      return {
        success: false,
        message: "Incorrect password",
      };
    }

    const token = jwt.sign(
      {
        id: exisitingUser._id,
        role: exisitingUser.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
      sameSite: "lax",
    });

    return {
      success: true,
      message: "Login successful",
      data: {
        _id: exisitingUser._id.toString(),
        name: exisitingUser.name,
        email: exisitingUser.email,
        role: exisitingUser.role,
      },
    };
  } catch (error) {
    console.error("Login Error:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function logoutUser() {
  try {
    const cookieStore = await cookies();
    cookieStore.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 0,
    });

    return {
      success: true,
      message: "Logged out successfully",
    };
  } catch (error) {
    console.error("Logout Error:", error);

    return {
      success: false,
      message: "Failed to logout",
    };
  }
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      role: string;
      name: string;
    };

    return {
      id: decoded.id,
      role: decoded.role,
      name: decoded.name ?? "User",
    };
  } catch {
    return null;
  }
}

export async function getUserProfile() {
  try {
    await connectToDatabase();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return { success: false, message: "No token" };

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedUser;
    const user = await User.findById(decoded.id);

    if (!user) return { success: false, message: "User not found" };

    return {
      success: true,
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  } catch {
    return { success: false, message: "Failed to fetch profile" };
  }
}

export async function updateUserProfile(payload: { name: string }) {
  try {
    await connectToDatabase();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return { success: false, message: "Unauthorized" };

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedUser;

    await User.findByIdAndUpdate(decoded.id, { name: payload.name });

    return { success: true, message: "Profile updated" };
  } catch {
    return { success: false, message: "Update failed" };
  }
}
