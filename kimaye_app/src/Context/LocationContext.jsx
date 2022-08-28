import React, { createContext, useEffect, useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("2000px");

  const [isTry, setIsTry] = useState(false);
  const [pin, setPin] = useState("");
  const ref = useRef();

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleClick = () => {
    if (!pin) {
      ref.current.focus();
    }

    fetch(`https://api.postalpincode.in/pincode/${pin}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].PostOffice[0].Circle === "Delhi") {
          setIsTry(true);
          setPin(data[0].PostOffice[0].Circle);
          window.localStorage.setItem(
            "Pincode",
            JSON.stringify(data[0].PostOffice[0].Circle)
          );
          console.log(data[0].PostOffice[0].Circle);
          onClose();

          if (state) {
            navigate(state.from, { replace: true });
          } else {
            navigate("/");
          }
        } else if (data[0].PostOffice[0].District === "Mumbai") {
          setIsTry(true);
          setPin(data[0].PostOffice[0].District);
          window.localStorage.setItem(
            "Pincode",
            JSON.stringify(data[0].PostOffice[0].District)
          );
          console.log(data[0].PostOffice[0].District);
          onClose();
          if (state) {
            navigate(state.from, { replace: true });
          } else {
            navigate("/");
          }
        } else {
          setIsTry(false);
          setPin("");
          alert(
            "Sorry!"+"\n"+"We do not deliver to your Pincode currently."+"\n"+"Showing you results for Delhi & Mumbai."
          );
          navigate(state.from, { replace: true });
        }
      });
  };

  useEffect(() => {
    const pinData = window.localStorage.getItem("Pincode");
    if (pinData !== null) setPin(JSON.parse(pinData));
    setIsTry(true);
    console.log(pinData);
  }, []);

  return (
    <LocationContext.Provider value={{ handleClick, isTry, setIsTry, isOpen, onOpen, onClose,
        size,
        setSize,
        pin,
        setPin,
        ref,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
