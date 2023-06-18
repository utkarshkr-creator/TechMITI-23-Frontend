import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const logoutHandler = () =>{
        localStorage.removeItem('userInfo');
        navigate('/');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(checkLogin()){
                    const {data} = await axios.get('/api/user/profile', {headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}
                    });
                    setUser(data.data.user);
                } else {
                    navigate('/login');
                }
            } catch (err) {
                navigate('/login');
            }
        }
        fetchData();
    },[navigate]);

    const checkLogin = () => {
        if(localStorage.getItem('userInfo')){
            return true;
        } else {
            return false;
        }
    }

    return (
        <Container>
            <div className="profile-container">
                <div className="profile-card">
                    {checkLogin() && (
                        <>
                            <button onClick={logoutHandler} className="logout-btn">Log Out</button>
                            <h1 className="profile-heading">{user.name}</h1>
                            <h3 className="profile-subheading">TechMITi'23 Id: {user.techmitiId}</h3>
                            <h3 className="profile-subheading">Email: {user.email}</h3>
                            <h3 className="profile-subheading">Phone: {user.phone}</h3>
                            <h3 className="profile-subheading">Payment Status: {user.isPaymentVerified ? 'Verified' : 'Verification pending'}</h3>
                            <Table striped bordered hover className="profile-table">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Event Name</th>
                                        <th>Team Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user?.teams  && user.teams.map((ele, idx) => (
                                        <tr key={ele.team_name}>
                                            <td>{idx + 1}</td>
                                            <td>{ele.event_name}</td>
                                            <td>{ele.team_name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Profile;
