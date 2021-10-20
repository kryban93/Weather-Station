import { useState, useEffect } from 'react';
import styled from 'styled-components';
import WeatherChart from './WeatherChart';
import { prepareChartData, prepareChartDataKeys } from '../../additional';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.section`
display: flex
flex-direction: column;
`;

const ChartNavigation = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledButton = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
`;

const WeatherChartWrapper = ({ chartData, className }) => {
	const [currentChartIndex, setCurrentChartIndex] = useState(0);
	const [isLeftNavButtonDisable, setLeftNavButtonDisableState] = useState(true);
	const [isRightNavButtonDisable, setRightNavButtonDisableState] =
		useState(false);
	const chartDataKeys = prepareChartDataKeys(chartData);
	let chartDataToDisplay = prepareChartData(chartData, 0);
	useEffect(() => {
		console.log(currentChartIndex);
		chartDataToDisplay = prepareChartData(chartData, currentChartIndex);
	}, [currentChartIndex]);

	const updateChartData = (e) => {
		console.log(e.target.dataset.direction);
		if (e.target.dataset.direction === 'left') {
			setCurrentChartIndex(currentChartIndex - 1);
		} else if (e.target.dataset.direction === 'right') {
			setCurrentChartIndex(currentChartIndex + 1);
		}

		if (currentChartIndex === 1) {
			setLeftNavButtonDisableState(true);
			setRightNavButtonDisableState(false);
		} else if (currentChartIndex === chartDataKeys.length) {
			setRightNavButtonDisableState(true);
			setLeftNavButtonDisableState(false);
		} else {
			setLeftNavButtonDisableState(false);
			setRightNavButtonDisableState(false);
		}
	};

	console.log(chartDataToDisplay);
	console.log(chartDataKeys);
	return (
		<StyledWrapper className={className}>
			<WeatherChart data={chartDataToDisplay} />
			<ChartNavigation>
				<StyledButton
					disabled={isLeftNavButtonDisable}
					data-direction="left"
					onClick={(e) => updateChartData(e)}
				>
					left
				</StyledButton>
				<Paragraph>date</Paragraph>
				<StyledButton
					disabled={isRightNavButtonDisable}
					data-direction="right"
					onClick={(e) => updateChartData(e)}
				>
					right
				</StyledButton>
			</ChartNavigation>
		</StyledWrapper>
	);
};

export default WeatherChartWrapper;
