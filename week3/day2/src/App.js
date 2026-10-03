import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";

function App() {
  const profiles = [
    {
      name: "Arjun Kumar",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha Verma",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <div>
      <Header />

      <main style={{ padding: "30px" }}>
        <h2>Welcome to My React App!</h2>

        <p>This is my first modular React layout.</p>

        <hr />

        <h2>Greetings</h2>

        <Greeting
          name="Priya"
          topic="React Components"
        />

        <Greeting
          name="Rohan"
          topic="JSX & Props"
        />

        <hr />

        <h2 style={{ textAlign: "center" }}>Our Team</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              role={profile.role}
              image={profile.image}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;