import { Suspense } from "react";
import { Author } from "./author";

type Props = {};
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const page = async ({}: Props) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPosts: Post[] = await response.json();

  // ভিডিওর মতো ডাটা ফিল্টার করা (প্রতি ১০ম পোস্ট নেওয়া) [00:02:10]
  const posts = allPosts.filter((post) => post.id % 10 === 0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sequential Data Fetching</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6 border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.body}</p>

          {/* Suspense ব্যবহার করা হয়েছে যাতে অথর লোড হতে হতে UI ব্লক না হয় [00:04:33] */}
          <Suspense
            fallback={<p className="text-gray-400">Loading author...</p>}
          >
            <Author userId={post.userId} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default page;
