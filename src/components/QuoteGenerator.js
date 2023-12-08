// QuoteGenerator.js
import React, { useState, useEffect } from "react";
import "./QuoteGenerator.css";
import ErrorBoundary from "./ErrorBoundary";

const quotes = [
  "Embrace the rhythm of your breath; it is the song of your spirit dancing with the universe.",
  "Find peace in the quiet moments, and let the stillness of your soul guide you to serenity.",
  "In the garden of life, may your heart bloom with the flowers of gratitude and joy.",
  "Radiate love like the sun, warming the hearts of those around you with its gentle glow.",
  "Peace is not found in the absence of chaos but in the quietude of a contented heart.",
  "Let your heart be a lighthouse, guiding others with the gentle beams of compassion.",
  "In the tapestry of existence, every thread is woven with the essence of divine love.",
  "The journey within is the path to true joy; seek the treasures hidden in the depths of your soul.",
  "May your spirit be a tranquil river, flowing gracefully through the landscapes of life.",
  "The language of the heart speaks in whispers; listen closely, and you'll hear the melody of joy.",
  "Peace is not merely a destination but a way of traveling through the ebb and flow of life.",
  "Amidst the chaos, find solace in the sanctuary of your soul, where joy is a sacred flame.",
  "Let gratitude be your prayer, and let the universe respond with blessings beyond measure.",
  "In the silence of meditation, discover the symphony of your spirit, resonating with peace.",
];

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState("");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    setCurrentQuote(newQuote);
  };

  useEffect(() => {
    generateQuote();
    const intervalId = setInterval(generateQuote, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ErrorBoundary>
      <div className="quote-overlay">
        <blockquote>{currentQuote}
        </blockquote>
      </div>
    </ErrorBoundary>
  );
};

export default QuoteGenerator;
