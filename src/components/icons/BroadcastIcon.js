// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledBroadcastIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const BroadcastIcon = ({ size = 150 }) => {
  return (
<StyledBroadcastIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path d="M22 7.775q-.45-.35-.95-.65T20 6.6V4H5q-.425 0-.712-.288T4 3q0-.425.288-.712T5 2h15q.825 0 1.413.588T22 4v3.775ZM3 18q-.425 0-.712-.288T2 17V8q0-.425.288-.712T3 7h5q.425 0 .713.288T9 8v9q0 .425-.288.713T8 18H3Zm13.25 1.25V15q-.225-.2-.363-.462T15.75 14q0-.525.375-.888T17 12.75q.525 0 .888.363t.362.887q0 .275-.112.55t-.388.45v4.25q0 .325-.213.538T17 20q-.325 0-.537-.213t-.213-.537ZM17 11.5q-1.05 0-1.775.725T14.5 14q0 .3.088.6t.237.575q.15.275.138.587t-.238.538q-.225.225-.537.213t-.488-.263q-.35-.5-.525-1.075T13 14q0-1.675 1.175-2.838T17 10q1.675 0 2.838 1.163T21 14q0 .575-.162 1.15t-.513 1.075q-.175.25-.475.263t-.525-.213q-.225-.2-.25-.512t.125-.588q.15-.275.225-.575t.075-.6q0-1.05-.725-1.775T17 11.5ZM17 9q-2.075 0-3.537 1.45T12 14q0 .8.263 1.55t.737 1.4q.2.275.175.588t-.25.537q-.225.225-.525.2T11.9 18q-.65-.875-1.025-1.888T10.5 14q0-2.725 1.9-4.612T17 7.5q2.725 0 4.613 1.888T23.5 14q0 1.1-.35 2.113T22.125 18q-.2.25-.513.25t-.537-.225q-.225-.225-.225-.525t.2-.575q.475-.65.712-1.388T22 14q0-2.1-1.45-3.55T17 9ZM4 16h3V9H4v7Zm0 0h3h-3Z"/></StyledBroadcastIcon>
  );
};

export default BroadcastIcon;