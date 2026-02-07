import Product from "@/component/product";
import Reviews from "@/component/reviews";
import Link from "next/link";
import { Suspense } from "react";

type Props = {};

const page = ({}: Props) => {
  return (
    <div>
      <h1>Featured Products</h1>
      <p>
        <Link href={"/products/1"}>Product 1</Link>
      </p>
      <p>
        <Link href={"/products/2"}>Product 2</Link>
      </p>
      <p>
        <Link href={"/products/3"}>Product 3</Link>
      </p>
      <div>
        <Suspense fallback={<p>Loading product details...</p>}>
          <Product />
        </Suspense>
        <Suspense fallback={<p>Loading reviews...</p>}>
          <Reviews />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
