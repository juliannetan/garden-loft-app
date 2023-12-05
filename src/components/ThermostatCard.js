import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { SnowflakeIcon } from "./icons";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import CallHelpButtonComponent from "./CallHelpButton";
import LocationIndicator from "../components/LocationIndicator";
import ToggleSwitch from './ToggleSwitch';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const CustomNextArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} style={{ right: '300px', position: 'fixed' }}>
    <ArrowForwardIosIcon fontSize='large'/>
  </CustomArrowButton>
);

const CustomPrevArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} style={{ left: '300px', position: 'fixed' }}>
    <ArrowBackIosNewIcon fontSize='large' />
  </CustomArrowButton>
);

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
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: #2d3e5f;
  font-family: "Roboto";
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 15px solid white;
  background: ${(props) => (props.isSwitchOn ? '#acdeff' : 'linear-gradient(180deg, rgba(255, 35, 74, 0.504) 16.67%, rgba(244, 140, 6, 0.402) 100%)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 18px #ba9607;
  font-family: 'Roboto';
  transition: background-color 1s;
`;

const ToggleSwitchContainer = styled.div`
  margin-top: 50px;
`;

const CircleText = styled.span`
  position: absolute;
  bottom: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #2d3e5f;
  font-size: 60px;
  font-family: "Roboto";
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
  background-color: #ffcc00;
  color: #273381;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 85px;
  height: 85px;
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
    transform: scale(0.95); // Add a scaling effect for the pressed state
    box-shadow: 0 0 0; // Remove box shadow for a pressed effect
  }
`;

const BackButton = styled.button`
  margin-top: 50px;
  padding: 10px;
  background-color: #d7e6c9;
  color: #2d3e5f;
  border: none;
  border-radius: 20px;
  cursor: pointer;
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
  font-size: 120px;
  font-weight: bold;
  line-height: 111px;
  letter-spacing: 0em;
  text-align: left;
`;

const CustomArrowButton = styled.div`
  width: 80px;
  height: 80px;
  background-color: #E8E8E4;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1; 
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  
  &:active {
    transform: translateY(-50%), scale(0.95); // Add a scaling effect for the pressed state
    box-shadow: 0 0 0; // Remove box shadow for a pressed effect
  }
`;

const ThermostatCard = () => {
    const [temperature, setTemperature] = useState(23);
    const [isSwitchOn, setIsSwitchOn] = useState(true);

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
        <Navbar />
        <CircleContainer>
        <CircleText>
        <Typography variant="h2" fontWeight="500">Thermostat</Typography>
        </CircleText>
          <Circle isSwitchOn={isSwitchOn} onClick={handleSwitchToggle}>
            <CoolText>
              {isSwitchOn ? <SnowflakeIcon />: "heat icon"}
              <Typography variant="h5" fontWeight="550">{isSwitchOn ? 'Cool' : 'Heat'}</Typography>
            </CoolText>
            <Temperature variant="h1">{temperature}°C</Temperature>
          </Circle>
          <Buttons>
            <CustomPrevArrow  />
            <CustomNextArrow />
            <IconButton className="button" onClick={increaseTemperature} style={{  right: '400px', position: 'fixed', marginTop: '122px'}}>
              <AddIcon fontSize="large" fontWeight="700" />
            </IconButton>
            <IconButton className="button" onClick={decreaseTemperature} style={{ left: '400px', position: 'fixed', marginTop: '122px' }}>
              <RemoveIcon fontSize="large" fontWeight="700" />
          </IconButton>
          </Buttons>
            </CircleContainer>
        <TopRightButtonContainer>
        </TopRightButtonContainer>
        <BottomLeftButtonContainer>
          {/* <BackButton id="bottom-left-button">
            <Typography variant='h5' fontWeight="700">Back</Typography>
          </BackButton> */}
        </BottomLeftButtonContainer>
        <LocationIndicator currentPage={"thermostat control"} />
        <CallHelpButtonComponent />
      </Container>
    </>
  );
};

export default ThermostatCard;
