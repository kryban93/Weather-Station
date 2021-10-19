import styled from 'styled-components';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts';
import useWindowDimensions from '../../additional/useWindowDimensions';

const StyledWrapper = styled.div`
	box-sizing: border-box;
	position: relative;
	padding: 10px;
`;

const StyledTooltip = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid red;
`;

const WeatherChart = ({ data }) => {
	const { width } = useWindowDimensions();

	return (
		<StyledWrapper>
			<LineChart width={width - 100} height={300} data={data}>
				<Line type="monotone" dataKey="temperature" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="3" />
				<XAxis dataKey="time" />
				<YAxis unit="°C" />
				<Tooltip content={StyledTooltip} />
			</LineChart>
		</StyledWrapper>
	);
};

export default WeatherChart;
