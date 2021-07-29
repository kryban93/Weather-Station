import SearchBar from '../SearchBar/SearchBar';
import CitiesList from '../CitiesList/CitiesList';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.purple300};
  position: fixed;
  width: 100%;
  top: 0;
  padding: 5px 0;
`;

const StyledCitiesList = styled(CitiesList)`
  position: fixed;
  border: 1px solid red;
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
