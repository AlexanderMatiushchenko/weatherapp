    import React, { useEffect, useState } from "react";
    import { apiKey,kelvinT } from "../../utils/var";

    function WeatherItemFiveDays({cityName}){

        const [weatherForecastData, setWeatherForecastData] = useState(null);

      
        const apiForecastFiveUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

        const fetchData = async ()=>{
            try{
                const response = await fetch(apiForecastFiveUrl);
                const weatherForecastData = await response.json();
                setWeatherForecastData (weatherForecastData);   
            }
        
            catch (error){
                console.log("weatherForecastData:", error);

            }
           
    
    }
    useEffect(()=>{
        fetchData();
    }, [cityName]);
    console.log(weatherForecastData);
    return (
        <div>
            {weatherForecastData && weatherForecastData.list && (
                <div>
                    {weatherForecastData.list
                        .filter((item, index, self) => {
                            const date = new Date(item.dt * 1000).toLocaleDateString();
                            return self.findIndex(obj => new Date(obj.dt * 1000).toLocaleDateString() === date) === index;
                        })
                        .map((item, index) => {
                            const date = new Date(item.dt * 1000).toLocaleDateString();
                            const dayItems = weatherForecastData.list.filter(obj => new Date(obj.dt * 1000).toLocaleDateString() === date);
                            const maxTemp = Math.max(...dayItems.map(obj => obj.main.temp));
                            const minTemp = Math.min(...dayItems.map(obj => obj.main.temp));
    
                            return (
                                <div key={index}>
                                    <p>Date: {date}</p>
                                    <p>Description: {item.weather[0].description}</p>
    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Icon" />
                                    <p>Max Temperature: {Math.floor(maxTemp - kelvinT)}°C</p>
                                    <p>Min Temperature: {Math.floor(minTemp - kelvinT)}°C</p>
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
    
                    }    
    export default WeatherItemFiveDays;
    