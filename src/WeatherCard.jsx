/** @format */

// WeatherCard.js
import React from "react";

const WeatherCard = ({ title, data }) => {
  return (
    <div className="weather-card">
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

export default WeatherCard;
