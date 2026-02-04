"use client";
import { useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");

  return (
    <html>
      <header className="text-yellow-700 bg-gray-500 p-5">
        this is the header from login page
      </header>
      <body className={`font-bold text-purple-500`}>
        <div className="flex justify-around">
          <input
            className="border p-2"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <p className="font-bold text-gray-700">{input}</p>
        </div>
        <div className="flex justify-around text-amber-500 font-bold">
          <Link href={"/register"}>Registe</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/forgot-password"}>Forgot Password</Link>
        </div>
        {children}
      </body>
      <footer className="text-green-800 p-10 bg-orange-200">
        this is the footer from auth
      </footer>
    </html>
  );
}
