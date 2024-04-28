import React, { useState, useEffect } from "react";
import { apiKey } from "../../utils/var";
import 'bootstrap/dist/css/bootstrap.min.css';

function WeatherCarouselFiveDays ({cityName}) {
    const [weatherForecastData, setWeatherForecastData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`);
                const data = await response.json();
                setWeatherForecastData(data);
            } catch (error) {
                console.log("Error fetching weather data:", error);
            }
        };

        fetchData();
    }, [cityName]);

    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                {weatherForecastData && weatherForecastData.list && weatherForecastData.list.filter((item, index, self) => {
                    const date = new Date(item.dt * 1000).toLocaleDateString();
                    return self.findIndex(obj => new Date(obj.dt * 1000).toLocaleDateString() === date) === index;
                }).map((item, index) => {
                    const date = new Date(item.dt * 1000).toLocaleDateString();
                    const dayItems = weatherForecastData.list.filter(obj => new Date(obj.dt * 1000).toLocaleDateString() === date);
                    const maxTemp = Math.max(...dayItems.map(obj => obj.main.temp));
                    const minTemp = Math.min(...dayItems.map(obj => obj.main.temp));
                    
                    return (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2">
                                        <p>Date: {date}</p>
                                        <p>Description: {item.weather[0].description}</p>
                                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Icon" />
                                        <p>Max Temperature: {Math.floor(maxTemp - 273.15)}°C</p>
                                        <p>Min Temperature: {Math.floor(minTemp - 273.15)}°C</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
}

export default WeatherCarouselFiveDays;
