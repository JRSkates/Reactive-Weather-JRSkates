import React from 'react';
// Import data and WeatherCard here
import cities from './data';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
import Form from './components/Form';
import { useState } from 'react';

function App() {
    const [location, setLocation] = useState("London");

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                <Form location={location} setLocation={setLocation}/>
                <Location location={location} cities={cities} setLocation={setLocation} />
                {cities.map((city, index) => (
                    <WeatherCard key={index} city={city.city} temperature={city.temperature} forecast={city.forecast} />
                ))}
            </div>
            
        </>
    )
}

export default App;