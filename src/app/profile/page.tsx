import Link from "next/link";

type Props = {};
const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const page = ({}: Props) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("error loading profile page");
  }
  return (
    <div>
      this is profile page
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default page;
