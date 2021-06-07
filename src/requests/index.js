import axios from 'axios';

const accessKey = process.env.REACT_APP_ACCESS_KEY;

export const fetchFiveDaysForecast = () => {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Cieszyn&appid=${accessKey}`);
};
