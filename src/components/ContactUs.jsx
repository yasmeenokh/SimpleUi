import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import MarkunreadMailboxOutlinedIcon from '@material-ui/icons/MarkunreadMailboxOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import './styles.css'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(18),
        height: theme.spacing(16),
      },
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  title:{
    color:'#050a30', 
    textAlign:'center',
  }
}));

function ContactUs(){
    const classes = useStyles();

    return(
        <>
<div className={classes.root} className='contact-main'>
<Paper elevation={3} style={{padding:'5%'}}>
<h2 style={{color:'#050a30', textAlign:'center', marginBottom:'4%'}}>
            CONTACT FORM
</h2>
      <div>
        <TextField
          id="outlined-full-width"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Full Name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          color='primary'
        />
        <TextField
          label="E-mail"
          id="outlined-margin-normal"
          defaultValue="E-mail Address"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type='email'
          size='small'
          style={{width:'15vw'}}
          color='primary'
        />
        <TextField
          label="Phone Number"
          id="outlined-margin-normal"
          defaultValue="Phone Number"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type='phone number'
          size='small'
          style={{width:'14.6vw'}}
          color='primary'
        />
        <TextField
          label="Normal"
          fullWidth
          id="outlined-margin-normal"
          defaultValue="Message"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type='text'
          multiline
          rows={4}
          InputLabelProps={{
            shrink: true,
          }}
          style={{width:'30.5vw'}}
         />
         <div className='contact-button'>
         <Button color="secondary">Send Message
            <ArrowRightIcon style={{color: '#F51720', fontSize:'3em'}} className='m-arrow'/>
         </Button>
        </div>  
      </div>
      </Paper>
    <div className='iconDiv'>
      <h2>CONTACT US</h2>
      <div>
        <div style={{backgroundColor:'white', borderRadius:'30%', width:'15%', height: '8vh', justifyContent:'center' }}>
      <LocationOnOutlinedIcon 
      color='secondary'
      fontSize='large'
      />
        </div>
      <p>
        <span>ADDRESS:</span> <br />(20) Makkah Street, Salam Neighborhood
      </p>
      </div>
      <div>
      <div style={{backgroundColor:'white', borderRadius:'30%', width:'15%', height: '8vh', justifyContent:'center' }}>
        <PhoneInTalkOutlinedIcon
         color='primary'
         fontSize='large'
        />
        </div>
        <p>
          <span>TELEPHONE:</span> <br /> +952 6 555 5555
        </p>
      </div>
      <div>
      <div style={{backgroundColor:'white', borderRadius:'30%', width:'15%', height: '8vh', justifyContent:'center' }}>
        <DraftsOutlinedIcon
        color='error'
        fontSize='large'
        />
        </div>
        <p>
          <span>EMAIL:</span> <br /> email@injaz.org.jo
        </p>
      </div>
      <div>
      <div style={{backgroundColor:'white', borderRadius:'30%', width:'15%', height: '8vh', justifyContent:'center' }}>
<MarkunreadMailboxOutlinedIcon
color='info'
fontSize='large'
/>
</div>
<p>
  <span>P.O BOX:</span> <br /> 910642, Amman 11111, Jordan
</p>
      </div>
    </div>
    </div>
        </>
    )
}
export default ContactUs;