// StartScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GardenLoftStart from "../components/icons/GardenLoftStart";

const StartContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; // Align children vertically
  justify-content: center;
  align-items: flex-start; // Align items to the start (left)
  cursor: pointer;
  font-size: 42px;
  font-weight: 400;
  color: navyBlue;
  background-color: #2c2c2c;
  left: 20px; // Add padding for better spacing
`;

const StartScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the animation page when clicked
    navigate("/animation-page");
  };

  return (
    <StartContainer onClick={handleClick}>
      <GardenLoftStart
        style={{
          width: "50px", // Set the width of the icon
          height: "50px", // Set the height of the icon
          marginRight: "10px", // Add margin for spacing between icon and title
        }}
      />
    </StartContainer>
  );
};

export default StartScreen;
