
import React, { useState } from 'react';
import Input from '../Input/Index';
import WeatherItem from '../WeatherItem/Index';

function DisplayWeather() {
    const [cityName, setCityName] = useState('');

    const handleCityNameChange = (newCityName) => {
        setCityName(newCityName);
    };

    return (
        <div>
            <Input onCityNameChange={handleCityNameChange} />
            <WeatherItem cityName={cityName} />
        </div>
    );
}

export default DisplayWeather;
