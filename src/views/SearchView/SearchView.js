import styled from 'styled-components';
import CitiesList from '../../components/CitiesList/CitiesList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Heading from '../../components/Heading/Heading';

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.blue200};
`;

const Content = styled.div`
	border-radius: 10px;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
`;
const SearchView = () => {
	return (
		<StyledSection>
			<Content>
				<Heading>What&#39;s the place?</Heading>
				<SearchBar />
			</Content>
			<CitiesList />
		</StyledSection>
	);
};

export default SearchView;
