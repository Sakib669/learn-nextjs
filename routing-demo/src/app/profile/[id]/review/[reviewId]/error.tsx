"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const error = ({ error, reset }: Props) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <p>Something went wron while loading the data of review page</p>
      error : {error.message}
      <button
        className="border-2 rounded-2xl border-amber-300 p-2"
        onClick={reload}
      >
        Try Again
      </button>
    </div>
  );
};

export default error;
