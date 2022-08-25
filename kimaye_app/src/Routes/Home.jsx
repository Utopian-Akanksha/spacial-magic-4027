import React from 'react'
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Recommends from "../Components/Recommends";
import Kimahi from "../Components/Kimahi";
import Journey from '../Components/Journey';
import Jazz from '../Components/Jazz'
import Psst from '../Components/Psst'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <div>
          <Navbar/>
        </div>
        <div style={{marginBottom:"40px"}} >
          <Banner/>
        </div>
        <div style={{marginBottom:"40px"}}>
          <Recommends/>
        </div>
        <div style={{marginTop:"20px",marginBottom:"40px"}}>
          <Kimahi/>
        </div>
        <div style={{marginTop:"20px",marginBottom:"40px"}}>
          <Journey/>
        </div>
        <div style={{marginTop:"80px",marginBottom:"40px"}}>
            <Jazz/>
        </div>
        <div style={{marginTop:"20px",marginBottom:"40px"}}>
            <Psst/>
        </div>
        <div style={{marginTop:"100px"}}>
          <Footer/>
        </div>
    </div>
  )
}

export default Home