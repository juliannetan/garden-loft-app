import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { GardenLoftIcon, HeatIcon, MinusIcon, PlusIcon, SnowflakeIcon } from "./icons";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import CallHelpButtonComponent from "./CallHelpButton";
import LocationIndicator from "../components/LocationIndicator";
import { CustomNextArrow, CustomPrevArrow } from "../pages/SmartLoftPage";

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

const CoolText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 45px;
  color: #2d3e5f;
  font-family: "Roboto";
`;

const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 16px solid white;
  background: ${(props) =>
    props.isSwitchOn
      ? "#acdeff"
      : "linear-gradient(142.67deg, rgba(255, 35, 74, 0.7) -8.38%, rgba(255, 195, 110, 0.5) 64.92%)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 45px 0px #D9A364CC;
  font-family: "Roboto";
  transition: background-color 1s;
`;
const CircleText = styled.span`
  position: absolute;
  bottom: -150px;
  width: 100%;
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

const Buttons = styled.div`
  position: absolute;
  top: 0;
  right: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const IconButton = styled.button`
  margin-top: 50px;
  padding: 10px;
  background-color: #E8E8E4;
  color: #273381;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  font-family: "Roboto";

  &:active {
    transform: scale(0.95); // Add a scaling effect for the pressed state
    box-shadow: 0 0 0; // Remove box shadow for a pressed effect
  }
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

const Temperature = styled(Typography)`
  color: #2d3e5f;
  font-size: 140px;
  font-weight: bold;
  line-height: 111px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LabelText = styled.div`
width: 500px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
position: absolute;
top: 90%;
z-index: 1; 
color: #2d3e5f;
`;

const ThermostatCard = () => {
  const [temperature, setTemperature] = useState(23);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchToggle = () => {
    setIsSwitchOn((prevIsSwitchOn) => !prevIsSwitchOn);
  };

  const increaseTemperature = async () => {
    try {
      if (temperature < 28) {
        setTemperature((prevTemperature) => prevTemperature + 1);
      }
      // Replace 'YOUR_ACCESS_TOKEN' and 'YOUR_HOME_ASSISTANT_IP' with your actual values
      await axios.post(
        "http://YOUR_HOME_ASSISTANT_IP:8123/api/services/climate/set_temperature",
        {
          entity_id: "your_thermostat_entity_id", // Replace with your thermostat entity ID
          temperature: temperature + 1,
        },
        {
          headers: {
            Authorization: "Bearer YOUR_ACCESS_TOKEN",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error increasing thermostat temperature:", error);
    }
  };

  const decreaseTemperature = async () => {
    try {
      if (temperature > 16) {
        setTemperature((prevTemperature) => prevTemperature - 1);
      }

      // Replace 'YOUR_ACCESS_TOKEN' and 'YOUR_HOME_ASSISTANT_IP' with your actual values
      await axios.post(
        "http://YOUR_HOME_ASSISTANT_IP:8123/api/services/climate/set_temperature",
        {
          entity_id: "your_thermostat_entity_id", // Replace with your thermostat entity ID
          temperature: temperature - 1,
        },
        {
          headers: {
            Authorization: "Bearer YOUR_ACCESS_TOKEN",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error decreasing thermostat temperature:", error);
    }
  };

  useEffect(() => {
    const fetchThermostatState = async () => {
      try {
        // Replace 'YOUR_ACCESS_TOKEN' and 'YOUR_HOME_ASSISTANT_IP' with your actual values
        const response = await axios.get(
          "http://YOUR_HOME_ASSISTANT_IP:8123/api/states/your_thermostat_entity_id", // Replace with your thermostat entity ID
          {
            headers: {
              Authorization: "Bearer YOUR_ACCESS_TOKEN",
            },
          }
        );

        setTemperature(response.data.attributes.temperature);
      } catch (error) {
        console.error("Error fetching thermostat state:", error);
      }
    };

    fetchThermostatState();
  }, []);

  return (
    <>
      <Container>
        <GardenLoftIcon />
        <Navbar />
        <CircleContainer>
          <Circle isSwitchOn={isSwitchOn} onClick={handleSwitchToggle}>
            <CoolText>
              {isSwitchOn ? <SnowflakeIcon size={70} />: <HeatIcon size={70} />}
              <Typography fontSize="45px" fontWeight="550">{isSwitchOn ? 'cool' : 'heat'}</Typography>
            </CoolText>
            <Temperature variant="h1">{temperature}°C</Temperature>
          </Circle>
          <LabelText>
            <Typography fontSize={"45px"} fontWeight="550" style={{ right: '300px', position: 'fixed' }}>press to increase</Typography> 
          </LabelText>
          <LabelText>
            <Typography fontSize={"45px"} fontWeight="550" style={{ left: '300px', position: 'fixed' }}>press to decrease</Typography> 
          </LabelText>
          <Buttons>
            <CustomPrevArrow  />
            <CustomNextArrow />
            <IconButton className="button" onClick={increaseTemperature} style={{  right: '500px', position: 'fixed', marginTop: '140px'}}>
              <PlusIcon size={100}/>
            </IconButton>
            <IconButton className="button" onClick={decreaseTemperature} style={{ left: '500px', position: 'fixed', marginTop: '140px' }}>
              <MinusIcon size={100}/>
          </IconButton>
          </Buttons>
          <CircleText>
        <Typography fontSize={"45px"} fontWeight="550">press ok to {isSwitchOn ? 'heat' : 'cool'}</Typography> 
        </CircleText>
        </CircleContainer>
        <TopRightButtonContainer></TopRightButtonContainer>
        <BottomLeftButtonContainer>
        </BottomLeftButtonContainer>
        <LocationIndicator currentPage={"thermostat control"} />
        <CallHelpButtonComponent />
      </Container>
    </>
  );
};

export default ThermostatCard;
