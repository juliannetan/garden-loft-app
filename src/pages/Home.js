// // Home.js
// import React from 'react';
// import ProfileCard from '../components/ProfileCard/ProfileCard';
// import '../components/ProfileCard/ProfileCard.css';
// import { PeopleIcon, LightbulbIcon, ScheduleIcon, GardenLoftIcon } from '../components/icons';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <GardenLoftIcon />

//       <div className="profile-card-container">
//         <div className="profile-card-column">
//         <ProfileCard link={"/smart-loft"} icon={<LightbulbIcon />} />
//           <div className="profile-card-title">Smart Loft</div>
//         </div>

//         <div className="profile-card-column">
//         <ProfileCard backgroundColor="#f3b717" link={"/entertainment"} icon={<PeopleIcon />} />
//           <div className="profile-card-title">Entertainment</div>
//         </div>

//         <div className="profile-card-column">
//           <ProfileCard link={"/schedule"} icon={<ScheduleIcon />} />
//           <div className="profile-card-title">Schedule</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// Home.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { ContactsIcon, GardenLoftIcon, HealthIcon, LightbulbIcon, PeopleIcon, ServicesIcon, ScheduleIcon } from '../components/icons';

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`;

const CarouselWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px; /* Adjust the max-width as needed */
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CardColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
`;

const PrevButton = styled(NavButton)`
  left: 10px;
  color: black;
`;

const NextButton = styled(NavButton)`
  right: 10px;
  color: black;
`;

const Home = () => {
  const cardData = [
    { link: '/smart-loft', backgroundColor: 'gray', icon: <LightbulbIcon />, title: 'Smart Loft' },
    { link: '/entertainment', backgroundColor: '#f3b717', icon: <PeopleIcon />, title: 'Entertainment' },
    { link: '/schedule', backgroundColor: 'gray', icon: <ScheduleIcon />, title: 'Schedule' },
    { link: '/services', backgroundColor: '#f3b717', icon: <ServicesIcon />, title: 'Services' },
    { link: '/my-contacts', backgroundColor: 'gray', icon: <ContactsIcon />, title: 'My Contacts' },
    { link: '/my-health', backgroundColor: '#f3b717', icon: <HealthIcon />, title: 'My Health' },
    // Add more cards here
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const sliderRef = React.createRef();

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
  <>
    <GardenLoftIcon />
    <HomeContainer>
      <CarouselWrapper>
        <Slider ref={sliderRef} {...settings}>
          {cardData.map((card, index) => (
            <>
              <CardColumn>
              <ProfileCard key={index} link={card.link} icon={card.icon} backgroundColor={card.backgroundColor} />
              <div className="profile-card-title">{card.title}</div>
              </CardColumn>
            </>
          ))}
        </Slider>
      </CarouselWrapper>
      <PrevButton onClick={handlePrevious}>previous</PrevButton>
      <NextButton onClick={handleNext}>Next</NextButton>
    </HomeContainer>
  </>
  );
};

export default Home;
