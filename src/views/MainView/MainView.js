import { useEffect } from 'react';
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';
import Nav from '../../components/Nav/Nav';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { useData } from '../../contexts/DataContext';
import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';

const StyledSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 50px;
`;

const StyledHeader = styled.header`
  text-align: center;
`;

const MainView = () => {
  const { formattedWeatherData } = useData();

  useEffect(() => {}, [formattedWeatherData]);
  return (
    <>
      <StyledSection>
        <Nav />
        <StyledHeader>
          <Heading>
            {formattedWeatherData.name}, {formattedWeatherData.country}
          </Heading>
        </StyledHeader>

        <WeatherCard weatherCardData={formattedWeatherData.weatherCard} />
        <AdditionalInfo actualforecast={formattedWeatherData.actual} />
      </StyledSection>
    </>
  );
};

export default MainView;
