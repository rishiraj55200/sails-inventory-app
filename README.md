🛒 Sails Inventory App — Backend System
A backend system for a small business that helps digitize inventory, manage customer orders, and allow admins to monitor and update the order flow.

📌 Features
👨‍💼 Staff (Inventory Management)
Add / update / delete products

View product list with stock quantity

Mark low-stock products for restocking

🧑‍💻 Customers
View products

Place orders

Track order status

👑 Admin
View all orders

Update order status (Processing → Shipped → Delivered)

Manage staff and customers

🗃️ Database Design (ER Diagram)
markdown
Copy
Edit
Customer
---------
id (PK)
name
email
password

Product
---------
id (PK)
name
description
price
stock

Order
---------
id (PK)
customer_id (FK)
order_date
status

OrderItem
---------
id (PK)
order_id (FK)
product_id (FK)
quantity
price

Admin
---------
id (PK)
name
email
password

Staff
---------
id (PK)
name
email
password
🔗 API Endpoints
🛍️ Product APIs
Method	Endpoint	Description
GET	/products	List all products
GET	/products/:id	Get product by ID
POST	/products	Add new product (staff)
PUT	/products/:id	Update product
DELETE	/products/:id	Delete product

👤 Customer APIs
Method	Endpoint	Description
POST	/customers/register	Register new customer
POST	/customers/login	Customer login
GET	/customers/:id/orders	Get customer orders

📦 Order APIs
Method	Endpoint	Description
POST	/orders	Place new order (customer)
GET	/orders/:id	Get order by ID
PUT	/orders/:id	Update order status (admin)

🔐 Admin APIs
Method	Endpoint	Description
POST	/admin/login	Admin login
GET	/admin/orders	View all orders

🚀 Tech Stack
Language: Go (Golang)

Framework: Gin

Database: PostgreSQL

ORM: GORM

Authentication: JWT or session-based (as per implementation)

💻 Setup Instructions
bash
Copy
Edit
# Clone the repository
git clone https://github.com/rishiraj55200/sails-inventory-app.git
cd sails-inventory-app

# Configure your PostgreSQL database credentials in .env file

