import React from 'react'
import carHori from '../Images/carwallpaper.jpg'
import '../style/Inquire.css'

function Inquire() {
  return (
    <div className="inquire">
        <div className="leftSide"style={{backgroundImage: `url(${carHori})`}}>
            </div>
        <div className="rightSide">
            <h1> Contact Info. </h1>
            <form id = "inquire-form" method= "POST">
                <label htmlFor= "name"> Full Name</label>
                <input name= "name" placeholder="Enter Full name ..." type = "text"/>
                <label htmlFor= "contact"> Contact Number</label>
                <input name= "contact" placeholder="Enter Phone number ..." type = "text"/>
                <label htmlFor= "email"> Email</label>
                <input name= "email" placeholder="Enter valid email ..." type = "text"/>
                    <button type = "submit"> Submit</button>
            </form>

            </div>
    </div>
  )
}

export default Inquire