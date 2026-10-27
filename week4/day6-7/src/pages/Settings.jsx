import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { dark, toggleTheme } = useTheme();

  return (
    <section>
      <h2 className="mb-2 text-2xl font-bold">Application Settings</h2>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        Customize your dashboard appearance.
      </p>

      <div className="max-w-2xl rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">Appearance</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Current theme: {dark ? "Dark" : "Light"}
            </p>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Switch to {dark ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </section>
  );
}
