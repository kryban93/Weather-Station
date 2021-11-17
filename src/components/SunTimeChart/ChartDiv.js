import PropTypes from 'prop-types';

const ChartDiv = ({ className, children }) => {
	return <div className={className}> {children}</div>;
};

export default ChartDiv;

ChartDiv.propTypes = {
	className: PropTypes.string,
	children: PropTypes.array,
};

ChartDiv.defaultProps = {
	className: '',
	children: [],
};
