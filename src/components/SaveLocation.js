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
       const Category=event.target.selectedOptions[0].label
       setSelectedCategory(Category);
        console.log(`http://localhost:4000/${Category}`)
        fetch(`http://localhost:4000/${Category}`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: weatherData.name,
          })
        })
        .then((r) =>r.json())
        .then((data) =>console.log(data))
        .catch((err) => console.log(err))
      };
    console.log(placeName);//Nairobi
    console.log(selectedCategory);//Category
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