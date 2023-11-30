// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledLampIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const LampIcon = ({ size = 150 }) => {
  return (
<StyledLampIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path d="M8 2h8l4 12H4L8 2m3 13h2v5h5v2H6v-2h5v-5Z"/></StyledLampIcon>
  );
};

export default LampIcon;
