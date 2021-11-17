import PropTypes from 'prop-types';
import styled from 'styled-components';
import AdditionalInfoElement from './AdditionalInfoElement';

const StyledWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 80%;
	margin-top: 100px;
`;

const AdditionalInfo = ({ className, actualforecast }) => {
	return (
		<StyledWrapper>
			{Object.keys(actualforecast).map((key) => (
				<AdditionalInfoElement
					description={actualforecast[key].desc}
					value={actualforecast[key].value}
					unit={actualforecast[key].unit}
					className={className}
					key={actualforecast[key].desc}
				/>
			))}
		</StyledWrapper>
	);
};

export default AdditionalInfo;

AdditionalInfo.propTypes = {
	className: PropTypes.string,
	actualforecast: PropTypes.shape({}).isRequired,
};

AdditionalInfo.defaultProps = {
	className: '',
};
