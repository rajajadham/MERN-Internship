export default function Users() {
  const users = [
    { id: 1, name: "Raja Jadham", email: "raja@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Aarav Sharma", email: "aarav@example.com", role: "Editor", status: "Active" },
    { id: 3, name: "Priya Verma", email: "priya@example.com", role: "User", status: "Pending" },
    { id: 4, name: "Rahul Patel", email: "rahul@example.com", role: "User", status: "Active" },
  ];

  return (
    <section>
      <h2 className="mb-2 text-2xl font-bold">Users Management</h2>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        Manage and view registered users.
      </p>

      <div className="overflow-x-auto rounded-xl bg-white shadow-sm dark:bg-gray-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-4 font-medium">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
