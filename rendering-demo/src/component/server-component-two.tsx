import fs from "fs";
type Props = {};

const ServerComponentTwo = ({}: Props) => {
  fs.readFileSync("src/component/server-component-one.tsx", "utf-8");
  return <div>sever component two</div>;
};

export default ServerComponentTwo;
