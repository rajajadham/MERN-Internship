
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required"],
    trim: true
  },

  age: {
    type: Number,
    required: [true, "Student age is required"],
    min: [5, "Age must be at least 5"],
    max: [80, "Age cannot be greater than 80"]
  },

  department: {
    type: String,
    default: "General",
    trim: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
