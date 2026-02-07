import { cookies } from "next/headers";

type Props = {};

const page = async ({}: Props) => {
  //   console.log("About server component");
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  return (
    <div>
      <h1>About Page {new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default page;
