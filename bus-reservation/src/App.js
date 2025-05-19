import React from 'react';
import '../src/styles/App.css';
import BookingForm from './components/BookingForm';
import Login from './components/Login';
import PaymentsView from './components/PaymentsView'; 
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <marquee><h1>Online Bus Reservation System</h1></marquee>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/payments" element={<PaymentsView />} /> 
          
        </Routes>
      </div>
     
    </Router>
  );
}

export default App;
