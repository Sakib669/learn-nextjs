"use client";
import { useParams } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const page = ({ params }: Props) => {
  const resolvedId = use(params);
  console.log(resolvedId);
  const { id } = resolvedId;
  //   const params = useParams();
  //   const { id } = params;
  console.log(id);

  return <div>this is dynamic route {id}</div>;
};

export default page;
