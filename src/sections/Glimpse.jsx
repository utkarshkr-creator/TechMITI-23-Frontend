import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import GlimpseData from '../GlimpsData'



const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */
  

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow:hidden;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;
 
  z-index: 11;

  @media (max-width: 70em) {
  width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
   width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
    width: 90vw;
    height: 70vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 30vw;
  height: auto;
   

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
  width:90vw;


  }
  @media (max-width: 48em) {
  width: 90vw;

  }
  @media (max-width: 30em) {
  width:100vw;

  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 300;
  /* text-transform: capitalize; */
  color: white;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  
  position: absolute;
  top: 30%;
  left: 8%;
  z-index: 15;
  justify-content:center;
  text-align:center;

 
  @media (max-width: 64em) {
    top: 0%;
    color:black;
    left:40%;
    font-size: ${(props) => props.theme.fontxl};
  
  }
`;
const Text = styled.div`
  width: 30%;
  font-size: ${(props) => props.theme.fontlg};
  color: white;
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;
  text-align: justify;
  @media (max-width: 64em) {
    display: none;
  
  }
 
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem 0;
  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ url, id }) => {
  return (
    <Item>
      <img width="400" height="600" src={url} alt={`Glimpseimg${id}`} />
      {/* <h2>{name}</h2> */}
    </Item>
  );
};

const Glimpse = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);


  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom top',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
            // markers: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (

    <Section ref={ref} id="fixed-target" className="glimpse" >
      <Overlay />

      <Title
        data-scroll
        data-scroll-speed='1'
        data-scroll-direction='horizontal'

      >
        Glimpses
        <br/>
        TechMITi'20-22
      </Title>

      <Container ref={ScrollingRef}  >

        {/* <Photos img={img1} name="Robo soccors" /> */}
        {
          GlimpseData.slice(0, 7).map((val) => (
            <Photos key={val.id} url={val.url} id={val.id} />

          ))
        }

      </Container>


      <Text >
        TechMITi, organized by Moxie, was a truly remarkable and exhilarating event,
        bringing together some of the brightest minds in the technology industry.
        The event was held in both 2020 and 2022, and featured a wide range of workshops,
        keynote speeches, and panel discussions.
        <br />
        <br />
        The event also showcased some of the latest and most cutting-edge technologies.
        This allowed attendees to gain insights into emerging trends and technologies
        that will shape the future of the industry.
        <br />
        <br />
        Overall, TechMITi was a resounding success, providing a unique and enriching experience for all who attended.
      </Text>
    </Section>

  );
};

export default Glimpse;
