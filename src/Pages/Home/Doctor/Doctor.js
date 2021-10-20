import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = ({doctor}) => {
    const {name,fee,title,description,_id,img} =doctor;

    return (
        <div className="doctor text pb-5">
        <img src={img} alt="" />
        <h2 className="name-text">NAME: {name}</h2>
        <h4>Degree:{title}</h4>
        <p className="px-3">{description}</p>
        <h5>Fee:{fee}$</h5>
        <Link to={`/doctorinfo/${_id}`}><Button variant="info">Make Appointment</Button></Link>
    </div>
    );
};

export default Doctor;