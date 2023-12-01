import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Modal from "react-modal";

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
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 35px;
`;

const CallHelpButtonComponent = ({ onClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNestedModalOpen, setNestedModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openNestedModal = () => {
    setModalOpen(false);
    setNestedModalOpen(true);
  };

  const closeNestedModal = () => setNestedModalOpen(false);

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

  return (
    <BottomLeftButtonContainer>
      <CallHelpButton id="top-right-button" primary onClick={openModal}>
        <Typography variant="h5" fontWeight="700">
          Call Help
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
            backgroundColor: "#E9EBF8",
            opacity: 0.9,
            padding: "20px",
            borderRadius: "25px",
            textAlign: "center",
            color: "white",
            fontSize: "40px",
            border: "none",
            width: "60%",
            height: "55%",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
      >
        <Typography variant="h3" fontWeight="700" mb={6} color="#2D3E5F">
          SOS Request
        </Typography>
        <Typography variant="h4" mb={10} color="#2D3E5F">
          Call 911 for medical emergency assistance
        </Typography>
        <Typography mb={5} >
        <ModalButton onClick={handleConfirm}>
          Yes, I need help
        </ModalButton>
        <ModalButton style={{background: 'none', border: 'solid', borderColor: '#2d3e5f', borderRadius: '25px'}} onClick={closeModal}>
          No, I didn't mean to
        </ModalButton>
        </Typography>

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
            backgroundColor: "#E9EBF8",
            opacity: 0.9,
            padding: "20px",
            borderRadius: "25px",
            textAlign: "center",
            color: "white",
            fontSize: "40px",
            border: "none",
            width: "60%",
            height: "55%",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          
        }}
      >
        <Typography variant="h3" fontWeight="700" mb={4} color="#2D3E5F">
          SOS Request Sent
        </Typography>
        <Typography variant="h4" mb={2} color="#2D3E5F">
          Help is on the way
        </Typography>
        <Typography variant="h4" mb={6} color="#2D3E5F">
          Your family has been notified
        </Typography>
        <Typography variant="h4" mb={5} color="#2D3E5F">
          Now take a deep breath
        </Typography>
        <ModalButton onClick={closeNestedModal}>Okay</ModalButton>
      </Modal>
    </BottomLeftButtonContainer>
  );
};

export default CallHelpButtonComponent;
