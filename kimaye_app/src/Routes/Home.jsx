import React from 'react'
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Recommends from "../Components/Recommends";

const Home = () => {
  return (
    <div>
        <div>
          <Navbar/>
        </div>
        <div>
          <Banner/>
        </div>
        <div>
          <Recommends/>
        </div>
    </div>
  )
}

export default Home