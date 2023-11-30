import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LightbulbFilledIcon, LightbulbOutlineIcon, GardenLoftIcon } from '../components/icons';

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`;

const CarouselWrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px; /* Adjust the max-width as needed */
`;

const CardColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0 20px; /* Adjust the padding to increase or decrease spacing */
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
  width: 200px;
  height: 200px;
  background-color: ${props => (props.isOn ? '#FFC100' : '#7F8181')};
  color: #000;
  font-size: 16px;
  padding: 20px;
  border: none;
  cursor: pointer;
  border-radius: 200px;
  margin: 50px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;


const lightsData = [
  { id: 'floor-light', label: 'Floor', status: 'Off', icon: <LightbulbFilledIcon />,  },
  { id: 'overhead-light', label: 'Overhead', status: 'Off', icon: <LightbulbFilledIcon /> },
  { id: 'kitchen-light', label: 'Accent', status: 'Off', icon: <LightbulbFilledIcon /> },
  { id: 'bedroom-light', label: 'Bedroom', status: 'Off', icon: <LightbulbOutlineIcon /> },
  { id: 'bathroom-light', label: 'Bathroom', status: 'Off', icon: <LightbulbOutlineIcon />  },

];

const SmartLightsPage = () => {
  const [lights, setLights] = useState(lightsData);

  const settings = {
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  };

  const handleLightClick = id => {
    setLights(prevLights =>
      prevLights.map(light =>
        light.id === id ? { ...light, status: light.status === 'On' ? 'Off' : 'On' } : light
      )
    );
  };

  const handleAllOnOffClick = () => {
    const allLightsOn = lights.every(light => light.status === 'On');

    setLights(prevLights =>
      prevLights.map(light => ({ ...light, status: allLightsOn ? 'Off' : 'On' }))
    );
  };

  return (
    <>
    <GardenLoftIcon />
    <HomeContainer>
        <CarouselWrapper>
      <Slider {...settings}>
        <CardColumn>
          <RoundButton isOn={lights.every(light => light.status === 'On')} onClick={handleAllOnOffClick}>
            <CardContent>
              {lights.every(light => light.status === 'On') ? <LightbulbFilledIcon /> : <LightbulbOutlineIcon />}
            </CardContent>
          </RoundButton>
          <div className="profile-card-title">All Lights</div>
        </CardColumn>
        {lights.map(light => (
          <CardColumn key={light.id}>
            <RoundButton isOn={light.status === 'On'} onClick={() => handleLightClick(light.id)}>
              <CardContent>
                {light.status === 'On' ? <LightbulbFilledIcon /> : <LightbulbOutlineIcon />}
              </CardContent>
            </RoundButton>
            <div className="profile-card-title">{light.label}</div>
          </CardColumn>
        ))}
      </Slider>
      </CarouselWrapper>
      </HomeContainer>
    </>
  );
};

export default SmartLightsPage;
