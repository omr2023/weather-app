import React, { useState } from 'react';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import Error from './components/Error';

const API_KEY = 'ab56f6a1e990a5bc067f581cfa00c4f3'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setWeatherData(null); // إعادة تعيين بيانات الطقس عند البحث الجديد
    setError(null); // إعادة تعيين أي خطأ سابق

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ar`
      );

      if (!response.ok) {
        const message = `حدث خطأ: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('حدث خطأ أثناء جلب بيانات الطقس:', error);
      setError('فشلت في جلب بيانات الطقس. يرجى التحقق من اسم المدينة والمحاولة مرة أخرى.');
    }
  };

  return (
    <div>
      <h1>تطبيق حالة الطقس</h1>
      <Search onSearch={handleSearch} />
      {weatherData && <WeatherInfo data={weatherData} />}
      {error && <Error message={error} />}
    </div>
  );
}

export default App;