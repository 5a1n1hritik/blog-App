exports.checkRole = (...allowedRoles) => (req, res, next) => {
  try { 
    if (!req.user || !req.user.role) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. User not authenticated or role missing.',
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Insufficient permissions.',
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred during role validation.',
    });
  }
};
