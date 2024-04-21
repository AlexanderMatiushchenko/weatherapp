import React, {useState} from "react";
import { Icon } from '@iconify/react';

function Input({ onCityNameChange }){

    const [cityName, setCityName] = useState('');

    const handleInputChange = (e) => {
        setCityName(e.target.value);
    }
    const handleButtonCklick = ()=>{
        onCityNameChange(cityName)
    }

    return (
        <div>
        <h3>City</h3>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleButtonCklick}><Icon icon="solar:map-point-search-line-duotone" /></button>
        </div>
    )

};
export default Input;