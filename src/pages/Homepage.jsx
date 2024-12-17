import React from "react";
import Hero from "../components/Hero";
import News from "../components/News";
import LocalSections from "../components/LocalSections";

const Homepage = () => {
  return (
    <div className="home-section">
      <Hero />
      <News />
      <LocalSections />
    </div>
  );
};

export default Homepage;
