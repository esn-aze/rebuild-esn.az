import React from "react";
import heroImage from "../assets/images/main-header-image.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <img src={heroImage} alt="" />

      <div className="results">
        <div className="result">
          <h1>1,500+</h1>
          <span>volunteers</span>
        </div>
        <div className="result">
          <h1>30+</h1>
          <span>local sections</span>
        </div>
        <div className="result">
          <h1>20,000+</h1>
          <span>international students welcomed</span>
        </div>
      </div>
      <h2>
        ESN France, the network that works to liven young people's mobility up.
      </h2>
    </div>
  );
};

export default Hero;
