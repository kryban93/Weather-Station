import styled from 'styled-components';
import icons from '../../assets/icons';
import IconComponent from '../IconComponent/IconComponent';

const StyledIconComponent = styled(IconComponent)`
	height: 100px;
	width: 100px;
	z-index: 2;
`;

const WeatherCardIcon = ({ clouds }) => {
	const { weatherCard: weatherIcons } = icons;
	console.log(clouds);

	const selectActualWeatherIcon = () => {
		const actualHours = new Date().getHours();
		const timeOfDay = actualHours > 5 && actualHours < 21 ? 'day' : 'night';
		if (!clouds) {
			return;
		}
		if (clouds < 25) {
			return weatherIcons[timeOfDay].clear;
		}
		if (clouds < 50) {
			return weatherIcons[timeOfDay].partlyCloudy;
		}
		if (clouds < 75) {
			return weatherIcons[timeOfDay].mostlyCloudy;
		}
		return weatherIcons[timeOfDay].cloudy;
	};
	const actualWeatherIcon = selectActualWeatherIcon();
	return <StyledIconComponent src={actualWeatherIcon} alt="weather icon" />;
};

export default WeatherCardIcon;
