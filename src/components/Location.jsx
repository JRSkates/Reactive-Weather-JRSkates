import React, { useEffect, useState } from 'react';
import { getWeatherIcon } from "../utils";

function Location({ location, setLocation }) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Async function to fetch weather data
    const fetchWeatherData = async (city) => {
        try {
            setLoading(true);
            setError(null);

            const cityResponse = await fetch(`https://dataservice.accuweather.com/locations/v1/search?&q=${city.toLowerCase()}&apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}`);
            const cityData = await cityResponse.json();

            const cityKey = cityData[0]?.Key;

            if (!cityKey) throw new Error('City not found');

            const weatherResponse = await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${cityKey}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&metric=true`);
            const weatherData = await weatherResponse.json();
            console.log(weatherData);

            // Update state with the fetched data
            setWeatherData(weatherData[0]);
            console.log(weatherData[0])
            setLoading(false);

        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (location) {
            fetchWeatherData(location);
        }
    }, [location]);

    // Handle loading and error states
    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>{error}</p>;

    // Check if weatherData is available
    if (weatherData) {
        return (
            <div className="card">
                <h3 className="card-title">Current Weather for {location}</h3>
                <div className="img-container">
                    <img
                        className="card-img-top"
                        src={getWeatherIcon(weatherData.IconPhrase)}
                        alt={`${weatherData.WeatherText} icon`}
                        id="icon"
                    />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{location}</h3>
                    <h5 className="card-text">{weatherData.Temperature.Value} °C</h5>
                    <h5 className="card-text">{weatherData.IconPhrase}</h5>
                </div>
            </div>
        );
    }

    return null;
}

export default Location;
