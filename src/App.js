import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import { useRef, useState} from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
// import { useRouter } from 'next/router'

import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

import Footer from "./sections/Footer";
import Home from "./sections/Home";

import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import EventsPage from "./sections/EventsPage";
import { Route, Routes, useLocation} from "react-router-dom";

import Event from "./sections/Event";
import { useLayoutEffect } from "react";
import Error from "./sections/Error";
import Login from "./sections/Login";
import Registration from "./sections/Registration";
import EventRegistration from "./sections/EventRegistration";
import GlimpsePage from "./sections/GlimpsePage";
import Navbar from "./components/Navbar";
import  Profile  from "./sections/Profile";
import ContactUs from "./ContactUs";
import Sponsors from "./sections/Sponsors";


// import Login from './sections/Login'

function App() {
  
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);
  const { pathname } = useLocation() // With react-router
// const { asPath } = useRouter() // With next/router
 
 
  useLayoutEffect(() => {
    
      setLoaded(true);
   
  }, []);
 

  return (
    <>
    
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          location={pathname}
          containerRef={containerRef}
          onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
          // onUpdate={() => console.log('Updated, but not on location change!')}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}
              </AnimatePresence>
              {/* <Home key="home" /> */}
              <Navbar/>
              <Routes>
                <Route  path="/" element={<Home />}/>
                <Route path="/events" element={<EventsPage key="eventpage"/>}/>
                <Route path='/event' element={<Event/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/eventre" element={<EventRegistration />}/>
                <Route path="/glimpse" element={<GlimpsePage/>}/>
                {/* <Route path="/sponser" element={<Sponsors/>}/> */}
                <Route path="*" element={<Error/>}/>
                <Route path='/Contact' element={<ContactUs/>}/>


              </Routes>
              
              
              <Footer key="Footer" />
            
          </main>
          
        </LocomotiveScrollProvider>
      </ThemeProvider>
      
    </>
  );
}

export default App;
