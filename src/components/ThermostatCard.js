import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card/Card';
import { IconButton, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
      <Card>
        <Typography variant="h4">Thermostat</Typography>
        <IconButton onClick={increaseTemperature} style={{ border: '0px', backgroundColor: 'transparent' }}>
          <KeyboardArrowUpIcon style={{ fontSize: '80px', color: '#000' }} />
        </IconButton>
        <Typography variant="h2" style={{ fontSize: '50px', fontWeight: 600 }}>{temperature}°C</Typography>
        <IconButton onClick={decreaseTemperature} style={{ border: '0px', backgroundColor: 'transparent' }}>
          <KeyboardArrowDownIcon style={{ fontSize: '80px', color: '#000' }} />
        </IconButton>
        <Typography variant="body">COOL</Typography>
        <Typography variant="body">Current Temp: {temperature}°C</Typography>
      </Card>
  );
};

export default ThermostatCard;