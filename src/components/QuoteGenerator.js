// QuoteGenerator.js
import React, { useState, useEffect } from "react";
import "./QuoteGenerator.css";
import ErrorBoundary from "./ErrorBoundary";

const quotes = [
  "EMBRACE THE RHYTHM OF YOUR BREATH; IT IS THE SONG OF YOUR SPIRIT DANCING WITH THE UNIVERSE.",
  "FIND PEACE IN THE QUIET MOMENTS, AND LET THE STILLNESS OF YOUR SOUL GUIDE YOU TO SERENITY.",
  "IN THE GARDEN OF LIFE, MAY YOUR HEART BLOOM WITH THE FLOWERS OF GRATITUDE AND JOY.",
  "RADIATE LOVE LIKE THE SUN, WARMING THE HEARTS OF THOSE AROUND YOU WITH ITS GENTLE GLOW.",
  "PEACE IS NOT FOUND IN THE ABSENCE OF CHAOS BUT IN THE QUIETUDE OF A CONTENTED HEART.",
  "LET YOUR HEART BE A LIGHTHOUSE, GUIDING OTHERS WITH THE GENTLE BEAMS OF COMPASSION.",
  "IN THE TAPESTRY OF EXISTENCE, EVERY THREAD IS WOVEN WITH THE ESSENCE OF DIVINE LOVE.",
  "THE JOURNEY WITHIN IS THE PATH TO TRUE JOY; SEEK THE TREASURES HIDDEN IN THE DEPTHS OF YOUR SOUL.",
  "MAY YOUR SPIRIT BE A TRANQUIL RIVER, FLOWING GRACEFULLY THROUGH THE LANDSCAPES OF LIFE.",
  "THE LANGUAGE OF THE HEART SPEAKS IN WHISPERS; LISTEN CLOSELY, AND YOU'LL HEAR THE MELODY OF JOY.",
  "PEACE IS NOT MERELY A DESTINATION BUT A WAY OF TRAVELING THROUGH THE EBB AND FLOW OF LIFE.",
  "AMIDST THE CHAOS, FIND SOLACE IN THE SANCTUARY OF YOUR SOUL, WHERE JOY IS A SACRED FLAME.",
  "LET GRATITUDE BE YOUR PRAYER, AND LET THE UNIVERSE RESPOND WITH BLESSINGS BEYOND MEASURE.",
  "IN THE SILENCE OF MEDITATION, DISCOVER THE SYMPHONY OF YOUR SPIRIT, RESONATING WITH PEACE.",
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
        {" "}
        <blockquote>
          <q>{currentQuote}</q>
        </blockquote>
      </div>
    </ErrorBoundary>
  );
};

export default QuoteGenerator;
