const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

// Middleware to verify Clerk authentication
const requireAuth = ClerkExpressRequireAuth({
  // Add any additional Clerk options here
});

// Role-based access control middleware
const requireRole = (roles = []) => {
  return [
    requireAuth,
    (req, res, next) => {
      const userRole = req.auth.claims?.metadata?.role || 'user';
      
      if (roles.length && !roles.includes(userRole)) {
        return res.status(403).json({ 
          success: false, 
          error: 'Unauthorized access' 
        });
      }
      
      next();
    }
  ];
};

module.exports = {
  requireAuth,
  requireRole
};
