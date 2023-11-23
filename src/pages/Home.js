// Home.js
import React from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import '../components/ProfileCard/ProfileCard.css';
import PeopleIcon from '../components/icons/PeopleIcon';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import ScheduleIcon from '../components/icons/ScheduleIcon';
import GardenLoftIcon from '../components/icons/GardenLoftIcon';

const Home = () => {
  return (
    <div className="home-container">
      <GardenLoftIcon />

      <div className="profile-card-container">
        <div className="profile-card-column">
          <ProfileCard link={"/entertainment"} icon={<PeopleIcon />} />
          <div className="profile-card-title">Entertainment</div>
        </div>

        <div className="profile-card-column">
          <ProfileCard backgroundColor="#f3b717" link={"/smart-loft"} icon={<LightbulbIcon />} />
          <div className="profile-card-title">Smart Home</div>
        </div>

        <div className="profile-card-column">
          <ProfileCard link={"/schedule"} icon={<ScheduleIcon />} />
          <div className="profile-card-title">Schedule</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
