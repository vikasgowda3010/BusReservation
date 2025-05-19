

import React from 'react';
import axios from 'axios';
import '../styles/PaymentForm.css';
import { useNavigate } from 'react-router-dom';

function TicketDetails({ fromCity, toCity, date, selectedBus, seats, totalAmount, onPrevious, onNext }) {
  const navigate = useNavigate();
  const handleProceedToPayment = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/payments/ticket', {
        fromCity,
        toCity,
        date,
        busName: selectedBus.name,
        seats: seats.join(', '),
        totalAmount,
      });

      console.log('Payment data saved:', response.data);
      onNext(); 
    } catch (error) {
      console.error('Error saving payment data:', error);
    }
  };




    return (
      <div className="payment-summary-container">
        <h2>Ticket Details</h2>
        <p><strong>From:</strong> {fromCity}</p>
        <p><strong>To:</strong> {toCity}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Bus:</strong> {selectedBus.name}</p>
        <p><strong>Seats:</strong> {seats.join(', ')}</p>
        <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
  
        <button type="submit" className="btn btn-primary my-2" onClick={() => window.location.reload()}>

          Back to Home
       </button>

         <button type="submit" className="btn btn-primary my-2" onClick={() => navigate('/payments')}>

          View All Tickets
       </button>
      </div>
    );
  }
  
  export default TicketDetails;
  

      
      


