import React from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';


function Values(){
return(
    <>
    <div style={{position: 'absolute', top: '196vh'}} className='v-main'>
        <h2>CORE VALUES & METHODOLOGY</h2>
        <p className='v-subTxt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nesciunt quos veniam aperiam vitae</p>
        <div className='v-flex'>
            <div className='v-circle-outer' style={{borderColor:'#710117'}}>
            <div className='v-circle-inner'>
                <p>Education Development</p>
            </div>
            </div>
            <div  className='v-circle-outer' style={{borderColor:'#057DCD'}}>
            <div className='v-circle-inner'>
                <p>Nurturing entrepreneurs</p>
            </div>
            </div>
            <div className='v-circle-outer' style={{borderColor:'#F9D030'}}>
            <div className='v-circle-inner'>
                <p>Promoting Volunteerism</p>
            </div>
            </div>
        </div>
        <div className='contact-button'>
         <Button color="secondary">Learn More
            <ArrowRightIcon style={{color: '#F51720', fontSize:'3em'}} className='m-arrow'/>
         </Button>
        </div>  
    </div>
    </>
)
}

export default Values;