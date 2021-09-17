import React from "react";
import Logo from '../assets/injazLogo.png';
import Injazel from '../assets/injazEl.jpg';
import MyStartUp from '../assets/mySTARTUP-LOGO.png' 
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg'
import './styles.css'


function OurMission(){
    return(
        <>
        <div className='m-main'>
        <div className='m-first'>
            <img src={Logo} alt="logo" />
        <h2>OUR MISSION</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error exercitationem doloribus earum <br/>
            possimus saepe veritatis eaque, nam aperiam beatae libero ea fugiat illum</p>
        </div>
        <div className='m-grid'>
        <div className='m-icon'>
        <img src={MyStartUp} alt="myStartup"  className='m-img'/>
        <div>
            <h6 style={{fontSize:'1.3em', fontWeight:'bold'}}>Explore</h6>
            <ArrowRightIcon style={{color: 'crimson', fontSize:'3em'}}/>
        </div>
        </div>
        <div className='m-icon'>
        <img src={Injazel} alt="Injazel"  className='m-img'/>
        <div>
            <h6 style={{fontSize:'1.3em', fontWeight:'bold'}}>Explore</h6>
            <ArrowRightIcon style={{color: 'rgb(245, 175, 47)', fontSize:'3em'}} className='m-arrow'/>
        </div>  
            </div>
        </div>
        </div>
           <div>
            
        <div className='o-main'>
<h2>OUTREACH AND IMPACT</h2>
<div className='o-imgDiv'>
    <img src={team2} alt="team2"/>
    <img src={team1} alt="team1"/>
    <img src={team3} alt="team3"/>
</div>
<div className='o-textDiv'>
    <p style={{marginLeft:'1%', paddingBottom:'5%'}}> <span style={{marginLeft:'20%'}}>3,000,000+</span>  <br/> Lorem ipsum dolor </p>
    <p style={{marginLeft:'1%', paddingBottom:'5%'}}> <span style={{marginLeft:'20%'}}></span> 750,000+ <br/> Lorem ipsum dolor </p>
    <p style={{marginLeft:'1%', paddingBottom:'5%'}}> <span style={{marginLeft:'20%'}}></span> 340,000+ <br/> Lorem ipsum dolor </p>
</div>

        </div>
        <div className='o-backgroundDiv'>

        </div>
        </div>
        </>
        
    )
}

export default OurMission;