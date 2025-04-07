#Social Media REST API

This is a RESTful API backend for a social media application built using **Node.js**, **Express.js**, and **MongoDB**. It allows users to register, login, post notes, follow/unfollow users, and view a timeline.

## 🔧 Features

- ✅ User registration and login with JWT authentication
- 🧠 Create, update, delete text-based notes (posts)
- 👥 Follow and unfollow users
- 📰 View timeline (own posts + followed users)
- 🔒 Passwords are securely hashed using bcrypt

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- bcrypt
- JWT (JSON Web Tokens)
- dotenv

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js installed
- MongoDB (Local or Atlas)

### 📁 Installation

```bash
git clone <link>
cd 
npm install



⚙️ Environment Setup
Create a .env file in the root directory and add:

env
Copy
Edit
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
