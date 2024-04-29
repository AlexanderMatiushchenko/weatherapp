
import React, { useEffect, useState } from "react";
import { apiKey } from "../../utils/var";
import Input from '../Input/Index';
import WeatherItem from '../WeatherItem/Index';
import WeatherCarouselFiveDays from '../WeatherCarouselFiveDays/Index';
import s from './index.module.css'

function DisplayWeather() {
    const [cityName, setCityName] = useState('');
    const [weatherForecastData, setWeatherForecastData] = useState(null);
    const handleCityNameChange = (newCityName) => {
        setCityName(newCityName);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`);
                const data = await response.json();
                setWeatherForecastData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchData();
    }, [cityName]);

    return (
        <div className={s.mainContainer}>
            <Input onCityNameChange={handleCityNameChange} />
            
            <WeatherItem cityName={cityName} />
            <WeatherCarouselFiveDays cityName={cityName}  />
           
        </div>
    );
}

export default DisplayWeather;
