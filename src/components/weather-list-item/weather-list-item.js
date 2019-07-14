import React from 'react';

const WeatherListItem = ({day, title}) => {
  const {
    weather_state_name: name,
    weather_state_abbr: abbr,
    the_temp: temp,
    applicable_date: date,
  } = day;
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <img src={`/static/img/weather/png/64/${abbr}.png`} alt={`${name} icon`}></img>
        <span>{name}</span>
        <span>{temp.toFixed(1)}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

export default WeatherListItem;