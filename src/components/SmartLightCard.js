// SmartLightCard.js
import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Typography } from '@mui/material';

const SmartLightCard = () => {
  const [socket, setSocket] = useState(null);
  const [manualToggle, setManualToggle] = useState(false);
  const [switchState, setSwitchState] = useState('off'); // Set an initial value
  const [incrimentalId, setIncrimentalId] = useState(1);

  useEffect(() => {
    // Create WebSocket connection
    const newSocket = new WebSocket("ws://homeassistant.local:8123/api/websocket");

    newSocket.addEventListener('open', () => {
      // Authenticate with Home Assistant
      newSocket.send(
        JSON.stringify({
          type: "auth",
          access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhNmE1NGFlODg3YmU0ZmUyYTdmMzZlNjgzZGY2ZTZjYSIsImlhdCI6MTcwMDU4NjAzMywiZXhwIjoyMDE1OTQ2MDMzfQ.lopph2KvRSjOM84VCa3TOwQlqjllkABa-k4bkhGO868", // Replace with your access token
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
    <Card>
      <Typography variant="h4" className="temperature-display">Smart Light</Typography>
      <LightbulbOutlinedIcon onClick={toggleSwitch} style={{ display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center', backgroundColor: 'linear-gradient(145deg, #6066A6, #4C5097)', borderRadius: '50%', width: '15rem', height: '15rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} color={switchState === 'on' ? 'primary' : 'disabled'} />
     <Typography className="switch-state">Switch State: {switchState}</Typography>
    </Card>
  );
};

export default SmartLightCard;