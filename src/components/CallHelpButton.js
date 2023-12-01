import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material"; // Import your Typography component

const CallHelpButton = styled.button`
  margin-top: 50px;
  padding: 10px;
  background-color: #59acce;
  color: #e9ebf8;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 48px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  font-family: "Roboto";

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 0;
  }
`;

const BottomLeftButtonContainer = styled.div`
  position: absolute;
  bottom: 35px;
  right: 125px;
  z-index: 999;
`;

const handleCallHelpButtonComponent = async () => {
  const shouldInitiateCall = window.confirm(
    "Are you sure you want to initiate the call?"
  );
  if (shouldInitiateCall) {
    try {
      await fetch("http://localhost:3001/call-help"); // Adjust the server URL
      console.log("Call initiated!");
    } catch (error) {
      console.error("Error initiating the call:", error);
    }
  }
};

const ConfirmationPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: darkgrey;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-size: 40px; /* Adjust the font size as needed */
`;

const CallHelpButtonComponent = ({ onClick }) => {
  const handleClick = () => {
    const shouldUseCustomClick =
      onClick && window.confirm("Are you sure you want to initiate the call?");
    if (shouldUseCustomClick) {
      onClick();
    } else {
      handleCallHelpButtonComponent();
    }
  };

  return (
    <BottomLeftButtonContainer>
      <CallHelpButton id="top-right-button" primary onClick={handleClick}>
        <Typography variant="h5" fontWeight="700">
          Call Help
        </Typography>
      </CallHelpButton>
    </BottomLeftButtonContainer>
  );
};

export default CallHelpButtonComponent;
