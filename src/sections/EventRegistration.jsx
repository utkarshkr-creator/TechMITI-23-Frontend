import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function EventRegistration({
    eventName, eventId,  min, max,isOpen, onClose
}) {
    
    const [teamName, setTeamName] = useState();
    const [techMITiId, setTechMITiId] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [submitDis, setSubmitDis] = useState(true);
const submitHandler = async (e) =>  {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "/api/user/register",
        {
          eventId, eventName, teamName, techMITiId
          
        }
      );

      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.data.message);
    }


    
} 
useEffect(() => {
  if(teamName && Object.keys(techMITiId).length >= min ){
    setSubmitDis(false)
  }
}, [techMITiId, min, teamName])
const changeHandler = (e, name) => {
  const regex = /^TM23.{10}$/;
if (regex.test(e.target.value) && !Object.values(techMITiId).includes(e.target.value)) {
  e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        
        setTechMITiId(prevState => {
          return {
            ...prevState,
            [name]: e.target.value
          };
        });
} else {
  e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
        setSubmitDis(true)

}
  
}

const customStyles = {
  content: {
    backgroundColor: '#243b55',
    

  },
};

    return(
      <Modal isOpen={isOpen} style={customStyles}>
        <button onClick={onClose} style={{color:'red', fontWeight:'1000',borderRadius:'50%'}}>X</button>
    <div>
        <h1 style={{margin:'auto', textAlign:'center',color:'white'} }>{eventName}</h1>
        <div className="applyscreen">
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : success ? (
      <MessageBox variant="success">
        Applied Successfully <Link to="/">Home</Link>
      </MessageBox>
    ) : (
      <Container className="small-container">
        <Form id="form" onSubmit={submitHandler}>
        <Form.Group  controlId="formGridTeamName">
              <Form.Label>Team Name*</Form.Label>
              <Form.Control
                type="text"
                name='teamName'
                placeholder="Team Name"
                required
                onChange={(e) => setTeamName(e.target.value)}
              />
            </Form.Group>
        {[...Array(max).keys()].map((index) => (
         <Form.Group  controlId="formGridTechmitiId">
         <Form.Label>TechMITi'23 ID of {index===0?"Team Leader":`Member ${index}`}{(index < min ) && '*'}</Form.Label>
         <Form.Control
           type="text"
           className="techmitiId"
           name={`techmitiId${index}`}
           placeholder="TechMITi Id"
           required={index < min}
           onChange={(e) => changeHandler(e, `techmitiId${index}`)}
         />
       </Form.Group>))}
        <Button
              className="my-5"
              variant="primary"
              type="submit"
              disabled={submitDis}
              id="regSubmit"
              style={{ width: "40%" }}
            >
              Apply
            </Button>
           </Form>
           
           </Container>
    )}
           </div>
        
    </div>
    </Modal>
    )
}