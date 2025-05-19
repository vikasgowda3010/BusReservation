

import React from 'react';
import '../styles/ProgressBar.css';

function ProgressBar({ step }) {
  const progress = (step / 6) * 100; 

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="bus-icon" style={{ left: `${progress}%` }}>
        <i className="fas fa-bus"></i>
      </div>
    </div>
  );
}

export default ProgressBar;
