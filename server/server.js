import "dotenv/config";
import express from "express";

const app = express();
const PORT = 3001;

app.get("/api/weather", async (req, res) => {
  try {
    const city = req.query.city || "San Jose";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message });
    }

    res.json({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
