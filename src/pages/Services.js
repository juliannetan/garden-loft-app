// Home.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import LocationIndicator from "../components/LocationIndicator";
import { CustomNextArrow, CustomPrevArrow } from "../pages/SmartLoftPage";

import {
  GroceryIcon,
  HaircutIcon,
  DryCleaningIcon,
  GardenLoftIcon,
} from "../components/icons";
import Navbar from "../components/Navbar";
import CallHelpButtonComponent from "../components/CallHelpButton";
import { CarouselWrapper, CardColumn, HomeContainer } from "./Home"

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
        <CustomPrevArrow  />
        <CustomNextArrow />
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
        <LocationIndicator currentPage={"services"} />
      </HomeContainer>
      <CallHelpButtonComponent />
    </>
  );
};

export default Services;
