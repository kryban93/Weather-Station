import styled from 'styled-components';

const StyledWrapper = styled.div`
	position: relative;
	display: flex;
	box-sizing: border-box;
	padding: 5px;
	margin: 5px;
	width: 80px;
	height: 40px;
`;
const StyledLabel = styled.label`
	position: relative;
	background-color: white;
	width: 60px;
	height: 29px;
	border-radius: 50px;
	cursor: pointer;
	transition: background-color 0.2s ease-out;

	&:checked {
		background-color: blue;
	}
`;

const StyledSpan = styled.span`
	position: absolute;
	content: '';
	background-color: gray;
	height: 25px;
	width: 25px;
	top: 2px;
	left: 2px;
	border-radius: 50px;
	transition: left 0.4s ease-in, background-color 0.4s ease-in;
`;

const StyledInput = styled.input`
	opacity: 0;
	width: 0;
	height: 0;

	&:checked + ${StyledSpan} {
		background-color: red;
		left: 33px;
	}
`;

const ThemeToggler = () => {
	return (
		<StyledWrapper>
			<StyledLabel htmlFor="themeToggler">
				<StyledInput id="themeToggler" type="checkbox" />
				<StyledSpan />
			</StyledLabel>
		</StyledWrapper>
	);
};

export default ThemeToggler;
