
require("dotenv").config();

const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");

const PORT = process.env.PORT || 5000;

// Built-in middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Product Management API"
  });
});

// Product routes
app.use("/api/products", productRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

