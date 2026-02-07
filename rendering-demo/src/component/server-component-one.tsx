import fs from "fs";
import ServerComponentTwo from "./server-component-two";
type Props = {};

const ServerComponentOne = ({}: Props) => {
  fs.readFileSync("src/component/server-component-one.tsx", "utf-8");
  return (
    <div>
      sever component one
      <ServerComponentTwo />
    </div>
  );
};

export default ServerComponentOne;
