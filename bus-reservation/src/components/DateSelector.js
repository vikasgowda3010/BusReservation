
import React from 'react';
import '../styles/DateSelector.css';

function generateDates() {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
}

function DateSelector({ onSelectDate, selectedDate }) {
  const dates = generateDates();

  return (
    <div className="date-selector">
      <label>Select Date:</label>
      <select value={selectedDate} onChange={(e) => onSelectDate(e.target.value)}>
        <option value="">Select a date</option>
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DateSelector;
