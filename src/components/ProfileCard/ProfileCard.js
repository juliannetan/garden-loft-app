// ProfileCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileCardLink = styled(Link)`
  text-decoration: none;
`;

const ProfileCardContainer = styled.div`
  width: 300px;
  height: 336px;
  background: ${(props) => (props.backgroundColor !== null && props.backgroundColor !== undefined ? props.backgroundColor : '#7F8181')};
  border-radius: 35px;
  box-shadow:0 8px 16px rgba(0, 0, 0, 0.2);
  margin: 50px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: ${(props) => (props.disableHover ? 'none' : 'scale(1.2)')};

    background: ${(props) => (props.disableHover ? '' : (props.backgroundColor !== null && props.backgroundColor !== undefined ? props.backgroundColor : '#f3b717'))};
    .icon-container {
      svg {
        fill: ${(props) => (props.disableHover ? '' : '#e9ebf8')};
      }
    }
  }
`;

const CardContent = styled.div`
  .icon-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: #f3b717;
    }
  }

  h3 {
    margin: 10px 0 0;
  }
`;

const ProfileCard = ({ link, icon, onClick, title, backgroundColor, borderRadius, disableHover }) => {
  const handleCardClick = () => {
    // Call the onClick prop when the card is clicked
    if (onClick) {
      onClick();
    }
  };


  return (
    <ProfileCardLink to={link}>
      <ProfileCardContainer className="profile-card-div" backgroundColor={backgroundColor} borderRadius={borderRadius} disableHover={disableHover} onClick={handleCardClick}
>
        <CardContent>
          <div className="icon-container">{icon}</div>
          <h3>{title}</h3>
        </CardContent>
      </ProfileCardContainer>
    </ProfileCardLink>
  );
};

export default ProfileCard;

