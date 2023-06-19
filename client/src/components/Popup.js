import React, { useState } from "react";
import "../style/Popup.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Popup = () => {

    // Affichage par défaut de la popup en mode ON
    const [isOpen, setIsOpen] = useState(true);
    // Fermeture de la popup 
    const closePopup = () => {
      setIsOpen(false);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Fonction pour se connecter en appuyant sur le bouton Connecter
    async function submit(e){
      e.preventDefault();

      try{
        await axios.post('http://localhost:3000/',{
          email,password
        })
      }
      catch (err) {
        console.log(err)
      }
    };


  return (
    <div className="popup-box">
        {isOpen && (
      <div className="box">
        <div className={`popup-container ${isOpen ? 'open' : 'closed'}`}>

          <div className="left-side">
            <div className="login">
              <h2>Se connecter</h2>
              <form action="POST">
              <input className="emailInput" type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
              <input className="passwordInput" type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
              </form>
              <button className="loginBtn" type="submit" onClick={submit}>Connexion</button>
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
