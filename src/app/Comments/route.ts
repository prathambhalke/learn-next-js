import { commentData } from "./data";
import { type NextRequest } from "next/server.js";

export async function GET(request: NextRequest) {
  const queryRequest = request.nextUrl.searchParams;
  const filteredDataQuery = queryRequest
    ? commentData.filter((item) =>
        item.Mobile.includes(queryRequest.toString())
      )
    : commentData;
  return Response.json(filteredDataQuery);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: commentData.length + 1,
    Mobile: comment.Mobile,
    rating: comment.rating,
  };

  commentData.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
