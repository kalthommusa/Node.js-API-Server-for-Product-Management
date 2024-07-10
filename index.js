// Import Express framework
const express = require("express");

// Import Mongoose for MongoDB interaction
const mongoose = require("mongoose");

// Import the Product model
const Product = require("./models/product.model.js");

// Import product routes
const productRoute = require("./routes/product.route.js");

// Create an Express application
const app = express();

// Parse incoming JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the product route for all requests to /api/products
app.use("/api/products", productRoute);

// Respond with a simple message at the root URL
app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

// Connect to the MongoDB database
mongoose.connect("mongodb+srv://kalthommusa12345:G5CERQHCppfEbkh2@cluster0.tktdwg5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to mongodb!");
    // Start the server on port 3000
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connected failed!");
  });
