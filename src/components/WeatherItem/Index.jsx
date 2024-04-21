import React, { useEffect, useState } from "react";
import { apiKey, kelvinT } from "../../utils/var";


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
            <div>
                {weatherData && weatherData.weather && (
                    <>
                    <p>{weatherData.name}</p>
                    <p>{weatherData.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
                    <p>Temperature: {Math.floor(weatherData.main.temp - kelvinT)}</p>
                   
                   <p>Feels like: {Math.floor(weatherData.main.feels_like - kelvinT)}°C</p>
                   <p>Wind: {Math.floor(weatherData.wind.speed)} m/s</p>
                   <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleString()}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleString()}</p>
                  </>
                    
                )}
            
          
            </div>
    );
}

export default WeatherItem;