// SmartLoftPage.js
import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import "../components/ProfileCard/ProfileCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {
  DoorIcon,
  GardenLoftIcon,
  LampIcon,
  ThermostatIcon,
} from "../components/icons";
import Navbar from "../components/Navbar";
import CallHelpButtonComponent from "../components/CallHelpButton";
import LocationIndicator from "../components/LocationIndicator";

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
    { link: "/smart-lights", icon: <LampIcon />, title: "smart Lights" },
    { link: "/thermostat", icon: <ThermostatIcon />, title: "thermostat" },
    { icon: <DoorIcon />, title: "door lock" },
    // Add more cards here
  ];

  return (
    <>
      <GardenLoftIcon />
      <Navbar />
      <HomeContainer>
        <CarouselWrapper>
          <Slider ref={sliderRef} {...settings}>
            {cardData.map((card, index) => (
              <CardColumn key={index}>
                <ProfileCard
                  link={card.link}
                  icon={card.icon}
                  backgroundColor={card.backgroundColor}
                />
                <div className="profile-card-title">{card.title}</div>
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
