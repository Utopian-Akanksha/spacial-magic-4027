import React, { useContext} from "react";
import {Input,Modal,ModalOverlay,ModalContent,ModalFooter,ModalBody,ModalCloseButton,Button} from "@chakra-ui/react";
import "../Styles/Location.css";
import { LocationContext } from "../Context/LocationContext";

const Location = () => {
  const {handleClick,isOpen,onClose,setPin,ref} = useContext(LocationContext);

  
  return (
    <div>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="modal">
          <div>
            <img
              className="shopping"
              src="https://drpo5mjxhw4s.cloudfront.net/media/sac/popup/3.svg?v1"
              alt="bagIcon"
            />
            <h1 className="instruction">
              We are currently available in Mumbai & Delhi. Please enter your
              pin code below to check if we deliver to your area.
            </h1>

            
             <div>
               <Input
                width="90%"
                type="text"
                ref={ref}
                className="pin"
                placeholder="Enter your pin code"
                maxLength={6}
                size='lg' 
                onChange={(e) => setPin(e.target.value)}
                />
             </div>
            
          </div>

          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>

          <ModalFooter>
            <Button
              size='md'
              className="btn1"
              onClick={handleClick}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Location;
