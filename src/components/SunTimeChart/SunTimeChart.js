import styled, { keyframes } from 'styled-components';

const timePassedAmination = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(${(props) =>
          props.timePassedDegrees > 180 ? '-180deg' : `-${props.timePassedDegrees}`});
    }
`;

const Chart = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 200px 200px 0 0;
  overflow: hidden;
  content: '';
  position: relative;

  &:before {
    border: 20px solid grey;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    box-sizing: border-box;
  }

  &:after {
    content: '';
    background: linear-gradient(to right, rgba(255, 247, 89, 1) 0%, rgba(209, 133, 40, 1) 100%);
    transform-origin: center bottom;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    box-sizing: border-box;
    animation: ${timePassedAmination} 1s linear;
  }
`;

const Overlay = styled.span`
  position: absolute;
  content: '';
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(200% - 20px);
  border-radius: 100%;
  background: white;
  z-index: 2;
`;

const SunTimeChart = ({ timePassedDegrees }) => {
  console.log(timePassedDegrees);
  return (
    <Chart>
      <Overlay></Overlay>
    </Chart>
  );
};

export default SunTimeChart;
