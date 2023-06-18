import React, { useState } from 'react';
import './Coodinator.css';

const Coodinator = ({ eventName, coordinators }) => {
  const [selectCoordinator, setSelectCoordinator] = useState(false);
  const [selectedCoordinator, setSelectedCoordinator] = useState(null);

  const handleCoordinatorClick = (coordinator) => {
   setSelectedCoordinator(coordinator);
    setSelectCoordinator(true);
    
  };

  const handleCloseClick = () => {
    setSelectCoordinator(false)
    setSelectedCoordinator(null);
  };

  return (
  
    <div className="coodinator-container">
      <h2>{eventName}</h2>
      {selectCoordinator ? (
        <div className="coodinator-modal">
          <div className="coodinator-modal-content">
            <img src={selectedCoordinator.image} alt={selectedCoordinator.name} />
            <div className="coodinator-details">
              <h3>{selectedCoordinator.name}</h3>
              <p><a href={`mailto:${selectedCoordinator.email}`}><i class="fa-solid fa-envelope" style={{margin:"5px"}}></i></a>{selectedCoordinator.email}</p>
              <p><a href={`telto:${selectedCoordinator.phone}`}><i class="fa-solid fa-phone" style={{margin:"5px"}}></i></a>{selectedCoordinator.phone}</p>
            </div>
            <button onClick={() => handleCloseClick()}>Close</button>
          </div>
        </div>
      ) :
      <div className="coodinators">
        {coordinators.map((coordinator, index) => (
          <>
          <div
         key={index}
      className={`coodinator ${selectedCoordinator === coordinator ? 'selected' : ''}`}
      onClick={() =>handleCoordinatorClick(coordinator)}
    >
      <div className='coordinatorImg'><img src={coordinator.image} alt={coordinator.name} /></div>
      <div className="coodinator-details">
        <h3>{coordinator.name}</h3>
        
      </div>
    </div>
          </>
          
        ))}
      </div>}
      
    </div>
    
  );
};

export default Coodinator;
