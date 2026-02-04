"use client";

import { notFound } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ reviewId: string }>;
};

const page = ({ params }: Props) => {
  const resolvedId = use(params);
  const { reviewId } = resolvedId;

  return parseInt(reviewId) > 500 ? notFound() : <div>this is the resolvedId of reviews {reviewId}</div>;
};

export default page;
