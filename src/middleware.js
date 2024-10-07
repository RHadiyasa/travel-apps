import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // Logic dari middleware
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token");

  // Kalo misalkan gapunya token
  if (!token && path === "/home") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Kalo misalkan punya token
  if (token && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next(); // untuk lanjut ke halaman yang diminta
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home/", "/login", "/register"],
};
