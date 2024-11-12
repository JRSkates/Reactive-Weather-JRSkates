import React from "react";
import { getWeatherIcon } from "../utils.js";

function Location({location, cities}) {

    // Use .find() to get the weather data for the current location
    const weatherData = cities.find((item) => item.city === location);

    // Check if weatherData is found, otherwise return a placeholder or message
    if (!weatherData) {
        return <p>No data available for the selected location.</p>;
    }

    return (
        <div className="card">
          <h3 className="card-title">Current Location</h3>
          <div className="img-container">
            <img
              className="card-img-top"
              src={getWeatherIcon(weatherData.forecast)}
              alt={`${weatherData.forecast} icon`}
              id="icon"
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">{weatherData.city}</h3>
            <h5 className="card-text">{weatherData.temperature}</h5>
            <h5 className="card-text">{weatherData.forecast}</h5>
          </div>
        </div>
      );
}

export default Location;