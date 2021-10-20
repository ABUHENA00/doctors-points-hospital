import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { name, cost, description, img,id } = service;
    return (
        <div className="service text pb-5">
            <img src={img} alt="" />
            <h2 className="name-text">{name}</h2>
            <h4>Cost of:{cost}$</h4>
            <p className="px-3">{description}</p>
            <Link to={`/servicedetails/${id}`}><Button variant="info">Details</Button></Link>
        </div>
    );
};

export default Service;