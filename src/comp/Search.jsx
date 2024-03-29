/** @format */

import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "da7eaaa84c76436f880180444242401";

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
      );

      setWeatherData(res.data);
      setLoading(false);
      setError("");
    } catch (err) {
      setError("Failed to fetch weather data");
      alert("Failed to fetch weather data");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setCityName(text);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        placeholder="Enter city name"
        value={cityName}
        onChange={handleChange}
      ></input>
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading data....</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <div className="weather-card">
          <h2>
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Search;
