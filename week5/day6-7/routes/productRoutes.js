const express = require("express");

const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts
} = require("../controllers/productController");

const router = express.Router();

// Search route must come before /:id
router.get("/search", searchProducts);

// GET all products
router.get("/", getAllProducts);

// GET product by ID
router.get("/:id", getProductById);

// ADD product
router.post("/", addProduct);

// UPDATE product
router.put("/:id", updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

module.exports = router;
