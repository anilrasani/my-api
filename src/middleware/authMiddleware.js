// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  try {
    // Get token from request header
    const token = req.headers.authorization?.split(' ')[1];

    // If no token, deny access
    if (!token) {
      return res.status(401).json({ message: '❌ No token, access denied!' });
    }

    // Verify the token is real and not expired
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save user info for the next function to use
    req.user = decoded;

    next(); // ✅ token is valid, let them through!

  } catch (error) {
    res.status(401).json({ message: '❌ Invalid token!' });
  }
};

module.exports = protect;
