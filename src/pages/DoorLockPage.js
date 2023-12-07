import React, { useState } from "react";
import styled from "styled-components";
import { DoorLockedIcon, DoorUnlockedIcon, GardenLoftIcon } from "../components/icons";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import CallHelpButtonComponent from "../components/CallHelpButton";
import LocationIndicator from "../components/LocationIndicator";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fcf8e3;
  position: relative;
`;

const CircleContainer = styled.div`
  position: relative;
  text-align: center; // Center-align the text within the container
`;

const StatusText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 45px;
  font-family: "Roboto";
  flex-direction: column;
`;

const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 16px solid ${(props) => props.isSwitchOn ? "#FFC100" : "#E9EBF8"};
  background: #7F8181;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 45px 0px #D9A364CC;
  font-family: "Roboto";
  transition: border-color 1s;
`;
const CircleText = styled.span`
  position: absolute;
  bottom: -150px;
  width: 110%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #2d3e5f;
  font-family: Roboto;
  font-size: 45px;
  font-weight: 500;
  line-height: 53px;
  letter-spacing: 0.10000000149011612px;
  text-align: center;
`;

const TopRightButtonContainer = styled.div`
  position: absolute;
  top: 35px;
  right: 35px;
  z-index: 999;
`;

const BottomLeftButtonContainer = styled.div`
  position: absolute;
  bottom: 35px;
  left: 35px;
  z-index: 999;
`;

const DoorLockPage = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchToggle = () => {
    setIsSwitchOn((prevIsSwitchOn) => !prevIsSwitchOn);
  };

  return (
    <>
      <Container>
        <GardenLoftIcon />
        <Navbar />
        <CircleContainer>
          <Circle isSwitchOn={isSwitchOn} onClick={handleSwitchToggle}>
            <StatusText>
              {isSwitchOn ? <DoorLockedIcon size={190} /> : <DoorUnlockedIcon size={167} />}
              <Typography style={{transition: "color 1s"}}  marginTop={isSwitchOn ? "0" : "20px"} color={isSwitchOn ? "#FFC100" : "#E9EBF8"} fontSize="45px" fontWeight="550">{isSwitchOn ? 'Locked' : 'Unlocked'}</Typography>
            </StatusText>
          </Circle>
          <CircleText>
        <Typography fontSize={"45px"} fontWeight="550">press ok to {isSwitchOn ? 'unlock' : 'lock'}</Typography>
        </CircleText>
        </CircleContainer>
        <TopRightButtonContainer></TopRightButtonContainer>
        <BottomLeftButtonContainer>
        </BottomLeftButtonContainer>
        <LocationIndicator currentPage={"door lock control"} />
        <CallHelpButtonComponent />
      </Container>
    </>
  );
};

export default DoorLockPage;
