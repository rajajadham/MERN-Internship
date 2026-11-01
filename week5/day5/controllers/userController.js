let users = [
  { id: 1, name: "Raja", role: "Intern" },
  { id: 2, name: "Aman", role: "Student" }
];

// GET all users
const getUsers = (req, res) => {
  res.status(200).json(users);
};

// GET user by ID
const getUserById = (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

// CREATE user
const createUser = (req, res) => {
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
};

// UPDATE user
const updateUser = (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const { name, role } = req.body;

  if (name !== undefined) user.name = name;
  if (role !== undefined) user.role = role;

  res.status(200).json(user);
};

// DELETE user
const deleteUser = (req, res) => {
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
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
