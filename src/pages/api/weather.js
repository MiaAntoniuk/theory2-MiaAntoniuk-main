export default async function handler(req, res) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const city = "Edmonton";

  if (!apiKey) {
    return res.status(500).json({ error: "Missing API key" });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch weather" });
    }

    const data = await response.json();

    return res.status(200).json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}