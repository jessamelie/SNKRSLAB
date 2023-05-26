import React, { useState } from "react";
import "../style/Popup.css";
import { Link } from "react-router-dom";

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
              <div className="remember-choice">
              <input className="remember" type="checkbox"></input>
              <label htmlFor="remember" className="rememberLabel"> Se souvenir de moi</label>
              </div>
            </div>
          </div>

          <div className="right-side">
          <div className="close-popup">
            <button className="closeBtn" onClick={closePopup}>X</button>
            </div>
            <div className="signUp">
              <h2>Pas encore membre ? Créer ton compte SNKRS LAB ! </h2>
              <button className="signupBtn">Inscription</button>
            </div>
            <div className="guest">
            <Link to="/homepage" style={{textDecoration: 'none'}}>
              <h2>Continuer en tant qu'invité(e)</h2>
            </Link>
            </div>
          </div>
        </div>
      </div>
        )}
    </div>
  );
};

export default Popup;
