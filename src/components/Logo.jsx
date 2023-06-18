import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import header from '../assets/HEADER.png'

const Container = styled.div`
  position: absolute;
   top: 0.2rem;
  left: 1rem;
  z-index: 1;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
   
    
  }
 

  svg {
    width: 4rem;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
  @media (max-width: 486px) {
    top:2rem;
  }
`;
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.1rem;
`;


const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 2, // 2
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <a href="/">
        {/* <img src={logo} alt="techmiti" width='35' height='35' style={{marginRight: '10px', paddingTop:'10px'}} /> */}
        
        <Text variants={textVariants} initial="hidden" animate="visible">
        <img src={header} alt="techmiti" width='200'  />
        </Text>
      </a>
    </Container>
  );
};

export default Logo;
