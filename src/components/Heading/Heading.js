import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fontM};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  margin: 5px;
`;

const Heading = ({ children, className }) => {
  return <StyledHeading className={className}>{children}</StyledHeading>;
};

export default Heading;
