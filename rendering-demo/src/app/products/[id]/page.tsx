// "use client";
import { use } from "react";

export const dynamicParams = true;


type Props = {
  params: Promise<{ id: string }>;
};

export const generateStaticParams = async () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const page = async ({ params }: Props) => {
  //   const { id } = use(params);
  const { id } = await params;
  console.log(id);
  return <div></div>;
};

export default page;
