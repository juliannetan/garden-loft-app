import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// Create styled component outside of the functional component
const Container = styled(Typography)`
  position: fixed;
  top: 20px;
  right: 40px;
  display: flex;
  align-items: center;
  font-size: 48px;
  font-weight: 550;
  color: #2d3e5f;
  margin: 30px; // Adjust margin as needed
`;

const LocationIndicator = ({ currentPage }) => {
  return (
    <Container>
      {currentPage}
    </Container>
  );
};

export default LocationIndicator;
