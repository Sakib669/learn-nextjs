import ClientComponentOne from "@/component/client-component-one";
import ServerComponentOne from "@/component/server-component-one";

type Props = {};

const page = ({}: Props) => {
  return (
    <div>
      interleaving page
      {/* <ServerComponentOne/> */}
      <ClientComponentOne />
    </div>
  );
};

export default page;
