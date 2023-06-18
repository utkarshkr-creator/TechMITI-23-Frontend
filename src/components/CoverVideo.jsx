import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CrazyButton from "./CrazyButton";




const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;



const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
   
    font-size: ${(props) => props.theme.fontBig};

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 486px) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: 4rem;
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    font-size:3rem;
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 486px) {
      /* font-size: ${(props) => props.theme.fontmd};*/
       font-size: 2rem;
      /*margin-top: -1.5rem;*/
    }
  }
  
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  // const navigate= useNavigate()
  const handleClick=()=>{
    window.open('https://drive.google.com/file/d/1c2hxvvyRGOY_v1XBHmGgf1PPgaBTGGMN/view?usp=share_link');
    // <link rel="stylesheet"  href="https://drive.google.com/file/d/1c2hxvvyRGOY_v1XBHmGgf1PPgaBTGGMN/view?usp=share_link" />
  }
  return (
    <VideoContainer data-scroll>
     

      <Title variants={container} initial="hidden" animate="show">
        <div className="font-face-ad">
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            T
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            c
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            h
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            M
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            I
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            T
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            '
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            2
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            3
          </motion.h1>

        </div>
        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          24th-26th April 2023
        </motion.h2>
        <motion.h3
          style={{textAlign:'right'}}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
        <CrazyButton  name='Schedule' onclick={handleClick}/>
        </motion.h3>
      </Title>

      {/* <video src={MainVideo} type="video/mp4" autoPlay muted loop poster="https://i.imgur.com/p5AXfGf.jpg" /> */}
      <img src="https://i.imgur.com/p5AXfGf.jpg" alt="cover-img" style={{width:"100%", height:'100vh'}}/>
    </VideoContainer>
  );
};

export default CoverVideo;
