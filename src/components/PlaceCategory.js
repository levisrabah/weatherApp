import React from 'react';
function PlaceCategory ({props}){
    function getWeatherIconUrl(iconCode) {
        return `https://openweathermap.org/img/wn/${iconCode}.png`; // Function to get weather icon URL
    }
    return (
        <div>{
             props.map(prop=>{
                console.log(prop)
            return(
            <>
             <div className="city-name">
             <span>{prop.weatherData.sys.country}</span>
             </div>
            <h2>{prop.placeName}</h2>
            <div className="date">
                <span>{new Date().toLocaleDateString()}</span>
             </div>
             <img src={getWeatherIconUrl(prop.weatherData.weather[0].icon)} alt="Weather Icon" />
             <p className="description">
                {prop.weatherData.weather[0].description}
             </p>
             <div className="weather-info">
                            <div className="column">
                                <div>
                                    <p className="wind">{prop.weatherData.wind.speed} m/s</p>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                    <p className="humidity">{prop.weatherData.main.humidity}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                        </div>
            </>
        )})}
        </div>
    )
}
export default PlaceCategory;
/*  <img src={getWeatherIconUrl(prop.weather[0].icon)} alt="Weather Icon" />
   <div>{prop.weather[0].description}</div>
*/