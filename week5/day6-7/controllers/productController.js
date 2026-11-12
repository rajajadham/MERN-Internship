
const products = require("../data/products");

// GET ALL PRODUCTS
exports.getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
};

// GET PRODUCT BY ID
exports.getProductById = (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

// ADD PRODUCT
exports.addProduct = (req, res) => {
  const { name, price } = req.body;

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ message: "Valid product name is required" });
  }

  if (price === undefined || price === null || price === "") {
    return res.status(400).json({ message: "Product price is required" });
  }

  const numericPrice = Number(price);

  if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
    return res.status(400).json({ message: "Price must be a positive number" });
  }

  const newProduct = {
    id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name: name.trim(),
    price: numericPrice
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    data: newProduct
  });
};

// UPDATE PRODUCT
exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price } = req.body;

  if (name !== undefined) {
    if (typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ message: "Product name cannot be empty" });
    }
    product.name = name.trim();
  }

  if (price !== undefined) {
    const numericPrice = Number(price);

    if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
      return res.status(400).json({ message: "Price must be a positive number" });
    }
    product.price = numericPrice;
  }

  res.status(200).json({
    message: "Product updated successfully",
    data: product
  });
};

// DELETE PRODUCT
exports.deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  res.status(200).json({
    message: "Product deleted successfully",
    data: deletedProduct
  });
};

// SEARCH PRODUCTS
exports.searchProducts = (req, res) => {
  const name = req.query.name;

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ message: "Please provide a product name to search" });
  }

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(name.trim().toLowerCase())
  );

  res.status(200).json({
    success: true,
    count: filteredProducts.length,
    data: filteredProducts
  });
};
