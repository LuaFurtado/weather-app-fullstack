import { getWeather } from "./services/weatherApi";

async function handleGetWeather() {
  const data = await getWeather();
  console.log("Weather data:", data);
}

function App() {

  return (
    <div>
      <h1>Weather App</h1>
      <p>Frontend base is ready.</p>
            <button onClick={handleGetWeather}>
        Test Weather API
      </button>
    </div>
  );
}

export default App;
