"use client";
import { useState } from "react";

export const NavSearch = () => {
  const [search, setSearch] = useState("");
  console.log("NavSearch rendered"); // ভিডিওতে এটি ব্যবহার করা হয়েছে

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="border p-1 "
      />
      <p>Nav search input {search}</p>
    </div>
  );
};
