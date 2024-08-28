import { useState } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    input: '',
    data: null,
    loading: false,
    error: false,
    city: null,
  });

  const mockWeatherData = {
    'New York': {
      temperature: '22°C',
      humidity: '56%',
      windSpeed: '15 km/h',
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    London: {
      temperature: '15°C',
      humidity: '70%',
      windSpeed: '20 km/h',
    },
  };

  const lookupTable = Object.keys(mockWeatherData).reduce((acc, city) => {
    acc[city.toLowerCase()] = city;
    return acc;
  }, {});

  const handleInput = (e) => {
    const { value } = e.target;
    setWeatherData((prevState) => ({
      ...prevState,
      input: value,
      error: false,
    }));
  };

  const handleSearch = () => {
    setWeatherData((prevState) => ({
      ...prevState,
      loading: true,
      data: null,
      error: false,
    }));

    setTimeout(() => {
      const cityInput = weatherData.input.trim().toLowerCase();
      const originalCityName = lookupTable[cityInput];
      if (originalCityName) {
        setWeatherData((prev) => ({
          ...prev,
          input: '',
          data: mockWeatherData[originalCityName],
          loading: false,
          city: originalCityName,
        }));
      } else {
        setWeatherData({
          input: weatherData.input,
          data: null,
          loading: false,
          error: true,
          city: null,
        });
      }
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        value={weatherData.input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>

      {weatherData.loading && <p>Loading...</p>}
      {weatherData.error && <p>City not found.</p>}
      {weatherData.data && (
        <div>
          <p>City: {weatherData.city}</p>
          <p>Temperature: {weatherData.data.temperature}</p>
          <p>Humidity: {weatherData.data.humidity}</p>
          <p>Wind Speed: {weatherData.data.windSpeed}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
