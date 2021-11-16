import searchBlack from './search_black.svg';
import sunrise from './sunrise.svg';
import sunset from './sunset.svg';
import clear from './weatherCard/clear.svg';
import cloudy from './weatherCard/cloudy.svg';
import mostlysunny from './weatherCard/mostlysunny.svg';
import partlycloudy from './weatherCard/partlycloudy.svg';
import ntSunny from './weatherCard/nt_sunny.svg';
import ntPartlyCloudy from './weatherCard/nt_partlycloudy.svg';
import ntMostlyCloudy from './weatherCard/nt_mostlycloudy.svg';

const icons = {
	searchBlack,
	sunrise,
	sunset,
	weatherCard: {
		night: {
			cloudy,
			partlyCloudy: ntPartlyCloudy,
			mostlyCloudy: ntMostlyCloudy,
			clear: ntSunny,
		},
		day: {
			cloudy,
			partlyCloudy: mostlysunny,
			mostlyCloudy: partlycloudy,
			clear,
		},
	},
};

export default icons;
