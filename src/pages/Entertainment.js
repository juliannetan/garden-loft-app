// Home.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import {
  FilmIcon,
  PeopleIcon,
  MusicIcon,
  GardenLoftIcon,
} from "../components/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
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

const CustomArrowButton = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e8e8e4;
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

const Entertainment = () => {
  const cardData = [
    { link: "/tv", icon: <FilmIcon />, title: "Watch TV" },
    { link: "/activities", icon: <PeopleIcon />, title: "View Activities" },
    { link: "/music", icon: <MusicIcon />, title: "Play Music" },
    // Add more cards here
  ];

  const CustomNextArrow = ({ onClick }) => (
    <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
      <ArrowForwardIosIcon fontSize="large" />
    </CustomArrowButton>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
      <ArrowBackIosNewIcon fontSize="large" />
    </CustomArrowButton>
  );

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
