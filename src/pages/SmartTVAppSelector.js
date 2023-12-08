// SmartTVAppSelector.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AppSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #36454f;
`;

const AppItem = styled.div`
  width: 450px; // 150px * 3
  height: 450px; // 150px * 3
  cursor: pointer;
  border-radius: 30px; // 10px * 3
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2); /* Increased drop shadow */

  &:hover {
    border-color: none;
    background-color: #a0a0a0; /* Lightened color on hover */
    color: #fff;
  }

  &:active {
    transform: translateY(2px); /* Add a slight press effect */
  }

  img {
    width: 80%; // Adjust as needed
    height: auto;
    padding: 20px; // Add padding to the image
    border-radius: 15px; // Add border-radius to match the container
  }
`;

const SmartTVAppSelector = () => {

  const handleAppSelect = (appName) => {
    navigate("/garden-loft-app/animation"); // Update with your actual homepage route
  };

  const navigate = useNavigate();

  return (
    <AppSelectorContainer>
      <AppItem onClick={handleAppSelect}>
        <img
          src="garden loft-logo2.png"
          alt="Garden Loft App"
        />
      </AppItem>
    </AppSelectorContainer>
  );
};

export default SmartTVAppSelector;
