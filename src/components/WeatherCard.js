import { useEffect, useState } from "react";

export default function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setWeather(data);
        }
      })
      .catch(() => {
        setError("Could not load weather data.");
      });
  }, []);

  if (error) return <div>{error}</div>;
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