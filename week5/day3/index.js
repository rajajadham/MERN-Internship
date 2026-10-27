const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Express API is working...");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

// Contact route
app.post("/contact", (req, res) => {
  res.json({
    message: "Contact form submitted!",
    receivedData: req.body
  });
});

// User JSON data
app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Ananya",
    role: "Intern",
    skills: ["Node.js", "Express.js", "Git"]
  });
});

// Sample users
let users = [
  { id: 1, name: "Ananya", role: "Intern" },
  { id: 2, name: "Raja", role: "Developer" },
  { id: 3, name: "Priya", role: "Designer" }
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// Search using query string, e.g. /search?key=Raja
app.get("/search", (req, res) => {
  const key = req.query.key;

  if (!key) {
    return res.status(400).json({
      message: "Please provide a search key, e.g. /search?key=Raja"
    });
  }

  const results = users.filter((user) =>
    user.name.toLowerCase().includes(key.toLowerCase())
  );

  res.json(results);
});

// POST: create a user
app.post("/users", (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({
      message: "Name and role are required"
    });
  }

  const newUser = {
    id: users.length
      ? Math.max(...users.map((u) => u.id)) + 1
      : 1,
    name,
    role
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT: update a user
app.put("/users/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, role } = req.body;
  if (name !== undefined) user.name = name;
  if (role !== undefined) user.role = role;

  res.json(user);
});

// DELETE: remove a user
app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1)[0];
  res.json({
    message: "User deleted successfully",
    user: deletedUser
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
