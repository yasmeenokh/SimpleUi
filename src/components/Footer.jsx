import React from "react";
import Logo from '../assets/injazLogo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";




function Footer(){
    return(
        <>
        <div className='footer-main'>
        <img src={Logo} alt="logo" />
        <div><h3>About Us</h3>
        <ul>
            <ol>Lorem ipsum dolor</ol>
            <ol>Lorem ipsum </ol>
            <ol>Lorem ipsum dolor</ol>
            <ol>Lorem ipsum </ol>
            <ol>Lorem ipsum </ol>
            <ol>Lorem ipsum dolor</ol>
        </ul>
        </div>
        <div><h3>Impact & Outreach</h3>
        </div>
        <div><h3>Model</h3>
        <ul>
            <ol>Lorem ipsum dolor</ol>
            <ol>Lorem  dolor</ol>
            <ol>Lorem ipsum </ol>
            <ol>Lorem ipsum dolor</ol>
        </ul>
        </div>
        <div><h3>Partners</h3>
        <ul>
            <ol>Lorem ipsum dolor</ol>
            <ol>Lorem ipsum</ol>
            
        </ul>
        </div>
        <div><h3>Media Center</h3>
        <ul>
            <ol>Lorem ipsum dolor</ol>
            <ol>Lorem ipsum dolor</ol>
            <ol>Lorem ipsum </ol>
        </ul>
        </div>
        </div>
        <div className='footer-icons'>
            <div>
            <FaFacebookF/>
            <FaInstagram/>
            <FaTwitter/>
            <FaSnapchatGhost/>
            <FaLinkedinIn/>
            </div>
            &copy; Injaz 2021
        </div>
        </>
    )
};

export default Footer;