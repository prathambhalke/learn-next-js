import { type NextRequest } from "next/server.js";

export async function GET(request: NextRequest) {
  console.log(request);
  const requestHandler = new Headers(request.headers);
  return Response.json("the heasder router handler called'");
}
