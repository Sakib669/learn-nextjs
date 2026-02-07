import { Navbar } from "@/component/navbars";

type Props = {};

const page = ({}: Props) => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Page heading</h1>
      </main>
    </div>
  );
};

export default page;
