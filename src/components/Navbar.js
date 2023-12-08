import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GardenLoftIcon } from "../components/icons"; // Add the ClickMeIcon import
import Rotate90DegreesCcwIcon from "@mui/icons-material/Rotate90DegreesCcw";

const NavbarContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center; /* Center the button */
  align-items: center;
  padding: 0 30px;
  z-index: 100;
`;

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2d3e5f; /* Text color */
  // background-color: #eedc9a; /* Button color */
  background-color: #ffc10080;
  padding: 10px 60px; /* Adjust padding as needed */
  border-radius: 20px; /* Rounded edges */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
  border: 1px solid #ccc; /* Light grey outline */
  &:hover {
    background-color: #ccc; /* Hover effect for button color */
    color: #2d3e5f; /* Hover effect for text color */
    transform: scale(1.05);
  }

  .icon {
    margin-right: 10px;
    font-size: 80px;
  }

  .menu-text {
    font-size: 48px; /* Adjust font size as needed */
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <>
      <GardenLoftIcon />
      <NavbarContainer>
        <StyledButton to="/garden-loft-app/home">
          <Rotate90DegreesCcwIcon className="icon" />{" "}
          {/* Replace with your actual ClickMeIcon */}
          <span className="menu-text">Home</span>
        </StyledButton>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
