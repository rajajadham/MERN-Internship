
const express = require("express");
const User = require("../models/User");

const router = express.Router();

// POST - Create a new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

module.exports = router;
