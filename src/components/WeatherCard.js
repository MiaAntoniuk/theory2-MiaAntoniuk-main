import { useEffect, useState } from "react";
import Card from "./Card";

export default function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWeather() {
      try {
        const res = await fetch("/api/weather");

        if (!res.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError("Could not load weather.");
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, []);

  return (
    <Card title="Weather" colSpan="md:col-span-1" rowSpan="md:row-span-1">
      <div className="flex h-full flex-col justify-center rounded bg-darkslate-400/30 p-3 text-sm text-neutral-200">
        {loading && <p>Loading weather...</p>}
        {error && <p>{error}</p>}
        {weather && (
          <>
            <p className="font-semibold">{weather.city}</p>
            <p>{weather.temperature}°C</p>
            <p className="capitalize">{weather.description}</p>
          </>
        )}
      </div>
    </Card>
  );
}