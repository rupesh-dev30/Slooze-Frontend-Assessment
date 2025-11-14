import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export interface DecodedUser extends jwt.JwtPayload {
  id: string;
  role: string;
}

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value || null;
  const url = req.nextUrl.pathname;

  const authPages = ["/sign-in", "/sign-up"];

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

  const protectedRoutes = [
    "/dashboard",
    "/product",
    "/profile",
    "/security",
    "/home",
  ];

  if (!user && protectedRoutes.some((r) => url.startsWith(r))) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (user && authPages.includes(url)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (url.startsWith("/dashboard") && user?.role !== "manager") {
    return NextResponse.redirect(new URL("/no-access", req.url));
  }

  if (url.startsWith("/product")) {
    if (user?.role !== "manager" && user?.role !== "store_keeper") {
      return NextResponse.redirect(new URL("/no-access", req.url));
    }
  }

  if (url.startsWith("/profile")) {
    if (!user) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  if (url.startsWith("/security")) {
    if (!user) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/product/:path*",
    "/profile/:path*",
    "/security/:path*",
    "/home/:path*",
    "/sign-in",
    "/sign-up",
  ],
};
