import Link from "next/link";

type Props = {};

const page = ({}: Props) => {
  return (
    <div>
      tjis is f1
      <div>
        <Link href={"/f1/f2"}>F2</Link>
        <Link href={"/f3"}>F3</Link>
      </div>
    </div>
  );
};

export default page;
