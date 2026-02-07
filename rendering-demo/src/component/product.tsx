type Props = {};

const Product = async ({}: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <u>Product</u>
    </div>
  );
};

export default Product;
