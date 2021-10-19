import ChartWrapper from './ChartWrapper';
import ChartValue from './ChartValue';
import Overlay from './Overlay';

const SunTimeChart = ({ timePassedDegrees }) => {
	return (
		<ChartWrapper>
			<ChartValue timePassedDegrees={timePassedDegrees} />
			<Overlay />
		</ChartWrapper>
	);
};

export default SunTimeChart;
