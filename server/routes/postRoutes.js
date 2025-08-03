const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createPost,
  getAllPosts,
  getPostsByUserId,
} = require("../controllers/postController");

// Create a post (protected)
router.post("/create", auth, createPost);

// Get all posts (public or protected — up to your design)
router.get("/", getAllPosts);

// Get posts by a specific user (protected)
router.get("/user/:id", auth, getPostsByUserId);

module.exports = router;
