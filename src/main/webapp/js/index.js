import React, { useState } from 'react';
import conditions from './conditions';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const handleCityInput = (e) => {
        setCity(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (city) {
            fetchWeather(city);
        }
    };

    async function fetchWeather(city) {
        const url = `/weather/${encodeURIComponent(city)}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            const data = await response.json();
            setWeather(data);
            setError('');
        } catch (error) {
            console.error('Fetch error:', error);
            setError('Failed to fetch weather data: ' + error.message);
            setWeather(null);
        }
    }

    return (
        <div>
            <form id="form" onSubmit={handleFormSubmit}>
                <input
                    id="inputCity"
                    value={city}
                    onChange={handleCityInput}
                    placeholder="Enter City"
                />
                <button type="submit">Get Weather</button>
            </form>

            {error && <div className="card">{error}</div>}
            {weather && (
                <div className="card">
                    <h2 className="card-city">{weather.location.name} <span>{weather.location.country}</span></h2>
                    <div className="card-weather">
                        <div className="card-value">{weather.current.temp_c}<sup>°C</sup></div>
                        <WeatherIcon data={weather} />
                    </div>
                   <div className="card-description">{weather.current.condition.text}</div>
                </div>
            )}
        </div>
    );
}

function WeatherIcon({ data }) {
    const info = conditions.find((obj) => obj.code === data.current.condition.code);
    const filePath = './img/' + (data.current.is_day ? 'day' : 'night') + '/';
    const fileName = (data.current.is_day ? info.day : info.night) + '.png';
    const imgPath = filePath + fileName;

    return <img className="card-img" src={imgPath} alt="Weather icon" />;
}

export default WeatherApp;
