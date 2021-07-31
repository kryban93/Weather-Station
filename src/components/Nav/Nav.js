import SearchBar from '../SearchBar/SearchBar';
import CitiesList from '../CitiesList/CitiesList';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple300};
  position: fixed;
  width: 100%;
  top: 0;
  padding: 5px 0;
`;

const StyledCitiesList = styled(CitiesList)`
  position: absolute;
  background: white;
  z-index: 3;
  overflow: auto;
  margin: 0;
`;

const Nav = () => {
  return (
    <>
      <StyledNav>
        <SearchBar />
      </StyledNav>
      <StyledCitiesList />
    </>
  );
};

export default Nav;
