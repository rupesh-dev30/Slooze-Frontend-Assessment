import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface DecodedUser extends jwt.JwtPayload {
  id: string;
  role: string;
}

export default function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value || null;
  const url = req.nextUrl.pathname;

  const authPages = ["/sign-in", "/sign-up"];

  if (!token && url.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  let user: DecodedUser | null = null;
  if (token) {
    try {
      user = jwt.verify(token, process.env.JWT_SECRET!) as DecodedUser;
    } catch {
      const res = NextResponse.redirect(new URL("/sign-in", req.url));
      res.cookies.set("token", "", { maxAge: 0 });
      return res;
    }
  }

  if (user && authPages.includes(url)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (url.startsWith("/dashboard")) {
    if (user?.role !== "manager") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in", "/sign-up"],
};
