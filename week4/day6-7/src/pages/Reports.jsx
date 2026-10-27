const reports = [
  { title: "User Growth", description: "Registered user activity", value: "+18%", color: "text-green-600" },
  { title: "Monthly Revenue", description: "Revenue generated this month", value: "$8,900", color: "text-blue-600" },
  { title: "Pending Issues", description: "Reports requiring attention", value: "14", color: "text-orange-600" },
];

export default function Reports() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-bold">Reports Overview</h2>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        View your reports and analytics summaries.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {reports.map((report) => (
          <article key={report.title} className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
            <h3 className="font-semibold">{report.title}</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{report.description}</p>
            <p className={`mt-5 text-3xl font-bold ${report.color}`}>{report.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
