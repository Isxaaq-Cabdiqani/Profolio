import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const api = "9deb410a4699b01ea7e811ddc342e3de";

  const handleError = (err) => {
    setError(err.message);

    setLatitude(null);
    setLongitude(null);
  };

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
    setError(null);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
      fetchWeatherData();
    } else {
      setError("Geolocation not supported by this browser.");
    }
  };

  const fetchWeatherData = async () => {
    if (latitude !== null && longitude !== null) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&exclude=current&appid=${api}`
        );

        if (!response.ok) {
          throw new Error("Weather data not found");
        }
        const data = await response.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      }
    }
  };

  useEffect(() => {
    setWeather(null);
  }, [latitude, longitude]);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      fetchWeatherData();
    }
  }, [latitude, longitude]);

  console.log(weather);

  return (
    <>
      <input
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          textAlign: "center",
          borderRadius: "2px",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.6)",
        }}
        type="number"
        placeholder="Latitude"
        value={latitude ?? ""}
        onChange={(e) => setLatitude(Number(e.target.value))}
      />
      <input
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          textAlign: "center",
          borderRadius: "2px",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.6)",
        }}
        type="number"
        placeholder="Longitude"
        value={longitude ?? ""}
        onChange={(e) => setLongitude(Number(e.target.value))}
      />
      <div>
        <button style={{ margin: "5px" }} onClick={getLocation}>
          Auto check my location
        </button>
      </div>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {latitude !== null && longitude !== null && (
        <p>
          Latitude: {latitude} <br />
          Longitude: {longitude}
        </p>
      )}

      {weather ? (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp)}°C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        latitude !== null &&
        longitude !== null && <p>Fetching weather data...</p>
      )}
    </>
  );
}

export default WeatherApp;
