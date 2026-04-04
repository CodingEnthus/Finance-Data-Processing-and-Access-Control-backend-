# 💰 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system for managing financial records with role-based access control (RBAC) and dashboard analytics.

It allows different users to interact with financial data based on their roles while providing summary insights for a dashboard.

---

## 🌐 Live API

Base URL:
https://finance-data-processing-5n56.onrender.com

---

## 🚀 Features

### 👤 User Management

* Create users
* Assign roles (Admin, Analyst, Viewer)
* Manage user status (active/inactive)

---

### 🔐 Role-Based Access Control (RBAC)

* **Admin**

  * Full access (create, update, delete records and users)
* **Analyst**

  * View records
  * Access dashboard analytics
* **Viewer**

  * Read-only access

Access control is implemented using middleware.

---

### 💰 Financial Records

* Create, Read, Update, Delete records

Fields:

* Amount
* Type (income / expense)
* Category
* Date
* Notes

---

### 🔍 Filtering & Pagination

* Filter by:

  * Type
  * Category
* Pagination:

  * `/api/records?page=1&limit=5`

---

### 📊 Dashboard APIs

* Total Income
* Total Expense
* Net Balance
* Category-wise summary

---

### ⚠️ Validation & Error Handling

* Required field validation
* Invalid input handling
* Proper HTTP status codes

---

## ✨ Additional Features

* Pagination for efficient data handling
* Query-based filtering (search support)
* Modular architecture (controllers, routes, models)
* Middleware-based RBAC

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/CodingEnthus/Finance-Data-Processing-and-Access-Control-backend-.git
cd zorvyn-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env`

```
MONGO_URI=your_mongodb_connection_string
```

### 4. Run Server

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 👤 Users

* `POST /api/users` → Create user
* `GET /api/users` → Get users

---

### 💰 Records

* `POST /api/records` → Admin only
* `GET /api/records` → All roles
* `PUT /api/records/:id` → Admin only
* `DELETE /api/records/:id` → Admin only

---

### 📊 Dashboard

* `GET /api/dashboard/summary` → Admin, Analyst
* `GET /api/dashboard/category` → Admin, Analyst

---

## 🔑 Role Header Required

All requests require:

| Key  | Value   |
| ---- | ------- |
| role | admin   |
| role | analyst |
| role | viewer  |

---

## 🔍 Sample API Usage

### Create Record (Admin)

POST `/api/records`

Header:

```
role: admin
```

Body:

```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary"
}
```

---

### Get Records (Viewer)

GET `/api/records?page=1&limit=5`

Header:

```
role: viewer
```

---

### Dashboard Summary (Analyst)

GET `/api/dashboard/summary`

Header:

```
role: analyst
```

---

## 🧠 Design Decisions

* Used middleware for RBAC
* Implemented aggregation for analytics
* Added pagination for scalability
* Kept architecture modular and maintainable

---

## 📌 Assumptions

* Authentication is mocked using headers
* Focus is on backend logic over full auth system
* Designed for demonstration purposes

---

## ✨ Future Improvements

* JWT Authentication
* Advanced analytics (monthly trends)
* API documentation (Swagger)
* Unit & integration testing

---

## 👨‍💻 Author

**Samrat Dutta**
