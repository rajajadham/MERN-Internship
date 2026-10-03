import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      {!isLoggedIn ? (
        <>
          <h2>Login Form</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                boxSizing: "border-box",
              }}
            />

            <button type="submit">Login</button>
          </form>

          <p>Please login to continue.</p>
        </>
      ) : (
        <>
          <h2>Welcome, {username}! 🎉</h2>

          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default LoginForm;