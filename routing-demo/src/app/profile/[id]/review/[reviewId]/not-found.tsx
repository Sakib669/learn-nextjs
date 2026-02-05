"use client";
import { usePathname } from "next/navigation";

type Props = {};

const not_found = ({}: Props) => {
  const pathname = usePathname();
  const profileId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      review {reviewId} not found for {profileId}
    </div>
  );
};

export default not_found;
