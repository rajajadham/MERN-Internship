
const express = require("express");
const mongoose = require("mongoose");
const Order = require("../models/Order");

const router = express.Router();

// POST - Create an order linked to a user
router.post("/", async (req, res) => {
  try {
    const { productName, amount, user } = req.body;

    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({
        error: "Invalid User ID"
      });
    }

    const order = await Order.create({
      productName,
      amount,
      user
    });

    res.status(201).json({
      message: "Order created successfully",
      order
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// GET - Fetch all orders with user details
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email");

    res.status(200).json({
      total: orders.length,
      orders
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;
