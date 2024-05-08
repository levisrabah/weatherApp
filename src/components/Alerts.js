import React from 'react';

function Alerts({ location, temperature, normalTemperature }) {
  const isAboveNormal = temperature > normalTemperature;

  return (
    <div>
      {isAboveNormal && (
        <div className="alert">
          <p>Warning: Temperature in {location} is above normal!</p>
          <p>Current temperature: {temperature}°C</p>
          <p>Normal temperature: {normalTemperature}°C</p>
        </div>
      )}
    </div>
  );
}

export default Alerts;
