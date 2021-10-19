import styled, { keyframes } from 'styled-components';
import ChartDiv from './ChartDiv';

const sunAnimation = (timePassedDegrees) => keyframes`
  0% {
        transform: rotate(-180deg);
    }
    100% {
        transform: rotate(-${timePassedDegrees}deg);
    }
`;

const ChartValue = styled(ChartDiv)`
	background: linear-gradient(
		to right,
		rgba(255, 255, 100, 1) 0%,
		rgba(209, 133, 40, 1) 100%
	);
	transform-origin: center bottom;
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	border-radius: inherit;
	box-sizing: border-box;
	animation: ${({ timePassedDegrees }) => sunAnimation(timePassedDegrees)} 5s
		ease-out;
	animation-fill-mode: forwards;
	z-index: 1;
`;

export default ChartValue;
