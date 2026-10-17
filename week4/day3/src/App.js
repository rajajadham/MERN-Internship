
import { useState } from "react";
import "./App.css";

const cards = [
  {
    title: "React Development",
    description: "Build interactive user interfaces using reusable React components.",
  },
  {
    title: "Tailwind CSS",
    description: "Create modern and responsive designs using utility classes.",
  },
  {
    title: "Web Development",
    description: "Learn the core technologies used to build websites.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-gray-900 px-6 py-4 text-white shadow-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#home" className="text-2xl font-bold">
            MySite
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
            <a href="#cards" className="hover:text-blue-400">
              Services
            </a>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </div>

          <button
            type="button"
            className="rounded-md border border-gray-600 px-3 py-2 text-xl hover:bg-gray-700 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 flex flex-col gap-3 md:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#cards" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </div>
        )}
      </nav>

      <main>
        <section
          id="home"
          className="bg-blue-600 px-6 py-20 text-center text-white"
        >
          <h1 className="text-4xl font-bold sm:text-5xl">
            Welcome to MySite
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Explore modern web development with React and Tailwind CSS.
          </p>
          <a
            href="#cards"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            Explore Cards
          </a>
        </section>

        <section id="cards" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Our Learning Topics
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-blue-700">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {card.description}
                </p>
                <button
                  type="button"
                  className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Learn More
                </button>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="bg-white px-6 py-12 text-center"
        >
          <h2 className="text-2xl font-bold">About MySite</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            This project demonstrates reusable React components,
            Tailwind utility classes, and responsive layouts.
          </p>
        </section>
      </main>

      <footer className="bg-gray-900 px-6 py-5 text-center text-white">
        <p>© 2026 MySite. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
