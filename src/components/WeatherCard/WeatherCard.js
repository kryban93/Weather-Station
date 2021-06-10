import icons from '../../assets/icons';
import style from './WeatherCard.module.scss';

const WeatherCard = ({ actualforecast }) => {
  return (
    <div className={style.container}>
      <div className={style.sunrise}>
        <img src={icons.sunrise} alt='sunrise icon' />
        <p></p>
      </div>
      <div className={style.sunset}>
        <img src={icons.sunset} alt='sunset icon' />
      </div>
    </div>
  );
};

export default WeatherCard;
