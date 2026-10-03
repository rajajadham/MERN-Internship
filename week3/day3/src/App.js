import CounterApp from "./components/CounterApp";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        React State & Events - Day 3
      </h1>

      <CounterApp />

      <UserForm />
    </div>
  );
}

export default App;