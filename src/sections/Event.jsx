import React, { useState } from "react";
import styled from "styled-components";
import CrazyButton from "../components/CrazyButton";
import event from '../data.js'
import EventRegistration from "./EventRegistration";


const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  padding-top:5rem;
  padding-bottom:2rem;
  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  color: white;
  position: relative;
  z-index: 5;
  margin-top: 16%;
  display:flex;
  flex-direction:column;
  align-content:center;
  gap:50px;
  padding-right:2rem;
  text-align: justify;
  
  .buttons{
    display:flex;
    gap:20px;
  }
  

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(9px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    color:black;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 90%;
    
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */
  padding-top:2rem;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size:4.2rem;
  
  font-weight: 300;
  color: white;
  width: 100%;
  /* text-transform: capitalize; */

  position: absolute;
  top: 10%;
  left: 15%;
  z-index: 5;
  

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    align-item:center;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
  @media (max-width: 30em) {
    display: none;
  }
`;
const Event = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const queryParams=new URLSearchParams(window.location.search)
  const id=queryParams.get('id');

  const curEvent = event.find((val) => val.id === id);
   
  // const handleScrolls = (ids) => {
  //   let elem = document.querySelector(ids);
  //   // console.log(elem);
  //   scroll.scrollTo(elem, {
  //     offset: "-100",
  //     duration: "2000",
  //     easing: [0.25, 0.0, 0.35, 1.0],
  //   });
  // };
   function rulebook(url){
    window.open(`${url}`,"_blank");
   }

  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="horizontal"
      >
        {curEvent.name}
      </Title>
      <Left   data-scroll-target="#fixed-target">
        {curEvent.description}
        <div className="buttons">
          
          {curEvent.id==='14'?<CrazyButton name="Register"  onclick={()=>rulebook("https://forms.gle/By7LE4vJrmAkiTr59")} />  : <CrazyButton name="Register" onclick={handleClick}/>}
          <CrazyButton name="RuleBook"  onclick={()=>rulebook(curEvent.link)} /> 
        </div>
       <EventRegistration isOpen={isOpen} onClose={handleClose} eventName={curEvent.name} eventId={curEvent.id} min={curEvent.min} max={curEvent.max}/>
      </Left>

      <Right>
        <img width="400" height="600" src={curEvent.posterUrl} alt="About Us" />
        {/* <img
          width="400"
          height="600"
          className="small-img-1"
          src={img2}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        /> */}
        {/* <img
          width="400"
          height="600"
          className="small-img-2"
          src={img3}
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        /> */}
      </Right>
    </Section>
  );
};

export default Event;
