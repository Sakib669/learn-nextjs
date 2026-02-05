import { use } from "react";
import { Metadata } from "next";
type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`user in ${id}`);
    });
  });
  return {
    title: `profile of ${title}`,
  };
};

const page = ({ params }: Props) => {
  const resolvedId = use(params);
  console.log(resolvedId);
  const { id } = resolvedId;
  console.log(id);

  return <div>this is dynamic route {id}</div>;
};

export default page;
