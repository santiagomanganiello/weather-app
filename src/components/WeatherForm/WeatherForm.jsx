
import './style/form.css';
import { useState } from 'react';
import { getWeatherAsync, weatherStates } from '../../utils/MockData';
import searchicon from '../../assets/point.png'
import searchbutton from '../../assets/search.png'
import wind from '../../assets/wind.png'
import humidity from '../../assets/humidity.png'

const WeatherForm = () => {

    const [city, setCity] = useState('')
    const [dataweather, setDataweather] = useState({})

    const getWeather = (city) => {
        getWeatherAsync(city).then((data) => { 
        setDataweather(data)
        console.log(data)  
        });
    }
    const handleChange = ({ target }) => {
        setCity(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (city === null || city === '') {
            getWeather('buenos aires')
        } else {
            getWeather(city)
        }
    }

        return (
            <form>
                <div className='search'>
                <input type="text" placeholder="Enter city name" onChange={(e) => handleChange(e)} className='inputCity' />
                <button onClick={(e) => handleSubmit(e)} className='btnSearch'><img src={searchbutton} alt="" className='search-button' /></button>
                </div>

                <div className='weather'>
                { dataweather.main && <p className='weatherState-icon'><img src={weatherStates[dataweather.weather[0].description][dataweather.weather[0].icon]} className='weatherState-icon' />  </p> }
                { dataweather.weather && <p className='weatherState-description'>{dataweather.weather[0].description && dataweather.weather[0].icon === weatherStates[1] }</p> }
                { dataweather.main && <h1 className='title'>{Math.round(dataweather.main.temp)}°C</h1> }
                </div>

                { dataweather.name && dataweather.sys && <p className='city'><img src={searchicon} alt="" className='search-icon' /> {dataweather.name}, {dataweather.sys.country} </p>   }  
                
                <div className='info'>
                { dataweather.main && <p className='wind'><img src={wind} className='wind-icon' /> {dataweather.wind.speed} km/h</p> }
                { dataweather.main && <p className='humidity'><img src={humidity} className='humidity-icon' /> {dataweather.main.humidity}%</p> }
                </div>
            </form>
        )
}; 

export default WeatherForm
