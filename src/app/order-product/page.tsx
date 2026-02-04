"use client";

import { useRouter } from "next/navigation";

type Props = {};

const page = ({}: Props) => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.replace("/murgi-chor")
  };
  return (
    <div className="">
      <h1>Order product</h1>
      <button className="border p-2 rounded" onClick={handleClick}>
        Place here
      </button>
    </div>
  );
};

export default page;
