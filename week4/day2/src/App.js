import { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <main className="content">
        <h1>React Theme Switcher</h1>

        <p>
          This application uses React Context API to switch between
          Light Mode and Dark Mode.
        </p>

        <div className="theme-card">
          <h2>Current Theme</h2>
          <p>{theme.toUpperCase()}</p>
        </div>
      </main>
    </div>
  );
}

export default App;