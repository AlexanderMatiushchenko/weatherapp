import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherItemFiveDays from '../WeatherItemFiveDays/Index';

function WeatherCarouselFiveDays ({ cityName }){
    

    console.log(cityName);
    return(
        
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <WeatherItemFiveDays cityName={cityName} />
                    </div>
                    <div className="carousel-item">
                    
                    </div>
                    <div className="carousel-item">
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        
    )
}

export default WeatherCarouselFiveDays;
