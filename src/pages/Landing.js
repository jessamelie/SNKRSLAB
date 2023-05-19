import React, { useState } from 'react';
import "../style/Landing.css";
import Popup from '../components/Popup';
import Navigation from '../components/Navigation';

const Landing = () => {

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    return (
        <div>
             <div className='background-container'>
                <div className='title-container' onClick={togglePopup}>
                <h1>SNKRS LAB </h1>
                <div/> 
            <div/>

                <Navigation/>
            
                {isOpen && <Popup
                      content={<>
                    <div className='popup-container'>

                        <div className='left-side'>
                            <div className='login'>
                                <h2>Se connecter</h2>
                                <input className='emailInput' placeholder='email'></input>
                                <input className='passwordInput' placeholder='password'></input>
                                <button className='loginBtn'>Connexion</button>
                            </div>
                        </div>

                        <div className='right-side'>
                            <div className='signUp'>
                                <h2>S'inscrire</h2>
                                <button className='signupBtn'>Inscription</button>
                            </div>
                            <div className='guest'>
                            <h2>Continuer en tant qu'invité(e)</h2>
                            </div>
                        </div>
                    </div>
                      </>}
                      handleClose={togglePopup}
                    />}
                </div>
         </div>
        </div>

    );
};

export default Landing;