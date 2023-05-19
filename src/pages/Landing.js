import React, { useState } from "react";
import "../style/Landing.css";
import Popup from "../components/Popup";
import Navigation from "../components/Navigation";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="background-container">
        <div className="title-container" onClick={togglePopup}>
          <h1>SNKRS LAB </h1>
        </div>
      </div>
      <Navigation />
      {isOpen && <Popup handleClose={togglePopup} />}
    </div>
  );
};

export default Landing;
