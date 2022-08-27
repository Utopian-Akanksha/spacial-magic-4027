import React from 'react'
import {useEffect, useReducer} from 'react'
// import {Link} from "react-router-dom"
// import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Action/action';
import {productReducer} from '../Action/reducer'
import Navbar from '../Components/Navbar';
import FruitsNavbar from '../Components/FruitsNavbar';
// import { Spinner, Button} from '@chakra-ui/react'

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
        fetchData(dispatch)

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
    
    <div>
        {state.data.map((fruit)=>
        (
            <div key={fruit.id} >
                {/* <Link to="/products">  */}
                   <img src={fruit.image} alt="fruit" />
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