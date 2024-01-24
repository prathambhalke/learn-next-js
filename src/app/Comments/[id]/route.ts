import { commentData } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = commentData.find(
    (item: any) => item.id === parseInt(params.id, 10)
  );
  return Response.json(comment);
}
