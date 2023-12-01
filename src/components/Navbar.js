// // Navbar.js

// import React, { useState } from "react";
// import styled from "styled-components";
// import { GiHamburgerMenu } from "react-icons/gi"; // You may need to install the react-icons library
// import { Link } from "react-router-dom"; // Assuming you are using React Router
// import {
//   ContactsIcon,
//   GardenLoftIcon,
//   HealthIcon,
//   LightbulbIcon,
//   TvIcon,
//   ServicesIcon,
//   ScheduleIcon,
//   HomeIcon,
//   PeopleIcon,
// } from "../components/icons";

// import "./Navbar.css"; // Import the separated CSS file

// const NavbarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: 60px;
//   // background: #22272ca1; /* Adjust the background color as needed */
//   display: flex;
//   // justify-content: center;
//   // align-items: center;
//   padding: 0px 30px;
//   z-index: 100;
//   // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;
// const CenteredIcon = styled.div`
//   position: fixed;
//   top: 0.5%;
//   // left: 42%;
//   transform: translateX(-20%);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateX(-20%) scale(1.05);
//   }
// `;

// const Drawer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.9);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   z-index: 99;

//   transition: opacity 0.5s ease, transform 0.5s ease;

//   &.closed {
//     opacity: 0;
//     transform: translateY(-100%);
//   }
// `;

// const HamburgerIcon = styled(GiHamburgerMenu)`
//   display: flex;
//   justify-content: center;
//   font-size: 2rem;
//   color: #fff; /* Adjust the icon color as needed */
//   cursor: pointer;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 100%;
//   height: 100%;
// `;

// const NavButton = styled(Link)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   cursor: pointer;
//   color: #00f7ff;
//   background-color: #f3b717;
//   border-radius: 50px;
//   box-shadow: 0 0 10px rgba(0, 247, 255, 0.8);
//   transition: box-shadow 0.3s ease;
//   transition: transform 0.3s ease;

//   &:hover {
//     color: #f9f9fb; /* Adjust the button text color on hover as needed */
//     box-shadow: 0 0 20px rgba(0, 247, 255, 0.8); /* Add a stronger glow effect on hover */
//     transform: scale(1.1);
//   }

//   .icon {
//     font-size: 2rem;
//     margin-bottom: 8px;
//     color: grey;
//   }
//   .label {
//     margin-top: 10px; /* Adjust the spacing between the icon and label */
//     color: #f3b717;
//     font-size: 40px;
//   }
// `;

// const Label = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px; /* Adjust the spacing between the icon and label */
//   color: #fff;
//   font-size: 36px;
// `;

// const Navbar = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   const cardData = [
//     {
//       link: "/home",
//       icon: <PeopleIcon />, // Use your HomeIcon component here
//       title: "Main Page",
//     },
//     {
//       link: "/smart-loft",
//       icon: (
//         <LightbulbIcon
//           style={{ width: "5rem", height: "5rem", color: "#00f7ff" }}
//         />
//       ),
//       title: "Smart Loft",
//     },
//     {
//       link: "/entertainment",
//       icon: (
//         <TvIcon style={{ width: "5rem", height: "5rem", color: "#00f7ff" }} />
//       ),
//       title: "TV",
//     },
//     {
//       link: "/entertainment",
//       icon: (
//         <ServicesIcon
//           style={{ width: "5rem", height: "5rem", color: "#00f7ff" }}
//         />
//       ),
//       title: "Favorites",
//     },
//     // {
//     //   link: "/schedule",
//     //   icon: (
//     //     <ScheduleIcon
//     //       style={{ width: "5rem", height: "5rem", color: "#00f7ff" }}
//     //     />
//     //   ),
//     //   title: "Schedule",
//     // },
//     // {
//     //   link: "/services",
//     //   icon: (
//     //     <ServicesIcon
//     //       style={{ width: "5rem", height: "5rem", color: "#00f7ff" }}
//     //     />
//     //   ),
//     //   title: "Services",
//     // },
//     // {
//     //   link: "/my-contacts",
//     //   icon: (
//     //     <ContactsIcon
//     //       style={{ width: "5rem", height: "5rem", color: "#00f7ff" }}
//     //     />
//     //   ),
//     //   title: "My Contacts",
//     // },
//     // {
//     //   link: "/my-health",
//     //   icon: (
//     //     <HealthIcon
//     //       style={{ width: "5rem", height: "5rem", color: "#00f7ff" }}
//     //     />
//     //   ),
//     //   title: "My Health",
//     // },
//     // Add more cards here
//   ];

//   return (
//     <>
//       <NavbarContainer>
//         <CenteredIcon>
//           <GardenLoftIcon onClick={toggleDrawer} />
//         </CenteredIcon>
//       </NavbarContainer>
//       {/* {isDrawerOpen && (
//         <Drawer>
//           <ButtonContainer>
//             {cardData.map((card, index) => (
//               <div>
//                 <NavButton to={card.link} key={index}>
//                   <div className="icon">{card.icon}</div>
//                 </NavButton>
//                 <Label>{card.title}</Label>
//               </div>
//             ))}
//           </ButtonContainer>
//         </Drawer>
//       )} */}
//     </>
//   );
// };

// export default Navbar;

// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { GardenLoftIcon, PeopleIcon } from "../components/icons";

// const NavbarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: 60px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 30px;
//   z-index: 100;
// `;

// const CenteredIcon = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: black;
//   cursor: pointer;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #555;
//   }

//   .logo {
//     margin-right: 10px;
//   }

//   .menu-text {
//     font-size: 1rem;
//     font-weight: bold;
//   }
// `;

// const Navbar = () => {
//   return (
//     <>
//       <NavbarContainer>
//         <CenteredIcon to="/home">
//           <GardenLoftIcon className="logo" />
//           <span className="menu-text">Menu</span>
//         </CenteredIcon>
//       </NavbarContainer>
//     </>
//   );
// };

// export default Navbar;
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GardenLoftIcon, PeopleIcon } from "../components/icons";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 100;
`;

const CenteredIcon = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }

  .logo {
    margin-right: 40px;
  }

  .menu-text {
    margin-top: 80px;
    margin-left: 175px;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2D3E5F;
  }
`;

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <CenteredIcon to="/home">
          <GardenLoftIcon className="logo" />
          <span className="menu-text">menu</span>
        </CenteredIcon>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
