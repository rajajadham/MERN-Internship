import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-subtitle">WELCOME TO MY BLOG</p>

            <h1>
              Thoughts, Stories &amp;
              <span> Ideas.</span>
            </h1>

            <p className="hero-description">
              A personal space where I share my journey, learning,
              experiences and ideas about web development.
            </p>

            <a href="#blogs" className="hero-button">
              Explore Blogs
            </a>
          </div>
        </section>

        <BlogList />

        <section id="about" className="about-section">
          <h2>About Me</h2>

          <p>
            Hi, I'm Raja Jadham, a BCA student and aspiring frontend
            developer. I enjoy building websites and learning modern
            technologies like React and JavaScript.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;