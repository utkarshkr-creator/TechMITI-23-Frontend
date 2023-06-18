import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import "./GlowDiv.css";

import CrazyButton from "../components/CrazyButton";
import { useNavigate } from "react-router-dom";
import event from "../data.js";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  /*font-family: "Android";
   font-weight: 300;*/
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 15%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    left:50%;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  flex-direction: column;
  gap: 55px;

  .para {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
  }

  @media (max-width: 64em) {
    .para {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    .para {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    .para {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 30em) {
    gap: 10px;
  }
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 25rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    color: white;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
  @media (max-width: 30em) {
    width: 15rem;
    h1 {
      font-size: 1.5rem;
    }
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Event = ({ img, title = "", id }) => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate(`/event?id=${id}`);
  };
  return (
    // x: 100, y: -100

    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <div className="glowcard" onClick={handleclick}>
        <img src={img} alt={title} />
      </div>
      <h1>{title}</h1>
    </Item>
  );
};

const Events = () => {
  const navigate = useNavigate();
  const onclickhandle = () => {
    navigate("/events");
  };
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="events">
      <Title data-scroll data-scroll-speed='2' data-scroll-direction='horizontal'>
        Events
      </Title>
      <Left>
        <p className="para">
        With a diverse range of events, TechMITi'23 offers a one-of-a-kind opportunity for students to learn new skills, showcase their talents, and connect with like-minded individuals. It brings you 24+ electrifying and intoxicating events designed to inspire all participants to push themselves beyond their limits. The fest upholds lucrative rewards worth 2 lacs at stake. We have events covering all domains concerning different areas of interest and expertise such as Dangal, HurdleMania, Quizaholic, Circuitron, Mad for CAD, Logic Loader, and many more.
        </p>
        <CrazyButton name="Explore All" onclick={onclickhandle} />
      </Left>
      <Right data-scroll ref={Horizontalref}>
        {event.slice(0, 5).map((val) => (
          <Event
            key={val.id}
            img={val.posterUrl}
            title={val.name}
            id={val.id}
          />
        ))}
      </Right>
    </Section>
  );
};

export default Events;
