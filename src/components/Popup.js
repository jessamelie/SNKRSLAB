import React, { useState } from "react";
import "../style/Popup.css";

const Popup = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closePopup = () => {
      setIsOpen(false);
    };


  return (
    <div className="popup-box">
        {isOpen && (
      <div className="box">
        <div className={`popup-container ${isOpen ? 'open' : 'closed'}`}>
          <div className="left-side">
            <div className="login">
              <h2>Se connecter</h2>
              <input className="emailInput" placeholder="email"></input>
              <input className="passwordInput" placeholder="password"></input>
              <button className="loginBtn">Connexion</button>
            </div>
          </div>

          <div className="right-side">
          <div className="close-popup">
            <button className="closeBtn" onClick={closePopup}>X</button>
            </div>
            <div className="signUp">
              <h2>S'inscrire</h2>
              <button className="signupBtn">Inscription</button>
            </div>
            <div className="guest">
              <h2>Continuer en tant qu'invité(e)</h2>
            </div>
          </div>
        </div>
      </div>
        )}
    </div>
  );
};

export default Popup;
