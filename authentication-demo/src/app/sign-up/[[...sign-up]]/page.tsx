import { SignUp } from "@clerk/nextjs";

type Props = {};

const page = ({}: Props) => {
  return (
    <div className="flex justify-center items-center py-8">
      <SignUp />
    </div>
  );
};

export default page;
