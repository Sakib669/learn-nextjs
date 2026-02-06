import { NextRequest } from "next/server";
import { comments } from "./data";

// export async function GET() {
// }

export const GET = (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get("query");

  console.log(query);

  return Response.json(comments);
};

export async function POST(req: Request) {
  const comment = await req.json();
  console.log(req.json());
  console.log(comment);
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
