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
    font-size: 30px;
    font-weight: 400px;
    // font-family: "Montserrat", sans-serif;
    color: #333; // Adjust the color as needed
    margin: 30px; // Adjust margin as needed
  `;

  return (
    <Container>
      <LocationOnIcon sx={{ marginRight: 1, color: "#f3b717", fontSize: 30 }} />
      You are at the {currentPage} screen
    </Container>
  );
};

export default LocationIndicator;
