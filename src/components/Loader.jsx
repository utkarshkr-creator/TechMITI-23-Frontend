import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import logo from "../assets/Svgs/logo.png";
import "./CrazyButton.css";
import header from "../assets/HEADER.png";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }

  
`;
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Text = styled(motion.span)`
  
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <img src={logo} alt="techmiti" width="70" className="a" />
      <Text variants={textVariants} initial="hidden" animate="visible">
        <img src={header} alt="techmiti" width="200" />
      </Text>
    </Container>
  );
};

export default Loader;
