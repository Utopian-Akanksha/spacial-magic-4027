import React from 'react'
import {Link} from 'react-router-dom';

const FruitsNavbar = () => {
  return (
    <div>
        <Link to="/all-fruits">ALL FRUITS</Link>
        <Link to="/fresh-cuts" >FRESH CUTS</Link>
        <Link to="/combo">FRUIT COMBO</Link>
        <Link to="/gifts">GIFTS BY KIMAYE</Link>
    </div>
  )
}

export default FruitsNavbar