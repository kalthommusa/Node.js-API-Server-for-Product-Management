const Product = require("../models/product.model");

// Controller function to get all products
const getProducts = async (req, res) => {
  try {
    // Find all products
    const products = await Product.find({});
    // Send the products as a JSON response with a 200 status code
    res.status(200).json(products);
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a single product by ID
const getProduct = async (req, res) => {
  try {
    // Get the product ID from the request parameters
    const { id } = req.params;
    // Find the product by its ID
    const product = await Product.findById(id);
    // Send the product as a JSON response with a 200 status code
    res.status(200).json(product);
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new product
const createProduct = async (req, res) => {
  try {
    // Create a new product using the data from the request body
    const product = await Product.create(req.body);
    // Send the created product as a JSON response with a 200 status code
    res.status(200).json(product);
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update an existing product
const updateProduct = async (req, res) => {
  try {
    // Get the product ID from the request parameters
    const { id } = req.params;
    // Find the product by ID and update it with the data from the request body
    const product = await Product.findByIdAndUpdate(id, req.body);

    // If the product is not found, send a 404 status code with a message
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    // Find the updated product and send it as a JSON response with a 200 status code
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a product
const deleteProduct = async (req, res) => {
  try {
    // Get the product ID from the request parameters
    const { id } = req.params;
    // Find the product by ID and delete it
    const product = await Product.findByIdAndDelete(id);

    // If the product is not found, send a 404 status code with a message
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    // Send a success message as a JSON response with a 200 status code
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ message: error.message });
  }
};

// Export all the controller functions for use in other files
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};