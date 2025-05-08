import React from 'react';

function WeatherInfo({ data }) {
  if (!data) {
    return <p>لا توجد بيانات طقس للعرض.</p>;
  }

  const { name, main, weather, wind } = data;

  return (
    <div className='wind'>
      <h2>{name}</h2>
      {main && (
        <div>
          <p>درجة الحرارة: {Math.round(main.temp)}°C</p>
          <p>الرطوبة: {main.humidity}%</p>
        </div>
      )}
      {weather && weather.length > 0 && (
        <p>الحالة: {weather[0].description}</p>
      )}
      {wind && (
        <p>سرعة الرياح: {wind.speed} م/ث</p>
      )}
    </div>
  );
}

export default WeatherInfo;