import styled from 'styled-components';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin: 3px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 3px;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.2s ease;
  }
`;

const StyledSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.additional};
  font-weight: ${({ theme }) => theme.fontWeights.additional};
  font-size: ${({ theme }) => theme.fontSizes.fontXxs};
`;

const StyledHeading = styled(Heading)`
 margin: 0;
 pading; 0;
 line-height: initial;
`;

const AdditionalInfoElement = ({ description, value, unit }) => {
  return (
    <StyledWrapper>
      <Paragraph>{description}</Paragraph>
      <StyledHeading>
        {value}
        <StyledSpan>{unit}</StyledSpan>
      </StyledHeading>
    </StyledWrapper>
  );
};

export default AdditionalInfoElement;
