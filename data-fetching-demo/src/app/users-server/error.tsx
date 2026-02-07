"use client";

type Props = {};

const error = ({}: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-emerald-600">Error fetching users data</div>
    </div>
  );
};

export default error;
