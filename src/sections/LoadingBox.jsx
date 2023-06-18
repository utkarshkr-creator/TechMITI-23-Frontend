import { Spinner } from "react-bootstrap";
const style = {
  container : {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    zIndex: '2',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  },
  spinner: {
    width: '500px',
    height: '500px'
  }
 
}
export default function LoadingBox() {
  return (
    <div style={style.container}>
      <Spinner  role="status"  animation="grow" variant="info"style={style.spinner}>
    <span className="visually-hidden">Loading...</span>
  </Spinner></div>
);
    
}
