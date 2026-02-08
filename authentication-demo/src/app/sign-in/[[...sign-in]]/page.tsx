import { SignIn } from "@clerk/nextjs";

type Props = {};

const page = ({}: Props) => {
  return (
    <div className="flex justify-center items-center py-8">
      <SignIn />
    </div>
  );
};

export default page;
