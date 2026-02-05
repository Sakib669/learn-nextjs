"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        {/* ভিডিওতে refresh এর জন্য window.location.reload() দেখানো হয়েছে [00:02:38] */}
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Refresh
        </button>
      </body>
    </html>
  );
}