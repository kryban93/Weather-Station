import { useEffect, useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { useHistory } from 'react-router';
import Loader from '../Loader/Loader';
import styled from 'styled-components';

const List = styled.ul`
  box-sizing: border-box;
  position: ${({ secondary }) => (secondary ? 'absolute' : 'relative')};
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 80%;
`;

const ListElement = styled.li`
  cursor: pointer;
  padding: 2px;
  font-size: ${({ theme }) => theme.fontSizes.fontXs};
  font-weight: ${({ theme }) => theme.fontWeights.body};
  font-family: ${({ theme }) => theme.fonts.heading};

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const CitiesList = ({ className }) => {
  const { matchedCities, searchValue, displayMatchedCities, setSearchValue, fetchWeatherData } =
    useData();
  const history = useHistory();
  const [isLoading, setLoadingState] = useState(false);

  const handleClickListElement = async (event) => {
    setLoadingState(true);
    const cityName = event.target.dataset.name;
    const cityId = event.target.dataset.id;

    setSearchValue('');
    console.log(cityName + cityId);

    await fetchWeatherData(cityId);
    setLoadingState(false);
    history.push(`/search/${cityName}`);
  };

  useEffect(() => {
    displayMatchedCities();
  }, [searchValue]);

  return (
    <>
      <List className={className}>
        {matchedCities
          ? matchedCities.map((city, index) => (
              <ListElement
                key={`${city.name}${city.country}${city.state}${index}`}
                onClick={(event) => handleClickListElement(event)}
                data-id={city.id}
                data-name={city.name}
              >
                {city.name}, {city.country}, {city.state ? city.state : null}
              </ListElement>
            ))
          : null}
      </List>
      {isLoading && <Loader />}
    </>
  );
};

export default CitiesList;
