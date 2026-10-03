import UserList from "./UserList";
import Posts from "./Posts";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        React API Data Fetching - Day 4
      </h1>

      <UserList />

      <hr />

      <Posts />
    </div>
  );
}

export default App;