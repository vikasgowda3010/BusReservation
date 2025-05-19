
import React from 'react';
import '../styles/CitiesDropdown.css';

const cities = ["Bangalore", "Chennai", "Goa"];

function CitiesDropdown({ label, onSelect, selectedCity, excludeCity }) {
  return (
    <div className="cities-dropdown">
      <label>{label}:</label>
      <select value={selectedCity} onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select a city</option>
        {cities
          .filter((city) => city !== excludeCity)
          .map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>
    </div>
  );
}

export default CitiesDropdown;