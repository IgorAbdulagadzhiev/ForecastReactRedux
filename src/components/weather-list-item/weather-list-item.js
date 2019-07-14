import React from 'react';
import styled from 'styled-components';

const WeatherListItem = ({day}) => {
  const {
    weather_state_name: name,
    weather_state_abbr: abbr,
    the_temp: temp,
    applicable_date: date,
  } = day;
  return (
    <div>
      <DateDiv>
        <img width={48} height={48} src={`/static/img/weather/${abbr}.svg`} alt={`${name} icon`}></img>
        <StyledDate>{date}</StyledDate>
      </DateDiv>

      <DegDiv>
        <StyledWeather>{name}</StyledWeather>
        <StyledDeg>{temp.toFixed(1)} ℃</StyledDeg>
      </DegDiv>
    </div>
  )
}

const DateDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledWeather = styled.span`
  font-size: 18px;
`;

const DegDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

const StyledDeg = styled.span`
  font-size: 18px;
`;

const StyledDate = styled.h3`
  margin-left: 10px;
`;

export default WeatherListItem;