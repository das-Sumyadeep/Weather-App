// import TopButtons from "../Component/TopButtons";
import Inputs from "../Component/Inputs";
import TimeAndLocation from "../Component/TimeAndLocation";
import TemperatureAndDetails from "../Component/TemperatureAndDetails";
import getFormattedWeatherData from "../Services/WeatherService";
import { useState, useEffect } from "react";

function Weather() {
  const [query, setQuery] = useState({ q: "Delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await getFormattedWeatherData({ ...query, units });
      setWeather(res);
    };
    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        // console.log(lat, lon);
        setQuery({
          lat,
          lon,
        });
      });
    }
  }, []);

  return (
    <div
      className="mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from-cyan-400 to-blue-700 h-fit shadow-xl
      shadow-gray-400 rounded-xl"
    >
      {/* <TopButtons setQuery={setQuery} /> */}
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
        </div>
      )}
    </div>
  );
}

export default Weather;
