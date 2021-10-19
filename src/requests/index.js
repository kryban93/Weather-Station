import axios from 'axios';

const accessKey = process.env.REACT_APP_ACCESS_KEY;

export const fetchFiveDaysForecastById = (cityId) => {
	return axios.get(
		`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${accessKey}`,
	);
};

export const fetchCitiesList = () => {
	return axios.get('./city_list_min.json');
};
