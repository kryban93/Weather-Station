export const findMatchCities = (wordToMatch, cities) => {
  while (wordToMatch && wordToMatch.length > 2) {
    return cities.filter((city) => {
      const regex = new RegExp('^' + wordToMatch, 'gi');
      return city.name.match(regex);
    });
  }
};

export const regroupWeatherListValues = (weatherData) => {
  let isFirst = true,
    actualWeather,
    actualDate,
    weatherCard,
    weatherCardTemp;
  const formattedForecasts = {};

  const { list: listOfForecasts, city } = weatherData;

  for (let forecast of listOfForecasts) {
    const formattedForecast = {
      date: new Date(forecast.dt * 1000),
      feels: Math.round((forecast.main.feels_like + -273.15) * 10) / 10,
      temp: Math.round((forecast.main.temp + -273.15) * 10) / 10,
      pressure: forecast.main.pressure,
      humidity: forecast.main.humidity,
      clouds: forecast.clouds.all,
      windDeg: forecast.wind.deg,
      windSpeed: forecast.wind.speed,
    };
    if (isFirst) {
      weatherCardTemp = {
        desc: 'now',
        value: Math.round((forecast.main.temp + -273.15) * 10) / 10,
        unit: '\xB0C',
      };
      actualDate = new Date(forecast.dt * 1000);
      actualWeather = {
        pressure: {
          desc: 'pressure',
          value: forecast.main.pressure,
          unit: 'hPa',
        },
        humidity: {
          desc: 'humidity',
          value: forecast.main.humidity,
          unit: '%',
        },
        windspeed: {
          desc: 'wind speed',
          value: forecast.wind.speed,
          unit: 'km/h',
        },
        windDeg: {
          desc: 'wind direction',
          value: forecast.wind.deg,
          unit: 'deg',
        },
        clouds: {
          desc: 'clouds',
          value: forecast.clouds.all,
          unit: '%',
        },
        feels: {
          desc: 'feels',
          value: Math.round((forecast.main.feels_like + -273.15) * 10) / 10,
          unit: '\xB0C',
        },
      };
      isFirst = false;
    }

    const forecastKey = `KEY${formattedForecast.date.getDate()}${formattedForecast.date.getMonth()}${formattedForecast.date.getFullYear()}`;
    if (typeof formattedForecasts[forecastKey] === 'undefined') {
      formattedForecasts[forecastKey] = [];
    }
    formattedForecasts[forecastKey].push(formattedForecast);
  }

  weatherCard = {
    sunrise: new Date(city.sunrise * 1000),
    sunset: new Date(city.sunset * 1000),
    temp: weatherCardTemp,
    clouds: actualWeather.clouds.value,
  };
  return {
    name: city.name,
    id: city.id,
    country: city.country,
    coords: {
      lon: city.coord.lon,
      lat: city.coord.lat,
    },
    actualDate,
    actual: actualWeather,
    list: formattedForecasts,
    weatherCard,
  };
};

export const prepareChartData = (chartData) => {
  const inputChartData = { ...chartData };

  let fullChartDataArray = [];
  const chartDataKeys = [];
  Object.keys(inputChartData).map((key) => {
    fullChartDataArray.push(inputChartData[key]);
    chartDataKeys.push(key);
  });

  let chartDataToDisplay = [];
  for (const chartArrayElement of fullChartDataArray[1]) {
    let chartHours = chartArrayElement.date.getHours();
    chartDataToDisplay.push({
      time: `${chartHours}:00`,
      temperature: chartArrayElement.temp,
    });
  }

  return chartDataToDisplay;
};
