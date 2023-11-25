import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { GardenLoftIcon, SnowflakeIcon } from "./icons";
import { Typography } from '@mui/material';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #FCF8E3;
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
  color: #273381;
  font-family: 'Roboto';
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 15px solid white;
  background-color: #acdeff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 18px #ba9607;
  font-family: 'Roboto';
`;

const CircleText = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #273381;
  font-size: 60px;
  font-family: 'Roboto';
`;

const Buttons = styled.div`
  position: absolute;
  top: 0;
  right: -130px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const IconButton = styled.button`
  margin-top: 50px;
  padding: 10px;
  background-color: #FFCC00;
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
  font-family: 'Roboto';

  &:active {
    transform: scale(0.95); // Add a scaling effect for the pressed state
    box-shadow: 0 0 0; // Remove box shadow for a pressed effect
  }

`;

const CallHelpButton = styled.button`
  margin-top: 50px;
  padding: 10px;
  background-color: #59ACCE;
  color: #E9EBF8;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 30px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  font-family: 'Roboto';

  &:active {
    transform: scale(0.95); // Add a scaling effect for the pressed state
    box-shadow: 0 0 0; // Remove box shadow for a pressed effect
  }
`;

const BackButton = styled.button`
  margin-top: 50px;
  padding: 10px;
  background-color: #D7E6C9;
  color: #2D3E5F;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 30px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  font-family: 'Roboto';

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
  color: #2D3E5F;
  font-size: 120px;
  font-weight: bold;
  line-height: 111px;
  letter-spacing: 0em;
  text-align: left;
`;

const ThermostatCard = () => {
    const [temperature, setTemperature] = useState(20);

  const increaseTemperature = async () => {
    try {
      if (temperature < 28) {
        setTemperature((prevTemperature) => prevTemperature + 1);
      }
      // Replace 'YOUR_ACCESS_TOKEN' and 'YOUR_HOME_ASSISTANT_IP' with your actual values
      await axios.post(
        'http://YOUR_HOME_ASSISTANT_IP:8123/api/services/climate/set_temperature',
        {
          entity_id: 'your_thermostat_entity_id', // Replace with your thermostat entity ID
          temperature: temperature + 1,
        },
        {
          headers: {
            Authorization: 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Error increasing thermostat temperature:', error);
    }
  };

  const decreaseTemperature = async () => {
    try {
      if (temperature > 16) {
        setTemperature((prevTemperature) => prevTemperature - 1);
      }

      // Replace 'YOUR_ACCESS_TOKEN' and 'YOUR_HOME_ASSISTANT_IP' with your actual values
      await axios.post(
        'http://YOUR_HOME_ASSISTANT_IP:8123/api/services/climate/set_temperature',
        {
          entity_id: 'your_thermostat_entity_id', // Replace with your thermostat entity ID
          temperature: temperature - 1,
        },
        {
          headers: {
            Authorization: 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Error decreasing thermostat temperature:', error);
    }
  };

  useEffect(() => {
    const fetchThermostatState = async () => {
      try {
        // Replace 'YOUR_ACCESS_TOKEN' and 'YOUR_HOME_ASSISTANT_IP' with your actual values
        const response = await axios.get(
          'http://YOUR_HOME_ASSISTANT_IP:8123/api/states/your_thermostat_entity_id', // Replace with your thermostat entity ID
          {
            headers: {
              Authorization: 'Bearer YOUR_ACCESS_TOKEN',
            },
          }
        );

        setTemperature(response.data.attributes.temperature);
      } catch (error) {
        console.error('Error fetching thermostat state:', error);
      }
    };

    fetchThermostatState();
  }, []);

  return (
    <>
      <GardenLoftIcon />
      <Container>
        <CircleContainer>
          <Circle>
            <CoolText>
              <SnowflakeIcon />
              <Typography variant="h5">Cool</Typography>
            </CoolText>
            <Temperature variant="h1">{temperature}°C</Temperature>
          </Circle>
          <CircleText>
            <Typography variant="h1">Thermostat</Typography>
          </CircleText>
          <Buttons>
            <IconButton className="button" onClick={increaseTemperature} >
              <AddIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="button" onClick={decreaseTemperature} >
              <RemoveIcon fontSize="inherit" />
            </IconButton>
          </Buttons>
        </CircleContainer>
        <div className="dashboard"></div>
        <TopRightButtonContainer>
          <CallHelpButton id="top-right-button" primary>
            <Typography>Call Help</Typography>
          </CallHelpButton>
        </TopRightButtonContainer>
        <BottomLeftButtonContainer>
          <BackButton id="bottom-left-button"><Typography>Back</Typography></BackButton>
        </BottomLeftButtonContainer>
      </Container>
    </>
  );
};

export default ThermostatCard;