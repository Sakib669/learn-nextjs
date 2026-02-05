"use client";
import { useState } from "react";

// এই ছোট কম্পোনেন্টটি এরর থ্রো করার জন্য দায়ী
const ErrorSimulator = ({ message }: { message: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error(message);
  }

  return (
    <button
      onClick={() => setError(true)}
      className="p-2 bg-red-500 text-white rounded my-4"
    >
      Simulate Error in Root Layout
    </button>
  );
};

export const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ErrorSimulator message="Simulated error in root layout" />
      {children}
    </>
  );
};