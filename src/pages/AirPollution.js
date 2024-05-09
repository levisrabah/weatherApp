import React, { useState, useEffect } from 'react';
import Search from '../components/Search'
import '../styles/AirPollution.css'
import NavBar from '../components/NavBar';

const AirPollution = () => {
    const [search, setSearch] = useState('');
    const [city, setCity] = useState(null);
    const [aqiData, setAqiData] = useState(null);
    const apiKey = "075335bc4fb43ae67a55693444276c56";

    useEffect(() => {
        if (search.trim() !== '') {
            const fetchWeatherData = async (location) => {
                try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch weather data');
                    }
                    const data = await response.json();
                    setCity({ name: data.name, lat: data.coord.lat, lon: data.coord.lon });
                } catch (error) {
                    console.error(error);
                }
            };

            // Trigger search function after delay
            const delay = setTimeout(() => {
                fetchWeatherData(search);
            }, 500); // Set the delay (e.g., 500 milliseconds)

            // Cleanup function to clear timeout on state change
            return () => clearTimeout(delay);
        }
    }, [search, apiKey]);

    useEffect(() => {
        if (city) {
            const fetchAqiData = async () => {
                try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch AQI data');
                    }
                    const data = await response.json();
                    setAqiData(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchAqiData();
        }
    }, [city, apiKey]);

    // Function to determine AQI category based on AQI value
    const getAqiCategory = (aqiValue) => {
        if (aqiValue <= 50) {
            return "Good";
        } else if (aqiValue <= 100) {
            return "Moderate";
        } else if (aqiValue <= 150) {
            return "Unhealthy for Sensitive Groups";
        } else if (aqiValue <= 200) {
            return "Unhealthy";
        } else if (aqiValue <= 300) {
            return "Very Unhealthy";
        } else {
            return "Hazardous";
        }
    };

    return (
        <>
        <div>
            <NavBar />
        </div>
        <div className="air-pollution-container">
            <NavBar />
            <h1>Air Quality Information</h1>
            <Search search={search} setSearch={setSearch} />
            {city && (
                <div className="city-info">
                    <h2 className="aqi-data-heading">Air Quality Index (AQI) for {city.name}</h2>
                    {aqiData ? (
                        <div className="aqi-data">
                            <p>Time: {new Date(aqiData.list[0].dt * 1000).toLocaleString()}</p>
                            <p>PM2.5: {aqiData.list[0].components.pm2_5} µg/m³</p>
                            <p>PM10: {aqiData.list[0].components.pm10} µg/m³</p>
                            <p>Ozone: {aqiData.list[0].components.o3} µg/m³</p>
                            <p>Nitrogen Dioxide (NO2): {aqiData.list[0].components.no2} µg/m³</p>
                            <p>AQI Category: <span className="aqi-category">{getAqiCategory(aqiData.list[0].main.aqi)}</span></p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            )}
            <div className="info-section">
                <h3>Understanding AQI</h3>
                <p>
                    The Air Quality Index (AQI) provides information about the quality of the air we breathe.
                    It measures the concentration of pollutants such as PM2.5, PM10, Ozone, and Nitrogen Dioxide.
                    Each pollutant has different health effects, and the AQI categorizes air quality into levels ranging from "Good" to "Hazardous."
                </p>
                <p>
                    It's essential to pay attention to the AQI and take precautions when air quality is poor, such as reducing outdoor activities and wearing masks.
                </p>
                <p>
                    The data displayed here is sourced from reputable environmental monitoring stations and is updated regularly to provide accurate information.
                </p>
                <p>
                    For more detailed information on air quality and pollution control measures, you can visit environmental websites or consult local authorities.
                </p>
            </div>
        </div>
        </>
    );
};

export default AirPollution;
