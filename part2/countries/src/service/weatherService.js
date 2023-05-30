import axios from "axios";

const url = 'https://api.openweathermap.org/data/2.5/weather?'
const api_key = process.env.REACT_APP_API_KEY
const key = '94dff518380daa980b3fb883dcb21f43'
const getWeather = (lat, lon) => {
    return axios.get(`${url}lat=${lat}&lon=${lon}&appid=${api_key}`).then(response => response.data)
}

export default {getWeather}