
import React, { useState } from 'react';
import Input from '../Input/Index';
import WeatherItem from '../WeatherItem/Index';
import WeatherItemFiveDays from '../WeatherItemFiveDays/Index';
import s from './index.module.css'

function DisplayWeather() {
    const [cityName, setCityName] = useState('');

    const handleCityNameChange = (newCityName) => {
        setCityName(newCityName);
    };

    return (
        <div className={s.mainContainer}>
            <Input onCityNameChange={handleCityNameChange} />
        
            <WeatherItem cityName={cityName} />
           {/* <WeatherItemFiveDays cityName={cityName} /> */}
        </div>
    );
}

export default DisplayWeather;
