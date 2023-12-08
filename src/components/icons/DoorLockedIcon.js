// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledDoorLockedIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const DoorLockedIcon = ({ size = 150 }) => {
  return (
<StyledDoorLockedIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path fill="#FFC100" d="M16 11h2v2h-2v-2m-4-8h7a2 2 0 0 1 2 2v14h1v2H2v-2h8V5a2 2 0 0 1 2-2m0 2v14h7V5M6.2 5H2.8v-.5a1.7 1.7 0 0 1 3.4 0M7 5v-.5a2.5 2.5 0 0 0-5 0V5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"/></StyledDoorLockedIcon>
  );
};

export default DoorLockedIcon;