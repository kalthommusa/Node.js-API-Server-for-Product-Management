// Import Express
const express = require("express"); 
// Import the Product model
const Product = require("../models/product.model.js"); 

// Import the product controller functions
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller.js");

// Create an Express router instance
const router = express.Router();

// Route to get all products
router.get('/', getProducts);

// Route to get a single product by ID
router.get("/:id", getProduct);

// Route to create a new product
router.post("/", createProduct);

// Route to update a product by ID
router.put("/:id", updateProduct);

// Route to delete a product by ID
router.delete("/:id", deleteProduct);

// Export the router module
module.exports = router;