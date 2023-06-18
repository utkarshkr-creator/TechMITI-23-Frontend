import React from "react";
import styled from "styled-components";


const Section = styled.section`
  min-height: 100vh;
  width: 90vw;
  margin: 0 auto;
  

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
  position: relative;
  z-index: 5;
  margin-top: 20%;
  color:white;
  text-align: justify;
  padding-right:1rem;

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
    width: 90%;
    
    
  }
  @media (max-width: 30em) {
    color:black;
    font-size:${(props) => props.theme.fontmd};
    padding: 2rem;
    
    
    
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }
  .big-img{
    width:100%;
    height:750px;
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
      object-fit: fill;
      padding:7px;
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
  font-size: ${(props) => props.theme.fontBig};
  color:white;
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 4%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 2rem;
    left: 25%;
  }
  @media (max-width: 48em) {
    left:21%;
    top:8%;
    font-size: 3.7rem;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left >
      TechMITi'23 is the annual science and technology festival of MIT Muzaffarpur, which is organized by Moxie-The Technical Club that is going to be held on 24th -26th April 2023 in fully offline mode. TechMITi comprises a diverse array of competitive technical events, exhibitions, workshops, and guest speakers that attract the participation of students from engineering institutes all across the nation. The 3-day fest congregation is expected to have 4,000+ footprints gathering from various technical institutes to participate in and witness the TechMITi.
      </Left>

      <Right>
        <img width="300" height="600" src='https://i.imgur.com/wkoelW1.jpg' className="big-img" alt="About Us" />
        {/* <img
          width="400"
          height="600"
          className="small-img-1"
          src='https://i.imgur.com/JMNTAAd.jpg'
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        />
        <img
          width="400"
          height="600"
          className="small-img-2"
          src="https://i.imgur.com/S0v8gHk.jpghttps://i.imgur.com/S0v8gHk.jpg"
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        /> */}
      </Right>
    </Section>
  );
};

export default About;
