
const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// POST - Add a new student
router.post("/add", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      message: "Student Added Successfully",
      student
    });
  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
});

// GET - Fetch all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

module.exports = router;
