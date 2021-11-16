import PropTypes from 'prop-types';

const IconWrapper = ({ src, className, alt }) => {
	return <img src={src} className={className} alt={alt} />;
};

export default IconWrapper;

IconWrapper.propTypes = {
	src: PropTypes.string.isRequired,
	className: PropTypes.string,
	alt: PropTypes.string.isRequired,
};

IconWrapper.defaultProps = {
	className: '',
};
