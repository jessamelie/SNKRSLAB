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
                        <div className='Login'>
                            <h2>Se connecter</h2>
                            <button>Connexion</button>
                        </div>
                        <div className='SignUp'>
                            <h2>S'inscrire</h2>
                            <button>Inscription</button>
                        </div>
                        <div className='Guest'>
                            <h2>Continuer en tant qu'invité(e)</h2>
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