import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Modal from "react-modal";
import TelephoneIcon from "./icons/TelephoneIcon";
import { AmbulanceIcon, AmbulanceSideIcon, NoAmbulanceIcon } from "./icons";

const StyledButtonAlignment = styled(Typography)`
  margin-bottom: 50px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: 'space-between';
`;

const CallHelpButton = styled.button`
  margin-top: 50px;
  padding: 10px;
  background-color: #59acce;
  color: #e9ebf8;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 48px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  font-family: "Roboto";

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 0;
  }
`;

const BottomLeftButtonContainer = styled.div`
  position: absolute;
  bottom: 35px;
  right: 125px;
  z-index: 999;
`;


const ModalButton = styled.button`
  background-color: #59acce;
  color: #2d3e5f;
  border: none;
  border-radius: 25px;
  margin-right: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 35px;
`;

const CallHelpButtonComponent = ({ onClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNestedModalOpen, setNestedModalOpen] = useState(false);
  const [isCancelNestedModalOpen, setCancelNestedModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openNestedModal = () => {
    setModalOpen(false);
    setNestedModalOpen(true);
  };

  const openCancelNestedModal = () => {
    setModalOpen(false);
    setCancelNestedModalOpen(true);
  };

  const closeNestedModal = () => setNestedModalOpen(false);
  const closeCancelNestedModal = () => setCancelNestedModalOpen(false);

  const handleCallHelpButtonComponent = async () => {
    try {
      await fetch("http://localhost:3001/call-help"); // Adjust the server URL
      console.log("Call initiated!");
    } catch (error) {
      console.error("Error initiating the call:", error);
    }
  };

  const handleConfirm = async () => {
    closeModal();
    openNestedModal();
    const shouldInitiateCall = true;
    if (shouldInitiateCall) {
      handleCallHelpButtonComponent();
    }
  };

  const handleCancel = async () => {
    closeModal();
    openCancelNestedModal();
    const shouldInitiateCall = true;
    if (shouldInitiateCall) {
      handleCallHelpButtonComponent();
    }
  };

  return (
    <BottomLeftButtonContainer>
      <CallHelpButton id="top-right-button" primary onClick={openModal} >
        <Typography variant="h5" fontWeight="700" style={{display: 'flex', alignItems: 'center', color: '#2D3E5F' }}>
          <TelephoneIcon size={40} />
          <div style={{paddingLeft: "10px"}}>Call Help</div>
        </Typography>
      </CallHelpButton>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFFCE7",
            opacity: 0.9,
            padding: "20px",
            borderRadius: "25px",
            textAlign: "left",
            paddingLeft: "50px",
            color: "white",
            fontSize: "40px",
            border: "none",
            width: "35%",
            height: "45%"
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
      >
        <Typography variant="h3" fontWeight="700" mb={4} color="#2D3E5F" display="flex" alignItems="center">
          Help request
          <div style={{paddingLeft: "20px"}}><AmbulanceSideIcon size={120}/></div>
        </Typography>
        <Typography variant="h4" fontWeight="550" color="#2D3E5F">
          Call 911 for medical emergency assistance
        </Typography>
        <StyledButtonAlignment>
        <ModalButton onClick={handleConfirm}>
          Yes, I need help
        </ModalButton>
        <ModalButton style={{background: 'none', border: 'solid', borderColor: '#2d3e5f', borderRadius: '25px'}} onClick={handleCancel}>
          Cancel request
        </ModalButton>
        </StyledButtonAlignment>

      </Modal>
      
      <Modal
        isOpen={isNestedModalOpen}
        onRequestClose={closeModal}
        contentLabel="Nested Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFFCE7",
            opacity: 0.9,
            padding: "20px",
            paddingLeft: "50px",
            borderRadius: "25px",
            textAlign: "left",
            color: "white",
            fontSize: "40px",
            border: "none",
            width: "35%",
            height: "45%",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          
        }}
      >
        <Typography variant="h3" fontWeight="700" mb={4} color="#2D3E5F" display="flex" alignItems="center">
        Help request sent<div style={{paddingLeft: "20px"}}><AmbulanceIcon size={120} /></div>
        </Typography>
        <Typography variant="h4" fontWeight="550" mb={2} color="#2D3E5F">
          Help is on the way
        </Typography>
        <Typography variant="h4" fontWeight="550" mb={6} color="#2D3E5F">
          and your family has been notified.
        </Typography>
        <StyledButtonAlignment>
        <ModalButton onClick={closeNestedModal}>Okay</ModalButton>
        </StyledButtonAlignment>
      </Modal>

      <Modal
        isOpen={isCancelNestedModalOpen}
        onRequestClose={closeModal}
        contentLabel="Nested Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFFCE7",
            opacity: 0.9,
            padding: "20px",
            paddingLeft: "50px",
            borderRadius: "25px",
            textAlign: "left",
            color: "white",
            fontSize: "40px",
            border: "none",
            width: "35%",
            height: "45%",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          
        }}
      >
        <Typography variant="h3" fontWeight="700" mb={4} color="#2D3E5F" display="flex" alignItems="center">
          Help request cancelled<div style={{paddingLeft: "20px"}}><NoAmbulanceIcon size={120} /></div>
        </Typography>
        <Typography variant="h4" fontWeight="550"color="#2D3E5F">
          Your request to call 911 is cancelled.
        </Typography>
        <StyledButtonAlignment>
        <ModalButton onClick={closeCancelNestedModal}>Okay</ModalButton>
        </StyledButtonAlignment>
      </Modal>
    </BottomLeftButtonContainer>
  );
};

export default CallHelpButtonComponent;
