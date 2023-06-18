import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/Svgs/logo.png";

const Section = styled.section`
  min-height: 80vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;


  background-color: #676767;
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  .social{
    margin:0;
    padding:0;
    display:flex;
    gap:50px;
    
    a{
      margin:auto;
      padding:0; 
    }
  }

  a {
    text-decoration: underline;
    
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const navigate = useNavigate();
  const redirectHandle = (path) => {
    navigate(path);
  }

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img
          width="300"
          height="300"
          src={Logo}
          alt="TechMITi'23"
          data-scroll
          data-scroll-speed="2"
        />
        <h3 data-scroll data-scroll-speed="-1">
          TechMITi'23
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" >
            <a href='/' aria-hidden='true' style={{ textDecoration: "none", color: "inherit", font: "inherit" }} >home</a>
          </li>
          {/* <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            About
          </li> */}
          <li aria-hidden="true" onClick={() => redirectHandle('/events')} >
            Events
          </li>
          <li aria-hidden="true" onClick={() => redirectHandle("/glimpse")}>
            Glimpse
          </li>
          <li aria-hidden="true" >
            <a rel="noreferrer" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
              href="https://drive.google.com/file/d/1WL3VQMUrjSQJNqX4pN82ucX92OV5pk6A/view?usp=sharing " target='_blank'>Brochure</a>
          </li>
          <li aria-hidden="true" >
            <a rel="noreferrer" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
              href="https://drive.google.com/file/d/1dI_2irALLfSWRcyecfSMFat-IkoM1uoT/view?usp=sharing " target='_blank'>CA Rulebook</a>
          </li>

          <li aria-hidden="true" onClick={() => redirectHandle('/registration')}>
          Register
          </li>
          {/* <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              reviews
            </a>
          </li> */}
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; 2023. All Rights Reserved.
          </span>
          <div className="social">

            <a
              href="https://www.linkedin.com/company/moxiemitm"
              target={"_blank"}
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>


            <a
              href="https://www.instagram.com/moxie_mit/"
              target={"_blank"}
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
            >
              <i class="fa-brands fa-instagram"></i>
            </a>



            <a
              href="https://www.facebook.com/moxiemitm?mibextid=ZbWKwL"
              target={"_blank"}
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
            >
              <i class="fa-brands fa-facebook"></i>
            </a>

            {/* <a
              href="https://www.instagram.com/moxie_mit/"
              target={"_blank"}
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
            >
              <i class="fa-brands fa-telegram"></i>
            </a> */}

          </div>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by{" "}
            <a
              href="https://www.instagram.com/moxie_mit/"
              target={"_blank"}
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
            >
              Team MOXIE
            </a>
          </span>

        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
