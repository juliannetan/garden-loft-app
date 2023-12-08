import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import {
  GardenLoftIcon,
  LightbulbMultipleIcon,
  PhoneIcon,
  ThermostatIcon,
  TvIcon,
} from "../components/icons";
import CallHelpButtonComponent from "../components/CallHelpButton";
import LocationIndicator from "../components/LocationIndicator";
import Navbar from "../components/Navbar";
import { CustomNextArrow, CustomPrevArrow, CarouselWrapper, CardColumn, HomeContainer } from "./Home"

const Shortcuts = () => {
  const [disableHover, setDisableHover] = useState(false);
  const sliderRef = React.createRef();

  const cardData = [
    { icon: <TvIcon />, title: "watch TV" },
    { icon: <PhoneIcon />, title: "call Sue" },
    { link: "/garden-loft-app/thermostat", icon: <ThermostatIcon />, title: "thermostat" },
    { icon: <LightbulbMultipleIcon />, title: "all lights" }
  ];

  const settings = {
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    initialSlide: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  useEffect(() => {
    // Set the initial slide to the middle programmatically
    sliderRef.current.slickGoTo(1);
  }, [cardData.length]);

  return (
    <>
      <GardenLoftIcon />
      <Navbar />
      <HomeContainer disableHover={disableHover}>
        <CarouselWrapper>
          <Slider ref={sliderRef} {...settings}>
            {cardData.map((card, index) => (
              <CardColumn key={index}>
                <ProfileCard
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
      <LocationIndicator currentPage={"shortcuts"} />
      <CallHelpButtonComponent />
    </>
  );
};

export default Shortcuts;
