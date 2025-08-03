const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Make sure the User model is defined
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
