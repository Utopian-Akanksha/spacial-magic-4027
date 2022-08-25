import React from 'react';
import {Heading} from "@chakra-ui/react"
import { Slide } from 'react-slideshow-image';
import "../Styles/Journey.css"



const journey = [
  {
    id:"01",
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-1_guetzli-min.jpg?v=1614755149",
    description:"We follow G.A.P (Good Agricultural Practices) to ensure food safety."
  },
  {
    id:"02",
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-2_guetzli-min.jpg?v=1622009925",
    description:"Our trained Harvesting Supervisors ensure only the best fruits are picked."
  },
  {
    id:"03",
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-3_guetzli-min.jpg?v=1614755148",
    description:"Stringent quality checks at our automated pack house ensure only the best fruits go through."
  },
  {
    id:"04",
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-4_guetzli-min.jpg?v=1622009925",
    description:"The fruits are then packaged and delivered fresh in a contamination-free environment."
  },
  {
    id:"05",
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-5_guetzli-min.jpg?v=1622009925",
    description:"Tell us all about how you enjoy our fruits using #AllSafe #AllGood",
  },
]


const Journey = () => {

  const fadeProperties = {
    duration: 1000,
    pauseOnHover: true
  };

  return (
    <div className="journey" >
        <div>
            <Heading fontFamily="bitterbrush"> THE SECRET’S OUT: WE’RE SUPER SAFE</Heading>
            <p style={{fontSize:"25px"}} > Witness Our Journey</p>
        </div>
        <div>
           <Slide {...fadeProperties}>
                {
                  journey.map((item)=>(
                    <div className="each" >
                        <div className="desc" >
                           <h1>{item.id}</h1>
                            <p>{item.description}</p>
                        </div>
                        <div className="image" >
                          <img src={item.url} alt="journ" />
                        </div>
                    </div>
                  ))
                }
           </Slide>
        </div>
    </div>
  )
}

export default Journey

// 
// 