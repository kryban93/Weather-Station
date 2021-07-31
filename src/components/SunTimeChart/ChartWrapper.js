import styled from 'styled-components';
import ChartDiv from './ChartDiv';

const ChartWrapper = styled(ChartDiv)`
  width: 300px;
  height: 150px;
  border-radius: 300px 300px 0 0;
  overflow: hidden;
  content: '';
  position: relative;
    
  &:before {
    border: 20px solid ${({ theme }) => theme.colors.grey300};
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    box-sizing: border-box;

  &after {
  position: absolute;
  content: '';
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(200% - 20px);
  border-radius: 100%;
  background: white;
  z-index: 2;
  }
`;

export default ChartWrapper;
