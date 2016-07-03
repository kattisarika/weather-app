import axios from 'axios';

const API_KEY = '35a5be0b49c6169953ad911783051f3b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},dk`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}