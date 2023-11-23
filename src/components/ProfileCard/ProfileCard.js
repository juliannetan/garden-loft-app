// ProfileCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = ({ link, icon, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <Link to={link} className="profile-card-link">
      <div className="profile-card" style={cardStyle}>
        <div className="card-content">
          {/* SVG Icon */}
          <div className="icon-container">{icon}</div>
          {/* Other Card Content Here */}
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
