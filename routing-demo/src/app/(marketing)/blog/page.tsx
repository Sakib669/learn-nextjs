import Link from "next/link";

type Props = {};

export const metadata = {
  title: "blogs",
};

const page = async ({}: Props) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("international delay");
    }, 2000);
  });
  return (
    <div>
      this is blog page
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default page;
