import React, { useEffect } from "react";
import "./RippleAnimation.css";
import ErrorBoundary from "./ErrorBoundary";

const RippleAnimation = () => {
  return (
    <ErrorBoundary>
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>
      </div>
    </ErrorBoundary>
  );
};

export default RippleAnimation;
