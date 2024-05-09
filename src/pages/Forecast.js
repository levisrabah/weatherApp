import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import "../styles/Forecast.css"

function Forecast() {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [search, setSearch] = useState("");

  async function fetchForecastData(param) {
    setLoading(true);
    try {
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${param}&units=${unit}&appid=075335bc4fb43ae67a55693444276c56`
      );
      const forecastData = await forecastResponse.json();
      if (!forecastResponse.ok) {
        throw new Error(forecastData.message);
      }
      setForecastData(forecastData);
      setError(null);
    } catch (error) {
      setError(error.message);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    fetchForecastData(search);
  }

  function convertTemperature(temp) {
    return unit === "metric" ? temp : (temp * 9) / 5 + 32;
  }

  function getWeatherIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  }

  useEffect(() => {
    if (search.trim() !== "") {
      fetchForecastData(search);
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const forecastResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${unit}&appid=075335bc4fb43ae67a55693444276c56`
              );
              const forecastData = await forecastResponse.json();
              if (!forecastResponse.ok) {
                throw new Error(forecastData.message);
              }
              setForecastData(forecastData);
              setError(null);
            } catch (error) {
              setError(error.message);
              setForecastData(null);
            } finally {
              setLoading(false);
            }
          },
          (error) => {
            setError("Error fetching current location");
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser");
        setLoading(false);
      }
    }
  }, [search, unit]);

  // Function to group forecast data by day
  function groupForecastByDay(forecastData) {
    const groupedForecast = {};
    forecastData.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const day = date.toDateString();
      if (!groupedForecast[day]) {
        groupedForecast[day] = [];
      }
      groupedForecast[day].push(item);
    });
    return groupedForecast;
  }

  return (
    <>
    <div>
      <NavBar />
    </div>
    <div className="forecast">
      <h1>Forecast</h1>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : forecastData ? (
        <div>
          <div className="city-name">
            {forecastData.city.name}, {forecastData.city.country}
          </div>
          {/* Daily Summary */}
          <div className="daily-summary">
            {Object.entries(groupForecastByDay(forecastData)).map(
              ([day, forecasts]) => (
                <div key={day} className="forecast-summary">
                  <h2>{new Date(day).toDateString()}</h2>
                  <div className="forecast-items">
                    {forecasts.map((item, index) => (
                      <div key={index} className="forecast-item">
                        <div>
                          {new Date(item.dt * 1000).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                        <div>
                          Temperature: {convertTemperature(item.main.temp)}°
                        </div>
                        <img
                          src={getWeatherIconUrl(item.weather[0].icon)}
                          alt="Weather Icon"
                        />
                        <div>{item.weather[0].description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ) : null}
    </div>
    </>
  );
}

export default Forecast;
