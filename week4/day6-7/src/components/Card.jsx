export default function Card({ title, value, change }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
        {value}
      </h2>

      <p className="mt-2 text-sm font-medium text-green-600">
        {change}
      </p>
    </article>
  );
}
