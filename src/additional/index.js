export const findMatchCities = (wordToMatch, cities) => {
  while (wordToMatch && wordToMatch.length > 2) {
    return cities.filter((city) => {
      const regex = new RegExp('^' + wordToMatch, 'gi');
      return city.name.match(regex);
    });
  }
};
