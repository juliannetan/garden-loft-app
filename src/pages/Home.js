// Home.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { ContactsIcon, GardenLoftIcon, HealthIcon, LightbulbIcon, TvIcon, ServicesIcon, ScheduleIcon } from '../components/icons';

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


const Home = () => {
  const cardData = [
    { link: '/smart-loft', icon: <LightbulbIcon />, title: 'Smart Loft' },
    { link: '/entertainment', icon: <TvIcon />, title: 'Entertainment' },
    { link: '/schedule', icon: <ScheduleIcon />, title: 'Schedule' },
    { link: '/services', icon: <ServicesIcon />, title: 'Services' },
    { link: '/my-contacts', icon: <ContactsIcon />, title: 'My Contacts' },
    { link: '/my-health', icon: <HealthIcon />, title: 'My Health' },
    // Add more cards here
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true
  };

  const sliderRef = React.createRef();


  return (
    <>
      <GardenLoftIcon />
      <HomeContainer>
        <CarouselWrapper>
          <Slider ref={sliderRef} {...settings}>
            {cardData.map((card, index) => (
              <CardColumn key={index}>
                <ProfileCard link={card.link} icon={card.icon} backgroundColor={card.backgroundColor} />
                <div className="profile-card-title">{card.title}</div>
              </CardColumn>
            ))}
          </Slider>
        </CarouselWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
