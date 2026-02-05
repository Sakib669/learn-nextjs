import Link from "next/link";

type Props = {};

const page = ({}: Props) => {
  return (
    <div>
      this is f2
      <div>
        <Link href={"/f5"}>f5</Link>
      </div>
    </div>
  );
};

export default page;
