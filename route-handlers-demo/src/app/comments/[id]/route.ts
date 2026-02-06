import { comments } from "../data";
type Props = {
  params: Promise<{ id: string }>;
};

export const GET = async (req: Request, { params }: Props) => {
  // const comment = comments.find( )
  const { id } = await params;
  const { searchParams } = new URL(req.url);
  const queryId = searchParams.get("queryId");
  console.log(id);
  console.log(queryId);
  const comment = comments.find((c) => c.id === parseInt(id));
  if (!comment) {
    return Response.json("no comment exists  by this id");
  }
  return Response.json(comment);
};

export const PATCH = async (req: Request, { params }: Props) => {
  const { id } = await params;
  const { text } = await req.json();
  const commentIndex = comments.findIndex((c) => c.id === parseInt(id));

  if (commentIndex !== -1) {
    comments[commentIndex].text = text;

    return Response.json(comments);
  }
  return Response.json("no comment  found by this id", { status: 404 });
};

export const DELETE = async (req: Request, { params }: Props) => {
  const { id } = await params;
  const commentIndex = comments.findIndex((c) => c.id === parseInt(id));

  if (commentIndex !== -1) {
    const deletedComment = comments[commentIndex];

    comments.splice(commentIndex, 1);

    return Response.json(comments);
  }

  return Response.json("no comment found by this id", { status: 404 });
};
