// ✅ src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

function Profile() {
  const { id } = useParams(); // /profile/:id
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    setUser(savedUser);
  }, []);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await axios.get(`/api/posts/user/${id}`);
        setPosts(res.data.reverse());
      } catch (err) {
        console.error("❌ Profile Fetch Error:", err);
        setError('❌ Failed to fetch user posts');
      }
    };

    if (id) fetchUserPosts(); // ✅ Only if ID exists
  }, [id]);

  return (
    <div className="page-container">
      <h2>User Profile</h2>

      {user ? (
        <div style={styles.profileBox}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}

      <h3 style={{ marginTop: '30px' }}>Your Posts</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={styles.postCard}>
            <p>{post.content}</p>
            <small>🕒 {new Date(post.createdAt).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  profileBox: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  postCard: {
    background: '#fff',
    padding: '15px',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '15px',
  }
};

export default Profile;
