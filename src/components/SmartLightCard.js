// SmartLightCard.js
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import ProfileCard from './ProfileCard/ProfileCard';
import { GardenLoftIcon, LightbulbFilledIcon } from './icons';

const SmartLightCard = () => {
  const [socket, setSocket] = useState(null);
  const [manualToggle, setManualToggle] = useState(false);
  const [switchState, setSwitchState] = useState('off'); // Set an initial value
  const [incrimentalId, setIncrimentalId] = useState(1);
  useEffect(() => {
    // Create WebSocket connection
    const newSocket = new WebSocket("wss://iqbtrqvkgp7trilophztgmkfuggm9sb4.ui.nabu.casa/api/websocket");
    newSocket.addEventListener('open', () => {
      // Authenticate with Home Assistant
      newSocket.send(
        JSON.stringify({
          type: "auth",
          access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3ZTA5NDg5M2E3NGI0MDY1OWFmMzYzYTJkMDYzOGJhMiIsImlhdCI6MTcwMDc3NDU5MCwiZXhwIjoyMDE2MTM0NTkwfQ.VV19RhjO5Dsc01D3g21NV27WlJeioWmvowtibkqsQ5k", // Replace with your access token
        })
      );
      newSocket.send(
        JSON.stringify({
          id: 1,
          type: "subscribe_events",
          event_type: "state_changed",
          entity_id: "switch.thing2", // Replace with your switch entity ID
        })
      );
      
    });
   
    newSocket.addEventListener('message', (event) => {
      try {
        const receivedData = JSON.parse(event.data);
        if (receivedData.type === "result" && Array.isArray(receivedData.result)) {
          const resultArray = receivedData.result;
          for (let i = 0; i < resultArray.length; i++) {
            const currentEntry = resultArray[i];
            if (currentEntry.entity_id === "switch.thing2") {
              const newSwitchState = currentEntry.state;
              setSwitchState(newSwitchState);
              // setManualToggle()
              // Do UI updates based on the state if needed
              // ...
              break;
            }
          }
        } else {
          console.warn(
            "Received data does not match the expected format:",
            receivedData
          );
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
      setManualToggle(false); // Make sure we know the button hasn't been pushed recently
    });
    newSocket.addEventListener('message', (event) => {
      try {
        const receivedData = JSON.parse(event.data);
    
        if (receivedData.type === "event" && receivedData.event.event_type === "state_changed") {
          const entityState = receivedData.event.data.new_state;
          if (entityState.entity_id === "switch.thing2") {
            const newSwitchState = entityState.state;
            setSwitchState(newSwitchState);
          }
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
      setManualToggle(false);
    });
    
    newSocket.addEventListener('close', (event) => {
      console.log("WebSocket connection closed:", event);
    });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []); // Run once on component mount
  const sendMessage = (message) => {
    if (socket) {
      socket.send(message);
    }
  };
  const getCurrentSwitchState = () => {
    const message = JSON.stringify({
      id: incrimentalId,
      type: "get_states",
    });
    setIncrimentalId((prevId) => prevId + 1);
    sendMessage(message);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!manualToggle) {
        getCurrentSwitchState();
      }
    }, 2000);
    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [manualToggle]); // Run when manualToggle changes
  // Call getCurrentSwitchState immediately when the page loads
  useEffect(() => {
    getCurrentSwitchState();
  }, []); // Run once on component mount
  const toggleSwitch = () => {
    setManualToggle(true);
    const message = JSON.stringify({
      id: incrimentalId,
      type: "call_service",
      domain: "switch",
      service: "Toggle",
      service_data: {
        entity_id: "switch.thing2", // Replace with your switch entity ID
      },
    });
    setIncrimentalId((prevId) => prevId + 1);
    sendMessage(message);
  };

  return (
      <>
      <GardenLoftIcon />
      <div className="profile-card-column">
        <ProfileCard
          borderRadius={"200px"}
          onClick={toggleSwitch}
          backgroundColor={switchState === 'on' ? '#FFC100' : '#7F8181'}
          icon={<LightbulbFilledIcon style={{size: "150px"}} />} />
        <div className="profile-card-title">Floor Light</div>
        <Typography className="switch-state">{switchState}</Typography>
      </div></>
  );
};

export default SmartLightCard;