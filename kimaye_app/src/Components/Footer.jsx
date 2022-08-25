import React from 'react'
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <div className="footerBox" >

        <div className="upperBox">
          <div className="list">
            <div>FAQ's</div>
            <div>Contact Us</div>
            <div>Shipping & Return Policy</div>
            <div>Terms and Conditions</div>
            <div>Privacy Policy</div>
          </div>
         <div className="follow">
            <div>Follow Us On</div>
            <div className="links">
                <div><img alt="fb" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756" /></div>
                <div><img alt="insta" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756" /></div>
                <div><img alt="twit" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756" /></div>
            </div>
         </div>
        </div>

        <hr style={{width:"80%",borderTop:"1px solid #69824e",margin:"auto"}} ></hr>

        <div className="lowerBox">
              <div style={{fontSize:"14px"}}>Copyright©2020. All Rights Reserved</div>
              
              <div className="madeBy" >
                <div style={{display:"flex", flexDirection:"column",alignItems:"flex-end",gap:"2px", lineHeight:"10px"}} >
                   <div><p style={{fontSize:"9px", background:"white", color:"#7d9c5b"}}>MADE</p></div>
                   <div><p style={{fontSize:"8px",background:"white",color:"#7d9c5b", width:"15px"}}>BY</p></div>
                </div>
                <div><p style={{fontSize:"25px"}} >ting</p></div>
              </div>
        </div>

    </div>
  )
}

export default Footer