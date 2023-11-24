// WelcomeScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; // Import styled-components
import ErrorBoundary from "./ErrorBoundary";
import { Typography } from "@mui/material";
import { GardenLoftIcon } from "./icons";

const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; // Align children vertically
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #FCF8E3;
  background: linear-gradient(
    rgba(252, 248, 227, 0.5),
    rgba(255, 255, 255, 0.67)
  ),
  url("flower.png");
  background-size: cover; // Ensure the background image covers the entire container
  background-position: center; // Center the background image
`;

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the quotes page when clicked
    navigate("/quotes-page"); // Update with your actual quotes page route
  };

  return (
    <ErrorBoundary>
      <GardenLoftIcon />
      <WelcomeContainer onClick={handleClick}>
      <Typography fontWeight={400} variant='h1' color='#2D3E5F'>Hello Elizabeth</Typography>
        <br />
        <Typography fontWeight={100} variant='h2' color='#2D3E5F'>welcome back</Typography>
      </WelcomeContainer>
    </ErrorBoundary>
  );
};

export default WelcomeScreen;
