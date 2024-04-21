import logo from './logo.svg';
import s from './App.css'
import DisplayWeather from './components/DisplayWeather/Index';


function App() {
  

  return (
      <div className={s.app}>
          <DisplayWeather />
      </div>
  );
}

export default App;
