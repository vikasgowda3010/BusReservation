import React from 'react';
import axios from 'axios';
import '../styles/PaymentForm.css';

function PaymentSummary({ fromCity, toCity, date, selectedBus, seats, totalAmount, onPrevious, onNext }) {
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
        <h2>Payment Summary</h2>
        <p><strong>From:</strong> {fromCity}</p>
        <p><strong>To:</strong> {toCity}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Bus:</strong> {selectedBus.name}</p>
        <p><strong>Seats:</strong> {seats.join(', ')}</p>
        <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
  
        <div className="summary-actions">
          <button onClick={onPrevious}>Back</button>
          <button onClick={onNext}>Proceed to Payment</button>
          

        </div>
      </div>
    );
  }
  
  export default PaymentSummary;
  

      
      


