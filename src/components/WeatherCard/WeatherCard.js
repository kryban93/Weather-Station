import icons from '../../assets/icons';
import styled from 'styled-components';
import ChartWrapper from '../SunTimeChart/ChartWrapper';
import ChartValue from '../SunTimeChart/ChartValue';
import Overlay from '../SunTimeChart/Overlay';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  justify-content: space-between;
`;

const WeatherCard = ({ weatherCardData }) => {
  const sunrise = `${weatherCardData.sunrise.getHours()}:${weatherCardData.sunrise.getMinutes()}`;
  const sunset = `${weatherCardData.sunset.getHours()}:${weatherCardData.sunset.getMinutes()}`;
  const actualTime = new Date();
  const suntime = weatherCardData.sunset.getTime() - weatherCardData.sunrise.getTime();
  const timePassed = actualTime.getTime() - weatherCardData.sunrise.getTime();
  const timePassedPercentage = (timePassed / suntime) * 100;
  const timePassedDegrees = Math.floor(180 - (180 * timePassedPercentage) / 100);

  console.log(weatherCardData.sunset.getTime());
  console.log(weatherCardData.sunrise.getTime());
  console.log(suntime);
  console.log(actualTime.getTime());
  console.log(timePassed);

  return (
    <StyledWrapper>
      <ChartWrapper>
        <ChartValue timePassedDegrees={timePassedDegrees} />
        <Overlay />
      </ChartWrapper>
      <Content>
        <div>
          <img src={icons.sunrise} alt='sunrise icon' />
          <p>{sunrise}</p>
        </div>
        <div>
          <img src={icons.sunset} alt='sunset icon' />
          <p>{sunset}</p>
        </div>
      </Content>
    </StyledWrapper>
  );
};

export default WeatherCard;
