// Home.js
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import {
  ContactsIcon,
  HealthIcon,
  TvIcon,
  ServicesIcon,
  SettingsIcon,
  ScheduleIcon,
  ShortcutIcon,
  GardenLoftIcon,
} from "../components/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CallHelpButtonComponent from "../components/CallHelpButton";
import LocationIndicator from "../components/LocationIndicator";
import BroadcastIcon from "../components/icons/BroadcastIcon";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  text-align: center;

  div.slick-slide.slick-active.slick-center.slick-current {
    .profile-card-div {
      background: #f3b717;
      transform: scale(1.2);
      transition: transform 0.5s ease;
      padding: 20px;
    }
    .icon-container {
      svg {
        fill: #e9ebf8;
      }
    }
  }
`;

const CarouselWrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px; /* Adjust the max-width as needed */
  justify-content: space-around;
`;

const CardColumn = styled.div`
  display: flex;
  justify-content: center;
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

const StyledProfileCard = styled(ProfileCard)`
  // Add any additional styles here
`;

const Home = () => {
  const cardData = [
    { link: "/shortcuts", icon: <ShortcutIcon />, title: "shortcuts" },
    { link: "/smart-loft", icon: <BroadcastIcon />, title: "loft controls" },
    { link: "/entertainment", icon: <TvIcon />, title: "entertainment" },
    { icon: <ScheduleIcon />, title: "schedule" },
    { link: "/services", icon: <ServicesIcon />, title: "services" },
    { icon: <ContactsIcon />, title: "my contacts" },
    { icon: <HealthIcon />, title: "my health" },
    { icon: <SettingsIcon />, title: "settings" },
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
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <CustomNextArrow data-clickable="true" />,
    prevArrow: <CustomPrevArrow data-clickable="true" />,
  };

  const sliderRef = React.createRef();
  const [disableHover, setDisableHover] = useState(false);

  return (
    <>
      <GardenLoftIcon />
      <HomeContainer disableHover={disableHover}>
        <CarouselWrapper>
          <Slider ref={sliderRef} {...settings}>
            {cardData.map((card, index) => (
              <CardColumn key={index}>
                <StyledProfileCard
                  link={card.link}
                  icon={card.icon}
                  backgroundColor={card.backgroundColor}
                  disableHover={true}
                />
                <div className="profile-card-title">{card.title}</div>
              </CardColumn>
            ))}
          </Slider>
        </CarouselWrapper>
      </HomeContainer>
      <LocationIndicator currentPage={"home"} />
      <CallHelpButtonComponent />
    </>
  );
};

export default Home;
