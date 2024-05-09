import React, { useState, useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap';

function Alerts({ location, temperature, normalTemperature }) {
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState(''); // State to track the type of alert (above or below normal)
    const thresholdTemperature = normalTemperature; // Set threshold temperature to normal temperature

    useEffect(() => {
        // Check if the current temperature is above or below the threshold
        if (temperature !== null && temperature > thresholdTemperature) {
            setShowAlert(true); // Trigger alert if temperature is above threshold
            setAlertType('above'); // Set alert type to 'above' normal
        } else if (temperature !== null && temperature < thresholdTemperature) {
            setShowAlert(true); // Trigger alert if temperature is below threshold
            setAlertType('below'); // Set alert type to 'below' normal
        } else {
            setShowAlert(false); // Hide alert if temperature is normal
        }
    }, [temperature, thresholdTemperature]);

    const handleAlertClose = () => {
        setShowAlert(false); // Close the alert when the close button is clicked
    };

    return (
        <div>
            {/* Display alert if showAlert state is true */}
            {showAlert && (
                <Alert variant={alertType === 'above' ? 'danger' : 'warning'} dismissible onClose={handleAlertClose}>
                    {alertType === 'above' ? 'Above' : 'Below'} normal temperature alert in {location}!
                    <br />
                    Current temperature: {temperature}°C
                    <br />
                    Normal temperature: {normalTemperature}°C
                </Alert>
            )}
            {/* Display other components or UI elements */}
        </div>
    );
}

export default Alerts;
