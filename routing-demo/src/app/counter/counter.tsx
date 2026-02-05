"use client"
import { useState } from "react";

type Props = {};

const Counter = ({}: Props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>this is the value of count: {count}</h3>
      <button className="rounded-3xl border-amber-300 bg-green-500 p-3 hover:cursor-pointer" onClick={() => setCount(count + 1)}> increament</button>
    </div>
  );
};

export default Counter;
