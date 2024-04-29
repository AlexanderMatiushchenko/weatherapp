import React, { useState, useEffect } from "react";
import { apiKey } from "../../utils/var";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./index.module.css"
import { kelvinT } from "../../utils/var";


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
        <div id="carouselExample" className={`carousel slide ${s.customCarouselExample}`}>

            <div className="carousel-inner" >
                {weatherForecastData && weatherForecastData.list && weatherForecastData.list.filter((item, index, self) => {
                    const date = new Date(item.dt * 1000).toLocaleDateString();
                    return self.findIndex(obj => new Date(obj.dt * 1000).toLocaleDateString() === date) === index;
                }).map((item, index) => {

                    const date = new Date(item.dt * 1000).toLocaleDateString();
                    const dayItems = weatherForecastData.list.filter(obj => new Date(obj.dt * 1000).toLocaleDateString() === date);
                    const maxTemp = Math.max(...dayItems.map(obj => obj.main.temp));
                    const minTemp = Math.min(...dayItems.map(obj => obj.main.temp));
                    
                    return (
                        <div className={`carousel-item custom-carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="container">
                                <div className="row">
                                <div className={`col-md-2 ${s.customColMd2}`}>
                                        <p>{date}</p>
                                        
                                        <img className={s.imgForecastFiveDays} src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Icon" />
                                        <p>{item.weather[0].description}</p>
                                        <p>{Math.floor(maxTemp - kelvinT)}°/{Math.floor(minTemp - kelvinT)}°</p>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className={`carousel-control-prev-icon ${s.customCarouseControlIcon}`}aria-hidden="true"></span>
                <span className="visually-hidden">Prev</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className={`carousel-control-next-icon ${s.customCarouseControlIcon}`} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default WeatherCarouselFiveDays;
