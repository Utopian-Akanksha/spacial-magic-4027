import React from 'react'
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import "../Styles/Psst.css"



const psst =[
    p1,p2,p3,p4
]

const Psst = () => {
  return (
    <div>
           <h1 style={{fontSize:"40px", fontFamily:"bitterbrush"}}>PSST... Loking' FOR US?</h1>
           <p style={{fontSize:"30px", marginTop:"20px"}} >We are here</p>
           <div className="psstBox" >
              {
                psst.map((item)=>(
                    <div>
                        <img alt="psst" style={{height:"230px", width:"250px", borderRadius:"10px"}} src={item}/>
                    </div>
                ))
              }
           </div>
    </div>
  )
}

export default Psst