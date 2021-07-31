import styled from 'styled-components';
import IconWrapper from './IconWrapper';

const IconComponent = styled(IconWrapper)`
  height: ${({ height }) => (height ? height : 30)}px;
  width: ${({ width }) => (width ? width : 30)}px;
  background: transparent;
`;

export default IconComponent;
