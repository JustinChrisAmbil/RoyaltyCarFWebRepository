import React from 'react'
import Logo from "../Images/Royalty.png";
import {Link} from "react-router-dom";
import '../style/Nbar.css';
function Nbar() {
return (
        <div className="nbar">
            <div className="lSide">
            <img src={Logo} />
            </div>
            <div className="rSide"/>
                <Link to ="/"> Home</Link>
                <Link to ="/catalog"> Catalog</Link>
                <Link to ="/Inquire"> Inquire</Link>
                
    </div>
);
}

export default Nbar
