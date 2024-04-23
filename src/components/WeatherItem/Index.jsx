import React, { useEffect, useState } from "react";
import { apiKey, kelvinT } from "../../utils/var";
import ShowDate from "../ShowDate/Index";
import s from "./index.module.css"
import { Icon } from '@iconify/react';

function WeatherItem(props) {

    const [weatherData, setWeatherData] = useState(null);


    useEffect(() => {
        fetchData();
    }, [props.cityName]);

    

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}`;


    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const weatherData = await response.json();
            setWeatherData(weatherData);
        } catch (error) {
            console.log("weatherItem:", error);
        }
        console.log(weatherData);
    };


    return (
            <div className={s.mainContainer}>
               
                {weatherData && weatherData.weather && (
                    <>
                    <div className={s.cityWithDateAndIconWithDescription}>
                    <div className={s.containerwithDateAndCity}>
                    <div className={s.containerWithCity}>
                    <h2 className={s.cityName}>{weatherData.name}</h2>
                    </div>
                    <ShowDate />
                    </div>
                    <div className={s.iconWithDescription}>
                    <img className={s.weatherImage} src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
                    <p className={s.weatherText}>{weatherData.weather[0].description}</p>
                    </div>
                    </div>
                    <p className={s.weatherTemperature}>{Math.floor(weatherData.main.temp - kelvinT)}°C</p>
                   
                   <p className={s.weatherTemperatureFeelsLike}>Feels like: {Math.floor(weatherData.main.feels_like - kelvinT)}°C</p>
                   
                   <p className={s.weatherText}>Wind: {Math.floor(weatherData.wind.speed)} m/s</p>
                   <p className={s.weatherText}>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleString()}</p>
                    <p className={s.weatherText}>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleString()}</p>
                  </>
                    
                )}
            
          
            </div>
    );
}

export default WeatherItem;