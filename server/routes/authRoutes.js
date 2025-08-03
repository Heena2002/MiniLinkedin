const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);
// Inside authRoutes.js
router.get("/test", (req, res) => {
  res.send("✅ Auth route working");
});


module.exports = router;
