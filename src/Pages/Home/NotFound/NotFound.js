import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../../Images/404.jpg';
const NotFound = () => {
    return (
        
            <div>
            <img style={{width:'30%'}} src={error} alt="" /><br />
            <Link to="/home"><Button variant="info">Go Back Home</Button></Link>
        </div>
        
    );
};

export default NotFound;