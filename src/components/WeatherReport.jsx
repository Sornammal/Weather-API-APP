// src/components/WeatherReport.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../config';

function WeatherReport() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    try {
      setError('');
      setWeather(null);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      setError('City not found. Please enter a valid name.');
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10 px-4 w-full max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-700">🌤️ Weather Report</h1>
        <p className="text-gray-500 mt-2">Search current weather by city name</p>
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-4">
        <input
          type="text"
          placeholder="Enter city name"
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={getWeather}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Get Weather
        </button>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded w-full text-center">
          {error}
        </div>
      )}

      {weather && (
        <div className="bg-white rounded-lg shadow-md p-6 w-full text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">{weather.name}, {weather.sys.country}</h2>
          <p className="text-xl mb-2">🌡️ Temp: {weather.main.temp}°C</p>
          <p className="capitalize text-gray-600">{weather.weather[0].description}</p>
          <p className="text-gray-500 mt-2">💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherReport;
