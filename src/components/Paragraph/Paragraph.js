import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.body};
  font-size: ${({ theme }) => theme.fontSizes.fontXxs};
`;

const Paragraph = ({ className, children }) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

export default Paragraph;
