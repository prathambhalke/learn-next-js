import { commentData } from "./data";

export async function GET() {
  return Response.json(commentData);
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
