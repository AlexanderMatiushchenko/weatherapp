import React, {useState} from "react";
import { Icon } from '@iconify/react';
import s from './index.module.css'

function Input({ onCityNameChange }){

    const [cityName, setCityName] = useState('');

    const handleInputChange = (e) => {
        setCityName(e.target.value);
    }
    const handleButtonCklick = ()=>{
        onCityNameChange(cityName)
    }

    return (
        <div className={s.mainContainerInput}>
        <input type="text" onChange={handleInputChange} placeholder='City' />
        <button className={s.inputButton} onClick={handleButtonCklick}><Icon icon="gis:search-map"  /></button>
        </div>
    )

};
export default Input;