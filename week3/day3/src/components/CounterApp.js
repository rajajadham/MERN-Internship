import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Counter App</h2>

      <h1>Counter: {count}</h1>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "5px", padding: "8px 20px" }}
      >
        -
      </button>

      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "5px", padding: "8px 20px" }}
      >
        +
      </button>

      {/* Conditional Rendering */}
      <p>
        {count > 0
          ? "Counter is positive"
          : count < 0
          ? "Counter is negative"
          : "Counter is zero"}
      </p>
    </div>
  );
}

export default CounterApp;