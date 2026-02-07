"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-component-two";

type Props = {};

const ClientComponentOne = ({}: Props) => {
  const [name, setName] = useState("Joker");
  return <div>client component one
    <ClientComponentTwo/>
  </div>;
};

export default ClientComponentOne;
