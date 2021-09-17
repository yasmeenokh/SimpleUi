import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import MediaCenter from './components/MediaCenter';
import OurMission from './components/OurMission';
import Partners from './components/Partners';
import Values from './components/Values';
import Location from './components/Location';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './reset.css';



function App(){

    return(
        <>
        <Header/>
        <OurMission/>
        <Values/>
        <Partners/>
        <MediaCenter/>
        <Location/>
        <ContactUs/>
        <Footer/>
        </>
    )
}

export default App;