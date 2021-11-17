import styled from 'styled-components';
import { useData } from '../../contexts/DataContext';
import icons from '../../assets/icons';
import IconComponent from '../IconComponent/IconComponent';

const SearchBarWrapper = styled.div`
	display: flex;
	width: 95%;
`;
const Input = styled.input`
	box-sizing: border-box;
	border: none;
	border-radius: 5px 0 0 5px;
	margin: 1px;
	outline: none;
	flex-grow: 2;
	padding: 0px 5px;
`;

const SearchButton = styled.button`
	background-color: white;
	border: none;
	cursor: pointer;
	border-radius: 0 5px 5px 0;
	margin: 1px;
	padding: 2px;
`;

const SearchBar = () => {
	const { searchValue, setSearchValue } = useData();

	return (
		<SearchBarWrapper>
			<Input
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
			/>
			<SearchButton>
				<IconComponent src={icons.searchBlack} alt="search button" />
			</SearchButton>
		</SearchBarWrapper>
	);
};

export default SearchBar;
