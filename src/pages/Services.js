// Home.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import LocationIndicator from "../components/LocationIndicator";
import {
  GroceryIcon,
  HaircutIcon,
  DryCleaningIcon,
  GardenLoftIcon,
} from "../components/icons";
import Navbar from "../components/Navbar";
import CallHelpButtonComponent from "../components/CallHelpButton";

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

const Services = () => {
  const cardData = [
    { icon: <GroceryIcon />, title: "grocery" },
    { icon: <HaircutIcon />, title: "haircut" },
    { icon: <DryCleaningIcon />, title: "dry cleaning" },
    // Add more cards here
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const sliderRef = React.createRef();

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
      </HomeContainer>
      <CallHelpButtonComponent />
    </>
  );
};

export default Services;
