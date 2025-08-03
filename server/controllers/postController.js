const Post = require("../models/Post");


exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    const newPost = new Post({
      content,
      author: req.user.id, 
    });

    const savedPost = await newPost.save();

    res.status(201).json({
      message: "Post created successfully",
      post: savedPost,
    });

  } catch (error) {
    res.status(500).json({ message: "Error creating post", error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
};

exports.getPostsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ author: userId }).populate("author", "name email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user's posts", error: error.message });
  }
};
