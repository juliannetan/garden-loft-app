// WelcomeScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; // Import styled-components
import ErrorBoundary from "./ErrorBoundary";
import { Typography } from "@mui/material";

const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; // Align children vertically
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #FCF8E3;
`;

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the quotes page when clicked
    navigate("/quotes-page"); // Update with your actual quotes page route
  };

  return (
    <ErrorBoundary>
      <WelcomeContainer onClick={handleClick}>
      <Typography variant='h1' color='#2D3E5F'>Hello, Elizabeth</Typography>
        <br />
        <Typography variant='h2' color='#2D3E5F'>Welcome Back</Typography>
      </WelcomeContainer>
    </ErrorBoundary>
  );
};

export default WelcomeScreen;
