export async function getWeather() {
  // This function will fetch weather data from the backend
  const response = await fetch(
    `/api/weather?city=${encodeURIComponent(city)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  } 
  const data = await response.json();
  return data;
}
