type Props = {};

type User = {
  id: number;
  name: string;
  email: string;
  phone: number;
  username: string;
};

const page = async ({}: Props) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

//   console.log(users);
  return (
    <div>
      <ul className="space-y-5 p-5">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-md rounded-lg text-blue-700 "
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
