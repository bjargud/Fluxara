import React, { useState, useEffect } from "react";
import '../style/features/Tab.css';
import '../style/features/Tab.queries.css';
import axios from "axios";
import {weatherIconHandler} from "../features/IconList";
import fewClouds from '../helpers/icons/iconfinder_Cloudy_5729391.png'

function Weather({ location, country }) {
  const [weather, setWeather] = useState(0);
  const [temperature, setTemperature] = useState("");
  const [icon, setIcon] = useState(fewClouds);

  const weatherHandler = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63b315b5735333544a468d5016b1b9f1`;
    const response = axios
      .get(url)
      .then((data) => {
        setWeather(data.data.weather[0].description);
        let tempConverted = Math.round(
          ((data.data.main.temp - 273.5) * 9) / 5 + 32
        );
        setTemperature(tempConverted);
      })
      .catch((error) => {
        if (error.response) {
            console.log(error.response.data);
        }
      });
    return response;
  };

  useEffect(() => {
    weatherIconHandler(weather, setIcon)
    weatherHandler(location);
    // eslint-disable-next-line
  }, [weather]);

  return (
    <div className="Tab">
      <img alt="" src={icon} className='weather-second' style= {{
          height: '40%',
          width: '30%'
      }} />

      <div className='Tab_temp'> {temperature} ° c </div>
      <div className='Tab_weather'> {weather} </div>
      <div className='Tab_loco'>
        {" "}
        {location}, {country}{" "}
      </div>
      <a href='/' className='Tab_reset'> <button className='Tab_reset--btn' >Settings</button></a>
    </div>
  );
}

export default Weather;
