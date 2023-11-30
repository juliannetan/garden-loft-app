// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledLightbulbFilledIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const LightbulbFilledIcon = ({ size = 150 }) => {
  return (
<StyledLightbulbFilledIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path fill="white" d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7c0-3.9-3.1-7-7-7z"/></StyledLightbulbFilledIcon>
  );
};

export default LightbulbFilledIcon;
