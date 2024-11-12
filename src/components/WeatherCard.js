import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"


function WeatherCard(props) {
  const getWeatherIcon = (forecast) => {
    switch (forecast) {
      case "Sunny":
        return sunny;
      case "Rainy":
        return rainy;
      case "Cloudy":
        return cloudy;
      case "Partly Cloudy":
        return partlyCloudy;
      default:
        return sunny; // default icon if forecast doesn't match any case
    }
  };

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" 
            src = {getWeatherIcon(props.forecast)} 
            alt="Card image cap" 
            id = "icon"/>
        </div>
        <div className="card-body">
            <h3 className="card-title">{props.city}</h3>
            <h5 className="card-text">{props.temperature}</h5>
            <h5 className="card-text">{props.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard;