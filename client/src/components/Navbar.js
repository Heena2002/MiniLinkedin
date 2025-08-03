// ✅ src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.id) {
      setUserId(storedUser.id); // ✅ fixed
    }
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">MiniLinkedIn</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {userId && <Link to={`/profile/${userId}`}>Profile</Link>}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  );
}

export default Navbar;
