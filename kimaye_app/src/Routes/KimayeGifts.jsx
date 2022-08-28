import React from 'react'
import {useEffect, useReducer} from 'react'
// import {Link} from "react-router-dom"
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

const KimayeGifts = () => {

 const [state,dispatch] = useReducer(productReducer,initialState)
    // const[toggle,setToggle]=useState(false);
    useEffect(()=>
    {
        fetchData(dispatch,"gifts")

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

export default KimayeGifts