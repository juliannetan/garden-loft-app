// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledDoorIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const DoorIcon = ({ size = 150 }) => {
  return (
<StyledDoorIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 256 256"><path d="M232 212h-20V40a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v172H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24ZM68 44h120v168H68Zm104 88a16 16 0 1 1-16-16a16 16 0 0 1 16 16Z"/></StyledDoorIcon>
  );
};

export default DoorIcon;
