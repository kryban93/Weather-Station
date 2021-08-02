import styled from 'styled-components';
import WeatherChart from './WeatherChart';
import { prepareChartData } from '../../additional';
const StyledWrapper = styled.section``;

const WeatherChartWrapper = ({ chartData, className }) => {
  const data = prepareChartData(chartData);
  console.log(data);
  return (
    <StyledWrapper className={className}>
      <WeatherChart data={data} />
    </StyledWrapper>
  );
};

export default WeatherChartWrapper;
