// ✅ src/pages/CreatePost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function CreatePost() {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('/api/posts/create', { content });
      console.log("✅ Post created:", res.data);

      setMessage("✅ Post created successfully!");
      setTimeout(() => navigate(`/profile/${user._id}`), 1000); // ✅ use correct ID

    } catch (err) {
      console.error("❌ Post Create Error:", err);
      setMessage("❌ Error creating post.");
    }
  };

  return (
    <div className="form-container">
      <h2>Create Post</h2>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your post..."
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
