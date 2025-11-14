"use server";

import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { DecodedUser } from "@/proxy";

export async function updatePassword(payload: {
  currentPassword: string;
  newPassword: string;
}) {
  try {
    await connectToDatabase();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return { success: false, message: "Unauthorized" };

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedUser;

    const user = await User.findById(decoded.id);
    if (!user) return { success: false, message: "User not found" };

    const isMatch = await bcrypt.compare(
      payload.currentPassword,
      user.password
    );
    if (!isMatch) {
      return { success: false, message: "Incorrect current password" };
    }

    const hashedNewPassword = await bcrypt.hash(payload.newPassword, 10);

    await User.findByIdAndUpdate(decoded.id, { password: hashedNewPassword });

    return { success: true, message: "Password updated successfully" };
  } catch {
    return { success: false, message: "Something went wrong" };
  }
}
