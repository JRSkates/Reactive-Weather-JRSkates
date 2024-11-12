import React from "react";
import { getWeatherIcon } from "../utils"


function WeatherCard(props) {

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