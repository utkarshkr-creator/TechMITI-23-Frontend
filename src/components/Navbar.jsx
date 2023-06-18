import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../assets/Svgs/logo.png";
import logo1 from "../assets/Svgs/mit.png";


const NavContainer = styled(motion.div)`
  position: absolute;
  /* left: 50%; */
  top: ${(props) => (props.click ? '0' : `-${props.theme.navHeight}`)};
  transition: all 0.3s ease;
  /* transform: translateX(-50%); */
  z-index: 6;
  width: 100vw;
  right: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  
  @media (max-width: 40em) {
    top: ${(props) => (props.click ? '0' : '-50vh')};

  }
`;

const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  border: none;
  outline: none;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;

  /* border-end-start-radius: 50%; */

  /* border-end-end-radius: 50%; */

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;

  }
`;

const MenuItems = styled(motion.ul)`
 
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color:#676767;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction:column;
    padding:2rem 0;
    height: 50vh;
  }
`;

const Item = styled(motion.li)`
  text-transform: uppercase;
  

  @media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;

  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
 

  
  return (
    <NavContainer
      click={+click}
      initial={{ y: `-100%` }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 1 /* 2 */ }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>
          <span>MENU</span>
        </MenuBtn>

        <img src={logo1} alt="techmiti" width='35'  style={{marginRight: '10px'}} />
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => setClick(!click)}
        >
          {' '}
          <a aria-hidden="true" href="/" style={{textDecoration:"none", color: "inherit",font:"inherit"}}>Home</a>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => setClick(!click)}  
        >
          <Link to="/events" style={{textDecoration:"none", color: "inherit",font:"inherit"}}>Events</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => setClick(!click)}
        >
          <Link to="/glimpse" style={{textDecoration:"none", color: "inherit",font:"inherit"}}>Glimpse</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => setClick(!click)}
        >
          {' '}
          <a rel='noreferrer' style={{textDecoration:"none", color: "inherit",font:"inherit"}} href="https://drive.google.com/file/d/1WL3VQMUrjSQJNqX4pN82ucX92OV5pk6A/view?usp=sharing" target='_blank'>Brochure</a>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => setClick(!click)}
        >
          {' '}
          <Link to="/registration" style={{textDecoration:"none", color: "inherit",font:"inherit"}}>Register</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => setClick(!click)}
        >
          {' '}
          <Link to="/profile" style={{textDecoration:"none", color: "inherit",font:"inherit"}}>Profile</Link>
        </Item>
        <img src={logo} alt="techmiti" width='35' style={{marginRight: '10px'}} />
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
