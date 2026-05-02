// server.js
require('dotenv').config();

const express = require('express');
const connectDB = require('./src/config/db');
const errorHandler = require('./src/middleware/errorHandler');

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running 🚀' });
});

const authRoutes = require('./src/routes/authRoutes');
app.use('/api/auth', authRoutes);

const noteRoutes = require('./src/routes/noteRoutes');
app.use('/api/notes', noteRoutes);

// 👇 error handler must be LAST
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});