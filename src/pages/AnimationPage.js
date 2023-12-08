// GifPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AnimationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
      const timeoutId = setTimeout(() => {
        navigate('/garden-loft-app/welcome');
      }, 4000); 
      return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <img
      src="/garden-loft-app/garden-loft-animation.gif"
      alt="GIF"
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

export default AnimationPage;
