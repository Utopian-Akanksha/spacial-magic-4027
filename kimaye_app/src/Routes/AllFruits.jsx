import React from 'react'
import {useEffect, useReducer} from 'react'
import {Link} from "react-router-dom"
import { fetchData } from '../Action/action';
import {productReducer} from '../Action/reducer'
import Navbar from '../Components/Navbar';
import FruitsNavbar from '../Components/FruitsNavbar';
// import { Spinner, Button} from '@chakra-ui/react'
import "../Styles/AllFruits.css"


const initialState = {
        loading: false,
        error: false,
        data: [],
        singledata: [],
}

const AllFruits = () => {

 const [state,dispatch] = useReducer(productReducer,initialState)
    // const[toggle,setToggle]=useState(false);
    useEffect(()=>
    {
        fetchData(dispatch,"allfruits")

    },[])


    // const change=(id)=>
    // {
    //   setToggle(!toggle)
    // if(toggle)
    // {
    //   alert("Product Added To Cart");
    //   dispatch(addtoCart("all-fruits",id));
    // }
    // }

    // const showProduct=(id)=>
    // {
    //   dispatch(getSingleProduct("all-fruits",id));
    // }


  return (
    <div>
      <Navbar/>

      <FruitsNavbar/>

      <div className="breadcrumb">
            <div className="breadcrumbBox">
                <i class="fas fa-home"></i>
                <h4>&nbsp;<Link to="/">Home / </Link></h4>
                <p className="grey" > &nbsp;All Fruits</p> 
            </div>
            <div>
                <p className="grey">Showing {state.data.length} results</p>
            </div>
      </div>
     
      {/* {state.loading &&<Spinner size='lg'/>} */}
    
    <div className="container" >
        {state.data.map((fruit)=>
        (
            <div key={fruit.id} >
                {/* <Link to="/products">  */}
                  <div className="fruitDisplay">
                     <img className="fruitImage" src={fruit.image} alt="fruit" />
                  </div>
                {/* </Link> */}
                <p>{fruit.name}</p>
                <h3>₹{fruit.price}</h3>
            </div>
        )) }
      </div>
      
    </div>
  )
}

export default AllFruits