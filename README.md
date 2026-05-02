# 🚀 Scalable REST API with Authentication & Role-Based Access

A production-ready REST API built with Node.js, Express, and MongoDB.

## 🛠️ Tech Stack
- Node.js + Express
- MongoDB Atlas + Mongoose
- JWT Authentication
- bcryptjs (password hashing)
- express-validator (input validation)

## 📁 Project Structure
my-api/
├── src/
│   ├── config/        # Database connection
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth & error handlers
│   ├── models/        # MongoDB schemas
│   └── routes/        # API endpoints
├── .env
└── server.js

## ⚙️ Setup Instructions

1. Clone the repository
   git clone https://github.com/anilrasani/my-api.git
   cd my-api

2. Install dependencies
   npm install

3. Create .env file
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

4. Run the server
   npm run dev

## 🔐 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/v1/auth/register | Register a new user |
| POST | /api/v1/auth/login | Login and get JWT token |

### Notes Routes (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/v1/notes | Create a note |
| GET | /api/v1/notes | Get all notes |
| GET | /api/v1/notes/:id | Get one note |
| PUT | /api/v1/notes/:id | Update a note |
| DELETE | /api/v1/notes/:id | Delete a note |

### Admin Routes (Admin Only)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v1/admin/users | Get all users |
| GET | /api/v1/admin/notes | Get all notes |
| DELETE | /api/v1/admin/users/:id | Delete a user |

## 🔑 Authentication
All protected routes require a JWT token in the header:
Authorization: Bearer your_token_here

## 👥 Roles
- user → can manage their own notes
- admin → can manage all users and notes

## 📈 Scalability Notes
- Modular folder structure for easy scaling
- API versioning (/api/v1/) for future updates
- Environment variables for configuration
- MongoDB Atlas for cloud database scaling
- Ready for Redis caching & Docker deployment
