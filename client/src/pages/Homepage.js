import React from 'react';
import "../style/Homepage.css";
import Navbar from '../components/Navbar';
import ContentBloc from '../components/ContentBloc';

const Homepage = () => {

    return (

        <div className='homepage'>
            <Navbar/>
            <ContentBloc/>
        </div>
    );
};

export default Homepage;