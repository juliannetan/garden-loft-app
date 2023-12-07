import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  GardenLoftIcon,
  LightbulbFilledIcon,
  LightbulbMultipleIcon,
  LightbulbOutlineIcon,
} from "../components/icons";
import CallHelpButtonComponent from "../components/CallHelpButton";
import LocationIndicator from "../components/LocationIndicator";
import Navbar from "../components/Navbar";
import { CustomNextArrow, CustomPrevArrow, CarouselWrapper, CardColumn } from "./Home"

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  text-align: center;

  div.slick-slide.slick-active.slick-center.slick-current {
    .smart-lights-div {
      transform: scale(1.25);
      transition: transform 0.5s ease;
      padding: 20px;
    }
    .profile-card-title {
      padding-top: 10px;
      transform: scale(1.2);
      margin-bottom: 5px;
    }
    .icon-container {
      svg {
        fill: #e9ebf8;
      }
    }
  }
`;

const CardContent = styled.div`
  .icon-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    margin: 10px 0 0;
  }
`;

const RoundButton = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => (props.isOn ? "#FFC100" : "#7F8181")};
  font-size: 16px;
  padding: 20px;
  border: none;
  cursor: pointer;
  border-radius: 200px;
  margin: 50px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const lightsData = [
  {
    id: "accent-light",
    label: "accent",
    status: "off",
    entity_id: "switch.thing2",
    icon: <LightbulbOutlineIcon />,
  },
  {
    id: "bathroom-light",
    label: "bathroom",
    status: "off",
    icon: <LightbulbFilledIcon />,
  },
  {
    id: "bedroom-light",
    label: "bedroom",
    entity_id: "switch.thing2",
    icon: <LightbulbFilledIcon />,
  },
  {
    id: "livingroom-light",
    label: "living room",
    status: "off",
    entity_id: "switch.thing1",
    icon: <LightbulbFilledIcon />,
  }
];

const SmartLightsPage = () => {
  const [lights, setLights] = useState(lightsData);
  const [allLights, setAllLights] = useState(lightsData);
  const [socket, setSocket] = useState(null);
  const [incrimentalId, setIncrimentalId] = useState(1);
  const [manualToggle, setManualToggle] = useState(false);

  useEffect(() => {
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
      newSocket.send(
        JSON.stringify({
          id: 1,
          type: "subscribe_events",
          event_type: "state_changed",
          entity_id: "switch.thing1", // Replace with your switch entity ID
        })
      );
      newSocket.send(
        JSON.stringify({
          id: 1,
          type: "subscribe_events",
          event_type: "state_changed",
          entity_id: "switch.all_lights", // Replace with your switch entity ID
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
            setLights(newSwitchState);
            // setManualToggle()
            // Do UI updates based on the state if needed
            // ...
            break;
          }
          if (currentEntry.entity_id === "switch.thing1") {
            const newSwitchState = currentEntry.state;
            setLights(newSwitchState);
            // setManualToggle()
            // Do UI updates based on the state if needed
            // ...
            break;
          }
          if (currentEntry.entity_id === "switch.all_lights") {
            const newSwitchState = currentEntry.state;
            setLights(newSwitchState);
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
  });
  newSocket.addEventListener('message', (event) => {
    try {
      const receivedData = JSON.parse(event.data);

      if (receivedData.type === "event" && receivedData.event.event_type === "state_changed") {
        const entityState = receivedData.event.data.new_state;
        if (entityState.entity_id === "switch.all_lights") {
          const newSwitchState = entityState.state;
          setLights(newSwitchState);
        }
        if (entityState.entity_id === "switch.thing2") {
          const newSwitchState = entityState.state;
          setLights(newSwitchState);
        }
        if (entityState.entity_id === "switch.thing1") {
          const newSwitchState = entityState.state;
          setLights(newSwitchState);
        }
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });


    newSocket.addEventListener("close", (event) => {
      console.log("WebSocket connection closed:", event);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

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



  const handleLightClick = (id, entity_id) => {
    console.log("handlelightclick id " + id, entity_id);
    const newLights = lights.map((light) =>
      light.id === id
        ? { ...light, status: light.status === "on" ? "off" : "on" }
        : light
    );

    setLights(newLights);
    setManualToggle(true);
  
    const message = JSON.stringify([
      {
        id: incrimentalId,
        type: "call_service",
        domain: "switch",
        service: "toggle",
        service_data: {
          entity_id: entity_id
        },
      }
    ]);
  
    setIncrimentalId((prevId) => prevId + 1); 
    sendMessage(message);
  };
  
  

  const handleAllOnOffClick = () => {
    const allLightsOn = lights.every((light) => light.status === "on");
    const newLights = lights.map((light) => ({
      ...light,
      status: allLightsOn ? "off" : "on",
    }));
    setLights(newLights);
    setManualToggle(true);

    const message = JSON.stringify([
      {
        id: incrimentalId,
        type: "call_service",
        domain: "switch",
        service: "toggle",
        service_data: {
          entity_id: "switch.all_lights"
        },
      }
    ]);
  
    setIncrimentalId((prevId) => prevId + 1); 
    sendMessage(message);
  };

  const settings = {
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };    

return (
  <>
    <GardenLoftIcon />
    <Navbar />
    <HomeContainer>
      <CarouselWrapper>
        <Slider {...settings}>
          <CardColumn>
            <RoundButton
              className="smart-lights-div"
              isOn={lights.every((light) => light.status === "on")}
              onClick={handleAllOnOffClick}
            >
              <CardContent>
                {lights.every((light) => light.status === "on") ? (
                  <LightbulbMultipleIcon color={"#E9EBF8"} />
                ) : (
                  <LightbulbMultipleIcon />
                )}
              </CardContent>
            </RoundButton>
            <div className="profile-card-title">all lights</div>
          </CardColumn>
          {lights.map((light) => (
            <CardColumn key={light.id}>
              <RoundButton
                className="smart-lights-div"
                isOn={light.status === "on"}
                onClick={() => handleLightClick(light.id, light.entity_id)}
              >
                <CardContent>
                  {light.status === "on" ? (
                    <LightbulbFilledIcon />
                  ) : (
                    <LightbulbOutlineIcon />
                  )}
                </CardContent>
              </RoundButton>
              <div className="profile-card-title">{light.label}</div>
            </CardColumn>
          ))}
        </Slider>
      </CarouselWrapper>
      <LocationIndicator currentPage={"lights control"} />
      <CallHelpButtonComponent />
    </HomeContainer>
  </>
);
};

export default SmartLightsPage;
