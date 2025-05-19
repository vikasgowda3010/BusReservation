import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyQMwS7nW05tGzg6tzj5Mp4xfNMj_Sveknw&usqp=CAU" alt="Logo" className="logo" /> {/* Replace with your logo path */}
        <span className="website-name">VK Travels</span>
      </div>
      <div className="navbar-right">
        <button onClick={() => navigate('/booking')} className="nav-button">Home</button>
        <button onClick={() => navigate('/payments')} className="nav-button">Ticket Details</button>
       
      </div>
    </nav>
  );
}

export default Navbar;
