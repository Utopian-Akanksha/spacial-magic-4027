import React from 'react'
import {Link} from 'react-router-dom';
import "../Styles/FruitNavbar.css"

const FruitsNavbar = () => {
  return (
    <div className="fruitNavbar" >
        <Link to="/allfruits"><p>ALL FRUITS</p></Link>
        <Link to="/allveggies"><p>ALL VEGGIES</p></Link>
        <Link to="/freshcuts"><p>FRESH CUTS</p></Link>
        <Link to="/combo"><p>FRUIT COMBO</p></Link>
        <Link to="/gifts"><p>GIFTS BY KIMAYE</p></Link>
    </div>
  )
}

export default FruitsNavbar