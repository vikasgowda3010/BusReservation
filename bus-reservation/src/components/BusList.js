import React from 'react';
import '../styles/BusList.css';

const busData = {
  "Bangalore-Chennai": [
    { name: "Asian Xpress", time: "14:00 - 20:30", price: 450 },
    { name: "Parveen Travels", time: "05:25 - 11:15", price: 585 },
    { name: "SRM Transports", time: "22:00 - 05:00", price: 570 },
    { name: "VRL Travels", time: "22:45 - 05:30", price: 450 },
  ],
  "Chennai-Goa": [
    { name: "Paulo Travels", time: "13:30 - 09:00", price: 1200 },
    { name: "Sea Bird Tourist", time: "15:15 - 10:45", price: 1187 },
  ],
  "Bangalore-Goa": [
    { name: "VRL Travels", time: "20:00 - 09:30", price: 700 },
    { name: "Sugama Tourist", time: "17:45 - 06:30", price: 600 },
  ],
  "Chennai-Bangalore": [
    { name: "VRL Travels", time: "20:00 - 09:30", price: 700 },
    { name: "Sugama Tourist", time: "17:45 - 06:30", price: 600 },
    { name: "Paulo Travels", time: "13:30 - 09:00", price: 1200 },
    { name: "Sea Bird Tourist", time: "15:15 - 10:45", price: 1187 },
  ],
};

function BusList({ fromCity, toCity, date, onSelectBus, selectedBus }) {
  const route = `${fromCity}-${toCity}`;
  const buses = busData[route] || [];

  return (
    <div className="bus-list">
      <h3>Buses available on {date} from {fromCity} to {toCity}:</h3>
      <ul>
        {buses.map((bus, index) => (
          <li
            key={index}
            className={`bus-item ${selectedBus === bus ? 'selected' : ''}`}
            onClick={() => onSelectBus(bus)}
          >
            {bus.name} - {bus.time} | Rs {bus.price}
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                onSelectBus(bus); 
              }}
              className={`select-button ${selectedBus === bus ? 'selected' : ''}`}
            >
              {selectedBus === bus ? 'Selected' : 'Select'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusList;



