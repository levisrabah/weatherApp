import React, { useState, useEffect } from 'react';

function SaveNation({ weatherData }) {
  const [dbData, setdbData] = useState(null);
  const [placeName, setPlaceName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Favorites");

  const fetchData = async (Category, url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(dbData);
      setdbData(jsonData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const Category = selectedCategory;
    const url = `http://localhost:4000/${Category}`;
    fetchData(Category, url);
  }, [selectedCategory]);

  const handleSelectChange = (event) => {
    const Category = event.target.value;
    const url = `http://localhost:4000/${Category}`;
    setPlaceName(event.target.selectedOptions[0].label);
    setSelectedCategory(Category);

    fetchData(Category, url); // Fetch data for the selected category
    console.log(url)
    // Perform the check after data is fetched and updated
    const existingPlace = dbData && dbData.find(place => place.name === weatherData.name);
    if (existingPlace ===true) {
      // Place already exists (stored in 'existingPlace' variable)
      alert("Sorry, place is already saved among your Saved Locations...");
    }else{
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: weatherData.name,
        })
      })
      .then((r) => r.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
    }
  };

  return (
    <div className="save-nation">
      {/* Conditional rendering for loading state */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <select id="dropdown" value={selectedCategory} onChange={handleSelectChange}>
            <option value="Favorites">Favorites</option>
            <option value="StarredPlaces">StarredPlaces</option>
            <option value="WantToGo">WantToGo</option>
            <option value="ToTravel">ToTravel</option>
        </select>
      )}
    </div>
  );
}

export default SaveNation;
