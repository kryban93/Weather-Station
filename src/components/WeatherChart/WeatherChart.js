import styled from 'styled-components';
import {
  XYPlot,
  LineMarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';
import useWindowDimensions from '../../additional/useWindowDimensions';
import { useEffect } from 'react';

const StyledWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
`;

const WeatherChart = ({ data }) => {
  const { width } = useWindowDimensions();

  useEffect(() => {}, []);

  const LinePlotProperties = {
    animation: true,
    strokeWidth: 2,
    data,
    opacityType: 'literal',
    onNearestX: (d) => d,
  };

  return (
    <StyledWrapper>
      <XYPlot
        drawMode={0}
        width={width - 20}
        height={200}
        style={{ fill: 'none' }}
        /*onMouseLeave={}*/
      >
        <YAxis style={{ fill: 'black' }} />
        <XAxis
          style={{ fill: 'black' }}
          tickFormat={(d) => {
            const axisValue = new Date(d);
            const formattedAxisValue = `${axisValue.getHours()}:0${axisValue.getMinutes()}`;
            return formattedAxisValue;
          }}
          position='center'
          tickLabelAngle={90}
        />
        <VerticalGridLines style={{ stroke: 'grey' }} />
        <HorizontalGridLines style={{ stroke: 'grey' }} />
        <LineMarkSeries {...LinePlotProperties} />
      </XYPlot>
    </StyledWrapper>
  );
};

export default WeatherChart;
