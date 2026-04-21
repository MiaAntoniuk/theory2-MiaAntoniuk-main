import { useEffect, useState } from "react";

export default function WeatherCard() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(`/api/weather`)
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div>
      <h2>Weather</h2>
      <p>{weather.name}</p>
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}