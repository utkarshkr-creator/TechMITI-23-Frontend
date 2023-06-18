
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import event from '../data';

const DashboardItems = () => {
  return (
    <div  style={{overflow: 'auto', height: '100vh'}}>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu >
    {event.map((val) => (
      <Dropdown.Item href="http://localhost:5000/api/user/dowload">{val.name}</Dropdown.Item>
    ))}
      </Dropdown.Menu>
    </Dropdown>

    </div>
  )
}

export default DashboardItems