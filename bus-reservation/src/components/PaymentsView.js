import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PaymentView.css'; 

const PaymentsView = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    axios.get('http://localhost:8080/api/payments/show')
      .then(response => {
        setPayments(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="payments-view">
      <h1>Ticket Details</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>From City</th>
            <th>To City</th>
            <th>Date</th>
            <th>Bus Name</th>
            <th>Seats</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.fromCity}</td>
              <td>{payment.toCity}</td>
              <td>{new Date(payment.date).toLocaleDateString()}</td>
              <td>{payment.busName}</td>
              <td>{payment.seats}</td>
              <td>{payment.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsView;
