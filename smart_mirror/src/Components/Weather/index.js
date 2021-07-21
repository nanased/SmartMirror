import axios from 'axios';
import React, {useState,useEffect} from 'react'; 

const weatherStylesheet = {
    celcius: {
        fontSize: '25px',
        paddingLeft: '30px',
        marginTop: '20px',
        marginBottom: '5px',
        textAlign: 'left',
    },
    fahrenheit: {
        fontSize: '25px',
        paddingLeft: '30px',
        marginTop: '0px',
        marginBottom: '5px',
        textAlign: 'left',
    },
    description: {
        fontSize: '25px',
        paddingLeft: '30px',
        marginTop: '0px',
        marginBottom: '0px',
        textAlign: 'left',
    }
}

  const Weather = ()=>{ 
    const [currentCelsius, setCurrentCelsius]=useState(0)
    const [currentFahrenheit, setCurrentFahrenheit]=useState(0)
    const [currentDescription, setCurrentDescription]=useState('sunny')
    const interval = setInterval(()=>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Palo%20Alto,04,001&appid=ec65a441203f1030e92aa3b62d2e09ff')
        .then(function (response) {
          // handle success
          console.log(response.data.main.temp);
          setCurrentCelsius(response.data.main.temp)
          setCurrentFahrenheit(response.data.main.temp)
          setCurrentDescription(response.data.weather[0].main)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },3600000); 
    useEffect(()=>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Palo%20Alto,04,001&appid=ec65a441203f1030e92aa3b62d2e09ff')
        .then(function (response) {
          // handle success
          console.log(response.data.weather[0].main);
          const celcius = Math.round(response.data.main.temp - 273.15);
          const fahrenheit = Math.round((response.data.main.temp - 273.15)*9/5+32)
          setCurrentCelsius(celcius)
          setCurrentFahrenheit(fahrenheit)
          setCurrentDescription(response.data.weather[0].main)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
        return ()=>{
            clearInterval(interval);
        }
    },[]); 
    
    return (
    <div>
        <p style = {weatherStylesheet.celcius}>{currentCelsius} C</p>
        <p style = {weatherStylesheet.fahrenheit}>{currentFahrenheit} F</p>
        <p style = {weatherStylesheet.description}>{currentDescription}</p>
    </div>
    )
  }
  export default Weather