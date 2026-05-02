// server.js
require('dotenv').config();

const express = require('express');
const path = require('path');        // 👈 make sure this is here
const connectDB = require('./src/config/db');
const errorHandler = require('./src/middleware/errorHandler');

connectDB();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));  // 👈 and this!

const authRoutes = require('./src/routes/authRoutes');
const noteRoutes = require('./src/routes/noteRoutes');
const adminRoutes = require('./src/routes/adminRoutes');

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notes', noteRoutes);
app.use('/api/v1/admin', adminRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});