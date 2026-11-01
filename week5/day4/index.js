const express = require("express");
const app = express();
const PORT = 5000;

// Built-in middleware
app.use(express.json());

// Custom middleware: log method, URL and time
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`${req.method} ${req.url} - ${time}`);
  next();
});

// Temporary in-memory data
let users = [
  { id: 1, name: "Raja", role: "Intern" },
  { id: 2, name: "Aman", role: "Student" }
];

// GET all users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// GET one user
app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});

// CREATE user
app.post("/api/users", (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({
      error: "Name and role are required"
    });
  }

  const newUser = {
    id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    role
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
app.put("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const { name, role } = req.body;

  if (name !== undefined) user.name = name;
  if (role !== undefined) user.role = role;

  res.status(200).json(user);
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const deletedUser = users.splice(index, 1)[0];
  res.status(200).json({
    message: "User deleted successfully",
    user: deletedUser
  });
});




app.get("/test-error", (req, res, next) => {
  next(new Error("This is a test error"));
});



// 404 handler for unknown route

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error-handling middleware (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});