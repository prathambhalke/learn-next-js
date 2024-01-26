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

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = commentData.findIndex(
    (item) => item.id === parseInt(params.id)
  );
  commentData[index].rating = text;
  return Response.json(commentData[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = commentData.findIndex(
    (item) => item.id === parseInt(params.id)
  );
  const DeleteComment = commentData[index];
  commentData.splice(index, 1);
  return Response.json(DeleteComment);
}
