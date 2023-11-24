// SmartLoftPage.js
import React from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import '../components/ProfileCard/ProfileCard.css';
import { LightbulbFilledIcon, LightbulbOutlineIcon, GardenLoftIcon } from '../components/icons';

const SmartLightsPage = () => {
  return (
    <div className="home-container">
      <GardenLoftIcon />

      <div className="profile-card-container">
        <div className="profile-card-column">
        <ProfileCard borderRadius={"200px"} backgroundColor="#FFC100" icon={<LightbulbFilledIcon />} />
          <div className="profile-card-title">Floor Light</div>
        </div>

        <div className="profile-card-column">
        <ProfileCard borderRadius={"200px"} backgroundColor="#FFC100" icon={<LightbulbFilledIcon />} />
          <div className="profile-card-title">Overhead Light</div>
        </div>

        <div className="profile-card-column">
          <ProfileCard borderRadius={"200px"} backgroundColor="#7F8181" icon={<LightbulbOutlineIcon />} />
          <div className="profile-card-title">Accent Light</div>
        </div>
      </div>
    </div>
  );
};

export default SmartLightsPage;

