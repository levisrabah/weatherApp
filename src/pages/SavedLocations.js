import React from "react";
import { useEffect,useState } from "react";

function SavedLocations() {
const [savedLocale,setSavedLocale] =useState([])

const Categories =["Favorites","StarredPlaces","WantToGo","ToTravel"]
  let key="930da16821d3f5c6b5a63f61e02bda11";

   useEffect(()=>{
    Categories.forEach(category=>{
    fetch(`http://localhost:4000/${category}`)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
     })
  
      },[])
      function getData(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&
               appid=930da16821d3f5c6b5a63f61e02bda11`)
         .then(response => response.json())
         .then(data => {
            setSavedLocale(data)
            console.log(data)
          })
         .catch(err => {
            console.log(err);
          })
      }
        
return (
    <div className="categoriesOfPlaces">
      <ul>
        <div id="Favorites"></div>
        <div id="StarredPlaces"></div>
        <div id="WantToGo"></div>
        <div id="ToTravel"></div>   
     </ul>
    </div>
)
}
export default SavedLocations;