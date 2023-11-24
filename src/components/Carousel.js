// Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translateValue}px);
`;

const CarouselCard = styled.div`
  flex: 0 0 33.33%; /* Display three cards at a time */
  margin: 0 10px;
  padding: 20px;
  background-color: ${(props) => (props.active ? '#f3b717' : 'gray')};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? 'gray' : 'white')};
  width: 100%; /* Adjust the width of each card */
`;

const CarouselButton = styled.button`
  margin: 0 10px;
`;

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const translateValue = -currentIndex * 33.33; // Adjust based on the width of each card

  return (
    <CarouselContainer>
      <CarouselContent translateValue={translateValue}>
        {cards.map((Card, index) => (
          <CarouselCard key={index} active={index === currentIndex}>
            <Card />
          </CarouselCard>
        ))}
      </CarouselContent>
    </CarouselContainer>
  );
};

export default Carousel;
