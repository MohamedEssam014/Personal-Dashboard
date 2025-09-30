import React from "react";
import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi";

const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="card">
      <h3>Weather</h3>
      <div className="flex items-center justify-between">
        <span>{data.location}</span>
        <span className="text-4xl">{getWeatherIcon(data.icon)}</span>
      </div>
      <p>{data.temperature}°C - {data.condition}</p>
    </div>
  );
};

const getWeatherIcon = (icon) => {
  switch (icon) {
    case "01d": return <WiDaySunny />;
    case "02d": return <WiCloud />;
    case "10d": return <WiRain />;
    default: return <WiDaySunny />;
  }
};

export default WeatherCard;
