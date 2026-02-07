import ImageSlider from "@/component/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

type Props = {};

const page = ({}: Props) => {
  const result = serverSideFunction();
  return (
    <div>
      <p>server route : {result}</p>
      <ImageSlider />
    </div>
  );
};

export default page;
