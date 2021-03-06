import PropTypes from 'prop-types';

const SunTimeWrapper = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export default SunTimeWrapper;

SunTimeWrapper.propTypes = {
	className: PropTypes.string,
	children: PropTypes.array.isRequired,
};

SunTimeWrapper.defaultProps = {
	className: '',
};
