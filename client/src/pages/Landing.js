import React, { useState } from "react";
import "../style/Landing.css";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";

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
      <Navbar/>
      {isOpen && <Popup handleClose={togglePopup} />}
    </div>
  );
};

export default Landing;
