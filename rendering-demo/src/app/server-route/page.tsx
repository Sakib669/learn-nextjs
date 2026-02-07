import { serverSideFunction } from "@/utils/server-utils";

type Props = {};

const page = ({}: Props) => {
  const result = serverSideFunction();
  return (
    <div>
      <p>server route : {result}</p>
    </div>
  );
};

export default page;
