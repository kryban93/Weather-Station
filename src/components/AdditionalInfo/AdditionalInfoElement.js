import styled from 'styled-components';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

const StyledSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.additional};
  font-weight: ${({ theme }) => theme.fontWeights.additional};
  font-size: ${({ theme }) => theme.fontSizes.fontXxs};
`;

const AdditionalInfoElement = ({ description, value, unit }) => {
  return (
    <StyledWrapper>
      <Paragraph>{description}</Paragraph>
      <Heading>
        {value}
        <StyledSpan>{unit}</StyledSpan>
      </Heading>
    </StyledWrapper>
  );
};

export default AdditionalInfoElement;
