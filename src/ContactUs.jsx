import React from 'react'
import ContactData from './ContactData.js'
import Coodinator from './Coodinator'
import './Coodinator.css'

const ContactUs = () => {
  return (
    <>
    <h1 style={{paddingTop:"50px", textAlign:"center",color:"white"}}>COODINATORS</h1>
    <div className='cordinator-cont'>
      
      {ContactData.map((event) => (
        <Coodinator
          key={event.eventName}
          eventName={event.eventName}
          coordinators={event.coordinators}
        />
      ))}
    </div>
    </>
  )
}

export default ContactUs