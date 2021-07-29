import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.fontM};
  font-weight: ${(props) => props.theme.fontWeights.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: ${(props) => props.theme.lineHeights.heading};
  margin: 5px;
`;

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
