import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const pageTitles = {
  "/": "Dashboard",
  "/users": "Users",
  "/reports": "Reports",
  "/settings": "Settings",
};

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-gray-900 sm:px-6">
      <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}
