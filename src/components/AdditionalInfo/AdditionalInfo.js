import styled from 'styled-components';
import AdditionalInfoElement from './AdditionalInfoElement';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 80%;
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
