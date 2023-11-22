import React from 'react';
import IconButton from '@mui/material/IconButton';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const LightbulbButton = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center', backgroundColor: 'linear-gradient(145deg, #6066A6, #4C5097)', borderRadius: '50%', width: '15rem', height: '15rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
      <IconButton onClick={onClick} style={{ backgroundColor: 'transparent', borderRadius: '50%', border: '2px solid #fff' }}>
        <LightbulbIcon style={{ fontSize: '12rem', color: '#000' }} />
      </IconButton>
    </div>
  );
};

export default LightbulbButton;

