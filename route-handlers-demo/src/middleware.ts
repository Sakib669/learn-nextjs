import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  //   return NextResponse.redirect(new URL("/", req.url));

  //   if (req.nextUrl.pathname === "/profile") {
  //     return NextResponse.rewrite(new URL("/hello", req.nextUrl));
  //   }
  //   if (req.nextUrl.pathname === "/profile") {
  //     return NextResponse.redirect(new URL("/hello", req.nextUrl));
  //   }

  const response = NextResponse.next();
  const themePreference = req.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "yellow");
  }

  response.headers.set("custom-headers", "ajke-ami-gorib-asi");

  return response;
};

// export const config = {
//     matcher: "/profile"
// }
