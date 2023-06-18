import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import event from '../data.js'

import "./Eventspage.css"
const Item = styled(motion.div)`
  display: inline-block;
  padding:1rem;  
  .eventcont{
    width:300px;
    height:300px;
  }
  /* background-color: black; */

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    color: white;
    
  }
  
  @media (max-width: 486px) {
    width: 50rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Event = ({ img, title = "",id,url }) => {
  const navigate=useNavigate();
  
  const handleclick=()=>{
     navigate(`/event?id=${id}`) 
  }

  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
      
    >
      <div className='glowcard' onClick={handleclick}>
      <div className='eventcont'><img  src={url} alt={title} /></div></div>
      <h1 className='eventTitle'>{title}</h1>
    </Item>
  );
};

export default function EventsPage() {
  return (
   <div className='event-div'>
   <h1 style={{textAlign:"center", fontSize:'4rem', color:'#ffff' , paddingTop:'3rem'}}>Events</h1>
   <div className='eventspage'>
   {
          event.map((val)=>(
            <Event  title={val.name} id={val.id} url={val.posterUrl} />
          ))
        }
    
    
    </div>
    </div >

  )
}
