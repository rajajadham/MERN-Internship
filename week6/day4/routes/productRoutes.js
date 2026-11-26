
const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");

const router = express.Router();

// POST - Add a new product
router.post("/", async (req, res) => {
  try {
    const { name, price, category } = req.body;

    if (!name || price === undefined || !category) {
      return res.status(400).json({
        error: "Name, price and category are required"
      });
    }

    const product = await Product.create({
      name,
      price,
      category
    });

    res.status(201).json({
      message: "Product added successfully",
      product
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET - Search, filter, sort and paginate products
router.get("/", async (req, res) => {
  try {
    const {
      name,
      category,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
      sort = "price",
      order = "asc"
    } = req.query;

    const currentPage = Number(page);
    const pageLimit = Number(limit);

    if (
      !Number.isInteger(currentPage) || currentPage < 1 ||
      !Number.isInteger(pageLimit) || pageLimit < 1 || pageLimit > 100
    ) {
      return res.status(400).json({
        error: "Page must be positive and limit must be between 1 and 100"
      });
    }

    if (!["name", "price", "category", "createdAt"].includes(sort)) {
      return res.status(400).json({ error: "Invalid sort field" });
    }

    if (!["asc", "desc"].includes(order)) {
      return res.status(400).json({ error: "Order must be asc or desc" });
    }

    const filters = {};

    if (name) {
      filters.name = { $regex: name, $options: "i" };
    }

    if (category) {
      filters.category = category;
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      filters.price = {};

      if (minPrice !== undefined) {
        filters.price.$gte = Number(minPrice);
      }

      if (maxPrice !== undefined) {
        filters.price.$lte = Number(maxPrice);
      }

      if (
        Object.values(filters.price).some(value => !Number.isFinite(value)) ||
        (filters.price.$gte !== undefined && filters.price.$gte < 0) ||
        (filters.price.$lte !== undefined && filters.price.$lte < 0) ||
        (filters.price.$gte !== undefined &&
          filters.price.$lte !== undefined &&
          filters.price.$gte > filters.price.$lte)
      ) {
        return res.status(400).json({ error: "Invalid price range" });
      }
    }

    const sortOrder = order === "asc" ? 1 : -1;

    const products = await Product.find(filters)
      .sort({ [sort]: sortOrder })
      .skip((currentPage - 1) * pageLimit)
      .limit(pageLimit);

    const total = await Product.countDocuments(filters);

    res.status(200).json({
      total,
      page: currentPage,
      limit: pageLimit,
      totalPages: Math.ceil(total / pageLimit),
      products
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT - Update product
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const product = await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({
      message: "Product updated successfully",
      product
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Delete product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
