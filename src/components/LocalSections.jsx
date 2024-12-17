import React from "react";
import localSections from "../assets/images/local-sections.png";

const LocalSections = () => {
  return (
    <div className="local-sections">
      <div className="left">
        <img src={localSections} alt="" />
      </div>
      <div className="right">
        <h1>A national network of local sections</h1>
        <p>
          Our network is established in more than 30 student cities! The ESN
          France sections welcome you and support you throughout your mobility.
          They enable the implementation of projects on a national scale and
          thus garantee the best welcome for international students. Would you
          like to go abroad? The sections are there to guide you and put all the
          cards in your hands so that you can leave with peace of mind!
        </p>
      </div>
    </div>
  );
};

export default LocalSections;
