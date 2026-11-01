const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// GET all users
router.get("/", getUsers);

// CREATE user
router.post("/", createUser);

// Dynamic parameter endpoint
router.get("/:id/:section", (req, res) => {
  const { id, section } = req.params;

  res.status(200).json({
    userId: id,
    section: section
  });
});

// GET user by ID
router.get("/:id", getUserById);

// UPDATE user
router.put("/:id", updateUser);

// DELETE user
router.delete("/:id", deleteUser);

module.exports = router;
