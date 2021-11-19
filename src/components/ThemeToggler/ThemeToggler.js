import styled from 'styled-components';

const StyledWrapper = styled.div`
	position: relative;
	margin: 5px 20px;
`;
const StyledOverlay = styled.label`
	background-color: red;
`;

const ThemeToggler = () => {
	return (
		<StyledWrapper>
			<StyledOverlay htmlFor="themeToggler">
				<input id="themeToggler" type="checkbox" />
			</StyledOverlay>
		</StyledWrapper>
	);
};

export default ThemeToggler;
