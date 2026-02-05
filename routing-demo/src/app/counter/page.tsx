import Counter from "./counter";

type Props = {};

export const metadata = {
  title: "count",
};

const page = ({}: Props) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default page;
