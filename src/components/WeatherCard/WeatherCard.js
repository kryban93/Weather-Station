import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from '../../assets/icons';
import SunTimeChart from '../SunTimeChart/SunTimeChart';
import SunTimeValue from '../SunTimeValue/SunTimeValue';
import IconComponent from '../IconComponent/IconComponent';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import WeatherCardIcon from '../WeatherCardIcon/WeatherCardIcon';

const StyledWrapper = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 90%;
	z-index: 3;
`;

const Content = styled.div`
	display: flex;
	position: absolute;
	top: 50px;
	flex-direction: row;
	flex-wrap: wrap;
	width: 325px;
	justify-content: space-between;
	align-items: flex-end;
`;

const TemperatureInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledHeading = styled(Heading)`
	font-size: ${({ theme }) => theme.fontSizes.fontXxl};
	margin: 0;
	padding: 0;
	line-height: initial;
`;

const StyledSpan = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.fontL};
`;

const WeatherCard = ({ weatherCardData }) => {
	const sunrise = `${weatherCardData.sunrise.getHours()}:${weatherCardData.sunrise.getMinutes()}`;
	const sunset = `${weatherCardData.sunset.getHours()}:${weatherCardData.sunset.getMinutes()}`;
	const actualTime = new Date();
	const suntime =
		weatherCardData.sunset.getTime() - weatherCardData.sunrise.getTime();
	const timePassed = actualTime.getTime() - weatherCardData.sunrise.getTime();
	const timePassedPercentage = (timePassed / suntime) * 100;
	const timePassedDegrees = Math.floor(
		180 - (180 * timePassedPercentage) / 100,
	);

	return (
		<StyledWrapper>
			<SunTimeChart timePassedDegrees={timePassedDegrees} />
			<Content>
				<SunTimeValue>
					<IconComponent src={icons.sunrise} alt="sunsire icon" />
					<Paragraph>{sunrise}</Paragraph>
				</SunTimeValue>
				<TemperatureInfo>
					<WeatherCardIcon clouds={weatherCardData.clouds} />
					<StyledHeading>
						{weatherCardData.temp.value}
						<StyledSpan>{weatherCardData.temp.unit}</StyledSpan>
					</StyledHeading>
				</TemperatureInfo>
				<SunTimeValue>
					<IconComponent src={icons.sunset} alt="sunset icon" />
					<Paragraph>{sunset}</Paragraph>
				</SunTimeValue>
			</Content>
		</StyledWrapper>
	);
};

export default WeatherCard;

WeatherCard.propTypes = {
	weatherCardData: PropTypes.shape({
		sunrise: PropTypes.string.isRequired,
		sunset: PropTypes.string.isRequired,
		clouds: PropTypes.number.isRequired,
		temp: PropTypes.shape({
			value: PropTypes.number.isRequired,
			unit: PropTypes.string.isRequired,
		}),
	}).isRequired,
};
