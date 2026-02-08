import { clerkClient } from "@clerk/nextjs/server";
import { setRole, removeRole } from "./actions";

export default async function AdminPage() {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-4 text-gray-600">
        This page is for administrators only.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full  border border-gray-200">
          <thead>
            <tr className="">
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Current Role</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gray-200">
                <td className="px-4 py-2">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-4 py-2">
                  {user.emailAddresses[0].emailAddress}
                </td>
                <td className="px-4 py-2">
                  <span className="font-mono bg-blue-500 px-2 py-1 rounded">
                    {(user.publicMetadata.role as string) || "user"}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <form action={setRole}>
                    <input type="hidden" name="id" value={user.id} />
                    <input type="hidden" name="role" value="admin" />
                    <button
                      type="submit"
                      className="bg-green-500  px-3 py-1 hover:cursor-pointer rounded text-sm"
                    >
                      Make Admin
                    </button>
                  </form>

                  <form action={setRole}>
                    <input type="hidden" name="id" value={user.id} />
                    <input type="hidden" name="role" value="moderator" />
                    <button
                      type="submit"
                      className="bg-orange-500  px-3 py-1 hover:cursor-pointer rounded text-sm"
                    >
                      Make Moderator
                    </button>
                  </form>

                  <form action={removeRole}>
                    <input type="hidden" name="id" value={user.id} />
                    <button
                      type="submit"
                      className="bg-red-500  px-3 py-1 hover:cursor-pointer rounded text-sm"
                    >
                      Remove Role
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
