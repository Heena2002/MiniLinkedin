// ✅ src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios'; // custom axios

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('/api/auth/login', { email, password });

      console.log("📦 Axios Login Response:", res.data);

      // ✅ Store correct user format
      const user = res.data.user;
      const fullUser = {
        id: user._id, // fix here
        name: user.name,
        email: user.email,
        bio: user.bio
      };
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(fullUser));

      alert('✅ Login successful!');
      setMessage('✅ Login successful! Redirecting...');
      setTimeout(() => navigate(`/profile/${fullUser.id}`), 1500);

    } catch (error) {
      console.error("❌ Axios Login Error:", error);
      const errMsg = error.response?.data?.message || '❌ Login failed or network error';
      alert(errMsg);
      setMessage(errMsg);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
