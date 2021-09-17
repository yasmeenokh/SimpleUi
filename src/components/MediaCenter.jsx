import React from "react";
import media2 from '../assets/media.jpg';
import deal from '../assets/deal.jpeg';
import media3 from '../assets/media3.jpeg';
import media4 from '../assets/media4.jpeg'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';
import './styles.css'


function MediaCenter(){
    return(
        <>
        <div className='c-main'>
            <div className='c-firstDiv'>
            <img src={media2} alt="media" style={{width: '80%', height: '40%'}}/>
            <h2>MEDIA CENTER</h2>
            {/* <div className='v-arrow'> */}
            <Button color="secondary" size='small'
            style={{marginLeft:'4em'}}
            >Learn More
            <ArrowRightIcon style={{color: '#F51720', fontSize:'3em'}}/>
         </Button>
        {/* </div>   */}
            </div>
            <div className='c-secondDiv'>
<img src={deal} alt="deal" style={{width: '20%', height: '50vh', border: 'solid', borderColor:'#0b1457'}}/>
<img src={media3} alt='media3'style={{width: '20%', height: '50vh', border: 'solid #0b1457'}} />
<img src={media4} alt='media4' style={{width: '20%', height: '50vh', border: 'solid #0b1457'}}/>
            </div>
        </div>
        </>
    )
}

export default MediaCenter;