import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {detailid} =useParams();
    const [details,setDatils] = useState([])

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDatils(data))
       
    },[])
    const ExactDetails = details.filter(info=>info.id == detailid)
    // console.log(ExactDetails);
    return (
        <div className="card mb-3"  >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={ExactDetails[0]?.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 text">
      <div className="card-body">
        <h2 className="card-title">{ExactDetails[0]?.name}</h2>
        <p className="card-text">{ExactDetails[0]?.description}</p>
        <p className="card-text"><small className=" text-danger">Last updated Costing {ExactDetails[0]?.cost} $</small></p>
        <Link to="/doctors"><Button variant="success">GO DOCTORS CHAMBER</Button></Link>
      </div>
    </div>
  </div>
</div>
    );
};

export default ServiceDetails;