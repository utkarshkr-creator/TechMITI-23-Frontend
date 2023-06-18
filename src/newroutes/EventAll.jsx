import React, { Suspense } from 'react';
import styled from 'styled-components';

// import CoverVideo from '../components/CoverVideo';
// import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import About from '../sections/About';
import Events from '../sections/Events';
import EventsPage from '../sections/EventsPage';
import Glimpse from '../sections/Glimpse';

const CoverVideo = React.lazy(() => import('../components/CoverVideo'));
const Navbar = React.lazy(() => import('../components/Navbar'));
// const Logo = React.lazy(() => import('../components/Logo'));

const Section = styled.section`
  position: relative;
  min-height: 100vh;
overflow: hidden;

`;

const EventAll = () => {
  return (
    <Section  id="home">
      <Suspense fallback={<>Loading....</>}>
        <Logo />
        <Navbar />
        <CoverVideo />
        <EventsPage/>
      </Suspense>
    </Section>
  );
};

export default EventAll;
