import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/posts');
        setPosts(res.data.reverse()); // latest first
      } catch (err) {
        console.error("❌ Error fetching posts:", err);
        setError("❌ Failed to fetch posts.");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="page-container">
      <h2>Home Feed</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={styles.postCard}>
            <p>{post.content}</p>
            <small>👤 {post.author?.name || "Unknown"} | 🕒 {new Date(post.createdAt).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  postCard: {
    background: '#fff',
    padding: '15px',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '15px',
  },
};

export default Home;
