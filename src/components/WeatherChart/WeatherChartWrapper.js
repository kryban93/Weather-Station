import styled from 'styled-components';
import WeatherChart from './WeatherChart';
import { prepareChartData } from '../../additional';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.section`
display: flex
flex-direction: column;
`;

const ChartNavigation = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledButton = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
`;

const WeatherChartWrapper = ({ chartData, className }) => {
	const data = prepareChartData(chartData);
	console.log(data);
	return (
		<StyledWrapper className={className}>
			<WeatherChart data={data} />
			<ChartNavigation>
				<StyledButton>left</StyledButton>
				<Paragraph>date</Paragraph>
				<StyledButton>right</StyledButton>
			</ChartNavigation>
		</StyledWrapper>
	);
};

export default WeatherChartWrapper;
