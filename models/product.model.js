// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Define the schema for the Product model
const ProductSchema = mongoose.Schema(
  {
    // Name of the product 
    name: {
      type: String,
      required: [true, "Please enter product name"]
    },

    // Quantity of the product 
    quantity: {
      type: Number,
      required: true,
      default: 0
    },

    // Price of the product 
    price: {
      type: Number,
      required: true,
      default: 0
    },

    // Image URL of the product (optional)
    image: {
      type: String,
      required: false
    },
  },
  {
    // Add timestamps (createdAt and updatedAt) to the document
    timestamps: true
  }
);

// Create the Product model using the defined schema
const Product = mongoose.model("Product", ProductSchema);

// Export the Product model for use in other files
module.exports = Product;