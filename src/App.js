import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Index';
import WeatherItem from './components/WeatherItem/Index';
import { useState } from 'react';

function App() {
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

export default App;
