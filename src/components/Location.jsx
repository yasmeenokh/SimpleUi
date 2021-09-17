import React from "react";
import './styles.css'


function Location(){
    return(
        <>
        <div className='l-main'>
         <iframe
            src="https://maps.google.com/maps?q=injaz%20Recrutment%20&%20Training&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
          <div className='l-secondary'>
          </div>
        </>
    )
}
export default Location;

