const jwt = require('jsonwebtoken');

// 🔐 AUTH CHECK (JWT)
exports.protect = (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ error: 'Not authorized, no token' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // { id, role }

    next();

  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// 🛡️ ROLE CHECK (UPDATED)
exports.checkRole = (allowedRoles) => {
  return (req, res, next) => {

    if (!req.user || !req.user.role) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied' });
    }

    next();
  };
};