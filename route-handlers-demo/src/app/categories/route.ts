import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export const GET = () => {
  // In-memory database (replace with real DB in production)
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Books" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Home & Garden" },
  ];
  return Response.json(categories);
};
