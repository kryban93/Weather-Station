import styled from 'styled-components';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import useWindowDimensions from '../../additional/useWindowDimensions';
import { useEffect } from 'react';

const StyledWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
`;

const WeatherChart = ({ data }) => {
  const { width } = useWindowDimensions();

  return (
    <StyledWrapper>
      <LineChart width={width - 50} height={300} data={data}>
        <Line type='monotone' dataKey='temperature' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' strokeDasharray='3' />
        <XAxis dataKey='time' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </StyledWrapper>
  );
};

export default WeatherChart;
