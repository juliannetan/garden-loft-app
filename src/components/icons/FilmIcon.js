// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledFilmIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const FilmIcon = ({ size = 150 }) => {
  return (
<StyledFilmIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path d="M19 4v1h-2V3H7v2H5V3H3v18h2v-2h2v2h10v-2h2v2h2V3h-2zM5 7h2v2H5zm0 4h2v2H5zm0 6v-2h2v2zm12 0v-2h2v2zm2-4h-2v-2h2zm-2-4V7h2v2z"/></StyledFilmIcon>
  );
};

export default FilmIcon;
