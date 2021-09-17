import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MuiMobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
	{
	  label: '1',
	  imgPath:
		'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	},
	{
	  label: '2',
	  imgPath:
'https://images.pexels.com/photos/5746873/pexels-photo-5746873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'	},
	{
	  label: '3',
	  imgPath:
		'https://images.pexels.com/photos/6992161/pexels-photo-6992161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	},
	{
	  label: '4',
	  imgPath:
'https://images.pexels.com/photos/1631661/pexels-photo-1631661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'	},
  ];
  
  const useStyles = makeStyles((theme) => ({
	root: {
	  maxWidth: '100vw',
	  flexGrow: 1,
	},
	header: {
	  display: 'flex',
	  alignItems: 'center',
	  height: 50,
	  paddingLeft: theme.spacing(4),
	  backgroundColor: theme.palette.background.default,
	},
	img: {
	  height: '95vh',
	  maxWidth: '100vw',
	  overflow: 'hidden',
	  display: 'block',
	  width: '100%',
	  opacity: '.4',
	},
  }));
  
  export default function Sliders() {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = tutorialSteps.length;
  
	const handleNext = () => {
	  setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
  
	const handleBack = () => {
	  setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
  
	return (
	  <div className={classes.root}>
		<img
		  className={classes.img}
		  src={tutorialSteps[activeStep].imgPath}
		  alt={tutorialSteps[activeStep].label}
		/>
		<MuiMobileStepper
		  steps={maxSteps}
		  position="static"
		  variant="dots"
		  activeStep={activeStep}
		  nextButton={
			<Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}
			style={{display:'absolute', bottom: '28em', color: 'white', fontWeight:'bold', fontSize:'15px'}}
			>
			  
			  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</Button>
		  }
		  backButton={
			<Button size="small" onClick={handleBack} disabled={activeStep === 0}
			style={{display:'absolute', bottom: '28em', color: 'white', fontWeight:'bold', fontSize:'15px'}}
			>
			  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</Button>
		  }
		/>
	  </div>
	);
  }
  