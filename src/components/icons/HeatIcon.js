// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledHeatIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const HeatIcon = ({ size = 150 }) => {
  return (
<StyledHeatIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path fill="#2D3E5F" d="M13 1v3h-2V1h2Zm7.485 3.928L18.364 7.05L16.95 5.636l2.121-2.122l1.414 1.414ZM4.93 3.514l2.12 2.122L5.636 7.05L3.515 4.929l1.414-1.415ZM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0Zm-5-1h3v2H1v-2Zm19 0h3v2h-3v-2ZM7.05 18.363l-2.12 2.123l-1.415-1.416l2.121-2.122l1.414 1.414Zm11.314-1.414l2.121 2.122l-1.414 1.414l-2.121-2.121l1.414-1.415ZM13 20v3h-2v-3h2Z"/></StyledHeatIcon>
  );
};

export default HeatIcon;
