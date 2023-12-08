// SmartLoftPage.js
import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import "../components/ProfileCard/ProfileCard.css";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  DoorIcon,
  GardenLoftIcon,
  LampIcon,
  ThermostatIcon,
} from "../components/icons";
import Navbar from "../components/Navbar";
import CallHelpButtonComponent from "../components/CallHelpButton";
import LocationIndicator from "../components/LocationIndicator";
import { CarouselWrapper, CardColumn, HomeContainer } from "./Home";

export const CustomNextArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} style={{ right: '210px', position: 'fixed' }}>
    <ChevronRightIcon/>
  </CustomArrowButton>
);

export const CustomPrevArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} style={{ left: '210px', position: 'fixed' }}>
    <ChevronLeftIcon />
  </CustomArrowButton>
);

export const StyledTypography = styled.div`
  margin-top: 10px;
  font-weight: bold;
  color: #2D3E5F;
  font-size: 45px;

  &:hover {
    padding-top: 10px;
    transform: scale(1.2);
  }
`;

export const CustomArrowButton = styled.div`
width: 80px;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
position: absolute;
top: 50%;
transform: translateY(-50%);
z-index: 1; 

&:active {
  transform: translateY(-50%), scale(0.95); // Add a scaling effect for the pressed state
  box-shadow: 0 0 0; // Remove box shadow for a pressed effect
}
`;


const SmartLoftPage = () => {
  const settings = {
    infinite: true,
    speed: 500,
    initialSlide: 1, // Set the initial slide to the middle card
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  };
  const sliderRef = React.createRef();

  const cardData = [
    { link: "/garden-loft-app/smart-lights", icon: <LampIcon />, title: "smart lights" },
    { link: "/garden-loft-app/thermostat", icon: <ThermostatIcon />, title: "thermostat" },
    { link: "/garden-loft-app/door-lock", icon: <DoorIcon />, title: "door lock" },
    // Add more cards here
  ];

  return (
    <>
      <GardenLoftIcon />
      <Navbar />
      <HomeContainer>
        <CarouselWrapper>
        <CustomPrevArrow  />
            <CustomNextArrow />
          <Slider ref={sliderRef} {...settings}>
            {cardData.map((card, index) => (
              <CardColumn key={index}>
                <ProfileCard
                  link={card.link}
                  icon={card.icon}
                  backgroundColor={card.backgroundColor}
                />
                <StyledTypography>{card.title}</StyledTypography>
              </CardColumn>
            ))}
          </Slider>
        </CarouselWrapper>
        <LocationIndicator currentPage={"loft controls"} />
        <CallHelpButtonComponent />
      </HomeContainer>
    </>
  );
};

export default SmartLoftPage;
