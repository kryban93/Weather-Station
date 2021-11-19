import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import CitiesList from '../CitiesList/CitiesList';
import IconComponent from '../IconComponent/IconComponent';
import appLogo from '../../assets/appLogo.svg';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.purple300};
	position: fixed;
	width: 100%;
	top: 0;
	padding: 5px 0;
	z-index: 10;
`;

const StyledCitiesList = styled(CitiesList)`
	position: absolute;
	background: white;
	z-index: 4;
	overflow: auto;
	margin: 0;
`;

const Nav = () => {
	return (
		<>
			<StyledNav>
				<Link to="/">
					<IconComponent src={appLogo} alt="app logo" height="50" width="50" />
				</Link>
				<SearchBar />
				<ThemeToggler />
			</StyledNav>
			<StyledCitiesList />
		</>
	);
};

export default Nav;
