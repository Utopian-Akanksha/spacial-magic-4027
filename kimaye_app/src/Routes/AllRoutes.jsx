import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import AllFruits from "./AllFruits";
import AllVeggies from "./AllVeggies";
import FreshCuts from "./FreshCuts";
import FruitCombo from "./FruitCombo";
import KimayeGifts from "./KimayeGifts";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all-fruits" element={<AllFruits/>}/>
        <Route path="/all-veggies" element={<AllVeggies/>}/>
        <Route path="/fresh-cuts" element={<FreshCuts/>}/>
        <Route path="/combo" element={<FruitCombo/>}/>
        <Route path="/gifts" element={<KimayeGifts/>}/>
    </Routes>
  )
}

export default AllRoutes