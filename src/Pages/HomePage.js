import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../Images/luxCars.jpg'
import '../style/Homestyle.css';
function HomePage() {
return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
        <div className = "headerContainer">
            <h1> Royalty Cars</h1>
            <p> Drive your Dreams!</p>
            <Link to = "/Catalog">
            <button> Get Yours Now!</button>
            </Link>
            
    </div>
    </div>
)
}

export default HomePage