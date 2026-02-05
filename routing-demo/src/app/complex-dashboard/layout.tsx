type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
};

const layout = ({ children, users, revenue, notifications, login }: Props) => {
  const isLoggedIn = false;
  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Complex Dashboard</h1>

        <div className="mb-4">{children}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users}
          {revenue}
        </div>

        <div className="mt-4">
          { isLoggedIn && login}
          {notifications}</div>
      </div>
    </div>
  );
};

export default layout;
