# E-Commerce Management API

This project is an E-Commerce Management API built with Node.js, Express, and MongoDB.

**Note: This is a mock API created solely for practicing with endpoints in Express. It is not intended for production use.**

## Endpoints

### Categories

- **POST /api/categories**
  Add a new category.

- **GET /api/categories**
  Get a list of all categories.

- **GET /api/categories/:id**
  Get details of a specific category.

- **PUT /api/categories/:id**
  Update category information.

- **DELETE /api/categories/:id**
  Delete a category.

### Customers

- **POST /api/customers**
  Add a new customer.

- **GET /api/customers**
  Get a list of all customers.

- **GET /api/customers/:id**
  Get details of a specific customer.

- **PUT /api/customers/:id**
  Update customer information.

- **DELETE /api/customers/:id**
  Delete a customer.

### Products

- **POST /api/products**
  Add a new product.

- **GET /api/products**
  Get a list of all products.

- **GET /api/products/:id**
  Get details of a specific product.

- **PUT /api/products/:id**
  Update product information.

- **DELETE /api/products/:id**
  Delete a product.

### Orders

- **POST /api/orders**
  Create a new order.

- **GET /api/orders**
  Get a list of all orders.

- **GET /api/orders/:id**
  Get details of a specific order.

- **PUT /api/orders/:id**
  Update order information.

- **DELETE /api/orders/:id**
  Delete an order.

## Installation

1.  Clone the repository:

    ```sh
    git clone https://github.com/yourusername/e-commerce-management-api.git
    cd e-commerce-management-api
    ```

2.  Install dependencies:

    ```sh
    npm install
    ```

3.  Create a .env file in the root directory and add your MongoDB URI, port, and Node environment.

4.  Start the server:

    ```sh
    npm run dev
    ```
