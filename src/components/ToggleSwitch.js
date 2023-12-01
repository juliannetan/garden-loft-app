import React, { useState } from "react";
import styled from "styled-components";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const StyledSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
    width: 100,
    height: 35,
    padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(65px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "gray",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 30,
    height: 30,
  },
  "& .MuiSwitch-track": {
    borderRadius: "50px",
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transitionDuration: 500
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#A8C8E1",
    position: "relative",
    "&::before": {
      content: '"COOL"',
      position: "absolute",
      top: "50%",
      left: "40%",
      transform: "translate(-50%, -50%)",
      color: "#2D3E5F"
    },
  },
  "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
    background: "linear-gradient(180deg, rgba(255, 35, 74, 0.504) 16.67%, rgba(244, 140, 6, 0.402) 100%)",
    position: "relative",
    "&::before": {
      content: '"WARM"',
      position: "absolute",
      top: "50%",
      right: "-10%",
      transform: "translate(-50%, -50%)",
      color: "#2D3E5F"
    },
  },
}));

const ToggleSwitch = ({ handleSwitchToggle }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
    handleSwitchToggle();
  };

   return (
    <FormControlLabel control={<StyledSwitch sx={{ m: 1 }} checked={isChecked} onChange={handleChange} />} />
  );
};

export default ToggleSwitch;
