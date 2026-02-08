import { auth, currentUser } from "@clerk/nextjs/server";

type Props = {};

const page = async ({}: Props) => {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log(authObj);
  console.log(userObj);
  return <div>dashboard</div>;
};

export default page;
