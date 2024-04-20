import React, { useEffect } from "react";
import { apiKey } from "../../utils/var";
import {cityName}from "../Input/Index";

function WeatherItem(props) {
    useEffect(() => {
        fetchData();
    }, [props.cityName]);

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}`;

    console.log(apiKey);

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const weatherData = await response.json();
            console.log(weatherData);
        } catch (error) {
            console.log("weatherItem:", error);
        }
    };

    return (
        <div>
            <p>text</p>
        </div>
    );
}

export default WeatherItem;