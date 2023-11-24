// // ProfileCard.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled components
// const ProfileCardLink = styled(Link)`
//   text-decoration: none;
// `;

// const ProfileCardContainer = styled.div`
//   width: 200px;
//   height: 200px;
//   background: ${(props) => props.backgroundColor || 'gray'};
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin: 50px;
//   padding: 20px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const CardContent = styled.div`
//   .icon-container {
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     svg {
//       width: 150px;
//       height: 150px;
//       fill: white;
//     }
//   }

//   h3 {
//     margin: 10px 0 0;
//   }
// `;

// const ProfileCard = ({ link, icon, backgroundColor }) => {
//   return (
//     <ProfileCardLink to={link}>
//       <ProfileCardContainer backgroundColor={backgroundColor}>
//         <CardContent>
//           {/* SVG Icon */}
//           <div className="icon-container">{icon}</div>
//           {/* Other Card Content Here */}
//         </CardContent>
//       </ProfileCardContainer>
//     </ProfileCardLink>
//   );
// };

// export default ProfileCard;

// ProfileCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileCardLink = styled(Link)`
  text-decoration: none;
`;

const ProfileCardContainer = styled.div`
  width: 200px;
  height: 200px;
  background: ${(props) => (props.backgroundColor !== null && props.backgroundColor !== undefined ? props.backgroundColor : '#7F8181')};
  border-radius: ${(props) => (props.borderRadius !== null && props.borderRadius !== undefined ? props.borderRadius : '10px')} !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 50px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background: ${(props) => (props.backgroundColor !== null && props.backgroundColor !== undefined ? props.backgroundColor : '#f3b717')};
    .icon-container {
      svg {
        fill: #e9ebf8;
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
      width: 150px;
      height: 150px;
      fill: #f3b717;
    }
  }

  h3 {
    margin: 10px 0 0;
  }
`;

const ProfileCard = ({ link, icon, title, backgroundColor, borderRadius }) => {
  return (
    <ProfileCardLink to={link}>
      <ProfileCardContainer backgroundColor={backgroundColor} borderRadius={borderRadius}>
        <CardContent>
          {/* SVG Icon */}
          <div className="icon-container">{icon}</div>
          {/* Other Card Content Here */}
          <h3>{title}</h3>
        </CardContent>
      </ProfileCardContainer>
    </ProfileCardLink>
  );
};

export default ProfileCard;

