import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherItemFiveDays from '../WeatherItemFiveDays/Index';
import img1 from "../../assets/SkyBlueGreen.png";
import styles from './index.module.css';
import img2 from "../../assets/Blue_sky_Background.png";

function WeatherCarouselFiveDays (){
    return(
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className={`${styles["d-block"]} ${styles["w-100"]} ${styles["carousel-img"]}`} alt="11111" /> 
                </div>
                <div className="carousel-item">
                    <img src={img2} className={`${styles["d-block"]} ${styles["w-100"]} ${styles["carousel-img"]}`} alt="2222" /> 
                </div>
                <div className="carousel-item">
                    <img src={img1} className={`${styles["d-block"]} ${styles["w-100"]} ${styles["carousel-img"]}`} alt="333333" />
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
