import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationIndicator = ({ currentPage }) => {
  const Container = styled.div`
    position: fixed;
    bottom: 20px;
    left: 40px;
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: 600;
    // font-family: "Montserrat", sans-serif;
    color: #2D3E5F;
    margin: 30px; // Adjust margin as needed
  `;

  return (
    <Container>
      <LocationOnIcon sx={{ marginRight: 1, color: "#f3b717", fontSize: 40 }} />
      You are at the {currentPage} screen
    </Container>
  );
};

export default LocationIndicator;
