// Home.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import {
  FilmIcon,
  PeopleIcon,
  MusicIcon,
  GardenLoftIcon,
} from "../components/icons";
import Navbar from "../components/Navbar";
import CallHelpButtonComponent from "../components/CallHelpButton";
import LocationIndicator from "../components/LocationIndicator";
import { CarouselWrapper, CardColumn, HomeContainer } from "./Home"
import { CustomNextArrow, CustomPrevArrow } from "../pages/SmartLoftPage";

const Entertainment = () => {
  const cardData = [
    { icon: <FilmIcon />, title: "watch TV" },
    { icon: <PeopleIcon />, title: "view activities" },
    { icon: <MusicIcon />, title: "play music" },
    // Add more cards here
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const sliderRef = React.createRef();

  return (
    <>
      <GardenLoftIcon />
      <Navbar />

      <CustomPrevArrow  />
        <CustomNextArrow />
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
      <LocationIndicator currentPage={"TV+entertainment"} />
      <CallHelpButtonComponent />
    </>
  );
};

export default Entertainment;
