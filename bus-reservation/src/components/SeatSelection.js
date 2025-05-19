import React, { useState } from 'react';
import '../styles/SeatSelection.css';

function SeatSelection({ bus, onSeatSelect }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else if (selectedSeats.length < 6) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

 
  const rows = Array.from({ length: 10 }, (_, i) => i + 1);
  const seats = {
    left: rows.map(row => [`${row}A`, `${row}B`]),
    right: rows.map(row => [`${row}C`, `${row}D`])
  };

  return (
    <div className="seat-selection">
      <h3>Select Your Seats (Max 6):</h3>
      <div className="bus-container">
        <div className="seat-area left-side">
          {seats.left.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map(seat => (
                <div
                  key={seat}
                  className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="bus-divider"></div>
        <div className="seat-area right-side">
          {seats.right.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map(seat => (
                <div
                  key={seat}
                  className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {selectedSeats.length > 0 && (
        <i className="fas fa-bus confirm-icon" onClick={() => onSeatSelect(selectedSeats)}></i>
      )}
    </div>
  );
}

export default SeatSelection;
