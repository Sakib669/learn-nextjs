"use client"

import Link from "next/link";
import { use } from "react";

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
};

const page =  ({ params, searchParams }: Props) => {
  const { articleId } = use(params);
  console.log(articleId, " murgi chor 303");
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1 className="text-3xl font-black">News article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div className="flex justify-around">
        <Link
          className="btn m-5 p-3 border-2 border-amber-300 rounded"
          href={`/articles/${articleId}?lang=en`}
        >
          Englist
        </Link>
        <Link
          className="btn m-5 p-3 border-2 border-amber-300 rounded"
          href={`/articles/${articleId}?lang=fr`}
        >
          French
        </Link>
        <Link
          className="btn m-5 p-3 border-2 border-amber-300 rounded"
          href={`/articles/${articleId}?lang=es`}
        >
          Spanish
        </Link>
      </div>
    </div>
  );
};

export default page;
