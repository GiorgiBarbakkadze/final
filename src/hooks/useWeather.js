import { useState, useEffect } from 'react';

export const useWeather = (city = 'Tbilisi') => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Mock weather data since we can't use real API keys
        const mockWeather = {
          location: {
            name: city,
            country: 'Georgia',
            region: 'Tbilisi',
            lat: 41.7151,
            lon: 44.8271,
            localtime: new Date().toLocaleString(),
          },
          current: {
            temperature: Math.floor(Math.random() * 25) + 15,
            condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Overcast'][Math.floor(Math.random() * 4)],
            humidity: Math.floor(Math.random() * 40) + 40,
            windSpeed: Math.floor(Math.random() * 15) + 5,
            pressure: Math.floor(Math.random() * 50) + 1000,
            visibility: Math.floor(Math.random() * 10) + 5,
            uvIndex: Math.floor(Math.random() * 10) + 1,
            feelsLike: Math.floor(Math.random() * 25) + 15,
            icon: 'sunny',
          },
          forecast: Array.from({ length: 5 }, (_, i) => ({
            date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            day: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
            maxTemp: Math.floor(Math.random() * 10) + 20,
            minTemp: Math.floor(Math.random() * 10) + 10,
            condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rain'][Math.floor(Math.random() * 4)],
            icon: 'sunny',
            humidity: Math.floor(Math.random() * 40) + 40,
            windSpeed: Math.floor(Math.random() * 15) + 5,
          })),
        };

        setWeather(mockWeather.current);
        setForecast(mockWeather.forecast);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, forecast, loading, error };
}; 