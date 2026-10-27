import { NavLink } from "react-router-dom";

const links = [
  { title: "Dashboard", path: "/" },
  { title: "Users", path: "/users" },
  { title: "Reports", path: "/reports" },
  { title: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-full shrink-0 bg-gray-900 p-4 text-white md:min-h-screen md:w-64 md:p-6">
      <h2 className="mb-4 text-xl font-bold md:mb-8 md:text-2xl">
        Admin Panel
      </h2>
      <nav className="flex flex-wrap gap-2 md:flex-col md:gap-3">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
