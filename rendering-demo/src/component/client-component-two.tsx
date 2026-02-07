"use client";

import { useState } from "react";

type Props = {};

const ClientComponentTwo = ({}: Props) => {
  const [name, setName] = useState("Joker");
  return <div>client component two</div>;
};

export default ClientComponentTwo;
