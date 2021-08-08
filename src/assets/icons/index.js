import search_black from './search_black.svg';
import sunrise from './sunrise.svg';
import sunset from './sunset.svg';
import clear from './weatherCard/clear.svg';
import cloudy from './weatherCard/cloudy.svg';
import mostlysunny from './weatherCard/mostlysunny.svg';
import partlycloudy from './weatherCard/partlycloudy.svg';
import nt_sunny from './weatherCard/nt_sunny.svg';
import nt_partlycloudy from './weatherCard/nt_partlycloudy.svg';
import nt_mostlycloudy from './weatherCard/nt_mostlycloudy.svg';

const icons = {
  search_black,
  sunrise,
  sunset,
  weatherCard: {
    night: {
      cloudy: cloudy,
      partlyCloudy: nt_partlycloudy,
      mostlyCloudy: nt_mostlycloudy,
      clear: nt_sunny,
    },
    day: {
      cloudy: cloudy,
      partlyCloudy: mostlysunny,
      mostlyCloudy: partlycloudy,
      clear: clear,
    },
  },
};

export default icons;
