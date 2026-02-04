import Link from "next/link";

type Props = {};

export const metadata = {
  title: "blogs",
};

const page = ({}: Props) => {
  return <div>this is blog page
    <Link href={"/"}>Home</Link>
  </div>;
};

export default page;
