"use client";

import { notFound, redirect } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ reviewId: string }>;
};

// const getRandomInt = (count: number) => {
//   return Math.floor(Math.random() * count);
// };

const page = ({ params }: Props) => {
  const resolvedId = use(params);
  const { reviewId } = resolvedId;
  // const random = getRandomInt(2);

  // if(random === 1) {
  //   throw new Error("error loading review page")
  // }

  return parseInt(reviewId) > 500 ? (
    redirect("/profile")
  ) : (
    <div>this is the resolvedId of reviews {reviewId}</div>
  );
};

export default page;
