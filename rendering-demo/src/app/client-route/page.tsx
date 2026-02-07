"use client";
import ImageSlider from "@/component/ImageSlider";
import { useTheme } from "@/component/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

type Props = {};

const Page = ({}: Props) => {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <div>
      <p>country </p>
      {/* <ImageSlider /> */}
      <h1 style={{ color: theme.colors.seondaray }}>Client route page</h1>
      <p>
        <del>{result}</del>
      </p>
    </div>
  );
};

export default Page;
