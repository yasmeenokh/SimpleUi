import React from 'react';
import Logo from '../assets/injazLogo.png';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Sliders from './Slider'
import TextField from '@material-ui/core/TextField';


import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

import './styles.css'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft:'6em',
    display: 'flex',
    alignItems: 'center',
    borderRadius:".5em",
    width: '55%',
    height: '13vh'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '3vw',
    height: '5vh'
  },
  iconButton: {
    padding: 12,
    marginTop:'-12%',
    
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Header(){
    const classes = useStyles();

    return(
<>
          <div className='hero-div'>
  <div className='hero-div-logo'>
        <img src={Logo} alt='logo'
        style={{marginLeft:'25%'}}
        />
        <p
        style={{marginLeft:'20%', marginTop:'3%', marginBottom:'3%'}}
        >New space for generation</p>
        <Paper component="form" className={classes.root}>
      <TextField
          id="outlined-margin-normal"
          defaultValue="Search ..."
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type='text'
          size='small'
          style={{marginLeft:'1vw', marginTop:'-10%'}}
          color='primary'
        />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon/>
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton  className={classes.iconButton} aria-label="directions">
      </IconButton>
            <div className='hero-icons'>
              <a href="https://www.facebook.com/EnjazAlbilad/">
            <FaFacebookF/>
              </a>
              <a href="https://www.instagram.com/enjazalbilad/?hl=en">
            <FaInstagram/>
              </a>
              <a href="https://twitter.com/EnjazAlbilad?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <FaTwitter/>
              </a>
            <FaSnapchatGhost/>
              <a href="https://www.linkedin.com/company/injaz-jordan/?originalSubdomain=jo">
            <FaLinkedinIn/>
              </a>
            </div>
    </Paper>
    </div>
    <div className='hero-div-slider'>
    <Sliders/>    
    </div>
</div>
    </>
    )
}

export default Header; 