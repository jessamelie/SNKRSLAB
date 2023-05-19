import React from "react";
import "../style/Popup.css";

const Popup = () => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="popup-container">
          <div className="left-side">
            <div className="login">
              <h2>Se connecter</h2>
              <input className="emailInput" placeholder="email"></input>
              <input className="passwordInput" placeholder="password"></input>
              <button className="loginBtn">Connexion</button>
            </div>
          </div>

          <div className="right-side">
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
    </div>
  );
};

export default Popup;
