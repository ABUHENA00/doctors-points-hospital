import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Department.css';

const Department = ({department}) => {
    const {name,img,fee,description} = department;
    return (
        <div>
           <div className="department text pb-5">
            <img src={img} alt="" />
            <h2 className="name-text">{name}</h2>
            <p className="px-3">{description}</p>
            <h6>Advance Fee: {fee} $</h6>
            <Link to="/home"><Button variant="info">Details</Button></Link>
        </div>
        </div>
    );
};

export default Department;