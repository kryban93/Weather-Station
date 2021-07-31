import styled from 'styled-components';
import ChartDiv from './ChartDiv';

const Overlay = styled(ChartDiv)`
  position: absolute;
  content: '';
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(200% - 20px);
  border-radius: 100%;
  background: white;
  z-index: 1;
`;

export default Overlay;
