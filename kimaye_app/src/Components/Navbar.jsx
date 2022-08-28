import '../Styles/Navbar.css'
import React,{useState,useContext} from 'react'
import {Box,Img,Menu,MenuItem,MenuButton,MenuList,Portal,Text} from "@chakra-ui/react";
// import {ChevronDownIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import bag from '../assets/bag.png'
import location from '../assets/location.png'
import search from '../assets/search.png'
import {LocationContext} from '../Context/LocationContext';
import LocationBox from './LocationBox'
import Signup from '../Authentication/Signup';

const Navbar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }


  const {onOpen,size, setSize, pin} = useContext(LocationContext);

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  window.addEventListener("scroll", setFixed);
    let cat = [
        {
          id: 1,
          title: "SHOP",
          to: "/",
          sub: {
            a: "All Fruits",
            p1: "/allfruits",
            b: "All Veggies",
            p2: "/allveggies",
            c: "Fresh Cuts",
            p3: "/freshcut",
            d: "Fruit Combos",
            p4: "/combo",
            e: "Fifts By Kimaye",
            p5: "/gifts",
            f: "Friuts X Subscription",
            p6: "/",
            g: "Community Buying",
            p7: "/",
          },
        },
        {
          id: 2,
          title: "LEARN",
          to: "/learn",
          sub: {
            a: "Our Story",
            p1: "/our-story",
            b: "Why Kimaye",
            p2: "/",
            c: "Traceability",
            p3: "/",
            d: "Beyond Fruits",
            p4: "/",
            e: "Grape Family By Kimaye",
            p5: "/",
            p6: "/",
            p7: "/",
            p8: "/",
          },
        },
      ];
    
    


  return (
    <div>
       <Box bg="#437111" w="100%" height="30px" padding="5px" color="white" fontSize="13px" fontFamily="PT Sans, Arial, Helvetica, sans-serif">
            Delivering in Mumbai, Delhi and gurugram | Same day delivery!
       </Box>


       <div className={fix ? "navBox fixed-top" : "navBox"}>
         
         {/* menuItems */}
         <Box display="flex" justifyContent="center" alignItems="center" gap="22px" fontSize="16px"  fontFamily="PT Sans" className="menu" w="30%" >
           {cat.map((el) => (
            <Menu key={el.id}>
               <MenuButton>
                  <Link  className="menu-btn" to={el.to}>{el.title}</Link>
              </MenuButton>
             <Portal>
               <MenuList>
                <MenuItem><Link to={el.sub.p1}>{el.sub.a}</Link></MenuItem>
                <MenuItem><Link to={el.sub.p2}>{el.sub.b}</Link></MenuItem>
                <MenuItem><Link to={el.sub.p3}>{el.sub.c}</Link></MenuItem>
                <MenuItem><Link to={el.sub.p4}>{el.sub.d}</Link></MenuItem>
                <MenuItem><Link to={el.sub.p5}>{el.sub.e}</Link></MenuItem>
                <MenuItem><Link to={el.sub.p6}>{el.sub.f}</Link></MenuItem>
                <MenuItem><Link to={el.sub.p7}>{el.sub.g}</Link></MenuItem>
              </MenuList>
             </Portal>
          </Menu>
         ))}

            <Link className="grow" to="/grow">
               GROW
            </Link>
         </Box>



         {/* Logo Kimaye */}
         <Box display="flex" justifyContent="center" alignItems="center" w="30%">
           <Link to="/">
                <Img  height="30px" w="120px" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x@2x.png?v=1596288204%202x%22"/>
           </Link>
         </Box>



         {/* Location,Search,Login */}
         <Box display="flex" justifyContent="center" alignItems="center" gap="15px" w="30%">
             
          <span>
             <Box  display="flex" justifyContent="center" alignItems="center" gap="7px" fontSize="12px"
                   onClick={() => handleSizeClick(size)}  key={size} m={4} >
               <Img height="20px" w="20px" src={location} /> 
               <sub>
                   <b>{pin}</b>
               </sub>
               <Text fontFamily=" PT Sans, Arial, Helvetica, sans-serif">Mumbai</Text>
             </Box>
             <LocationBox/>
          </span>


             <div>
                <Img height="19px" w="20px" src={search} />
             </div>
            <div>
               <Signup/>
            </div>
            <div>
               <Img height="20px" w="20px" src={bag} />
            </div>
         </Box>

       </div>
    </div>
  )
}

export default Navbar