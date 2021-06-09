import style from './WeatherCard.module.scss';

const WeatherCard = ({ actualforecast }) => {
  return (
    <div className={style.wrapper}>
      {Object.keys(actualforecast).map((key) => (
        <div className={style.content}>
          <h3>{actualforecast[key].desc}</h3>
          <p>{actualforecast[key].value}</p>
          <p>{actualforecast[key].unit}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;
