import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import GlimpseData from '../GlimpsData'

const Item = styled(motion.div)`
  display: inline-block;
 
  /* background-color: black; */
  .imgcont{
    width:400px;
    height:400px;
 
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    
  }

  h1 {
    font-weight: 500;
    text-align: center;
   
    color: white;
    
  }

  @media (max-width: 486px) {
    .imgcont{
      width:100%;
      height:400px;
   
    }
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Event = ({id,url }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
      
    > 
     <div className='glowcard' >
      <div className='imgcont'><img  src={url} alt={id} /></div>
    </div>
      
     
    </Item>
  );
};

export default function GlimpsePage() {
  return (
   <div className='event-div'>
   <h1 style={{textAlign:"center", fontSize:'4rem', color:'#ffff',paddingTop:'5rem'}}>Glimpses</h1>
   <div className='eventspage'>
   {
         GlimpseData.map((val)=>(
            <Event  id={val.id} url={val.url} />
          ))
        }
    
    </div>
    </div >

  )
}
