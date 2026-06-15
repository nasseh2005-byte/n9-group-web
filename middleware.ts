import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const adminUser = process.env.ADMIN_USER;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUser || !adminPassword) {
    return new NextResponse("Admin credentials are not configured.", {
      status: 503
    });
  }

  const authorization = request.headers.get("authorization");

  if (authorization) {
    const encoded = authorization.split(" ")[1] ?? "";
    const [user, password] = atob(encoded).split(":");

    if (user === adminUser && password === adminPassword) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="N9 Admin", charset="UTF-8"'
    }
  });
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/developer/:path*"]
};
