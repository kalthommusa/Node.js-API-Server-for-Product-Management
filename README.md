# Node.js API Server for Product Management

## Project Description

This project is a simple and basic CRUD (Create, Read, Update, Delete) API server built using Node.js and Express.js, with MongoDB as the database. The API server allows users to manage a collection of products, including creating new products, retrieving product information, updating existing products, and deleting products.


## Technologies Used

1. **Node.js**: A JavaScript runtime environment that allows developers to run JavaScript on the server-side.
2. **Express.js**: A popular web application framework for Node.js, which provides a robust set of features for web and mobile applications.
3. **MongoDB**: A NoSQL database used to store and manage the product data.
4. **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, which provides a straightforward, schema-based solution to model your application data.


## Project Structure

```
simple-crud-app/
├── controllers/
│   └── product.controller.js
├── models/
│   └── product.model.js
├── routes/
│   └── product.route.js
├── index.js
└── package.json
```

1. `index.js`: The main entry point of the app that sets up the Express server, connects to the MongoDB database, and starts the server.

2. `product.model.js`: Defines the schema for the Product model using Mongoose, including the structure of the product data and the necessary validation rules.

3. `product.route.js`: Defines the routes for the product API endpoints, linking each route to the corresponding controller function.

4. `product.controller.js`: Contains the controller functions that handle the CRUD operations for the product collection.


## API Endpoints

1. `GET /api/products`: Retrieves all products.
2. `GET /api/products/:id`: Retrieves a single product by its ID.
3. `POST /api/products`: Creates a new product.
4. `PUT /api/products/:id`: Updates an existing product by its ID.
5. `DELETE /api/products/:id`: Deletes a product by its ID.


## Conclusion

This Node.js API project provides a basic foundation for managing product data using a RESTful API and a MongoDB database. It demonstrates the use of Express.js, Mongoose, and asynchronous programming techniques to build a simple yet functional backend application.