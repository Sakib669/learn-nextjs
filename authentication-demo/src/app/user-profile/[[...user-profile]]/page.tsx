import { UserProfile } from "@clerk/nextjs";

type Props = {};

const page = ({}: Props) => {
  return (
    <div className="flex justify-center items-center py-8">
      <UserProfile path="/user-profile" />
    </div>
  );
};

export default page;
