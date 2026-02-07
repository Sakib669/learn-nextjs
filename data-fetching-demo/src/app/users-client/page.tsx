"use client";
import { useEffect, useState } from "react";

type Props = {};
type User = {
  id: number;
  name: string;
  email: string;
  phone: number;
  username: string;
};

const page = ({}: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occured");
        }
      }
    };
    fetchUsers();
  }, []);

//   console.log(users);

  if (loading) return <div>Loading....</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-md rounded-lg text-gray-700 my-5 p-5"
          >
            <div className="font-bold">{user.name}</div>
            <div className="text-sm">
              <div>Username:{user.username}</div>
              <div>Email:{user.email}</div>
              <div>Phone:{user.phone}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
