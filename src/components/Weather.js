import React from 'react';

const Weather = (props) => (
  <div className="weather">
    {props.city && (
      <div>
        <p>Location: {props.city}</p>
        <p>Temperature: {props.temp} °C</p>
        <p>Sunrise: {props.sunrise}</p>
        <p>Sunset: {props.sunset}</p>
      </div>
    )}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
