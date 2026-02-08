"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

type Props = {};

const Counter = ({}: Props) => {
  const [count, setCount] = useState(0);

//   const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
    </div>
  );
};

export default Counter;
