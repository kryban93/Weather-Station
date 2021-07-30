import icons from '../../assets/icons';
import style from './WeatherCard.module.scss';
import styled from 'styled-components';
import SunTimeChart from '../SunTimeChart/SunTimeChart';

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
  const timePassedDegrees = (180 * timePassedPercentage) / 100;

  console.log(suntime);
  console.log(timePassed);
  console.log(timePassedDegrees);

  return (
    <StyledWrapper>
      <SunTimeChart timePassedDegrees={timePassedDegrees} />
      <Content>
        <div className={style.timebar__time}>
          <img src={icons.sunrise} className={style.timebar__image} alt='sunrise icon' />
          <p>{sunrise}</p>
        </div>
        <div className={style.timebar__time}>
          <img src={icons.sunset} className={style.timebar__image} alt='sunset icon' />
          <p>{sunset}</p>
        </div>
      </Content>
    </StyledWrapper>
  );
};

export default WeatherCard;
