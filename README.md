# 💰 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system for managing financial records with role-based access control and dashboard analytics.

It allows different types of users to interact with financial data based on their roles while providing summary insights for a dashboard.

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

  * Read-only access to records

Access control is implemented using middleware.

---

### 💰 Financial Records

* Create, Read, Update, Delete records
* Fields:

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
* Pagination support:

  * `/api/records?page=1&limit=5`

---

### 📊 Dashboard APIs

* Total Income
* Total Expense
* Net Balance
* Category-wise summary (aggregation)

---

### ⚠️ Validation & Error Handling

* Required field validation
* Invalid input handling
* Proper HTTP status codes

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
git clone <your-repo-link>
cd zorvyn-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
MONGO_URI=your_mongodb_connection_string
```

### 4. Run Server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 👤 Users

* `POST /api/users` → Create user
* `GET /api/users` → Get all users

---

### 💰 Records

* `POST /api/records` → Create record (Admin only)
* `GET /api/records` → Get records (All roles)
* `PUT /api/records/:id` → Update record (Admin only)
* `DELETE /api/records/:id` → Delete record (Admin only)

---

### 📊 Dashboard

* `GET /api/dashboard/summary` → Summary (Admin, Analyst)
* `GET /api/dashboard/category` → Category summary (Admin, Analyst)

---

## 🔑 Headers for Role Testing

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

* Used middleware for clean role-based access control
* Implemented aggregation for efficient dashboard insights
* Added pagination to handle large datasets
* Kept architecture modular (controllers, routes, models)

---

## 📌 Assumptions

* Authentication is mocked using request headers
* Focus is on backend logic rather than full authentication system
* Single environment setup for simplicity

---

## ✨ Future Improvements

* JWT Authentication
* Advanced analytics (monthly trends)
* Search functionality
* Unit & integration testing
* API documentation (Swagger)

---

## 👨‍💻 Author

**Samrat Dutta**
