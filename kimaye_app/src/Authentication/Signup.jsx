import React, { useState } from "react";
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import profile from '../assets/profile.png'
import {Img,label,Flex,Box,Spacer,Heading} from "@chakra-ui/react";

import "../Styles/Signup.css";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const [loginemail, setemail] = useState("");
  const [loginpass, setLoginPass] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fname || !lname || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("lname", JSON.stringify(lname));
      localStorage.setItem("fname", JSON.stringify(fname));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      setLogin(!login);
    }
  }

  const handleClick = (loginemail, loginpass, onClose) => {
    let storedEmail = JSON.parse(localStorage.getItem("Email"));
    let storedPassword = JSON.parse(localStorage.getItem("Password"));

    if (loginemail === storedEmail && loginpass === storedPassword) {
      alert("Login Successfull");
      setIsAuth(true);
      onClose();
      navigate("/");
    } else {
      alert("Invalid Credential");
    }
  };
  return (
    <div>
      {isAuth ? (
        <div onClick={() => navigate("/")}>
          {/* <button  > */}
             <Img height="20px" w="20px" src={profile} onClick={onOpen} ref={btnRef} />
          {/* </button> */}
        </div>
      ) : (
        <div>
           <button ref={btnRef} colorScheme="teal" onClick={onOpen}>
               <Img height="20px" w="20px" src={profile}/>
           </button>

          <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} >
             <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton style={{ color: "white" }} />
                    <DrawerHeader>
                      <div style={{border: "1px solid", borderColor: "black", height: "80px", width: "350px", marginLeft: "-25px",
                             marginTop: "-16px", color: "white", backgroundColor: "black",}}>
                         <h1 style={{ marginTop: "20px", marginLeft: "20px", fontFamily:"bitterbrush", fontSize:"20px" }}>
                            SIGN IN
                         </h1>
                      </div>
                    </DrawerHeader>

                    <DrawerBody>
                       {login ? (
                           <div className="main">
                             <form onSubmit={handleSubmit}>
                      
                                 <Box>
                                      <label>
                                         First Name
                                      </label>
                                      <Input id="name" placeholder="First name" borderRadius="none" className="form"
                                          onChange={(event) => setfname(event.target.value)}/>
                                 </Box>
                                
                                 <Box>
                                     <label>Last name</label>
                                     <Input id="name" placeholder="Last name" borderRadius="none"className="form"
                                          onChange={(event) => setlname(event.target.value)}/>
                                 </Box>
                                 
                                 <Box>
                                     <label>Email address</label>
                                     <Input id="name" placeholder="Email address" borderRadius="none" className="form"
                                          onChange={(event) => setEmail(event.target.value)}/>
                                 </Box>
                                 
                                 <Box>
                                   
                                     <label>Password</label>
                                     <Input id="name" placeholder="Password" borderRadius="none" type="password" className="form"
                                          onChange={(event) =>setPassword(event.target.value)}/>
                                   
                                 </Box>

                                 
                                 <div style={{display:"flex", justifyContent:"center"}}>
                                    <Button  border="2px solid black" color="black" width="200px" marginTop="10px" type="submit" className="btn" >
                                     REGISTER
                                    </Button>
                                 </div>

                                 <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"20px"}}>
                                    <h2 style={{fontSize:"15px",fontWeight:"bold"}} >No account yet?</h2>
                                    <p style={{textAlign:"center",fontSize:"13px", marginTop:"8px"}}>Welcome to Kimaye! 
                                     Help us with a few details to know you better 
                                    as you take the journey of enjoying
                                      our safe and tasty fruits.</p>
                                 </div>
 
                             </form>
                                 <div style={{display:"flex", justifyContent:"center", marginTop:'20px'}}>
                                  <Button size="lg" colorScheme="none" color="black" width="fit_content" type="submit" border="2px solid black" borderRadius="none" className="login" onClick={() => setLogin(false)}>
                                    LOGIN
                                  </Button>
                                 </div>
                            </div>
                        ) 
                        : 
                        (
                          <div>
                              <label>Email Address</label>
                              <label style={{ color: "black" }}>*</label>
                              <Input placeholder="Enter Email" onChange={(e) => setemail(e.target.value)}/>
                              <br />
                              <br />
                              <label>Password</label>
                              <label style={{ color: "black" }}>*</label>
                              <Input type="password" placeholder="Enter Password" onChange={(e) => setLoginPass(e.target.value)}/>
                              <button onClick={() => handleClick(loginemail, loginpass, onClose)}
                                  style={{ border: "1px solid", width: "100%",marginTop: "30px", height: "40px"}}>
                                    Login
                              </button>
                              <br />
                              <br />

                              <div style={{justifyContent: "center", backgroundColor: "black", display: "flex",border: "1px solid" }}>
                                <button style={{ width: "90%", textAlign: "center", color: "white" }}>
                                      Sign in with Facebook
                                </button>
                                <img style={{ width: "20%" }}src="https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200"alt="" />
                              </div>
                              <div style={{display: "flex", border: "1px solid", justifyContent: "center", backgroundColor: "black", marginTop: "10px", height: "45px" }}>
                                <button style={{width: "90%", textAlign: "center", color: "white" }}>
                                   Sign in with Google
                                </button>
                                <img style={{ width: "20%" }}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNX48M0YYch3XWgCE5gHsG5xlRE6_OYVSPg&usqp=CAU" alt="" />
                              </div>
                              <br />

                              <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                               <h2 style={{fontSize:"15px",fontWeight:"bold"}} >No account yet?</h2>
                                <p style={{textAlign:"center",fontSize:"13px", marginTop:"8px"}}>Welcome to Kimaye! 
                                     Help us with a few details to know you better 
                                    as you take the journey of enjoying
                                      our safe and tasty fruits.</p>
                              </div>

                              <div style={{display:"flex",justifyContent:"center", marginTop:"20px"}}>
                                <button onClick={() => setLogin(true)} style={{ border: "1px solid", width: "180px",height: "40px"}}>
                                   Create an Account
                                </button>
                              </div>
                          </div>
                         )}
                    </DrawerBody>

                   <DrawerFooter></DrawerFooter>
               </DrawerContent>
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default Signup;
