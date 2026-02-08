import { getProducts } from "@/prisma-db";

type Props = {};
type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const page = async ({}: Props) => {
  const products: Product[] = await getProducts();
  return (
    <ul className="speace-y-4 p-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-5 bg-white shadow-md rounded-lg text-green-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default page;
