import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
import Form from './components/Form';

function App() {
    const [location, setLocation] = useState("London");

    return (
        <>
            <h1 className="title">REACTIVE WEATHER</h1>
            <h3 className="subtitle">Up to the minute weather news</h3>
            <div className="app">
                <Form location={location} setLocation={setLocation} />
                <Location location={location} setLocation={setLocation} />
            </div>
        </>
    );
}

export default App;
