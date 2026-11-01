require("dotenv").config();

const express = require("express");
const app = express();

const logger = require("./utils/logger");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;

// Built-in middleware
app.use(express.json());

// Custom logger middleware
app.use(logger);

// User routes
app.use("/api/users", userRoutes);

// Test error route
app.get("/test-error", (req, res, next) => {
  next(new Error("This is a test error"));
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    error: "Internal server error"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
