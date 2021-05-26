import React, {useState} from 'react';
import ReorderIcon from '@material-ui/icons/Reorder';

/* Here is the navigation bar component */

function Banner(){
    const [showright, setSowright]=useState(false);
    return (
    <div className="Banners">

         <div className="righte">
        <button onClick={() => setSowright(!showright)}>
            {""}
            <ReorderIcon/></button>
        <div className="rightSide" id={showright ? "hidden" : ""}>
            <a className="btn  me" href="/home">Home</a>
            <a className="btn  me" href="/about">About</a>
            <a className="btn  me-0" href="/skills">Skills</a>
            <a className="btn  me-2" href="/contact">Contact</a>
        </div>
        </div>

    
    </div>
    );
}
export default Banner 