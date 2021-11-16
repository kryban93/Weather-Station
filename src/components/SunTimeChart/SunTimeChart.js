import PropTypes from 'prop-types';
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

SunTimeChart.propTypes = {
	timePassedDegrees: PropTypes.number.isRequired,
};
