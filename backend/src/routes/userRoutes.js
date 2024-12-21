const { body } = require("express-validator");
const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  getAllUsers,
  updateUserRole,
  logoutUser,
} = require("../controllers/UserController");
const { authenticateUser } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");

const router = express.Router();

// Public Routes
router.post(
  "/register",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 8 characters").isLength({
      min: 8,
    }),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  loginUser
);

router.post("/logout", logoutUser);

// Protected Routes
router.put(
  "/:id/update/role",

  [
    body("role", 'Role must be either "Admin", "Editor", "User"').isIn([
      "admin",
      "editor",
      "user",
    ]),
  ],
  authenticateUser,
  checkRole("admin"),
  updateUserRole
);

router.get("/profile", authenticateUser, getUserProfile);
router.get("/all-users", authenticateUser, checkRole("admin"), getAllUsers);

module.exports = router;
