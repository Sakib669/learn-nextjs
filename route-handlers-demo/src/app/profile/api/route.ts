import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // const requestHeaders = new Headers(req.headers);
  // console.log(requestHeaders.get("Authorization"))

  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  const theme = req.cookies.get("theme");
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");
  console.log(cookieStore.get("resultsPerPage"));

  return new Response("<h1>response from profile api</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
