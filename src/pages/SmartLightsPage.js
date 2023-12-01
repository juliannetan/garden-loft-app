import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LightbulbFilledIcon, LightbulbMultiple, LightbulbOutlineIcon, GardenLoftIcon } from '../components/icons';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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

const lightsData = [
  { id: 'floor-light', label: 'Floor', status: 'Off', icon: <LightbulbFilledIcon />,  },
  { id: 'overhead-light', label: 'Overhead', status: 'Off', icon: <LightbulbFilledIcon /> },
  { id: 'kitchen-light', label: 'Accent', status: 'Off', icon: <LightbulbFilledIcon /> },
  { id: 'bedroom-light', label: 'Bedroom', status: 'Off', icon: <LightbulbOutlineIcon /> },
  { id: 'bathroom-light', label: 'Bathroom', status: 'Off', icon: <LightbulbOutlineIcon />  },

];

const SmartLightsPage = () => {
  const [lights, setLights] = useState(lightsData);

  const CustomNextArrow = ({ onClick }) => (
    <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
      <ArrowForwardIosIcon fontSize='large'/>
    </CustomArrowButton>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
      <ArrowBackIosNewIcon fontSize='large' />
    </CustomArrowButton>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
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
              {lights.every(light => light.status === 'On') ? <LightbulbMultiple color={'#E9EBF8'} /> : <LightbulbMultiple />}
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
