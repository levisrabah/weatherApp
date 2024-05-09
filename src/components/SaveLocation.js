import React,{useState} from 'react';
function SaveNation ({weatherData}){
    const [placeName,setPlaceName]=useState(null)
    const [selectedCategory, setSelectedCategory] = useState('');
    if (weatherData === null){
        return null;
    }
   // console.log(weatherData.name);   
    const handleSelectChange = (event) => {
       // setSelectedCategory (event.target.name);
       setPlaceName(event.target.value);
        setSelectedCategory(event.target.selectedOptions[0].label);
      };
    console.log(placeName);
    console.log(selectedCategory);
    return (
        <div className="save-nation">
   
      <select 
        id="dropdown" 
        value={selectedCategory} 
        onChange={handleSelectChange}>
         <option  >Save As...</option>
         <option value={weatherData.name} name="Favorites">Favorites</option>
         <option value={weatherData.name} name="StarredPlaces">StarredPlaces</option>
         <option value={weatherData.name} name="WantToGo">WantToGo</option>
         <option value={weatherData.name} name="ToTravel">ToTravel</option>
      </select>
      <p>Selected Option: {selectedCategory}</p>
    </div>
    )
}
export default SaveNation;