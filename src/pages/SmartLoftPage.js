// SmartLoftPage.js
import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import "../components/ProfileCard/ProfileCard.css";
import LocationIndicator from "../components/LocationIndicator";
import { DoorIcon, LampIcon, ThermostatIcon } from "../components/icons";
import Navbar from "../components/Navbar";
import CallHelpButtonComponent from "../components/CallHelpButton";

const SmartLoftPage = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="profile-card-container">
        <div className="profile-card-column">
          <ProfileCard
            backgroundColor="#1E6996"
            link={"/smart-lights"}
            icon={<LampIcon />}
          />
          <div className="profile-card-title">Smart Lights</div>
        </div>

        <div className="profile-card-column">
          <ProfileCard
            backgroundColor="#F68044"
            link={"/thermostat"}
            icon={<ThermostatIcon />}
          />
          <div className="profile-card-title">Thermostat</div>
        </div>

        <div className="profile-card-column">
          <ProfileCard
            backgroundColor="#1E6996"
            link={"/door-lock"}
            icon={<DoorIcon />}
          />
          <div className="profile-card-title">Door Lock</div>
          <LocationIndicator currentPage={"loft controls"} />
          <CallHelpButtonComponent />
        </div>
      </div>
    </div>
  );
};

export default SmartLoftPage;
