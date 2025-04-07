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
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000



▶️ Run the Server
npm start



📌 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	User login
👤 User Routes
Method	Endpoint	Description
GET	/api/users/:id	Get user info by ID
PUT	/api/users/:id	Update user info
DELETE	/api/users/:id	Delete a user
PUT	/api/users/:id/follow	Follow a user
PUT	/api/users/:id/unfollow	Unfollow a user
📝 Note Routes
Method	Endpoint	Description
POST	/api/notes	Create a new note
GET	/api/notes/:id	Get a specific note
PUT	/api/notes/:id	Update a note
DELETE	/api/notes/:id	Delete a note
GET	/api/notes/timeline/all	Get timeline (posts + follows)




🤝 Contributing
Contributions are welcome! Open a pull request or create an issue to start the discussion.

