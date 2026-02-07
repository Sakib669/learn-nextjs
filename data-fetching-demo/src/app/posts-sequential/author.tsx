type Author = {
  id: number;
  name: string;
};

export const Author = async ({ userId }: { userId: number }) => {
  // ১ সেকেন্ডের আর্টিফিশিয়াল ডিলে (ভিডিওতে টেস্ট করার জন্য দেখানো হয়েছে) [00:04:57]
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author: Author = await response.json();

  return <p className="text-sm text-gray-500">Author: {author.name}</p>;
};