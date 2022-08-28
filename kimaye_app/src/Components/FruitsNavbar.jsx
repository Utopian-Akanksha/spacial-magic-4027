import React from 'react'
import {NavLink} from 'react-router-dom';
import "../Styles/FruitNavbar.css"

const links = [
  {
    to: "/allfruits",
    title: "All FRUITS"
  },
  {
    to: "/allveggies",
    title: "ALL VEGGIES"
  },
  {
    to: "/freshcuts",
    title: "FRESH CUTS"
  },
  {
    to: "/combo",
    title: "FRUIT COMBO"
  },
  {
    to: "/gifts",
    title: "KIMAYE GIFTS"
  }
];

const baseStyle = {
  textDecoration: "none",
};

const activeStyle = {
  textDecoration: "underline",
};

const FruitsNavbar = () => {
  return (
    <div className="fruitNavbar" >
       {links.map((item) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          key={item.to}
          to={item.to}
        >
         <p> {item.title}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default FruitsNavbar