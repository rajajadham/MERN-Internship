
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage(`Thanks! Email entered: ${email}`);
  };

  return (
    <main className="min-h-screen bg-background p-6 sm:p-10">
      <header className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">
          Welcome to React Training
        </h1>
        <p className="mt-3 text-gray-600">
          Interactive components built using Tailwind CSS.
        </p>
      </header>

      <section className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        <article className="max-w-sm rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            React
          </span>

          <h2 className="mt-4 text-xl font-semibold">
            React Training
          </h2>

          <p className="mt-2 text-gray-600">
            Learn React with hands-on examples and real projects.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="mt-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:ring-2 focus:ring-primary"
              aria-label="Email address"
            />

            <button
              type="submit"
              className="mt-4 rounded-lg bg-primary px-4 py-2 text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Read More
            </button>
          </form>

          {message && (
            <p className="mt-3 break-words text-sm text-gray-700" role="status">
              {message}
            </p>
          )}
        </article>

        <article className="max-w-sm rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            Tailwind CSS
          </span>

          <h2 className="mt-4 text-xl font-semibold">
            Custom Color Palette
          </h2>

          <p className="mt-2 text-gray-600">
            A consistent design system using custom Tailwind colors.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <div className="text-center">
              <div className="h-10 w-10 rounded-lg bg-primary" />
              <p className="mt-1 text-xs">Primary</p>
            </div>
            <div className="text-center">
              <div className="h-10 w-10 rounded-lg bg-secondary" />
              <p className="mt-1 text-xs">Secondary</p>
            </div>
            <div className="text-center">
              <div className="h-10 w-10 rounded-lg bg-accent" />
              <p className="mt-1 text-xs">Accent</p>
            </div>
            <div className="text-center">
              <div className="h-10 w-10 rounded-lg border bg-background" />
              <p className="mt-1 text-xs">Background</p>
            </div>
          </div>

          <button
            type="button"
            className="mt-5 rounded-lg bg-secondary px-4 py-2 text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Explore
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;
