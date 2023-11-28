// Home.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { GardenLoftIcon, FilmIcon, PeopleIcon, MusicIcon } from '../components/icons';

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


const Entertainment = () => {
  const cardData = [
    { link: '/tv', icon: <FilmIcon />, title: 'Watch TV' },
    { link: '/activities', icon: <PeopleIcon />, title: 'View Activities' },
    { link: '/music', icon: <MusicIcon />, title: 'Play Music' }
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

export default Entertainment;
