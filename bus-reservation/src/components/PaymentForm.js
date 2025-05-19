import React, { useState } from 'react';
import '../styles/PaymentForm.css';

function PaymentForm({ totalAmount, onPrevious, onComplete }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setPaymentSuccess(true);
    
    onComplete({
      name,
      email,
      mobile,
      totalAmount,
    });
  };

  return (
    <div className="payment-form">
      {paymentSuccess ? (
        <div className="payment-success">
          <h3>Seat Booked Successfully!</h3>
          <p>Thank you for your payment. Your booking has been confirmed.</p>
          <button onClick={() => window.location.href = '/ticket'}>View Ticket</button> 
        </div>
      ) : (
        <>
          <h3>Payment</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Mobile:</label>
              <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Card Number:</label>
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Expiry Date:</label>
              <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>CVV:</label>
              <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Total Amount: Rs {totalAmount}</label>
            </div>
            <div className="form-actions">
              <button type="button" className="prev-button" onClick={onPrevious}>Previous</button>
              <button type="submit">Pay Now</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default PaymentForm;
