import { Card } from "@/components/card";
import Link from "next/link";

type Props = {};

const page = ({}: Props) => {
  return (
    <Card>
      <h2>Notifications Section</h2>
      <div className="px-5">
        <Link className=" text-cyan-600" href={"/complex-dashboard/archived"}>Archived</Link>
      </div>
    </Card>
  );
};

export default page;
