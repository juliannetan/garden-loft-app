import React from "react";
import styled from "styled-components";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// Create styled component outside of the functional component
const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 40px;
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 600px;
  // font-family: "Montserrat", sans-serif;
  color: #2d3e5f;
  margin: 30px; // Adjust margin as needed
`;

const LocationIndicator = ({ currentPage }) => {
  return (
    <Container>
      {/* <LocationOnIcon sx={{ marginRight: 1, color: "#f3b717", fontSize: 30 }} />
      You are at the {currentPage} screen */}
      {currentPage}
    </Container>
  );
};

export default LocationIndicator;
