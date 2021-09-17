import React from "react";
import sun from '../assets/sun.png'

import arabiBank from '../assets/arabiBank.png';
import aramex from '../assets/aramex.png';
import ayla from '../assets/ayla-logo.png';
import ethad from '../assets/ethad.png';
import gig from '../assets/gig.png';
import islamiBank from '../assets/islamiBank.png';
import jordanBank from '../assets/jordanBank.png';
import metlife from '../assets/metlife.png';
import natHealth from '../assets/natHealth.png';
import nisir from '../assets/nisir.png';
import orange from '../assets/orange.png';
import royal from '../assets/royal.png';
import sts from '../assets/sts.png';
import umniah from '../assets/umniah.png';
import zain from '../assets/zain.png'

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100vw',
      maxHeight: '80vh',
      position: 'absolute',
      left: '-30vw'
    },
  }));
  

function Partners(){
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return(
        <>
        <div className='p-circleOne'></div>
        <div className='p-circleTwo'></div>
        <div className='p-main'>
            <h2>PARTNERS</h2>
            <img src={sun} alt="sun" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore est velit ratione <br/>
             earum adipisci! Facere ratione sapiente esse dicta unde numquam tempora! <br/>
             Architecto quod porro impedit tempore saepe qui velit.</p>
             <div className='p-slider'>
             <div className={classes.root}>
       
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        >
        <TabPanel value={value} index={0} dir={theme.direction}
        className='p-slider-imgs'
        >
          <img src={arabiBank} alt="arabiBank" style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={aramex} alt="aramex"  style={{width:'14%', height: '12vh', borderRadius:'0%'}}/>
          <img src={ayla} alt="ayla"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={ethad} alt="ethad"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={gig} alt="gig"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={islamiBank} alt="islamiBank"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={jordanBank} alt="jordanBank"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={metlife} alt="metlife"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={natHealth} alt="natHealth"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={nisir} alt="nisir"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <img src={orange} alt="orange"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={sts} alt="sts"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={royal} alt="royal"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={umniah} alt="umniah"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
          <img src={zain} alt="zain"  style={{width:'16%', height: '15vh', borderRadius:'0%'}}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          aria-label="full width tabs example"
          style={{width: '15vw', marginLeft:'40%',}}
        >
          <Tab label="<<" {...a11yProps(0)} 
          />
          <Tab label=">>" {...a11yProps(1)} />
        </Tabs>
    </div>
             </div>
        </div>
        <div className='p-lines' 
        >
        </div>
        </>
    )
}

export default Partners;