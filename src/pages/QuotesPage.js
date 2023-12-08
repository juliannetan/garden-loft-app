// QuotesPage.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from "../components/ErrorBoundary";
import RippleAnimation from "../components/RippleAnimation";
import QuoteGenerator from "../components/QuoteGenerator";

function QuotesPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the homepage when clicked
    navigate("/garden-loft-app/home"); // Update with your actual homepage route
  };

  return (
    <ErrorBoundary>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <RippleAnimation />
        <QuoteGenerator />
      </div>
    </ErrorBoundary>
  );
}

export default QuotesPage;
