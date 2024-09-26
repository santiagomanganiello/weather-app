const url = 'https://api.openweathermap.org/data/2.5/weather?'
const apikey = 'a147827d5d05d9a4344d62e47f79874f'

export const getWeatherAsync = (city) => {
    return fetch(`${url}&q=${city}&appid=${apikey}&units=metric`).then((res) => res.json())
}

export const weatherStates = {
    'clear sky': {
        '01d': 'https://openweathermap.org/img/wn/01d@2x.png',
        '01n': 'https://openweathermap.org/img/wn/01n@2x.png'
    } , 
    'few clouds': {
        '02d': 'https://openweathermap.org/img/wn/02d@2x.png',
        '02n': 'https://openweathermap.org/img/wn/02n@2x.png'
    },
    'scattered clouds': {
        '03d': 'https://openweathermap.org/img/wn/03d@2x.png',
        '03n': 'https://openweathermap.org/img/wn/03n@2x.png'
    },
    'broken clouds': {
        '04d': 'https://openweathermap.org/img/wn/04d@2x.png',
        '04n': 'https://openweathermap.org/img/wn/04n@2x.png'
    },
    'overcast clouds': {
        '04d': 'https://openweathermap.org/img/wn/04d@2x.png',
        '04n': 'https://openweathermap.org/img/wn/04n@2x.png'
    },
    'light rain': {
        '10d': 'https://openweathermap.org/img/wn/09d@2x.png',
        '10n': 'https://openweathermap.org/img/wn/09n@2x.png'
    },
    'shower rain': {
        '09d': 'https://openweathermap.org/img/wn/09d@2x.png',
        '09n': 'https://openweathermap.org/img/wn/09n@2x.png'
    },
    'heavy intensity rain': {
        '10d': 'https://openweathermap.org/img/wn/10d@2x.png',
        '10n': 'https://openweathermap.org/img/wn/10n@2x.png'
    },
    'thunderstorm': {
        '11d': 'https://openweathermap.org/img/wn/11d@2x.png',
        '11n': 'https://openweathermap.org/img/wn/11n@2x.png'
    },
    'snow': {
        '13d': 'https://openweathermap.org/img/wn/13d@2x.png',
        '13n': 'https://openweathermap.org/img/wn/13n@2x.png'
    },
    'mist': {
        '50d': 'https://openweathermap.org/img/wn/50d@2x.png',
        '50n': 'https://openweathermap.org/img/wn/50n@2x.png'
    }
}