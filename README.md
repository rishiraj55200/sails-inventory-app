# 🛒 Inventory & Order Management System – Backend

This project is built for a small business to digitize inventory, manage customer orders, and help admins/staff track and update the order flow.

---

## 🚀 Tech Stack

- **Backend Framework**: Node.js + Sails.js
- **Database**: MongoDB
- **ORM/ODM**: Waterline (default in Sails.js)
- **Authentication**: (Optional – add if implemented)

---

## 🗂️ Project Structure

/api
/controllers -> Business logic for APIs
/models -> MongoDB models
/services -> (optional helpers)
config/ -> Sails and DB config
routes.js -> All API routes

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/rishiraj55200/sails-inventory-app.git
cd sails-inventory-app
Install dependencies

bash
Copy
Edit
npm install
Configure MongoDB

Update config/datastores.js with your MongoDB URI.

js
Copy
Edit
default: {
  adapter: 'sails-mongo',
  url: 'mongodb://localhost:27017/inventory-db',
},
Run the server

bash
Copy
Edit
sails lift
📦 API Endpoints
📌 Product Routes (Staff/Admin)
Method	Route	Description
GET	/products	Get all products
GET	/products/:id	Get product by ID
POST	/products	Add a product
PUT	/products/:id	Update a product
DELETE	/products/:id	Delete a product

👥 Customer Routes
Method	Route	Description
POST	/customers/register	Register new customer
POST	/customers/login	Customer login
GET	/customers/:id/orders	View customer orders

📦 Order Routes
Method	Route	Description
POST	/orders	Place a new order
GET	/orders/:id	Get order details

👑 Admin Routes
Method	Route	Description
GET	/admin/orders	View all orders
PUT	/admin/orders/:id	Update order status

📄 ER Diagram
You can find the ER diagram in the file ER_Diagram.pdf attached in the repo/docs.

📌 Features Overview
Manage product inventory

Customer registration and ordering

Admin order tracking

Order status update flow

MongoDB integration

RESTful APIs using Sails.js



---

Let me know if you want to add:
- Postman collection link
- Deployed URL (if any)
- Sample data or `.env` instructions

I can update the README accordingly.
