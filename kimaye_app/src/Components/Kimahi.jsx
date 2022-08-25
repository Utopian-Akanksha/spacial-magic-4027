import React from 'react'
import "../Styles/Kimahi.css"
import {Button,Heading} from "@chakra-ui/react"

const Kimahi = () => {
  return (
    <>
    <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi-top-cut.png?v=1599122573" alt="zigzag"/>
      <div className="kimahiBox">
        <div style={{width:"30%"}} >
            <img height="500px" width="380px" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi_570x_2db87855-9260-47c2-a80e-3759af77dbea_570x.png?v=1622009438" alt="kimahi" />
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:"8px",width:"50%", textAlign:"left"}}>
            <Heading fontFamily="bitterbrush" >
               WE’D LIKE TO SAY <span style={{color:"rgb(197, 42, 42)"}}>KIMAHI…</span>
            </Heading>
            <div style={{ textAlign:"left", fontSize:"1.3rem", fontFamily:"PT Sans,sans-serif", letterSpacing:"0.05em", lineHeight:"1.45"}}>
                
              <p className="para" >Many of us share common safety concerns about the food we eat.</p>
               
              <p className="para"> When it comes to fruits and vegetables, these concerns are even more serious in 
               terms of the way they are grown and handled throughout their farm-to-home journey. 
               We make buying and eating fruits and vegetables a worry-free and enjoyable experience for you.</p>

               <p className="para">Since 2009, we have set the benchmark for fruit safety and quality in 35 countries. 
               Kimaye is now expanding its footprint in India, bringing you multiple varieties of fruit 
               and vegetables that are grown, packaged, and delivered in the safest and most socially responsible manner.</p>
            </div>
            <div style={{height:"30px",width:"200px",background:"white", color:"black", fontFamily:"PT Sans,sans-serif", fontSize:"14px", }} >
                <span style={{fontWeight:"bold"}}>Kimaye</span> is #all<span style={{color:"red"}}>Safe</span>#all<span style={{color:"red"}}>Goods</span>
            </div>
            <div>
                <Button color="black" size="lg" borderRadius="15px" > KNOW MORE </Button>
            </div>
        </div>
      </div>
    <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi-bottom-cut.png?v=1599122574" alt="zigzag"/>
  </>
  )
}

export default Kimahi