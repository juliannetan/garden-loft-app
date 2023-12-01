// src/components/CustomIcon.js
import React from "react";

const GardenLoftIcon = ({ onClick }) => {
  return (
    <img
      src="https://i.ibb.co/3s49Wyr/Gloft-Logo-V3.png"
      alt="Garden Loft Icon"
      style={{
        width: "200px",
        height: "106px",
        marginRight: "10px",
        position: "fixed",
        top: "10px",
        left: "10px",
        cursor: "pointer", // Make the icon clickable
      }}
      onClick={onClick} // Pass the onClick prop to the img element
    />
  );
};

export default GardenLoftIcon;
