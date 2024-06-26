

import React from 'react'; // Import React
import johnImage from '../images/john.jpg'; // Import image files
import pabloImage from '../images/pablo.jpg';
import charles from '../images/charles.jpg';
import ben from '../images/ben.jpg';
import ted from '../images/ted.jpg';
import './status.css'; // Import your CSS file

function Status(){

    return(
        <div className="statusList">
            <div className="statusItem">
             <img src={johnImage} alt="John Snow" />
             <div className="overlay-text">John Snow</div>
            </div>

            <div className="statusItem">
             <img src={pabloImage} alt="Pablo Ruiz" />
             <div className="overlay-text">Pablo Ruiz</div>
            </div>

            <div className="statusItem">
             <img src={charles} alt="Charles Boyle" />
             <div className="overlay-text">Charles Boyle</div>
            </div>
            <div className="statusItem">
             <img src={ben} alt="Ben White" />
             <div className="overlay-text">Ben White</div>
            </div>
            <div className="statusItem">
             <img src={ted} alt="Ted Mosby" />
             <div className="overlay-text">Ted Mosby</div>
            </div>
        </div>
    )
}

export default Status;


