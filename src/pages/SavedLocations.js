import "../styles/SavedLocations.css";
import React, { useEffect, useState } from "react";
import PlaceCategory from "../components/PlaceCategory";
import NavBar from "../components/NavBar";


function SavedLocations() {
  const [savedLocations, setSavedLocations] = useState({}); // Use a more descriptive state name
  const categories = ["Favorites", "StarredPlaces", "WantToGo", "ToTravel"];
  const [weatherData, SetWeatherData] = useState({})
  const apiKey = "930da16821d3f5c6b5a63f61e02bda11"; // Use a constant for the API key

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationData = await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(`http://localhost:4000/${category}`);
            const data = await response.json();
            return { [category]: data }; // Return an object for easier state update
          })
        );
        const combinedData = Object.assign({}, ...locationData); // Combine category data
        setSavedLocations(combinedData);
      } catch (err) {
        console.error("Error fetching locations:", err);
      }
    };

    fetchLocations();
  }, []); // Empty dependency array to fetch locations on component mount

  useEffect(() => {
    if (Object.keys(savedLocations).length !== 0) {
      fetchData();
    }
  }, [savedLocations]); // Re-run when `savedLocations` changes

  const fetchData = async () => {
    try {
      for (const category in savedLocations) {
        for (const place of savedLocations[category]) {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${place.name}&appid=${apiKey}`
          );
          const weatherData = await response.json();
          // Update state for each category and location (implementation required)
          console.log("Weather data for", place.name, weatherData); // Log for debugging
          SetWeatherData((prevData) => ({
            ...prevData,
            [category]: [...(prevData[category] || []), { placeName: place.name, weatherData }],
          }));
          
        }
      }
    } catch (err) {
      console.error("Error fetching weather data:", err);
    }
  };
console.log(weatherData);
  // Implement UI logic to display locations and weather data (replace placeholders)
  return (
    <>
    <div>
    <NavBar />
    </div>
    <div className="categoriesOfPlaces">
      <ul>
        {Object.keys(weatherData).map(category => (
          <>
          <h1>{category}</h1>
          <li key={category} > 
            <PlaceCategory props={weatherData[category]}/>
          </li>
          </>
        ))}
      </ul>
    </div>
    </>
  );
}

export default SavedLocations;
