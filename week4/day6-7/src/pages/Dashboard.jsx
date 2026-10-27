
import Card from "../components/Card";

const stats = [
  { title: "Total Users", value: "1,250", change: "+12% this month" },
  { title: "Orders Today", value: "78", change: "+8% today" },
  { title: "Revenue", value: "$8,900", change: "+15% this month" },
  { title: "Pending Reports", value: "14", change: "Needs attention" },
];

const bars = [40, 65, 50, 85, 60, 95, 70];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Analytics Overview</h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Here is a summary of your dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} {...stat} />
        ))}
      </div>

      <section className="mt-8 rounded-xl bg-white p-5 shadow-sm dark:bg-gray-800 sm:p-6">
        <h2 className="text-lg font-bold">Weekly Activity</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Sample chart data
        </p>

        <div className="mt-6 flex h-48 items-end justify-around gap-3 border-b border-gray-200 px-2 dark:border-gray-700">
          {bars.map((height, index) => (
            <div
              key={days[index]}
              className="w-full max-w-12 rounded-t-md bg-blue-500 transition hover:bg-blue-700"
              style={{ height: `${height}%` }}
              title={`${days[index]}: ${height}`}
            />
          ))}
        </div>

        <div className="mt-3 flex justify-around text-xs text-gray-500 dark:text-gray-400">
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
