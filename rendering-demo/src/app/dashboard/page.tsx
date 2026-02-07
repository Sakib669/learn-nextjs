"use client"
import { useState } from "react";

type Props = {};

const page = ({}: Props) => {
    const [name, setName] = useState("")
  return <div>
    <h1>Dashboard</h1>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <p>Heloo {name}!</p>
  </div>;
};

export default page;
