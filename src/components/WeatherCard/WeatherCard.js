import { useEffect } from 'react';
import icons from '../../assets/icons';
import style from './WeatherCard.module.scss';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  border: 1px solid red;
`;

const WeatherCard = ({ weatherCardData }) => {
  let sunrise = `${weatherCardData.sunrise.getHours()}:${weatherCardData.sunrise.getMinutes()}`;
  let sunset = `${weatherCardData.sunset.getHours()}:${weatherCardData.sunset.getMinutes()}`;

  return (
    <StyledWrapper>
      <div className={style.timebar}>
        <div className={style.timebar__content}>
          <div className={style.timebar__time}>
            <img src={icons.sunrise} className={style.timebar__image} alt='sunrise icon' />
            <p>{sunrise}</p>
          </div>
          <div className={style.timebar__time}>
            <img src={icons.sunset} className={style.timebar__image} alt='sunset icon' />
            <p>{sunset}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default WeatherCard;
