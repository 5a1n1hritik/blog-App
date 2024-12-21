const jwt = require("jsonwebtoken");

exports.authenticateUser = async (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded.user;
    if (!req.user.role) {
      return res.status(403).json({
        success: false,
        message: "Access denied. User role missing.",
      });
    }

    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token." });
  }
};
